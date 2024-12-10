# React + TypeScript + Vite

# useState es un hook que nos permite manejar el estado de un cliente

# useEffect es un hook que nos permite manejar el ciclo de un vida de componente, esto se debería manejar desde el componente padre para consumir algun API ES PARA USAR EXTERNAMENTE DE TU COMPONENTE

# Context API es lo que se llama un canal de comunicación entre componentes que se maneja desde el componente padre es algo que engloba para el uso de toda la APLICACION QUE SE QUIERE COMPARTIR

# ¿Cuando se usa context API?
#Realmente cuando son componentes HERMANOS 

# Custom Hooks nos sirve para manejar la lógica de un componente de forma independiente, entre comunicación de componentes puede ser un padre o un hijo.

# Composition Pattern es un patrón de diseño que nos permite componer componentes de manera independiente y reutilizable.

# UseRef es un hook que nos permite manejar el DOM de manera directa

# UseMemo es un hook que nos permite memorizar un valor, esto es útil para evitar recalcular el mismo valor en componentes que se repiten

# UseCallback es un hook que nos permite memorizar una función

# Portals es un portal a otra dimension, lo que va a pasar vamos a tener la capacidad de renderizar lo que querramos en cualquier lugar de la aplicación

# Los Portals en React son una característica que te permite renderizar elementos hijos en un nodo del DOM que existe fuera de la jerarquía del componente padre.
Aquí te explico los puntos principales:
Uso común:
Modales
Tooltips
Menús flotantes
Widgets que necesitan estar fuera del flujo normal del DOM


- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
