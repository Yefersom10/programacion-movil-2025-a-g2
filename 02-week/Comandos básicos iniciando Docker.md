# Comandos básicos iniciando Docker
 
### docker --versión

    Sirve para verificar la versión de Docker instalada en tu sistema.

### docker pull postgres:17.2

    Sirve para descargar la imagen de PostgreSQL versión 17.2 desde Docker Hub al sistema local. Aquí:

    - docker pull descarga una imagen desde un registro (por defecto, Docker Hub).
    - postgres:17.2 especifica la imagen de PostgreSQL en su versión 17.2.

### docker pull dpage/pgadmin4

    Descarga la imagen de pgAdmin 4 desde Docker Hub.

    Explicación:

    - docker pull descarga una imagen desde un registro (por defecto, Docker Hub).
    - dpage/pgadmin4 es el nombre de la imagen mantenida por dpage, que contiene la interfaz web para administrar bases de datos PostgreSQL.

### docker compose up -d

   - docker compose: Ejecuta Docker Compose, una herramienta para  definir y ejecutar aplicaciones con múltiples contenedores.

   - up: Levanta los contenedores definidos en el archivo docker-compose.yml.

   - -d: Ejecuta los contenedores en modo "detached", es decir, en segundo plano.

# COMANDOS BASICO DE CONSOLA 

### psql -U grupo2 basedos-db

   - psql: Cliente interactivo de PostgreSQL.

   - -U grupo2: Indica que se conectará con el usuario grupo2.
   - basedos-db: Es el nombre de la base de datos a la que se intentará conectar.

### \l

   El comando \l en psql se usa para listar todas las bases de datos disponibles en el servidor de PostgreSQL.

##### Información mostrada:

   - Name: Nombre de la base de datos.

   - Owner: Usuario propietario de la base de datos.

   - Encoding: Codificación de caracteres.

   - Collate y Ctype: Configuración de ordenamiento y tipo de caracteres.

   - Access privileges: Permisos de acceso.

### \c prueba

   - \c es un atajo en psql para \connect, que se usa para cambiar de base de datos.

   - prueba es el nombre de la base de datos a la que deseas conectarte.

### \d

   \d en psql se usa para listar todas las tablas, vistas, secuencias e índices de la base de datos a la que estás conectado.

### \d "nombre de la tabla"

   \d clientes muestra la estructura de la tabla clientes, incluyendo sus columnas, tipos de datos, restricciones y claves.