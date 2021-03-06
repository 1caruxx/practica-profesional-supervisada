# ![Logo](./Z._img/icon.png) Introduccion a Ionic

[Ionic](https://ionicframework.com/) es un framework front-end que permite la creacion de aplicaciones hibridas para dispositivos mobiles. Estas aplicaciones
estaran escritas en HTML, CSS y Typescript.

## Tabla de contenidos

* [Tecnologias utilizadas](#tecnologias-utilizadas)
* [Instalacion y primeros pasos](#instalacion-y-primeros-pasos)
    * [Ionic DevApp](#ionic-devApp)
* [Tipos de aplicaciones moviles](#tipos-de-aplicaciones-moviles)
* [Como crear una aplicacion nativa a partir de un proyecto de Ionic](#como-crear-una-aplicacion-nativa-a-partir-de-un-proyecto-de-ionic)
    * [El comando resources](#el-comando-resources)
* [Estructura de un proyecto](#estructura-de-un-proyecto)
    * [El directorio src](#el-directorio-src)
* [Profesores](#profesores)

## Tecnologias utilizadas

<table>
    <tbody>
        <tr>
            <td><img src="./Z._img/vs-code.png" width="20px" height="20px"/></td>
            <td><a href="https://code.visualstudio.com/">Visual Studio Code</a></td>
        </tr>
        <tr>
            <td><img src="./Z._img/icon.png" width="20px" height="20px"/></td>
            <td><a href="https://ionicframework.com/">Ionic (v3.9.2)</a></td>
        </tr>
        <tr>
            <td><img src="./Z._img/cordova.png" width="20px" height="20px"/></td>
            <td><a href="https://cordova.apache.org/">Apache cordova (v8.0.0)</a></td>
        </tr>
        <tr>
            <td><img src="./Z._img/jdk.png" width="20px" height="20px"/></td>
            <td><a href="http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html">Java SE Development Kit (JDK)(v1.8.0_181)</a></td>
        </tr>
        <tr>
            <td><img src="./Z._img/genymotion.png" width="20px" height="20px"/></td>
            <td><a href="https://www.genymotion.com/">Genymotion (v2.12.2)</a></td>
        </tr>
        <tr>
            <td><img src="./Z._img/devapp.png" width="20px" height="20px"/></td>
            <td><a href="https://play.google.com/store/apps/details?id=io.ionic.devapp&hl=en">Ionic DevApp</a></td>
        </tr>
    </tbody>
</table>

## Instalacion y primeros pasos

Para su instalacion, sera necesario el uso del [gestor de paquetes de node](https://nodejs.org/es/) (node package manager o NPM).<br/>
Para instalar el framework, se debera lanzar el siguiente comando en cualquier terminal, no importa donde se este posicionado:

```
npm install -g ionic
```

De esta forma, se instalara la ultima version de ionic de forma global. Ahora se podra acceder a su interfaz de lineas de comandos (command line interface o CLI) desde cualquier ubicacion. Para comprobar su correcta instalacion, se puede lanzar alguno de los siguientes comandos:

```
ionic --version
ionic -v
```

El primer comando retornara la version instalada de ionic CLI, el segundo hara lo mismo pero a su vez proporcionara un listado de comandos globales. Si se desea ver la version instalada de ionic:

```
ionic info
```

El sistema de versionado de ionic es semantico al igual que el de angular. Esto quiere decir que cada version de ionic esta compuesta por tres numeros (X.X.X). Cada numero representa el grado de cambio que hay de una version a otra. El primer numero se le denomina "mayor" y representa una nueva version en el que el cambio puede presentar incompatibilidades en proyectos trabajados en versiones anteriores del framework. El segundo numero, conocido como "minor", representa una version a la cual se le añaden nuevas funciones, pero que no deberian presentar incompatibilades con las versiones anteriores. Finalmente, el tercer y ultimo numero, llamado "path" representa una version en la cual se corrigieron errores.<br/>
Por esta razon es recomendable no actualizar la version del framework mientras se este trabajando sobre un proyecto o por lo menos no sin hacer previamente una copia de seguridad.<br/>
Para crear un nuevo proyecto de ionic:

```
ionic start <nombre-del-proyecto> <plantilla>
```

La plantilla o template sera una vista creada por defecto que podra ser visualizada en el navegador o en cualquier otra parte. Si no se coloca la plantilla, se imprimira por consola un listado de las plantillas que ionic ofrece.<br/>
Si durante la creacion de un nuevo proyecto, surge un error durante la ejecucion del comando `npm i`, cambiar el registro de donde npm chequea la lista de paquetes puede solucionarlo:

```bash
npm config set registry https://registry.npmjs.com/
# Por defecto es https://registry.npmjs.org/
```

```
ionic serve
```
Este comando permitira ejecutar la aplicacion en un servidor local. Se debera lanzarlo estando posicionado en la carpeta de un proyecto de ionic en la consola de comandos. Automaticamente se abrira el navegador por defecto en el caso de que no este abierto y se podra visualizar la aplicacion. Antes de ser cargada la pagina en el navegador, se realiza un proceso de compilacion para que el proyecto tenga una estructura estandarizada que los navegadores puedan interpretar. Esa version del proyecto compilada, es la que sirve el framework al navegador.<br/>
Este comando a su vez tiene una bandera especial que es `--lab` que permitira visualizar la aplicacion en varios sistemas operativos, siempre dentro de un servidor local ejecutado en el navegador por defecto.

### Ionic DevApp

[Ionic DevApp](https://play.google.com/store/apps/details?id=io.ionic.devapp&hl=en) es una aplicacion para Android o iOS que permite visualizar las aplicaciones desarollados en Ionic de una forma mas sencilla. Una vez descargada en un dispositivo movil, se debera iniciar sesion con una cuenta de [Ionic pro](https://dashboard.ionicframework.com/signup). Finalmente se debera desde el medio en el cual se estaba desarollando la aplicacion, lanzar el comando `ionic serve -c` (el parametro o bandera `-c` permite imprimir los logs en la consola). Si tanto el dispositivo movil como el entorno de desarollo estan conectados a la misma red, sera posible visualizar tambien el proyecto en la aplicacion Ionic DevApp. Mas informacion en el siguiente [enlace](https://ionicframework.com/docs/pro/devapp/).

## Tipos de aplicaciones moviles

* **Aplicaciones web:** Este tipo de aplicaciones se ejecutan directamente sobre un navegador web. Estan escritas en HTML, CSS y Javascript y su ventaja es que una vez son escritas, funcionaran sobre todos los sistemas operativos, ya que sera el navegador web quien se encargue de interactuar con el SO. Su desventaja es que los navegadores estan limitados por cuestiones de seguridad y hay ciertas funciones a las que no pueden acceder.
* **Aplicaciones nativas:** Estas aplicaciones interactuan directamente con el sistema operativo. Su ventaja es que no tienen limite alguno, pero el lenguaje en el que seran creadas dependera del sistema operativo, lo que quiere decir que si una aplicacion debe ser multiplataforma, su codigo debera ser escrito multiples vez en leguanjes diferentes.
* **Aplicaciones hibridas:** Estas aplicaciones son una combinacion de los dos tipos anteriormente mencionados. Una aplicacion hibrida es una aplicacion web, puesto que estara escrita en HTML, CSS y Javascript, pero que usara la herramienta [Apache cordova](https://cordova.apache.org/) para ser visualizada e interactuar directamente con el sistema operativo.

## Como crear una aplicacion nativa a partir de un proyecto de Ionic

Para crear una aplicacion nativa a partir de un proyecto creado con el framework Ionic, sera necesario adquirir las siguientes herramientas:
* **JDK:** Que por sus siglas, significa <i>"Java Development Kit"</i> (kit de desarollo de java). Esta herramienta o conjunto de herramientas es precisada por Cordova para traspilar el codigo y transformarlo en una aplicacion nativa. JDK puede ser descargado a traves del siguiente [enlace](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html). Al momento de instalar este kit de desarollo, se tendra que tener muy en cuenta la ubicacion donde es instalado por que se necesitara para crear una variable de entorno.<br/>
Cordova por defecto buscara las herramientas de JDK que precise segun la ubicacion que este almacenada en la variable de entorno `JAVA_HOME`. Esta variable no existe, por lo que sera necesario crearla previamente para ello (en Windows), se debe ir a Este equipo > Propiedades > Configuracion avanzada del sistema > Variables de entorno... y se creara una nueva variable del sistema. El nombre de esta debe ser exactamente *JAVA_HOME* y su valor sera la ruta donde se encuentran todos los archivos que conforman JDK, en mi caso, seria la siguiente ruta: `D:\Archivos de programa\Java\jdk1.8.0_181`.<br/>
El ultimo paso seria modificar la variable de entorno `Path` de las variables de sistema a la que se le debe añadir la sentencia `%JAVA_HOME\bin%`. Si todo salio correcto, al lanzar el comando `javac -version` se deberia poder ver la version del JDK actualmente instalado. Javac es el compilador encargado de transformar el codigo fuente a una version que podra interpretarse en cualquier plataforma.<br/>
Si durante el proceso de creacion de la variable de entorno, se tenia una consola abierta y en esa consola se la lanza el comando y sigue sin reconocerse como un comando interno, se debe abrir una nueva consola para que se actualize la informacion.
* **SDK del sistema operativo en el que se trabajara:** SDK es la abreviatura de <i>"Software Development Kit"</i> y es el conjunto de herramientas que necesitan para desarollar una aplicacion para un determinado sistema operativo. Por ejemplo, en el caso de que se desarolle para Android, Cordova necesitara el SDK de ese sistema operativo para crear la aplicacion nativa. Puede ser descargado a traves del siguiente [enlace](https://developer.android.com/studio/). El SDK se descargara junto a Android studio, un emulador de android orientado al testeo de aplicaciones creadas para este sistema operativo.<br/>
Un emulador es opcional pero recomendable para comprobar el correcto funcionamiento de una aplicacion en la diferentes versionde de Android. Asi como se descarga Android Studio puede descargarse cualquier otro emulador. Personalmente recomiendo [Genymotion](https://www.genymotion.com/) que puede ser descargado de forma gratuita a traves del siguiente [enlace](https://www.genymotion.com/fun-zone/). Este emulador no precisa de tecnoligia intel ([intel HAXM](https://software.intel.com/en-us/articles/intel-hardware-accelerated-execution-manager-intel-haxm)) para activar la aceleracion de hardware como Andoird studio u otros emuladores.
* **Apache cordova:** Apache cordova es el software traspilador que se encargara de crear la aplicacion hibrida. Haciendo uso de los standares HTML, CSS y JavaScript, creara una aplicacion nativa segun el dispositivo que se le indique, ahorrando el trabajo de crear una aplicacion diferente por cada sistema operativo. Para instalar cordova:

```
npm i -g cordova
```

Para transpilar el proyecto de Ionic con cordava, se debe lanzar el siguiente comando en un proyecto de ionic teniendo un emulador de Android corriendo o un dispositivo Android conectado al sistema. Cordova se encargara de detectar el dispositivo o emulador e inyectarle la aplicacion. En ambos casos, la depuracion USB debera estar activada en las opciones de desarollador. Estas opciones por defecto vienen ocultas, pero pueden ser desbloqueadas yendo a Ajustes > Acerca del telefono > y presionando multiples veces el numero de compilacion (el nombre de las distintas opciones puede varias segun el dispositivo y la version de Android, pero generalemnte se asemejan). Ahora las opciones de desarollador apareceran en ajustes.

```
ionic cordova run android
```

Esto creara el directorio `plataforms` en la raiz del proyecto de ionic y ejecutara automaticamente la aplicacion en el dispositivo. Tambien es posible generar un archivo con extension `.apk` Este tipo de archivo seria el equivalente a un `.exe` en Windows. Sus siglas significan <i>"Android Application Package"</i> y es una compresion del todos los archivos que necesita la aplicacion, incluido un instalador para instalar el paquete en un sistema operativo Android. Para crear el APK, se debe lanzar el siguiente comando:

```
ionic cordova build android
```

La APK sera generada en la siguiente ruta: `.\platforms\android\app\build\outputs\apk\debug`.

### El comando resources

Para evitar tener que crear una splash screen y un icono para cada dimension y hace escalen correctamente en los diferentes dispositivos con resoluciones diferentes, se puede hacer uso del siguiente comando:

```
ionic cordova resources
```

Este comando tomara dos imagenes situadas en la siguiente ruta: `./resources`. El nombre de estas dos imagenes debe ser exactamente `splash.png` y `icon.png` y tener preferentemente una dimension de 2732px por 2732px y 1024px por 1024px respectivamente. El comando se encarga de tomar estas dos imagenes y escalarlas en distintas resoluciones para crear los iconos y splash screens. A su vez tambien configura el archivo `config.xml` para dar de alta estas imagenes. Si solo se quiere crear los iconos y splash screen para un sistema operativo en particular:

```
ionic cordova [plataforma]
```

Donde plataforma puede ser android o ios. A su vez, tambien se pueden colocar banderas para limitar si se crearan solo los iconos o las splash screens:

```
ionic cordova [plataforma] --icon
ionic cordova [plataforma] --splash
```

## Estructura de un proyecto

```
root
  |---> .sourcemaps
  |---> node_modules
  |---> resources
  |---> src
  |---> www
  |---> .editorconfig
  |---> .gitignore
  |---> config.xml
  |---> ionic.config.json
  |---> package-lock.json
  |---> package.json
  |---> tsconfig.json
  |---> tslint.json
```

**node_modules:** En este directorio se almacenan todas las librerias que npm descargo y que se necesitan para el funcionamiento de un proyecto de Ionic.<br/>
**resources:** Contiene la pantalla de presentacion asi como el logotipo de la aplicacion.<br/>
**src:** Contendra todo el codigo de la aplicacion y sera donde el desarollador trabajara.<br/>
**www:** Este directorio contiene la version compilada de la aplicacion para que un navegador pueda interpretarla, pero no sera la aplicacion final que reconoceran los diferentes dispositivos.<br/>
<b>.editorconfig:</b> Archivo de configuracion que se aplica sobre el editor de codigo, para que la configuracion, sea comun en todos los proyectos de ionic, sin importar que editor se este usando.<br/>
<b>.gitignore:</b> Archivo el cual contendra el nombre de todos los archivos y directorios que desean ser ignorados a la hora de subirlos a traves de la tecnologia git.<br/>
**config.xml:** Archivo de configuracion para la compilacion de la fututra aplicacion nativa. Desde este archivo se puede modificar:
* La version de la aplicacion.
* El ID de la aplicacion. Es importante no tenes aplicaciones separadas con el mismo ID, por que al momento de instalarlas, se pisanran mutuamente.
* El nombre de la aplicacion y su descripcion.
* Datos del autor.
* Configuracion de la splash screen, por ejemplo, deshabilitar el spinner de carga. Para ello se debe añadir la siguiente etiqueta.

```xml
<preference name="ShowSplashScreenSpinner" value="false" />
```

* Asignacion de las distintas splash screens e iconos para las diferentes resoluciones (esto se realiza de forma automatica con el comando `ionic cordova resources`. Mas informacion en el siguiente [enlace]()).

**ionic.config.json:** Archivo de configuracion del proyecto ionic. Solo sirve si el proyecto sera subido a una plataforma de desarollo de ionic.<br/>
**package-lock.json:** Detalla todo el arbol de dependencias del proyecto asi como la version exacta de cada una.<br/>
**package.json:** Un archivo con formato JSON que resume las depencias y librerias que utiliza este proyecto asi como las versiones necesararias de las mismas. Tambien se encuentran los scripts para ionic.<br/>
**tsconfig.json:** Archivo de configuracion del compilador de TypeScript. Siempre es creado en el directorio root de una aplicacion escrita en este lenguaje.<br/>

### El directorio src

El directorio src contendra el codigo de la aplicacion, y sera donde la mayor aprte del tiempo se trabajara. Posee la siguiente estructura:

```
src
  |---> app
  |---> assests
  |---> pages
  |---> theme
  |---> declarations.d.ts
  |---> index.html
  |---> manifest.json
  |---> service-worker.json
```

**app:** En este directorio se almacenaran los componentes, modulos, serivicios y demas elementos que conformaran la aplicacion. Su estructura resulta ser la misma que la de un proyecto escrito en Angular, ya que Ionic usa ese framework.<br/>
En este directorio se alamacenara el componente root de la aplicacion. En el template de ese componente, se puede observar la siguiente linea:

```html
<ion-nav [root]="rootPage"></ion-nav>
```

Esta linea sera la que determine cual sera la pagina principal, es decir, la primera pagina en ser cargada luego del splash screen. <br/>
El archivo `main.ts` tiene el siguiente formato:

```typescript
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'; // Se le indica al framework angula donde se va a ejecutar el modulo de la aplicacion.

import { AppModule } from './app.module'; // Importa el modulo de nuestra aplicacion, definido en el archivo app.module.ts

platformBrowserDynamic().bootstrapModule(AppModule); // Se inicializa la aplicacion a partir del modulo que se le pasa por parametro.
```

En la carpeta `assets` se alamcenaran todos los recursos que usan nuestras distintas paginas y que no deben atrezar por un proceso de empaquetado, por ejemplo, imagenes, fuentes, archivos de sonido, etc.<br/>
El directorio `pages` contendra las distintas paginas que conforman la aplicacion. Una pagina puede ser facilmente generada con el comando:

```
ionic g page <nombre-de-la-pagina>
```

Se creara un nuevo directorio en el directorio `pages` con el nombre de la pagina. Dentro contendra la vista, el controlador, un archivo de estilos y el modulo de la pagina que habra que importar en el modulo principal de la aplicacion (`app.module.ts`).<br/>
En el directorio `theme` se puede encontrar un archivo de Sass (`variables.scss`), en el cual se pueden modificar las variables de colores o crear nuevas variables para usar en los distintos estilso de las paginas.

## Profesores

* [Octavio Villegas](https://github.com/octaviovillegas)
* Maximiliano Neiner