import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { fileURLToPath } from 'url';
import vueJsx from '@vitejs/plugin-vue-jsx'
import path from 'path';

const filename = fileURLToPath(import.meta.url);
const pathSegments = path.dirname(filename);

export default defineConfig({
    plugins: [vue(), vueJsx({})],
    resolve: {
        alias: {
            '@': path.resolve(pathSegments, './src'),
        },
        extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json'],
    },
    build: {
        lib: {
            entry: path.resolve(__dirname, 'src/index.js'),
            name: 'r2rkaVue3Treeselect',
            fileName: 'r2rka-vue3-treeselect',
        },
        commonjsOptions: {
            requireReturnsDefault: "preferred",
            transformMixedEsModules: true,
        },
        rollupOptions: {
            external: ['vue'],
            output: {
                // Provide global variables to use in the UMD build
                // Add external deps here
                globals: {
                    vue: 'Vue',
                },
            },
        },
    },
})
