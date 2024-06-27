# Proyecto

<div align="center">

[![angular-badge-sm]][angular-web] [![css3-badge-sm]][css3-web] [![git-badge-sm]][git-web] [![github-badge-sm]][github-web] [![html5-badge-sm]][html5-web] [![ionic-badge-sm]][ionic-web] [![js-badge-sm]][js-web] [![mysql-badge-sm]][mysql-web] [![nodejs-badge-sm]][nodejs-web] [![npm-badge-sm]][npm-web] [![ts-badge-sm]][ts-web] [![vscode-badge-sm]][vscode-web]

[![android-development-badge-sm]][android-development-web]

</div

## Intregrantes
-Benjamín Díaz
<br>
-Benjamín Fernández
<br>
-Thomas Molina
<br>
-Néstor Retamal

EF.1:
<br>
Las paginas de login y registro de usuario se encuentran en pages/cuenta/login y pages/cuenta/registro respectivamente. Dichas paginas poseen autenticación mediante el uso de servicios en la carpeta services.

EF.2:
<br>
Se hace uso de un backend en el archivo ApiDBWeb.py dentro de la carpeta Backend, que corresponde a una API Flask. En ella se implementan varias rutas que son: /users, /routes, /register, /login, /route, /newroute, /user/get , /user/<int:user_id> y /route/<int:route_id>. Los métodos que se usan son POST, GET Y DELETE

EF.3:
<br>
Para la conexión entre el Frontend y el backend se hace uso de servicios. Por ejemplo, para la autenticación se usa el servicio autenticación.service.ts para el inicio y registro de sesión. En ella, se utiliza el método POST, que le pasa la información necesaria justo con su header. Otro ejemplo es la función de eliminar usuarios que tiene el administrador en la pestaña de home, ya que usa el servicio user.service.ts para borrar alguna cuenta, para luego mostrar un mensaje de confirmación por pantalla.

EF.4:
<br>
-Se hace uso de JWT para la autorización. Principalmente se usa para obtener un token que sirve, por ejemplo, para usar la función de eliminar cuenta. Esta función solo la pueden usar los administradores, y para ello, se le pasa el token que el backend le envió al usuario al logearse anteriormente.
-Se utiliza la encriptación de contraseñas en el backend. 
-Se limitan los permisos para los usuarios y los administradores.
-La base de datos tiene conexión especifica para el usuario y el administrador.
