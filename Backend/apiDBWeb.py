#Importar librerías
from flask import Flask, request, jsonify
from flask_cors import CORS
import mysql.connector
from flask_bcrypt import Bcrypt
from flask_jwt_extended import (JWTManager, create_access_token, get_jwt, jwt_required, get_jwt_identity)

# Inicializar app.
app = Flask(__name__)

# Permitir conexiones cualquier origen.
CORS(app)

# Incializar Bcrypt.
bcrypt = Bcrypt(app)

# Configurar clave secreta de JWT.
app.config['JWT_SECRET_KEY'] = 'a23e45@o9'

# Inicializar la extensión JWT
jwt = JWTManager(app)

# Configurar las conexiones a la base de datos
db_config_user = {
    "host":"localhost",
    "user":"user",
    "passwd":"!!mCzSKxJp!7yVv-",
    "database":"proyectoweb"
}

db_config_admin = {
    "host":"localhost",
    "user":"admin",
    "passwd":"Pb]RVEZ.TI[3HVuW",
    "database":"proyectoweb"
}

def get_db_connection(role):
    if role == 'admin':
        return mysql.connector.connect(**db_config_admin)
    else:
        return mysql.connector.connect(**db_config_user)

# Conexión General
@app.route('/')
def index():
    return "Conexión Exitosa!"


# Obtener todos los usuarios. (GET).
@app.route('/users', methods=['GET'])
def get_users():
    # Abrir conexión.
    db = get_db_connection('user')
    cur = db.cursor()
    # Ejecutar comando SQL.
    cur.execute("SELECT * FROM usuarios")
    # Obtener los datos.
    rows = cur.fetchall()
    # Cerrar conexión.
    cur.close()
    
    # Convertir datos a formato JSON.
    resp = []
    for row in rows:
        resp.append({"ID_Usuario": row[0], "ID_Robot": row[1], "Nombre":row[2],"Contrasenya": row[3], "Correo": row[4], "RUT": row[5], "Región": row[6], "Comuna": row[7], "is_admin": row[8]})
    return jsonify(resp)

# Obtener todas las rutas (GET).
@app.route('/routes', methods=['GET'])
def get_routes():
    # Abrir conexión.
    db = get_db_connection('user')
    cur = db.cursor()
    # Ejecutar comando SQL.
    cur.execute("SELECT * FROM rutas")
    # Obtener los datos.
    rows = cur.fetchall()
    # Cerrar conexión.
    cur.close()
    
    # Convertir datos a formato JSON.
    resp = []
    for row in rows:
        resp.append({"ID_Ruta": row[0], "ID_Usuario": row[1], "Fecha":row[2],"Cantidad_de_Personas": row[3], "Personas_Ilesas": row[4], "Personas_Heridas": row[5], "Cantidad_de_Zonas_Peligrosas": row[6]})
    return jsonify(resp)

# Registrar un usuario (POST).
@app.route('/register', methods=['POST'])
def app_register():
    # Datos recibidos en el Request.
    nombre = request.json['Nombre']
    contrasenya = request.json['Contrasenya']
    correo = request.json["Correo"]
    rut = request.json["RUT"]
    region = request.json["Región"]
    comuna = request.json["Comuna"]

    # Encriptar la contraseña con Bcrypt.
    contraEncriptada = bcrypt.generate_password_hash(contrasenya).decode('utf-8')

    # Iniciar conexión.
    db = get_db_connection('user')
    cur = db.cursor()
    # Ejecutar comando SQL.
    cur.execute("INSERT INTO usuarios (Nombre, Contrasenya, Correo, RUT, Región, Comuna) VALUES (%s, %s, %s, %s, %s, %s)", (nombre, contraEncriptada, correo, rut, region, comuna))
    db.commit()
    # Cerrar conexión.
    cur.close()

    # Retornar mensaje de confirmación.
    return jsonify({"status": "Usuario Registrado"})

# Confirmar credenciales de usuario - Inicio Sesión (POST).
@app.route('/login', methods=['POST'])
def app_login():
    # Obtener datos del Request.
    usuario = request.json['Nombre']
    password = request.json['Contrasenya']

    # Verificar que ambos espacios estén escritos.
    if not usuario or not password:
        return jsonify({"message":"Usuario o Contraseña inválidos!"})

    # Iniciar conexión.
    db = get_db_connection('user')
    cur = db.cursor()
    # Ejecutar comando SQL para obtener los usuarios con cierto.
    query = "SELECT * FROM usuarios WHERE Nombre = %s"
    cur.execute(query, (usuario,))
    # Obtener los datos.
    rows = cur.fetchall()
    # Cerrar conexión.
    cur.close()

    # Recorrer los usuarios con el nombre indicado.
    if rows:
        for row in rows:
            # Encriptar la contraseña del request y verificar que es la contraseña correcta.
            if bcrypt.check_password_hash(row[3], password):
                # Verificar si el usuario ingresado es un administrador.
                role_claim = {"role": "user"}
                if row[7] == 1:
                    role_claim = {"role": "admin"}
                    # Conectarse a la BD como admin.
                    db = mysql.connector.connect(**db_config_admin)
                # Crear un nuevo token con la identidad del usuario.
                access_token = create_access_token(identity=usuario, additional_claims=role_claim)
                print(access_token, 2)
                # Devolver mensaje de éxito con la token.
                response = {
                    "message": "aprobado",
                    "access_token": access_token
                }
                return jsonify(response)
            else:
                return jsonify({"message": "Login fallido. Contraseña incorrecta."})
            
    return jsonify({"message": "Login fallido. Usuario no Existe."})

