# TodoApp Frontend

Aplicación web moderna para gestión de tareas con diseño elegante y responsivo.

## 🚀 Características

- **Diseño moderno**: UI elegante con efectos glass y gradientes
- **Totalmente responsivo**: Adaptable de 320px a 2000px+
- **Animaciones suaves**: Framer Motion para transiciones fluidas
- **Gestión de estado**: Context API + Custom Hooks
- **Notificaciones**: Toast notifications elegantes
- **Autenticación completa**: Login, registro y verificación por email
- **CRUD completo**: Tareas y categorías con filtros

## 🛠️ Tecnologías

- **React 18** con Vite
- **React Router DOM** para navegación
- **Framer Motion** para animaciones
- **Axios** para peticiones HTTP
- **React Hot Toast** para notificaciones
- **Heroicons** para iconografía
- **Date-fns** para manejo de fechas
- **CSS3** con variables personalizadas

## 📋 Requisitos

- Node.js 16+
- Backend de TodoApp ejecutándose

## 🛠️ Instalación

1. Clonar el repositorio
```bash
git clone <url-del-repo>
cd todo-frontend
```

2. Instalar dependencias
```bash
npm install
```

3. Configurar variables de entorno
```bash
cp .env.example .env
```

Editar `.env`:
```env
VITE_API_URL=http://localhost:5000/api
```

4. Iniciar la aplicación
```bash
# Desarrollo
npm run dev

# Build para producción
npm run build

# Preview del build
npm run preview
```

## 🎨 Características de Diseño

### Responsividad
- **Mobile First**: Optimizado para dispositivos móviles
- **Breakpoints**: 320px, 640px, 768px, 1024px, 1280px, 1536px
- **Grid adaptativo**: Layouts que se ajustan automáticamente
- **Navegación móvil**: Menú hamburguesa en pantallas pequeñas

### Efectos Visuales
- **Glass Morphism**: Efectos de cristal con backdrop-filter
- **Gradientes dinámicos**: Fondos con transiciones suaves
- **Animaciones**: Entrada, salida y hover effects
- **Micro-interacciones**: Feedback visual en cada acción

### Paleta de Colores
```css
/* Primarios */
--primary-500: #3b82f6;
--primary-600: #2563eb;
--primary-700: #1d4ed8;

/* Grises */
--gray-50: #f9fafb;
--gray-900: #111827;

/* Estados */
--success-500: #10b981;
--error-500: #ef4444;
--warning-500: #f59e0b;
```

## 📱 Páginas y Funcionalidades

### Autenticación
- **Login**: Formulario con validación y estados de carga
- **Registro**: Creación de cuenta con confirmación por email
- **Verificación**: Página de confirmación de email

### Dashboard
- **Estadísticas**: Resumen de tareas totales, completadas y pendientes
- **Filtros**: Ver todas, pendientes o completadas
- **CRUD de tareas**: Crear, editar, eliminar y marcar como completadas
- **Categorización**: Asignar categorías a las tareas
- **Fechas límite**: Gestión de vencimientos

### Categorías
- **Gestión completa**: CRUD de categorías
- **Colores personalizados**: Selector de color avanzado
- **Vista en grid**: Diseño de tarjetas elegante

## 🏗️ Estructura del Proyecto

```
src/
├── components/      # Componentes reutilizables
│   ├── Button.jsx
│   ├── Input.jsx
│   ├── Card.jsx
│   ├── Modal.jsx
│   ├── Navbar.jsx
│   └── ProtectedRoute.jsx
├── pages/          # Páginas principales
│   ├── Login.jsx
│   ├── Register.jsx
│   ├── Dashboard.jsx
│   ├── Categories.jsx
│   └── VerifyEmail.jsx
├── services/       # Servicios API
│   ├── api.js
│   ├── authService.js
│   ├── taskService.js
│   └── categoryService.js
├── hooks/          # Custom hooks
│   ├── useTasks.js
│   └── useCategories.js
├── context/        # Context providers
│   └── AuthContext.jsx
├── utils/          # Utilidades
└── App.jsx         # Componente principal
```

## 🔧 Componentes Principales

### Button
Botón reutilizable con variantes y estados de carga
```jsx
<Button variant="primary" size="lg" loading={isLoading}>
  Guardar
</Button>
```

### Input
Campo de entrada con validación y estilos consistentes
```jsx
<Input
  label="Email"
  type="email"
  error={errors.email}
  placeholder="tu@email.com"
/>
```

### Card
Contenedor con efecto glass y animaciones
```jsx
<Card hover={true} className="p-6">
  Contenido
</Card>
```

### Modal
Modal responsivo con animaciones de entrada/salida
```jsx
<Modal isOpen={isOpen} onClose={handleClose} title="Título">
  Contenido del modal
</Modal>
```

## 🎯 Hooks Personalizados

### useTasks
Gestión completa del estado de tareas
```jsx
const { tasks, loading, createTask, updateTask, deleteTask, toggleTask } = useTasks();
```

### useCategories
Gestión del estado de categorías
```jsx
const { categories, loading, createCategory, updateCategory, deleteCategory } = useCategories();
```

## 🚀 Despliegue

### Netlify
1. Conectar repositorio de GitHub
2. Configurar build command: `npm run build`
3. Configurar publish directory: `dist`
4. Configurar variables de entorno
5. Deploy automático

### Vercel
1. Importar proyecto desde GitHub
2. Configurar variables de entorno
3. Deploy automático

### Build Manual
```bash
npm run build
# Los archivos se generan en la carpeta 'dist'
```

## 📱 Responsive Breakpoints

| Dispositivo | Ancho | Características |
|-------------|-------|-----------------|
| Mobile | 320px - 639px | Stack vertical, menú hamburguesa |
| Tablet | 640px - 1023px | Grid 2 columnas, navegación compacta |
| Desktop | 1024px+ | Grid completo, navegación expandida |

## 🎨 Guía de Estilos

### Espaciado
- Padding: 4px, 8px, 12px, 16px, 24px, 32px
- Margin: Mismo sistema de espaciado
- Gap: 4px, 8px, 12px, 16px, 24px

### Tipografía
- Font family: Inter
- Tamaños: 12px, 14px, 16px, 18px, 24px, 32px, 48px
- Pesos: 300, 400, 500, 600, 700

### Bordes
- Border radius: 6px, 8px, 12px, 16px
- Border width: 1px, 2px

## 📄 Licencia

MIT License