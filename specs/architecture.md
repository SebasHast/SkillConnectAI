# Arquitectura del Sistema

## Arquitectura General

Usuario
↓
Interfaz Web
↓
Lógica de Recomendación
↓
Sistema de Disponibilidad
↓
API REST

---

## Frontend

Tecnologías:
- HTML5
- CSS3
- JavaScript Vanilla

Responsabilidades:
- renderizar interfaz
- capturar formularios
- mostrar citas
- actualizar disponibilidad
- filtrar resultados

---

## Motor de recomendación

El sistema utiliza una arquitectura basada en reglas.

Proceso:

Diagnóstico
↓
Normalización de texto
↓
Comparación de palabras clave
↓
Especialidad sugerida

Ventajas:
- explicabilidad
- control
- facilidad de depuración

---

## Disponibilidad médica

Cada especialidad contiene:
- médicos
- fechas disponibles
- horarios automáticos

La disponibilidad se genera dinámicamente usando JavaScript.

---

## Persistencia

La persistencia se realiza mediante:
- API REST externa

Operaciones:
- GET
- POST
- DELETE

---

## Patrones utilizados

- Event Driven Programming
- Client Side Rendering
- SPA ligera
- Rule Based Recommendation
