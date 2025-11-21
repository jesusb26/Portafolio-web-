# Portafolio Web - Abel Ayala

Portafolio profesional personalizado desarrollado con **HTML, CSS y JavaScript puro**, sin frameworks ni librerías externas.

## 📋 Contenido del Portafolio

El portafolio incluye las siguientes secciones:

1. **Inicio (Hero)**: Presentación con nombre, profesión y descripción breve
2. **Sobre Mí**: Información personal detallada con foto de perfil
3. **Experiencia**: Timeline con historial laboral y académico
4. **Habilidades**: Habilidades técnicas con barras de progreso y habilidades blandas
5. **Educación**: Formación académica universitaria
6. **Proyectos**: Sección preparada para mostrar proyectos futuros
7. **Contacto**: Formulario funcional con validación JavaScript

## 🎨 Características

- ✅ Diseño moderno y profesional
- ✅ Totalmente responsive (móvil, tablet, desktop)
- ✅ Navegación suave entre secciones
- ✅ Menú hamburguesa para dispositivos móviles
- ✅ Animaciones al hacer scroll
- ✅ Formulario de contacto con validación
- ✅ Estructura semántica HTML5
- ✅ Paleta de colores profesional
- ✅ Sin dependencias externas

## 📁 Estructura de Archivos

```
portafolio-abel/
│
├── index.html          # Estructura HTML del portafolio
├── style.css           # Estilos CSS completos
├── script.js           # Funcionalidad JavaScript
├── README.md           # Este archivo
│
└── images/
    └── profile.png     # Foto de perfil
```

## 🚀 Cómo Probar el Portafolio Localmente

### Opción 1: Abrir Directamente en el Navegador

1. Descomprime el archivo `portafolio-abel.zip` en tu computadora
2. Navega hasta la carpeta `portafolio-abel`
3. Haz doble clic en el archivo `index.html`
4. El portafolio se abrirá automáticamente en tu navegador predeterminado

### Opción 2: Usar un Servidor Local (Recomendado)

Si tienes **Python** instalado:

```bash
# Navega a la carpeta del portafolio
cd portafolio-abel

# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

Luego abre tu navegador y visita: `http://localhost:8000`

Si tienes **Node.js** instalado:

```bash
# Instalar http-server globalmente (solo una vez)
npm install -g http-server

# Navega a la carpeta del portafolio
cd portafolio-abel

# Iniciar servidor
http-server -p 8000
```

Luego abre tu navegador y visita: `http://localhost:8000`

Si usas **Visual Studio Code**:

1. Instala la extensión "Live Server"
2. Abre la carpeta `portafolio-abel` en VS Code
3. Haz clic derecho en `index.html`
4. Selecciona "Open with Live Server"

## 🎯 Personalización

### Cambiar Información Personal

Edita el archivo `index.html` y busca las secciones correspondientes para actualizar:
- Nombre y profesión
- Descripción personal
- Información de contacto
- Experiencia laboral
- Habilidades
- Educación

### Modificar Colores

Edita el archivo `style.css` y modifica las variables CSS al inicio del archivo:

```css
:root {
    --color-primary: #2563eb;
    --color-secondary: #1e40af;
    --color-accent: #3b82f6;
    /* ... más colores */
}
```

### Agregar Proyectos

En el archivo `index.html`, busca la sección `<section id="proyectos">` y agrega nuevas tarjetas de proyecto siguiendo la estructura existente.

## 📱 Compatibilidad

El portafolio es compatible con:
- ✅ Chrome (última versión)
- ✅ Firefox (última versión)
- ✅ Safari (última versión)
- ✅ Edge (última versión)
- ✅ Dispositivos móviles (iOS y Android)

## 🔧 Tecnologías Utilizadas

- **HTML5**: Estructura semántica
- **CSS3**: Estilos y animaciones
- **JavaScript (ES6+)**: Interactividad y funcionalidad

## 📝 Notas Importantes

- El formulario de contacto actualmente **simula** el envío de mensajes. Para hacerlo funcional en producción, necesitarás integrar un servicio backend o usar servicios como FormSpree, EmailJS, o Netlify Forms.
- La foto de perfil está incluida en la carpeta `images/`. Puedes reemplazarla con tu propia foto manteniendo el mismo nombre o actualizando la ruta en el HTML.

## 🌐 Despliegue en Producción

Para publicar tu portafolio en internet, puedes usar servicios gratuitos como:

- **GitHub Pages**: Ideal para sitios estáticos
- **Netlify**: Despliegue automático desde repositorio Git
- **Vercel**: Rápido y fácil de configurar
- **Surge**: Simple para sitios estáticos

## 📧 Contacto

**Abel Ayala**
- Email: abelstivenal@ufps.edu.co
- Teléfono: +57 4385478485​4
- Ubicación: Cúcuta, Colombia

---

**Desarrollado con ❤️ usando HTML, CSS y JavaScript puro**
