# react-landing-test

## Installation

## Install node_modules

$ yarn

## Start dev server

$ yarn dev

## FAQ

Metodo de import y export
En este projecto estamos importando desde los directorios raices. Para hacer eso, creamos subcarpetas que contienen una funcionalidad especifica dentro de un archivo index.js (por eso solo hay muchos index.js en muchas subcarpetas) y exportamos por defecto esa funcionalidad. Despues, en la carpeta raiz de esas funcionalidades (por ej: la carpeta routes), importamos de todos los subdirectorios y los exportamos en el mismo archivo. Asi, podemos hacer imports multiples desde un unico directorio

# Tarea

Crear 3 rutas nuevas, llenarlas con lo que sea y agregarlas al router con la implementacion que vimos

# JSON

Un JSON es la representacion de un objeto (JSON = Java Script Object Notation)
Es un conjunto de clave/valor encerrados entre {}. Los valores pueden ser cualquier cosa, desde un texto (String), un numero (int), hasta otro JSON.
Ej: {
"clave1": "valor1",
"clave2": 2,
"clave3": {
"otro": "json"
}
}
