import tailwindcss from '@tailwindcss/vite';
import { voidReact } from '@void/react/plugin';
import { resolve } from 'path';
import AutoImport from 'unplugin-auto-import/vite';
import IconsResolver from 'unplugin-icons/resolver';
import Icons from 'unplugin-icons/vite';
import { defineConfig } from 'vite';
import { voidPlugin } from 'void';

export default defineConfig({
    plugins: [
        tailwindcss(),
        voidPlugin(),
        voidReact(),
        AutoImport({
            resolvers: [
                IconsResolver({
                    prefix: 'Icon',
                    extension: 'jsx',
                    enabledCollections: ['mdi'],
                }),
            ],
            dts: resolve(__dirname, 'src/types/auto-imports.d.ts'),
        }),
        Icons({
            autoInstall: true,
            compiler: 'jsx',
        }),
    ],
    resolve: {
        tsconfigPaths: true,
    },
});
