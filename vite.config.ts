import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import path from "path"

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    // src的根目录快捷键设置
    alias: {
      "@": path.resolve(__dirname, "./src")
    }
  },
  build: {
    /** 消除打包大小超过 500kb 警告 */
    chunkSizeWarningLimit: 2000,
    /** Vite 2.6.x 以上需要配置 minify: "terser", terserOptions 才能生效 */
    minify: "terser",
    /** 在打包代码时移除 console.log、debugger 和 注释 */
    terserOptions: {
      compress: {
        drop_console: false,
        drop_debugger: true,
        pure_funcs: ["console.log"]
      },
      format: {
        /** 删除注释 */
        comments: false
      }
    },
    /** 打包后静态资源目录 */
    assetsDir: "static"
  },
  plugins: [vue()]
})
