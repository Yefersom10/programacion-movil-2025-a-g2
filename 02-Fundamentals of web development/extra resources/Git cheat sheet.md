## ¿Qué es un Sistema de Control de Versiones Distribuidas?
Un sistema de control de versiones distribuido es un sistema que le ayuda a realizar un seguimiento de los cambios que ha realizado en los archivos de su proyecto.

#### Cómo comprobar su configuración de Git:
El siguiente comando devuelve una lista de información sobre su configuración git, incluyendo nombre de usuario y correo electrónico:
```
git config -l
```
#### Cómo configurar su nombre de usuario de Git:
Con el siguiente comando puede configurar su nombre de usuario:
```
git config --global user.name "Fabio"
```
#### Cómo configurar su correo electrónico de usuario de Git:
Este comando le permite configurar la dirección de correo electrónico del usuario que usará en sus confirmaciones.
```
git config --global user.email "signups@fabiopacifici.com"
```
#### Cómo almacenar en caché sus credenciales de inicio de sesión en Git:
Puede almacenar las credenciales de inicio de sesión en la caché para que no tenga que escribirlas cada vez. Solo usa este comando:
```
git config --global credential.helper cache
```

#### Cómo inicializar un repositorio de Git:
Todo comienza desde aquí. El primer paso es inicializar un nuevo repositorio de Git localmente en la raíz de su proyecto. Puede hacerlo con el siguiente comando:
```
git init
```
#### Cómo agregar un archivo al área de puesta en escena en Git:
El siguiente comando agregará un archivo al área de estadificación. Solo reemplace filename_here con el nombre del archivo que desea agregar al área de estadificación.
```
git add filename_here
```
#### Cómo agregar todos los archivos en el área de puesta en escena en Git
Si desea agregar todos los archivos de su proyecto al área de puesta en escena, puede usar un comodín . y cada archivo se agregará para usted.
```
git add .
```
#### Cómo agregar solo ciertos archivos al área de puesta en escena en Git
Con el asterisco en el comando a continuación, puede agregar todos los archivos que comienzan con 'fil' en el área de estadificación.
```
git add fil*
```
####Cómo comprobar el estado de un repositorio en Git:
Este comando mostrará el estado del repositorio actual, incluidos los archivos escalonados, no escalonados y no rastreados.
```
git status
```
#### Cómo cometer cambios en el editor en Git:
Este comando abrirá un editor de texto en el terminal donde puede escribir un mensaje de confirmación completo.

Un mensaje de confirmación se compone de un breve resumen de los cambios, una línea vacía y una descripción completa de los cambios posteriores.
```
git commit
```
#### Cómo cometer cambios con un mensaje en Git:
Puede agregar un mensaje de confirmación sin abrir el editor. Este comando solo le permite especificar un breve resumen para su mensaje de confirmación.
```
git commit -m "your commit message here"
```
#### Cómo confirmar cambios (y omitir el área de preparación) en Git:
Puede agregar y confirmar archivos rastreados con un solo comando utilizando las opciones -a y - m.
```
git commit -a -m"your commit message here"
```
#### Cómo ver tu historial de compromisos en Git:
Este comando muestra el historial de confirmación para el repositorio actual:
```
git log
```
#### Cómo ver su historial de compromisos, incluidos los cambios en Git:
Este comando muestra el historial de la confirmación, incluidos todos los archivos y sus cambios:
```
git log -p
```
#### Cómo ver un commit específico en Git:
Este comando muestra una confirmación específica.

Reemplace commit-id con el id del commit que encuentre en el registro de commit después de la palabra commit.
```
git show commit-id
```
#### Cómo ver las estadísticas de registro en Git:
Este comando hará que el registro de Git muestre algunas estadísticas sobre los cambios en cada confirmación, incluyendo línea(s) cambiados y nombres de archivo.
```
git log --stat
```

#### Cómo ver los cambios realizados antes de cometerlos usando "diff" en Git:
Puede pasar un archivo como parámetro para ver solo los cambios en un archivo específico. git diff muestra solo los cambios no escalonados de forma predeterminada.

Podemos llamar diff con el --staged bandera para ver cualquier cambio por etapas.
```
git diff
git diff all_checks.py
git diff --staged
```
#### Cómo ver los cambios usando "git add -p":
Este comando abre un mensaje y le pregunta si desea realizar cambios o no, e incluye otras opciones.
```
git add -p
```
#### Cómo eliminar archivos rastreados del árbol de trabajo actual en Git:
Este comando espera un mensaje de confirmación para explicar por qué se eliminó el archivo.
```
git rm filename
```
#### Cómo cambiar el nombre de los archivos en Git:
Este comando organiza los cambios, luego espera un mensaje de confirmación.
```
git mv oldfile newfile
```
#### Cómo ignorar archivos en Git:
Crear un .gitignore archiva y commételo.

#### Cómo revertir los cambios no escalonados en Git:
```
git checkout filename
```
#### Cómo revertir los cambios escalonados en Git:
Puede usar el indicador de opción -p para especificar los cambios que desea restablecer.
```
git reset HEAD filename
git reset HEAD -p
```
#### Cómo modificar el commit más reciente en Git:

git commit --amendle permite modificar y agregar cambios a la confirmación más reciente.

git commit --amend
¡!!Nota!!: arreglar una confirmación local con enmend es excelente y puede enviarla a un repositorio compartido después de haberla arreglado. Pero debe evitar modificar los compromisos que ya se han hecho públicos.

