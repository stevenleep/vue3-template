import { defineConfig, splitVendorChunkPlugin } from "vite";
import viteCompression from "vite-plugin-compression";
import vue from "@vitejs/plugin-vue";
import eslintPlugin from "vite-plugin-eslint";
import Icons from "unplugin-icons/vite";
import IconsResolver from "unplugin-icons/resolver";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import progress from "vite-plugin-progress";
import vueJSX from "@vitejs/plugin-vue-jsx";
import path from "path";

import UnoCSS from "unocss/vite";
import { presetAttributify, presetUno } from "unocss";

import Inspect from "vite-plugin-inspect";

// https://github.com/vitejs/vite/tree/main/packages/plugin-legacy#polyfill-specifiers
// import legacy from "@vitejs/plugin-legacy";

// the environment variable of DEV that will only be used for the time being
// It will be used to control Mockjs and SourceMap switches
// const devEnv = loadEnv("development", process.cwd());

// https://vitejs.dev/config/
export default defineConfig({
  // Although the documentation is recommended ./ for development environment,
  // it is convenient for migration and local testing, and production is switched to this path
  // ref: https://vitejs.bootcss.com/config/#base
  base: "./",

  // https://cn.vitejs.dev/config/build-options.html#build-sourcemap
  build: {
    /**
     * XXX: About sourcemap
     *
     * It is recommended to open in the real generation environment,
     * deploy the sourceMap in different services, and access through the internal network
     *
     * Can be used for: wrong positioning in the monitoring system
     */
    sourcemap: false,

    cssCodeSplit: true,

    rollupOptions: {
      output: {
        manualChunks: {
          // https://vitejs.dev/guide/build.html#splitting-vendor-chunks
          vue: ["vue", "vue-router"],
          element: ["element-plus"],
          pinia: ["pinia"],
        },
      },
    },
  },

  resolve: {
    alias: {
      "~/": `${path.resolve(__dirname, "src")}/`,
      "@": "/src",
      "@components": "/src/components",
      "@store": "/src/store",
      "@services": "/src/services",
      "@http": "/src/services/http",
      "@utils": "/src/utils",
      "@hooks": "/src/hooks",
      "@router": "/src/router",
      "@config": "/src/config",
    },
  },

  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @use "@/assets/styles/element-theme.scss" as *;
        `,
      },
    },
  },

  plugins: [
    vue(),

    // https://www.npmjs.com/package/@vitejs/plugin-vue-jsx
    vueJSX(),

    // ref: https://cn.vitejs.dev/guide/build.html#chunking-strategy
    splitVendorChunkPlugin(),

    AutoImport({
      resolvers: [
        ElementPlusResolver({
          importStyle: "sass",
          directives: true,
        }),
        IconsResolver({
          prefix: "Icon",
        }),
      ],
    }),
    // https://github.com/antfu/unplugin-vue-components
    Components({
      dts: true,
      resolvers: [
        IconsResolver(),
        ElementPlusResolver({
          importStyle: "sass",
          directives: true,
        }),
      ],
      dirs: ["src/components"],
      extensions: ["vue"],
      deep: true,
      exclude: [/[\\/]node_modules[\\/]/, /[\\/]\.git[\\/]/],
      types: [
        {
          from: "vue-router",
          names: ["RouterLink", "RouterView"],
        },
      ],
    }),

    Icons({ autoInstall: true }),

    eslintPlugin(),

    UnoCSS({
      presets: [presetUno(), presetAttributify()],
    }),

    // legacy options
    // ref: https://github.com/vitejs/vite/tree/main/packages/plugin-legacy#options
    // legacy({
    //   targets: ["defaults", "not IE 11"],
    // }),

    viteCompression(),

    progress(),

    Inspect(),
  ],
});
