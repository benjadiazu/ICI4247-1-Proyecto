# Proyecto

<div align="center">

[![angular-badge-sm]][angular-web] [![css3-badge-sm]][css3-web] [![figma-badge-sm]][figma-web] [![git-badge-sm]][git-web] [![github-badge-sm]][github-web] [![html5-badge-sm]][html5-web] [![ionic-badge-sm]][ionic-web] [![js-badge-sm]][js-web] [![mysql-badge-sm]][mysql-web] [![nodejs-badge-sm]][nodejs-web] [![npm-badge-sm]][npm-web] [![ts-badge-sm]][ts-web] [![vscode-badge-sm]][vscode-web]

[![ios-development-badge-sm]][ios-development-web] [![android-development-badge-sm]][android-development-web]

</div

## Intregrantes
-Benjamín Díaz
<br>
-Benjamín Fernández
<br>
-Thomas Molina
<br>
-Néstor Retamal

## Descripción

La aplicación se desarrollará como un sistema de monitoreo y seguimiento de robots para los usuarios. Estos robots tienen la tarea de localizar y alertar automáticamente sobre la presencia de personas en situaciones críticas (identificadas en rojo) o en condiciones seguras (marcadas en verde). Por esta razón, la aplicación será capaz de ofrecer estadísticas detalladas sobre los viajes realizados por cada robot, incluyendo las instrucciones de la ruta seguida y la distancia recorrida.

### Funcionalidades

Una vez la aplicación este en el dispositivo del usuario y sea ejecutada se le presentarán principalmente dos opciones. En primer lugar, el usuario podrá optar por iniciar sesión con su cuenta de Google o con una cuenta previamente registrada. Otra opción es registrar sus datos para crear una nueva cuenta. Estas opciones se detallan a continuación

## Funcionalidad de registro de usuario

Al seleccionar la función de registro, se redireccionará a una nueva ventana donde aparecerá un conjunto de textos indicando la información solicitada y justo debajo, una casilla donde podrá ingresar texto o seleccionar opciones. Al presionarla, se desplegará un teclado para ingresar los datos. Los parámetros solicitados en el registro serán los siguientes:

- **Nombre de usuario (username):** Correspondiente al primer nombre del consumidor seguido de su primer apellido (ej: Aquiles Baeza). La longitud total no deberá exceder los 50 caracteres.
- **RUT**: El identificador único de una persona se conformará según el siguiente formato: xxxxxxxx-x. Será un tipo de dato de cadena de texto con un máximo de 10 caracteres, permitiendo solo números antes del guion y un número o una letra después de este.
- **Correo Electrónico (email)**:
- **Región**: Siendo el usuario de la aplicación una persona que reside en Chile, se le solicitará que elija una región de entre las 16 regiones actuales del país. Esta lista de opciones incluirá todas las regiones disponibles para su selección y será una lista desplegable donde solo deberá seleccionar la correspondiente.
- **Comuna**: Una vez seleccionada la región, se podrá elegir una de las comunas correspondientes a dicha región en un listado predefinido. En este listado, se deberá marcar únicamente la opción que corresponda legítimamente a la persona. Se desplegará un listado de las comunas.
- **Contraseña:** Conjunto de caracteres que pueden ser números, letras minúsculas y mayúsculas  para dar acceso a las funcionalidades de la aplicación. Deben ser mínimo 8 caracteres, teniendo un máximo de 21 caracteres. Como recomendación, al usuario se le pedirá al menos un carácter de cada tipo. De no cumplir con los requisitos se le indicará al usuario que su contraseña es muy débil y deberá ingresar una nueva.
- **Confirmación de contraseña:** Conjunto de caracteres que pueden ser números, letras minúsculas y mayúsculas. Deben ser mínimo 8 caracteres, teniendo un máximo de 21 caracteres. Se solicitará al usuario que repita la misma contraseña para validar que se hayan ingresado correctamente. Si las contraseñas no coinciden, se mostrará un mensaje indicando que no hay coincidencias entre las contraseñas.
- **Aceptación de términos y condiciones:** Se presentará un panel de texto que mostrará el contrato que el consumidor debe aceptar para acceder a la aplicación. Si el consumidor decide aceptarlo, se le permitirá registrar sus datos y se procederá a crear la cuenta. En caso de no aceptar el contrato, el consumidor no podrá utilizar la aplicación.

## Funcionalidad de inicio de sesión

