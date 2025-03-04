# Guía de Estudio: Desarrollo Ágil y Herramientas Relacionadas

## 1. Historias de Usuarios
Definición
Las historias de usuario son descripciones breves y simples de una funcionalidad deseada desde la perspectiva del usuario final.
### Características
•	Deben ser claras y concisas.
•	Se enfocan en el valor para el usuario.
•	Siguen el formato: "Como [tipo de usuario], quiero [una acción] para [un beneficio]".
### Ejemplo
"Como administrador, quiero poder filtrar los usuarios por rol para gestionar permisos más rápidamente."
Importancia en el Desarrollo Ágil
•	Facilita la comunicación entre el equipo y los interesados.
•	Permite planificar incrementos funcionales en el software.
## 2. Importancia del Tablero (Trello)
Definición:

Trello es una herramienta de gestión de proyectos basada en tableros, listas y tarjetas, utilizada para organizar tareas y flujos de trabajo de manera visual.
Beneficios

- 	Facilita la organización y seguimiento de tareas.
- Permite la colaboración en equipo de forma efectiva.
- Brinda una visión clara del estado de un proyecto.
- Se adapta a diferentes metodologías ágiles como Scrum y Kanban.
## 3. Scrum
Definición:
Scrum es un marco de trabajo ágil utilizado para la gestión y desarrollo de software mediante iteraciones llamadas sprints.
### Roles en Scrum
- Product Owner: Define los requisitos y prioriza el backlog del producto.
- Scrum Master: Facilita el proceso y elimina impedimentos.
- Equipo de Desarrollo: Implementa las funcionalidades.
### Eventos en Scrum
1.	Sprint Planning: Planificación del trabajo a realizar en un sprint.
2.	Daily Scrum: Reunión diaria para sincronizar actividades.
3.	Sprint Review: Evaluación del trabajo terminado con los interesados.
4.	Sprint Retrospective: Reflexión sobre el proceso para mejorar futuras iteraciones.
Beneficios de Scrum
•	Flexibilidad ante cambios en los requerimientos.
•	Entrega continua de valor.
•	Mejora la colaboración entre los equipos.
## 4. Comandos de GitHub
Configuración inicial
```bash
# Configurar el usuario

git config --global user.name "Tu Nombre"
git config --global user.email "tuemail@example.com"
```
### Flujo básico de Git
```bash
# Inicializar un repositorio
git init

# Clonar un repositorio
git clone URL_DEL_REPOSITORIO

# Agregar archivos al área de preparación
git add .

# Confirmar cambios
git commit -m "Mensaje del commit"

# Enviar cambios al repositorio remoto
git push origin main

# Descargar cambios del repositorio remoto
git pull origin main
```
### Ramas en Git -->
```bash
# Crear una nueva rama
git branch nombre-rama

# Cambiar de rama
git checkout nombre-rama

# Fusionar una rama a la principal
git merge nombre-rama
Branch by Repository
```

1.	main (project): Rama principal del proyecto, donde se mantiene el código estable.
2.	develop (project): Rama de desarrollo, donde se integran nuevas funcionalidades antes de pasar a producción.
3.	qa (project): Rama de calidad, utilizada para pruebas antes de fusionar cambios a la rama principal.
4.	feature/document: Rama para documentaciones específicas del proyecto. 
o	minutes
o	video
o	diagram
o	xyz
5.	feature/{HU-x}: Ramas para historias de usuario específicas. 
o	HU-2025-01
o	HU-2025-02
o	HU-2025-03
6.	feature/activity: Ramas para actividades organizadas por semana. 
o	01-week 
	ev1-cloud
	ev2-xyz
o	03-week 
	ev1-micro
### Resolución de Conflictos
```bash
# Ver el estado del conflicto
git status

# Editar los archivos para resolver el conflicto

# Agregar los archivos resueltos
git add .

# Confirmar la resolución del conflicto
git commit -m "Conflicto resuelto"
```

## 5. Mockups
Definición:

Un mockup es una representación visual de un diseño que muestra la apariencia y disposición de los elementos en una interfaz.
Características
- Permite visualizar el diseño antes de su desarrollo.
- Puede ser estático o interactivo.
- Facilita la comunicación entre diseñadores y desarrolladores.
#### Importancia
- Ayuda a detectar posibles problemas en la usabilidad.
- Permite recibir retroalimentación temprana.
- Optimiza el proceso de desarrollo al definir 
la estructura antes de la implementación.

Esta guía proporciona una visión general de los conceptos clave en metodologías ágiles y herramientas de gestión de código fuente.
