# Instrucciones para Subir el Código a GitHub

## Configuración Completada ✅

Ya actualicé los archivos de configuración con tu repositorio:
- **Usuario**: maurocastillorondinara
- **Repositorio**: taller-rondinara
- **URL deployment**: https://maurocastillorondinara.github.io/taller-rondinara

---

## Pasos para Subir el Código

### 1. Inicializar Git (si no está inicializado)

```bash
cd /home/pipo/Documents/taller/taller-rondinara-spa
git init
```

### 2. Agregar todos los archivos

```bash
git add .
```

### 3. Hacer el primer commit

```bash
git commit -m "Initial commit: Taller Rondinara SPA"
```

### 4. Conectar con tu repositorio de GitHub

```bash
git remote add origin https://github.com/maurocastillorondinara/taller-rondinara.git
git branch -M main
```

### 5. Subir el código a GitHub

```bash
git push -u origin main
```

Si te pide autenticación, usa tu token personal de GitHub (no tu contraseña).

---

## Deployar a GitHub Pages

Una vez que el código esté en GitHub:

### 6. Deployar el sitio

```bash
npm run deploy
```

Este comando:
- Construirá tu aplicación para producción
- La subirá a la rama `gh-pages`
- Tu sitio estará disponible en: https://maurocastillorondinara.github.io/taller-rondinara

### 7. Configurar GitHub Pages (solo la primera vez)

1. Ve a tu repositorio: https://github.com/maurocastillorondinara/taller-rondinara
2. Click en **Settings** (Configuración)
3. En el menú izquierdo, click en **Pages**
4. En "Branch" (Rama), selecciona: **gh-pages** y carpeta **/ (root)**
5. Click en **Save** (Guardar)

Tu sitio estará listo en unos minutos! 🚀

---

## Comandos Completos (Copia y Pega)

```bash
# Paso 1-5: Subir código inicial
cd /home/pipo/Documents/taller/taller-rondinara-spa
git init
git add .
git commit -m "Initial commit: Taller Rondinara SPA"
git remote add origin https://github.com/maurocastillorondinara/taller-rondinara.git
git branch -M main
git push -u origin main

# Paso 6: Deployar a GitHub Pages
npm run deploy
```

---

## Actualizaciones Futuras

Cuando hagas cambios en el futuro:

```bash
git add .
git commit -m "Descripción de los cambios"
git push
npm run deploy
```

---

## Verificación

Después de deployar, verifica:
- Código en GitHub: https://github.com/maurocastillorondinara/taller-rondinara
- Sitio web: https://maurocastillorondinara.github.io/taller-rondinara