Al abrir la aplicación para iniciar sesión mediante un formulario de celdas, se debe introducir la cuenta con el formato "*nombre_de_usuario@nombre_de_dominio.extensión_de_dominio*", por ejemplo: *aquiles.baeza@gmail.com.* Además, se requiere ingresar la contraseña. En caso de ingresar incorrectamente alguno de los datos mencionados anteriormente, la página se recargará y se enviará una notificación al usuario.

Si el usuario desea iniciar sesión con su cuenta de Google, debe haber iniciado sesión previamente en su dispositivo. En este caso, será redirigido a una nueva ventana donde deberá seleccionar la cuenta que desea sincronizar con la aplicación.

## Funcionalidad de sincronización del robot

Esta funcionalidad se encarga de mostrar los dispositivos conectados o los agregados recientemente. En la sección de dispositivos conectados se presentará la siguiente información:

- Nombre del robot.
- ID del robot.
- Batería del robot.

Además, para cada robot vinculado existirá un botón deslizable que permitirá conectar o desconectar el robot de la aplicación.

## Funcionalidad de análisis estadístico

Esta funcionalidad consiste en mostrar por pantalla la cantidad total de personas con las que ha interactuado el robot en el viaje actual, mostrando también por separado cuantas de estas se encontraban seguras y cuantas se encontraban en estado critico.

Por otro lado también se mostrara un historial de los viajes anteriores en los cuales se muestra la siguiente información:

- Name Trip: Nombre del viaje(ID)
- Robot Model: Modelo del robot
- Date: Fecha en la que se realizo el viaje

## Funcionalidad de monitor

La funcionalidad de monitor consistirá en mostrar al usuario un registro de la ruta realizado por el robot. Esta ruta será desplegada con una ventana interna donde el usuario podrá deslizar para ver la ruta realizada desde el inicio hasta el fin del viaje. Dentro de esta ventana se indicara cada cambio de dirección realizado por el robot. Además, informar cada vez que encuentra una persona, mostrando si la persona se encuentra bien o en un estado critico. En caso de encontrar a un persona en estado critico, se podrá pulsar el indicador de la persona para luego entregar al usuario la ruta hacia dicha persona.

## Prototipo

<div align="center">

[![figma-prot-badge]][figma-prot-url] [![figma-dis-badge]][figma-dis-url]

</div>

## Modelo de la Base de Datos

Para modelar la base de datos de la aplicación se tomaron en cuenta las siguientes características que debe considerar la aplicación:

- La aplicación maneja un registro de usuarios, los cuales tienen atributos relacionados a su información personal (tales como: Región, Comuna, Correo, Contraseña, etc). Además la aplicación debe ser capaz de identificar y cargar información acerca de las rutas realizadas anteriormente con el robot asignado.
- La aplicación debe conseguir que los datos otorgados por el robot (a través de sus sensores) sean visualizados por el usuario dentro de la interfaz, además estos datos deben guardarse dentro de la base de datos.

A partir de lo anterior, lo que se consideró para la aplicación fue la utilización de dos API's REST para realizar las conexiones necesarias, siendo una de ellas, la conexión con el usuario y sus rutas pasadas, mientras que la otra se comunicará con el robot. El siguiente esquema muestra como sería la comunicación entre el frontend y backend:

![Diagrama de comunicación](/Images/Diagrama_UI.png)

Para la base de datos, se tomó la decisión de utilizar un motor de bases de datos de tipo relacional, esto porque se espera conseguir un mejor orden y manejo de los datos a través de consultas. Específicamente, se decidió optar por el motor MySQL para realizar la base de datos. Para describir de mejor forma la forma de guardar los datos, se adjuntan a continuación los diagramas de entidad-relación y modelo relacional del sistema:

![Diagrama de comunicación](/Images/Web-Conceptual.png)
![Diagrama de comunicación](/Images/Web-Logica.png)

## Patrones de diseño

•	La aplicación móvil hace uso de un componente tab en la parte inferior de la pantalla que es utilizada en varias de sus páginas como barra de navegación, esto con el objetivo de poder moverse entre pestañas con facilidad. La ubicación de este componente está específicamente en la carpeta tab, dentro del módulo misc del proyecto y es usado en las páginas “home”, “monitorear”, “conectar” e “información”.

•	A la hora de iniciar sesión o registrarse, en caso de que el usuario seleccione y deje un campo en blanco, se mostrará el contorno del campo en color rojo junto con un mensaje indicando el error. Además, si el usuario ingresa datos que no tienen el formato esperado, se le indicará el error en un mensaje similar.



