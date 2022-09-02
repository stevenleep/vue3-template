import { defineConfig, splitVendorChunkPlugin } from "vite";
import vue from "@vitejs/plugin-vue";
import eslintPlugin from "vite-plugin-eslint";

import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";

// https://github.com/vitejs/vite/tree/main/packages/plugin-legacy#polyfill-specifiers
import legacy from "@vitejs/plugin-legacy";

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
  },

  resolve: {
    alias: {
      "@/*": "/src/*",
      "@components": "/src/components",
      "@store": "/src/store",
      "@services": "/src/services",
      "@http": "/src/services/http",
      "@utils": "/src/utils",
    },
  },

  plugins: [
    vue(),

    // ref: https://cn.vitejs.dev/guide/build.html#chunking-strategy
    splitVendorChunkPlugin(),

    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    // https://github.com/antfu/unplugin-vue-components
    Components({
      dts: true,
      resolvers: [ElementPlusResolver()],
      dirs: ["src/components"],
      extensions: ["vue"],
      deep: true,
      exclude: [/[\\/]node_modules[\\/]/, /[\\/]\.git[\\/]/],
    }),

    eslintPlugin(),

    // legacy options
    // ref: https://github.com/vitejs/vite/tree/main/packages/plugin-legacy#options
    legacy({
      targets: ["defaults", "not IE 11"],
    }),
  ],
});