#### Cómo revertir la última confirmación en Git:
git revertcreará una nueva confirmación que es lo contrario de todo en la confirmación dada. Podemos revertir la última confirmación utilizando el alias principal como este:
```
git revert HEAD
```
#### Cómo revertir una vieja confirmación en Git:
Puede revertir una confirmación antigua usando su identificación de confirmación. Esto abre el editor para que pueda agregar un mensaje de confirmación.
```
git revert comit_id_here
```
#### Cómo crear una nueva sucursal en Git:
Por defecto, tienes una rama, la rama principal. Con este comando, puede crear una nueva rama. Git no cambiará a él automáticamente – tendrá que hacerlo manualmente con el siguiente comando.
```
git branch branch_name
```
#### Cómo cambiar a una sucursal recién creada en Git:
Cuando desee usar una rama diferente o una recién creada, puede usar este comando:
```
git checkout branch_name
```
#### Cómo enumerar sucursales en Git:
Puede ver todas las ramas creadas usando el git branch comando. Mostrará una lista de todas las ramas y marcará la rama actual con un asterisco y la resaltará en verde.
```
git branch
```
#### Cómo crear una sucursal en Git y cambiar a ella inmediatamente:
En un solo comando, puede crear y cambiar a una nueva rama de inmediato.
```
git checkout -b branch_name
```
#### Cómo eliminar una sucursal en Git:
Cuando haya terminado de trabajar con una rama y la haya fusionado, puede eliminarla utilizando el siguiente comando:
```
git branch -d branch_name
```
#### Cómo fusionar dos ramas en Git:
Para fusionar la historia de la sucursal en la que se encuentra actualmente con el branch_name, tendrá que utilizar el siguiente comando:
```
git merge branch_name
```
#### Cómo mostrar el registro de confirmación como un gráfico en Git:
Podemos usar --graph para que el registro de confirmación se muestre como un gráfico. También, --oneline limitará los mensajes de confirmación a una sola línea.
```
git log --graph --oneline
```
#### Cómo mostrar el registro de confirmación como un gráfico de todas las ramas en Git:
Hace lo mismo que el comando anterior, pero para todas las ramas.
```
git log --graph --oneline --all
```
#### Cómo abortar una fusión conflictiva en Git:
Si desea tirar una fusión y comenzar de nuevo, puede ejecutar el siguiente comando:
```
git merge --abort
```
#### Cómo agregar un repositorio remoto en Git
Este comando agrega un repositorio remoto a su repositorio local (solo reemplace https://repo_here con su URL de repositorio remoto).
```
git add remote https://repo_here
```
#### Cómo ver URL remotas en Git:
Puede ver todos los repositorios remotos para su repositorio local con este comando:
```
git remote -v
```
#### Cómo obtener más información sobre un repositorio remoto en Git:
Solo reemplace origin con el nombre del control remoto obtenido por ejecución del comando git remote -v.
```
git remote show origin
```
#### Cómo empujar los cambios a un repositorio remoto en Git:
Cuando todo su trabajo esté listo para guardarse en un repositorio remoto, puede presionar todos los cambios utilizando el siguiente comando:
```
git push
```
#### Cómo extraer cambios de un repositorio remoto en Git:
Si otros miembros del equipo están trabajando en su repositorio, puede recuperar los últimos cambios realizados en el repositorio remoto con el siguiente comando:
```
git pull
```
#### Cómo verificar las sucursales remotas que Git está rastreando:
Este comando muestra el nombre de todas las ramas remotas que Git está rastreando para el repositorio actual:
```
git branch -r
```
#### Cómo buscar cambios de repos remotos en Git:
Este comando descargará los cambios de un repositorio remoto, pero no realizará una fusión en su sucursal local (como git pull lo hace en su lugar).
```
git fetch
```
#### Cómo verificar el registro de confirmaciones actual de un repositorio remoto en Git
Comprometerse después de comprometerse, Git construye un registro. Puede averiguar el registro del repositorio remoto utilizando este comando:
```
git log origin/main
```
#### Cómo fusionar un repositorio remoto con su repositorio local en Git:
Si el repositorio remoto tiene cambios que desea fusionar con su local, este comando lo hará por usted:
```
git merge origin/main
```
#### Cómo obtener el contenido de las sucursales remotas en Git sin fusionarse automáticamente:
Esto le permite actualizar el control remoto sin fusionar ningún contenido en el sucursales locales. Puede llamar a git merge o git checkout para hacer la fusión.
```
git remote update
```
#### Cómo empujar una nueva rama a un repositorio remoto en Git:
Si desea empujar una rama a un repositorio remoto, puede usar el comando a continuación. Solo recuerde agregar -u para crear la rama aguas arriba:
```
git push -u origin branch_name
```
#### Cómo eliminar una sucursal remota en Git:
Si ya no necesita una rama remota, puede eliminarla utilizando el comando a continuación:
```
git push --delete origin branch_name_here
```
#### Cómo usar Git rebase:
Puede transferir el trabajo completado de una rama a otra usando git rebase.
```
git rebase branch_name_here
```
Git Rebase puede ponerse realmente desordenado si no lo haces correctamente. Antes de usar este comando, le sugiero que vuelva a leer la documentación oficial aquí

Cómo ejecutar rebase interactivamente en Git:
Puede ejecutar git rebase de forma interactiva utilizando la bandera -i. Abrirá el editor y presentará un conjunto de comandos que puede usar.
```
git rebase -i master
# p, pick = use commit
# r, reword = use commit, but edit the commit message
# e, edit = use commit, but stop for amending
# s, squash = use commit, but meld into previous commit
# f, fixup = like "squash", but discard this commit's log message
# x, exec = run command (the rest of the line) using shell
# d, drop = remove commit
```
#### Cómo forzar una solicitud push en Git:
Este comando forzará una solicitud push. Esto generalmente está bien para las ramas de solicitud de extracción porque nadie más debería haberlas clonado. Pero esto no es algo que quieras hacer con los repositorios públicos.
```
git push -f
```