# Pasos para instalar
1. Clonar el repositorio
2. Acceder a la carpeta del repositorio
3. Ejecutar el comando de instalacion para paquetes de npm
    - > ```npm install```

# Comandos/scripts para ejecutar el proyecto
``` json
{
    "scripts": {
        "start": "node .",
        "dev": "nodemon ."
    }
}
```
- > ```npm start```
- > ```npm run dev```

# Rutas definidas.
- GET 
    - {{hots}}/pdf/test

# Otros datos
- Puerto por defecto 2000.
- Host por defecto [http://localhost:2000](http://localhost:2000)


# Paqueteria
``` json
{
    "dependencies": {
        "express": "^4.17.3",
        "handlebars": "^4.7.7",
        "handlebars-pdf": "^1.0.1",
        "html-pdf-node": "^1.0.8"
    }
}
```