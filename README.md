- Sistema de Gestión CLI – Node.js

Sistema de gestión desarrollado en JavaScript con Node.js, orientado a consola (CLI), que permite administrar luchadores y empresas mediante programación orientada a objetos y persistencia de datos en archivos JSON.

Este proyecto fue creado como práctica para reforzar conceptos de POO, asincronía y manejo de archivos sin depender de frameworks.

                  Características

Registro de luchadores y empresas

Listado de datos almacenados

Filtro de luchadores por empresa

Eliminación de registros con confirmación

Persistencia de datos en archivos JSON

Arquitectura modular (Models / Services)

Aplicación ejecutada desde consola (CLI)

                  Conceptos aplicados

Programación Orientada a Objetos (POO)

Clases

Encapsulación

Atributos privados

Manejo de asincronía con async / await

Uso del módulo fs.promises

Serialización de objetos con métodos toJSON()

Callbacks para ejecución de funciones

Separación de responsabilidades (modelo y lógica de negocio)

                  Tecnologías utilizadas

JavaScript (ES6+)

Node.js

Módulo nativo fs

JSON para persistencia de datos

                  Estructura del proyecto
📁 Estructura del proyecto
├── Models
│   ├── Empresa.js
│   └── Luchador.js
├── Service
│   └── Servicio.js
├── RegistroEmpresas.json
├── RegistroLuchadores.json
├── index.js
└── README.md

⚙️ Instalación y ejecución

Clonar el repositorio

git clone https://github.com/EnriBr14/Sistema-de-gesti-n-en-JavaScript-Node.js-


Entrar al proyecto

cd Sistema-de-gesti-n-en-JavaScript-Node.js-


Ejecutar el proyecto

node index.js

                  Ejemplos de uso
Mostrar luchadores o empresas registradas
Servicio.peticion(motrarDatos, 1); // Luchadores
Servicio.peticion(motrarDatos, 2); // Empresas

Mostrar luchadores por empresa
Servicio.peticion(luchadorPorEmpresa, "AAA");

Eliminar un registro
Servicio.eliminarDatos("WWE", true);
Servicio.eliminarDatos("Atlantis", true);

                         Objetivo del proyecto

El objetivo principal de este proyecto es demostrar habilidades en JavaScript y Node.js, aplicando buenas prácticas de programación, manejo de datos persistentes y organización de código en un entorno sin frameworks.

                               Autor

Enrique Br
Proyecto personal para aprendizaje y portafolio profesional.

                             Notas finales

Este proyecto puede seguir evolucionando con:

Menú interactivo (Inquirer)

Validaciones de entrada

Base de datos (MongoDB o SQLite)

Tests unitarios