# Obtener una ruta en específico (POST).
@app.route('/route', methods=['POST'])
def get_route():
    # Datos recibidos en el Request.
    id_ruta = request.json['ID_Ruta']
    id_usuario = request.json['ID_Usuario']

    # Iniciar conexión.
    db = get_db_connection('user')
    cur = db.cursor()
    # Ejecutar comando SQL para obtener la información de la ruta.
    cur.execute("SELECT * FROM rutas WHERE ID_Ruta = %s", (id_ruta,))
    # Obtener los datos.
    rows = cur.fetchall()
    # Cerrar conexión.
    cur.close()

    # Verificar que la ruta pertenece al usuario que solicitó la información.
    resp = []
    for row in rows:
        if id_usuario == row[1]:
            resp.append({"ID_Ruta": row[0], "ID_Usuario": row[1], "Fecha":row[2],"Cantidad_de_Personas": row[3], "Personas_Ilesas": row[4], "Personas_Heridas": row[5], "Cantidad_de_Zonas_Peligrosas": row[6]})
            return jsonify(resp)
    
    return jsonify({"message": "Acceso denegado a la Información de la Ruta"})

# Insertar una nueva ruta registrada por el robot (POST).
@app.route('/newroute', methods=['POST'])
def add_route():
    # Datos recibidos en el Request.
    id_ruta = request.json['ID_Ruta']
    id_usuario = request.json['ID_Usuario']
    fecha = request.json['Fecha']
    cant_personas = request.json['Cantidad_de_Personas']
    personas_ilesas = request.json["Personas_Ilesas"]
    personas_heridas = request.json["Personas_Heridas"]
    cant_obstaculos = request.json["Cantidad_de_Zonas_Peligrosas"]

    # Iniciar conexión.
    db = get_db_connection('user')
    cur = db.cursor()
    # Ejecutar comando SQL.
    cur.execute("INSERT INTO rutas (ID_Ruta, ID_Usuario, Fecha, Cantidad_de_Personas, Personas_Ilesas, Personas_Heridas, Cantidad_de_Zonas_Peligrosas) VALUES (%s, %s, %s, %s, %s, %s, %s)", (id_ruta, id_usuario, fecha, cant_personas, personas_ilesas, personas_heridas, cant_obstaculos))
    db.commit()
    # Cerrar conexión.
    cur.close()

    # Retornar mensaje de confirmación.
    return jsonify({"status": "Ruta Registrada"})

@app.route('/user/<int:user_id>', methods=['DELETE'])
@jwt_required()
def delete_user(user_id):
    # Obtener datos del access_token.
    current_user = get_jwt_identity()
    print(current_user)
    claims = get_jwt()
    print(claims)
    user_role = claims['role']
    print(user_role)

    # Iniciar conexión.
    db = get_db_connection(user_role)
    cur = db.cursor()
    try:
        # Ejecutar comando SQL.
        cur.execute("DELETE FROM usuarios WHERE ID_Usuario = %s", (user_id,))
        db.commit()
    except:
        return jsonify({"message": "Acceso Denegado!"})
    finally:
        # Cerrar conexión.
        cur.close()
    return jsonify({"status": "Usuario Eliminado!"})

@app.route('/route/<int:route_id>', methods=['DELETE'])
@jwt_required()
def delete_route(route_id):
    # Obtener datos del access_token.
    current_user = get_jwt_identity()
    print(current_user)
    claims = get_jwt()
    print(claims)
    user_role = claims['role']
    print(user_role)

    # Iniciar conexión.
    db = get_db_connection(user_role)
    cur = db.cursor()
    # Ejecutar comando SQL.
    try:
        cur.execute("DELETE FROM rutas WHERE ID_Ruta = %s", (route_id,))
        db.commit()
    except:
        return jsonify({"message": "Acceso Denegado!"})
    finally:
        # Cerrar conexión.
        cur.close()
    return jsonify({"status": "Ruta Eliminada!"})


if __name__ == '__main__':
    app.run(debug=True)




