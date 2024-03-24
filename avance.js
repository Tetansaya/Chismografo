/*
# Plan de trabajo, cronograma, objetivo, requisitos (planeación en general).

Objetivo del proyecto

Brindarle la libertad y confianza a los alumnos de la Universidad tecnológica de chihuahua de poder expresarse sin temor alguno y asegurándoles que sus voces son escuchadas en cuanto a inconformidades personales, escolares, laborales y cualquier ámbito en general.

Asegurándoles también a su vez conservar el anonimato siempre y cuando se respeten los términos y condiciones de la pagina sin necesidad de atacar directamente a otro alumno o a algún profesor, prometiendo ser ellos completamente honestos.

Roles

Manager: Joel Sebastián Gómez Aranda (Líder del equipo)

PM (Project Manager): María Andrea Flores Vega…Limpieza: Andrea (barrer, trapear y limpiar las computadoras, ventanas y la caca del perro #machista#arribaelpatriarcadojajajaxD[#chessqueen]) 

Tech Lead: Rodolfo Yahir Fierro Solís

Programador: Jesús Eduardo Aceves Aguirre

## Planificación y diseño.

Requisitos del proyecto (funcionalidad y estructuración)

1. **Registro y Autenticación de Usuarios**:
    - Los usuarios deben poder registrarse para acceder al chismógrafo y enviar chismes.
    - Se necesita un sistema de autenticación para garantizar la seguridad de los datos y la privacidad de los usuarios.
2. **Envío de Chismes**:
    - Debe haber un formulario o interfaz que permita a los usuarios enviar chismes.
    - Se pueden incluir campos como el nombre del autor del chisme, el contenido del chisme y la fecha/hora de envío.
3. **Visualización de Chismes**:
    - Los chismes enviados deben ser mostrados en el sitio web para que otros usuarios los vean.
    - Puede ser útil implementar una función de paginación o carga infinita para manejar grandes cantidades de chismes.

1. **Interacción con Chismes**:
    - Los usuarios deben poder interactuar con los chismes, como darles "Me gusta", dejar comentarios o compartirlos en redes sociales.
    - Se pueden implementar funciones de moderación para gestionar los comentarios inapropiados o denunciar chismes abusivos.
2. **Búsqueda y Filtros**:
    - Los usuarios deben poder buscar chismes por palabras clave o filtrarlos por categorías o etiquetas.
    - Se puede incluir una función de búsqueda en tiempo real para una experiencia de usuario más fluida.
3. **Gestión de Perfiles de Usuario**:
    - Los usuarios deben tener la capacidad de editar sus perfiles, incluyendo la información personal y la configuración de privacidad.
    - Se pueden implementar funciones adicionales, como la posibilidad de seguir a otros usuarios o bloquearlos.
4. **Notificaciones**:
    - Puede ser útil implementar un sistema de notificaciones para informar a los usuarios sobre nuevos chismes, comentarios o actividades relacionadas con su cuenta.
5. **Diseño Responsivo**:
    - El sitio web debe ser compatible con dispositivos móviles y tablets, asegurando una experiencia de usuario óptima en diferentes tamaños de pantalla.
6. **Seguridad y Protección de Datos**:
    - Es fundamental garantizar la seguridad de los datos de los usuarios y proteger el sitio web contra posibles vulnerabilidades y ataques, como inyección de SQL o XSS (Cross-Site Scripting).
7. **Mantenimiento y Escalabilidad**:
    - Se debe planificar para el mantenimiento continuo del sitio web, incluyendo la aplicación de actualizaciones de seguridad y mejoras de rendimiento.
    - El sitio web debe ser diseñado pensando en la escalabilidad, para que pueda manejar un aumento en el tráfico de usuarios sin problemas.

Requisitos del proyecto (ámbito desarrollo)

Herramientas de Desarrollo:

- Node.js y npm: Se utilizan para instalar y administrar las dependencias del proyecto.
- Editor de Código: Se emplea un editor de código como Visual Studio Code, Sublime Text, u otro de preferencia.
- Git: Se usa para control de versiones y colaboración en equipo.

Bibliotecas y Frameworks:

- React: La biblioteca de JavaScript se emplea para construir interfaces de usuario.
- React Router: Se utiliza para manejar la navegación entre diferentes vistas de la aplicación.
- Axios o Fetch: Se utilizan para realizar peticiones HTTP desde el cliente al backend.

Backend:

- Node.js y Express.js: Se emplean para crear un servidor backend que maneje las operaciones CRUD de la base de datos y ofrezca una API RESTful.
- Base de Datos: Puedes utilizar MongoDB, PostgreSQL, MySQL u otra base de datos relacional o no relacional según tus necesidades y preferencias.

APIs Externas (Opcionales):

- API de Autenticación: Si se desea implementar autenticación mediante servicios como Firebase Authentication o Auth0.
- API de Notificaciones: Para enviar notificaciones en tiempo real a los usuarios, se pueden considerar servicios como Firebase Cloud Messaging.

Diseño y UI:

- Herramientas de Diseño: Se pueden utilizar herramientas como Adobe XD, Sketch, Figma, o incluso papel y lápiz para diseñar la interfaz de usuario.
- Bibliotecas de Componentes: Se pueden utilizar bibliotecas como Material-UI, Ant Design, o Bootstrap para facilitar el diseño y desarrollo de la interfaz de usuario.

Hosting y Despliegue:

- Servicios de Alojamiento: Se utilizan para alojar tanto el frontend como el backend. Se pueden considerar servicios como Heroku, AWS, DigitalOcean, o Firebase Hosting.
- Base de Datos en la Nube: Si se está utilizando una base de datos en la nube, se necesita un servicio de alojamiento para la base de datos, como MongoDB Atlas o Firebase Realtime Database.

Pruebas y Depuración:

- Herramientas de Pruebas: Se pueden utilizar Jest y React Testing Library para realizar pruebas unitarias y de integración en el frontend. Para el backend, herramientas como Mocha y Chai son comunes.
- DevTools de Navegador: Para depurar problemas en el frontend, se pueden utilizar las herramientas de desarrollo integradas en los navegadores web modernos, como Chrome DevTools o Firefox Developer Tools.

Documentación y Colaboración:

- Documentación del Proyecto: Se utilizan herramientas como Markdown para documentar el código y las decisiones de diseño.
- Plataforma de Colaboración: Se pueden utilizar servicios como GitHub o GitLab para gestionar el código fuente, realizar seguimiento de problemas y colaborar con otros miembros del equipo.
- Comunicación: Se utilizan herramientas de comunicación como Slack, Microsoft Teams o Discord para mantener una comunicación eficaz dentro del equipo.

Consideraciones Adicionales:

- Cumplimiento de Normativas: Se asegura de cumplir con las leyes y regulaciones de privacidad de datos, especialmente si se está recopilando información personal de los usuarios.
- Escalabilidad: Se diseña la arquitectura de la aplicación teniendo en cuenta la escalabilidad, para que se pueda manejar un aumento en el tráfico de usuarios a medida que la aplicación crece.
- Seguridad: Se implementan prácticas de seguridad recomendadas para proteger la aplicación contra vulnerabilidades como ataques de inyección SQL, XSS, CSRF, etc.
*/