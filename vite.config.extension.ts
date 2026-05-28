import { defineConfig } from 'vite'
import path from 'node:path' // Asegúrate de importar path si lo usas

export default defineConfig({
    // Quita toda la sección de 'build' que tenías, 
    // o al menos limpia el rollupOptions para aplicaciones web.
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        }
    }
})