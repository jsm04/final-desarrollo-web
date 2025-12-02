# Final - Desarrollo Web (Quiz)

## Breve descripción

Aplicación tipo quiz desarrollada con Next.js (App Router) y TypeScript. Permite presentar preguntas de opción múltiple, controlar el tiempo por pregunta y mostrar resultados finales con explicación. Ideal para evaluar conocimientos rápidos en interfaz limpia con Tailwind CSS.

## Tecnologías clave

- Framework: Next.js (app directory) — ver [app/layout.tsx](app/layout.tsx) y [app/page.tsx](app/page.tsx)
- Lenguaje: TypeScript — configuración en [tsconfig.json](tsconfig.json)
- Estilos: Tailwind CSS — configuración en [postcss.config.mjs](postcss.config.mjs) y [app/globals.css](app/globals.css)
- Estado global: Context API con proveedor [`QuizProvider`](components/QuizProvider.tsx)
- Componentes principales:
  - [`QuizController`](components/QuizController.tsx) — lógica del quiz y temporizador
  - [`Temporizador`](components/Temporizador.tsx) — cuenta regresiva por pregunta
  - [`TarjetaPregunta`](components/TarjetaPregunta.tsx) — renderiza cada pregunta y sus opciones
  - [`OpcionRespuesta`](components/OpcionRespuesta.tsx) — componente de opción
  - [`ResultadosFinales`](components/ResultadosFinales.tsx) — pantalla de resultados

## Estructura relevante

- Rutas: [app/quiz/page.tsx](app/quiz/page.tsx) (quiz) y [app/resultados/page.tsx](app/resultados/page.tsx) (resultados)
- Datos: preguntas en [data/preguntas.json](data/preguntas.json) y tipo [`Pregunta`](data/types.ts)
- Punto de entrada: [app/page.tsx](app/page.tsx)

## Cómo ejecutar (reclutador)

Requisitos: Node.js 20+ (Next.js v16 requiere Node moderno). Se recomienda usar pnpm (hay pnpm-lock.yaml).

1. Instalar dependencias:

```bash
pnpm install
```

2. Ejecutar en desarrollo:

```bash
pnpm dev
```

Abre <http://localhost:3000>

3. Construir para producción:

```bash
pnpm build
pnpm start
```

## Qué buscar al revisar el código

-------------------------------

- Organización por componentes en [components/](components) y separación de datos en [data/](data).
- Uso de TypeScript con tipos explícitos (`data/types.ts`) y React Context (`QuizProvider`) para compartir resultados.
- Gestión del flujo del quiz en [`QuizController`](components/QuizController.tsx): selección, avance, puntaje y navegación a resultados.
- Extensibilidad: agregar/editar preguntas en [data/preguntas.json](data/preguntas.json). Para cambiar la duración por pregunta ver [`Temporizador`](components/Temporizador.tsx) y su uso en [`QuizController`](components/QuizController.tsx).
