import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = string
declare module "C:/xampp/htdocs/zhaolinlau.github.io/node_modules/.pnpm/nuxt@3.6.5_@types+node@20.4.5/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}