function validaDV(rut) {
  const [numero, dv] = rut.replace("-K", "-k").split("-");

  const dvVer = ((T) => {
    let M = 0,
      S = 1;
    for (; T; T = Math.floor(T / 10)) S = (S + (T % 10) * (9 - (M++ % 6))) % 11;
    return S ? S - 1 : "k";
  })(numero);

  return dvVer == dv;
}

$.validator.addMethod(
  "rut",
  function (value, element) {
    return this.optional(element) || /^[0-9]{7,8}-[0-9Kk]{1}$/.test(value);
  },
  "El RUT ingresado es inválido"
);

$.validator.addMethod(
  "rutdv",
  function (value, element) {
    return this.optional(element) || validaDV(value);
  },
  "El dígito verificador del RUT es inválido"
);

$(document).ready(() => {
  console.log("validation.js cargado");
  
  /*
    No se agregan todas las comunas porque son demasiadas.
  */

  $("#region").change((e) => {
    $("#comuna").empty();
    if ($("#region").find(":selected").val() === "15") {
      $("#comuna").append('<option value="1">Arica</option>');
    }
    else if ($("#region").find(":selected").val() === "1") {
      $("#comuna").append('<option value="1">Camiña</option>');
    }
    else if ($("#region").find(":selected").val() === "2") {
      $("#comuna").append('<option value="1">Antofagasta</option>');
    }
    else if ($("#region").find(":selected").val() === "3") {
      $("#comuna").append('<option value="1">Chañaral</option>');
    }
    else if ($("#region").find(":selected").val() === "4") {
      $("#comuna").append('<option value="1">Canela</option>');
    }
    else if ($("#region").find(":selected").val() === "5") {
      $("#comuna").append('<option value="1">Valparaíso</option>');
      $("#comuna").append('<option value="2">Viña del Mar</option>');
    }
    else if ($("#region").find(":selected").val() === "13") {
      $("#comuna").append('<option value="1">Maipú</option>');
      $("#comuna").append('<option value="2">La pintana</option>');
    }
    else if ($("#region").find(":selected").val() === "6") {
      $("#comuna").append('<option value="1">Rancagua</option>');
    }
    else if ($("#region").find(":selected").val() === "7") {
      $("#comuna").append('<option value="1">Cauquenes</option>');
    }
    else if ($("#region").find(":selected").val() === "16") {
      $("#comuna").append('<option value="1">Chillán</option>');
    }
    else if ($("#region").find(":selected").val() === "8") {
      $("#comuna").append('<option value="1">Florida</option>');
    }
    else if ($("#region").find(":selected").val() === "9") {
      $("#comuna").append('<option value="1">Carahue</option>');
    }
    else if ($("#region").find(":selected").val() === "14") {
      $("#comuna").append('<option value="1">La Unión</option>');
    }
    else if ($("#region").find(":selected").val() === "10") {
      $("#comuna").append('<option value="1">Castro</option>');
    }
    else if ($("#region").find(":selected").val() === "11") {
      $("#comuna").append('<option value="1">Lago Verde</option>');

    }
    else if ($("#region").find(":selected").val() === "12") {
      $("#comuna").append('<option value="1">Punta Arenas</option>');
    }
  });


  // Se comienza la validación del formulario usando JQuery Validator

  $("#form").validate({
    rules: {
      username:{
        required: true,
        minlength: 3,
      },
      email: {
        required: true,
        email: true,
      },
      password: {
        required: true,
        minlength: 6,
      },
      "confirm-password": {
        required: true,
        equalTo: "#password",
      },
      rut: {
        required: true,
        rut: true,
        rutdv: true,
      },
      region:{
        required: true,
      },
      comuna:{
        required: true,
      },
      terms:{
        required: true,
      },
      tyc: {
        required: true,
      },
    },
    messages: {
        username:{
            required: "This is required",
            minlength:"Must consist of at least 3 characters",
        },
        email: {
        required: "This is required",
        email: "The email is invalid",
        },
        password: {
            required: "This is required",
            minlength:"Must consist of at least 6 characters",
        },
        rut: {
            required: "This is required",
            rut: "Sin puntos, con guión",
            rutdv: "El dígito verificador no es válido",
        },
        region:{
          required: "",
        },
        comuna:{
          required: "",
        },
        terms:{
            required: "You must accept terms and conditions"
        },
        "confirm-password": {
            required: "This is required",
            equalTo: "Passwords must match",
        },
        tyc: {
            required: "",
        },
    },
    errorPlacement: function(error,element){
      var placement = $(element).data('error');
      if (placement) {
        $(placement).append(error)
      } else {
        error.insertAfter(element);
      }
    },
    submitHandler: () => {
      const username = $("#username").val();
      const rut = $("#rut").val();
      const email = $("#email").val();
      const region = $("#region").val();
      const comuna = $("#comuna").val();
      const terms = $("#terms").val();
      const password = $("#password").val();

      console.table({ username, rut, email, region, comuna, password, terms});

      const newUser = {
        "username": document.getElementById("username").value,
        "rut": document.getElementById("rut").value,
        "email": document.getElementById("email").value,
        "region": document.getElementById("region").value,
        "comuna": document.getElementById("comuna").value,
        "contrasena": document.getElementById("password").value
      };

      const mapaUsuarios = cargarUsuarios();
      agregarUsuario(newUser);

    },
  });
});

function cargarUsuarios() {
  const mapaUsuarios = new Map();

  fetch('data/users.json')
      .then(response => response.json())
      .then(data => {
          data.forEach(usuario => {
              const clave = usuario.username;
              mapaUsuarios.set(clave, usuario);
          });
          console.log('Mapa de usuarios cargado:', mapaUsuarios);
      })
      .catch(error => console.error('Error al cargar el archivo JSON:', error));

  // Devolver el mapa de usuarios para poder acceder a él desde otras funciones
  return mapaUsuarios;
}

function agregarUsuario(newUser){
  // var jsonData = JSON.stringify(newUser);
  console.log("Usuario Agregado");

}