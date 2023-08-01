import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "default"
declare module "C:/xampp/htdocs/zhaolinlau.github.io/node_modules/.pnpm/nuxt@3.6.5_@types+node@20.4.5/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}