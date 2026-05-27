# Decisiones Técnicas

## Uso de JavaScript Vanilla

Se decidió evitar frameworks como React o Vue debido al tamaño y alcance del proyecto.

Ventajas:
- menor complejidad
- mayor control
- menor tiempo de configuración
- aprendizaje directo del DOM

---

## Recomendación basada en reglas

Inicialmente se consideró utilizar IA generativa.

Posteriormente se migró a reglas explícitas mediante palabras clave para:
- mejorar control
- evitar respuestas inconsistentes
- facilitar validación
- simplificar pruebas

---

## Uso de disponibilidad dinámica

Las fechas y horarios se generan automáticamente para evitar mantenimiento manual del sistema.

---

## Uso de API REST externa

Se utilizó `retoolapi.dev` para evitar construir backend propio durante la fase inicial del proyecto.

Esto permitió enfocarse en:
- experiencia de usuario
- lógica del sistema
- reglas de negocio

---

## Diseño visual

Se adoptó una interfaz médica moderna basada en:
- colores claros
- azul clínico
- tarjetas
- sombras suaves
- componentes minimalistas

---

## Arquitectura frontend

Se centralizó la lógica en el cliente para:
- reducir complejidad
- acelerar iteración
- facilitar pruebas académicas