[js-badge-sm]: https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=000&style=flat
[js-web]: https://developer.mozilla.org/es/docs/Web/JavaScript
[ts-badge-sm]: https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=fff&style=flat
[ts-web]: https://www.typescriptlang.org/
[html5-badge-sm]: https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=fff&style=flat
[html5-web]: https://developer.mozilla.org/es/docs/Web/HTML
[css3-badge-sm]: https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=fff&style=flat
[css3-web]: https://developer.mozilla.org/es/docs/Web/CSS
[tailwind-badge-sm]: https://img.shields.io/badge/Tailwind_CSS-38B2AC?logo=tailwind-css&logoColor=fff&style=flat
[tailwind-web]: https://tailwindcss.com/
[react-badge-sm]: https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=fff&style=flat
[react-web]: https://reactjs.org/
[angular-badge-sm]: https://img.shields.io/badge/Angular-DD0031?logo=angular&logoColor=fff&style=flat
[angular-web]: https://angular.io/
[nodejs-badge-sm]: https://img.shields.io/badge/Node.js-339933?logo=node.js&logoColor=fff&style=flat
[nodejs-web]: https://nodejs.org/
[express-badge-sm]: https://img.shields.io/badge/Express.js-000000?logo=express&logoColor=fff&style=flat
[express-web]: https://expressjs.com/
[mongodb-badge-sm]: https://img.shields.io/badge/MongoDB-47A248?logo=mongodb&logoColor=fff&style=flat
[mongodb-web]: https://www.mongodb.com/
[postgresql-badge-sm]: https://img.shields.io/badge/PostgreSQL-336791?logo=postgresql&logoColor=fff&style=flat
[postgresql-web]: https://www.postgresql.org/
[mysql-badge-sm]: https://img.shields.io/badge/MySQL-4479A1?logo=mysql&logoColor=fff&style=flat
[mysql-web]: https://www.mysql.com/
[git-badge-sm]: https://img.shields.io/badge/Git-F05032?logo=git&logoColor=fff&style=flat
[git-web]: https://git-scm.com/
[github-badge-sm]: https://img.shields.io/badge/GitHub-181717?logo=github&logoColor=fff&style=flat
[github-web]: https://github.com
[npm-badge-sm]: https://img.shields.io/badge/npm-CB3837?logo=npm&logoColor=fff&style=flat
[npm-web]: https://www.npmjs.com/
[yarn-badge-sm]: https://img.shields.io/badge/Yarn-2C8EBB?logo=yarn&logoColor=fff&style=flat
[yarn-web]: https://yarnpkg.com/
[prettier-badge-sm]: https://img.shields.io/badge/Prettier-F7B93E?logo=prettier&logoColor=fff&style=flat
[prettier-web]: https://prettier.io/
[eslint-badge-sm]: https://img.shields.io/badge/ESLint-4B32C3?logo=eslint&logoColor=fff&style=flat
[eslint-web]: https://eslint.org/
[vscode-badge-sm]: https://img.shields.io/badge/Visual_Studio_Code-007ACC?logo=visual-studio-code&logoColor=fff&style=flat
[vscode-web]: https://code.visualstudio.com/
[ionic-badge-sm]: https://img.shields.io/badge/Ionic-3880FF?logo=ionic&logoColor=fff&style=flat
[ionic-web]: https://ionicframework.com/
[figma-badge-sm]: https://img.shields.io/badge/Figma-F24E1E?logo=figma&logoColor=fff&style=flat
[figma-web]: https://www.figma.com/
[ios-development-badge-sm]: https://img.shields.io/badge/iOS_Development-000000?logo=ios&logoColor=fff&style=flat
[ios-development-web]: https://developer.apple.com/ios/
[android-development-badge-sm]: https://img.shields.io/badge/Android_Development-3DDC84?logo=android&logoColor=fff&style=flat
[android-development-web]: https://developer.android.com/

[figma-prot-badge]: https://img.shields.io/badge/Ver%20prototipo%20en%20Figma-F24E1E?logo=figma&logoColor=fff&style=flat
[figma-prot-url]: https://www.figma.com/proto/izTDjw4IxF5HbZ2ihwJmtO/Aplicaci%C3%B3n?type=design&node-id=2-3&t=XdaH4CLfEIYQdtkd-0&scaling=scale-down&page-id=0%3A1&starting-point-node-id=2%3A3
[figma-dis-badge]: https://img.shields.io/badge/Ver%20diseño%20UI%20en%20Figma-F24E1E?logo=figma&logoColor=fff&style=flat
[figma-dis-url]: https://www.figma.com/file/izTDjw4IxF5HbZ2ihwJmtO/Aplicaci%C3%B3n?type=design&node-id=0-1&mode=design&t=XdaH4CLfEIYQdtkd-0

