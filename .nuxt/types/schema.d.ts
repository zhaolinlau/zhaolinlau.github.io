import { NuxtModule, RuntimeConfig } from 'nuxt/schema'
declare module 'nuxt/schema' {
  interface NuxtConfig {
    ["image"]?: typeof import("@nuxt/image").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["site"]?: typeof import("C:/xampp/htdocs/zhaolinlau.github.io/node_modules/.pnpm/nuxt-site-config@1.0.10/node_modules/nuxt-site-config/dist/module").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["robots"]?: typeof import("nuxt-simple-robots").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["devtools"]?: typeof import("@nuxt/devtools").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["telemetry"]?: typeof import("@nuxt/telemetry").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    modules?: (undefined | null | false | NuxtModule | string | [NuxtModule | string, Record<string, any>] | ["@nuxt/image", Exclude<NuxtConfig["image"], boolean>] | ["C:/xampp/htdocs/zhaolinlau.github.io/node_modules/.pnpm/nuxt-site-config@1.0.10/node_modules/nuxt-site-config/dist/module", Exclude<NuxtConfig["site"], boolean>] | ["nuxt-simple-robots", Exclude<NuxtConfig["robots"], boolean>] | ["@nuxt/devtools", Exclude<NuxtConfig["devtools"], boolean>] | ["@nuxt/telemetry", Exclude<NuxtConfig["telemetry"], boolean>])[],
  }
  interface RuntimeConfig {
   app: {
      baseURL: string,

      buildAssetsDir: string,

      cdnURL: string,
   },

   "nuxt-simple-robots": {
      credits: boolean,

      groups: Array<{

      }>,

      sitemap: Array<any>,

      robotsEnabledValue: string,

      robotsDisabledValue: string,
   },
  }
  interface PublicRuntimeConfig {
   site: {
      _context: {
         defaultLocale: string,

         trailingSlash: string,

         titleSeparator: string,

         name: string,

         indexable: string,

         debug: string,
      },

      defaultLocale: string,

      trailingSlash: boolean,

      titleSeparator: string,

      name: string,

      indexable: boolean,

      debug: boolean,
   },
  }
}
declare module 'vue' {
        interface ComponentCustomProperties {
          $config: RuntimeConfig
        }
      }