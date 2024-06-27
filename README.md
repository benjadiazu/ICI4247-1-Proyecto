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
