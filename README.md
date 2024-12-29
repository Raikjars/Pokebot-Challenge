# Pokebot Challenge

**Pokebot** Esta aplicación web te invita a explorar el mundo de los primeros 150 Pokémon de la generación original a través de una experiencia interactiva con un chatbot impulsado por OpenAI. ¡Sumérgete en conversaciones exclusivas sobre tus Pokémon favoritos! Cada vez que menciones o preguntes por un Pokémon, el chatbot generará un botón especial que te llevará a una descripción detallada del personaje, si deseas saber más. Tambien podras acceder a la lista completa de los 150 Pokémon y descubrir sus características y detalles a tu propio ritmo. ¡Es la herramienta perfecta para los fans de la nostalgia y los amantes de Pokémon!

## Instalación
Nota importante: para instalarlo a través de npm/Yarn, necesita al menos Node.js 14 o superior.


#### Paso 1

Descargar el codigo del repositorio mediante github o git bash con el comando

```bash
git clone https://github.com/Raikjars/Pokebot-Challenge.git
```


#### Paso 2

Instalar las dependencias del proyecto con el comando
```bash
  npm install
```


#### Paso 3

Si es la primera vez que corres el proyecto debes iniciar el proyecto con el siguiente comando para que se genere el archivo **ENVIROMENT**. Ten en consideración que debes tener el archivo .env en la carpeta /enviroment para que se genere correctamente.
```bash
  npm start
```


#### Paso 4
Si eres de Venezuela debes usar una **VPN** para que el chat pueda funcionar debido a que openAI esta bloqueado en dicha region. Para ejecutar el proyecto de forma local con una **VPN** activa se debe usar el comando.
```bash
  ng serve --host 0.0.0.0 --port 4200 
```

En caso contrario el proyecto puede correr con normalidad con el comando.
```bash
  ng serve
```

Una vez que el servidor esté en funcionamiento, abra su navegador y navegue hasta `http://localhost:4200/`. La aplicación se recargará automáticamente cada vez que modifique alguno de los archivos fuente.

## Dependencias
Las principales librerías utilizadas para el desarrollo de este proyecto son las siguientes:

-	**Angular Cli**: El frontend de la aplicación esta desarrollado bajo el uso del framework Angular 19.0.6.
-	**NodeJs**: Se utiliza **NodeJs** versión **14.15.4 LTS o superior** como ambiente de ejecución.
-	**bootstrap, primeng y primeicons**: para reutilizar componentes, diseños, sistema de rejilla, iconos, etc.
-	**dotenv**: empleado para manejar variables de entorno.
- Se utiliza **HTML5, CSS3 y JavaScript (ECMAScript 5)** para el desarrollo de la aplicación web.
- Se utilizo **PokeAPI** para obtener datos de prueba en las peticiones REST.
- Se utilizo **OpenAI** para configurar el comportamiento del Chatbot.

## Recursos adicionales

Para obtener más información sobre el uso de la CLI de Angular, incluidas referencias de comandos detalladas, visita la página [Descripción general de la CLI de Angular y referencia de comandos (https://angular.dev/tools/cli).
