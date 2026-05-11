# Especificación de Requisitos del Software (SRS) - Proyecto CV Portafolio

**Estudiante:** Elvia Stefania Heredia Leon
**Carrera:** Ingeniería en Software - 3er Semestre (Curso SOF-S-MA-3-2)
**Docente:** Ing. Reyes Wagnio Manuel Fabricio
**Institución:** Universidad de Guayaquil - Facultad de Ciencias Matemáticas y Físicas

---

## 1. Metodología de Desarrollo (Paso a Paso)

Este proyecto se fundamenta en un proceso de desarrollo iterativo, utilizando herramientas modernas para la creación de software educativo y profesional.

1.  **Análisis de Necesidades:** Se identificó el requisito de centralizar proyectos de diversas áreas: Gestión de Inventarios (Java), Videojuegos Educativos (GDevelop) y Desarrollo Web Front-end.
2.  **Configuración del Entorno de Ingeniería:** Se utilizó **Visual Studio Code** como entorno de desarrollo integrado (IDE) principal y **Git** para el control de versiones local.
3.  **Desarrollo de Interfaz y Estilos:** Implementación de un sistema de diseño responsivo mediante **CSS3**, utilizando variables globales para el manejo de la paleta de colores y el modo oscuro.
4.  **Programación de Lógica y Comportamiento:** Desarrollo de scripts en **JavaScript** para gestionar el carrusel de proyectos, asegurando que las imágenes de los sistemas (como el de inventario) roten cada 3 segundos.
5.  **Optimización con Inteligencia Artificial:** Se empleó IA como asistente técnico para la depuración de estilos (CSS) y la refactorización de funciones complejas en JavaScript, garantizando un código limpio y eficiente.
6.  **Pruebas y Despliegue (CI/CD):** Vinculación del repositorio de **GitHub** (Elvibu07) con **Netlify** para el despliegue automático del sitio web mediante integración continua.

---

## 2. Requisitos Funcionales (RF)

| ID | Requisito | Descripción Técnica |
| :--- | :--- | :--- |
| **RF-01** | **Gestión de Formulario** | Captura de mensajes mediante el atributo `data-netlify="true"`, almacenando datos de contacto en el panel de control de Netlify. |
| **RF-02** | **Exhibición Multimedia** | Carrusel interactivo que permite visualizar sliders internos de proyectos como "Batalla del Pichincha" y "Duelo Político". |
| **RF-03** | **Descarga de Documentación** | Acceso directo a archivos PDF de respaldo técnico y currículum profesional alojados en la carpeta `/docs/`. |
| **RF-04** | **Navegación Fluida** | Implementación de *Smooth Scroll* mediante JavaScript para una experiencia de usuario sin recargas de página. |

---

## 3. Requisitos No Funcionales (RNF)

* **RNF-01 (Seguridad):** Cifrado de datos en tránsito mediante protocolos HTTPS y certificados SSL gestionados por Netlify.
* **RNF-02 (Rendimiento):** Tiempo de carga optimizado para redes locales (200Mbps) y dispositivos móviles mediante la optimización de recursos estáticos.
* **RNF-03 (Usabilidad):** Interfaz intuitiva con alto contraste y tipografía legible ("Inter") para facilitar la lectura técnica.

---

## 4. Arquitectura de Sistemas
El proyecto se basa en una arquitectura de sitio estático que consume servicios de terceros (Netlify) para la persistencia de mensajes del formulario, eliminando la necesidad de un servidor de base de datos SQL tradicional para esta función específica.

---

## 5. Glosario Técnico
* **Netlify Forms:** API nativa para el manejo de envíos de formularios asíncronos.
* **Git Commit/Push:** Flujo de trabajo para el registro y envío de cambios al repositorio remoto en GitHub.