import { a as useHead, b as useRequestEvent, e as useNuxtApp, d as useRuntimeConfig } from '../server.mjs';
import { ref, resolveComponent, withCtx, createVNode, createTextVNode, useSSRContext, defineComponent, computed, h } from 'file://C:/xampp/htdocs/zhaolinlau.github.io/node_modules/.pnpm/vue@3.3.4/node_modules/vue/index.mjs';
import { defu } from 'file://C:/xampp/htdocs/zhaolinlau.github.io/node_modules/.pnpm/defu@6.1.2/node_modules/defu/dist/defu.mjs';
import { encodeParam, hasProtocol, withLeadingSlash, joinURL, parseURL, encodePath } from 'file://C:/xampp/htdocs/zhaolinlau.github.io/node_modules/.pnpm/ufo@1.2.0/node_modules/ufo/dist/index.mjs';
import { appendHeader } from 'file://C:/xampp/htdocs/zhaolinlau.github.io/node_modules/.pnpm/h3@1.7.1/node_modules/h3/dist/index.mjs';
import { ssrRenderComponent } from 'file://C:/xampp/htdocs/zhaolinlau.github.io/node_modules/.pnpm/vue@3.3.4/node_modules/vue/server-renderer/index.mjs';
import 'file://C:/xampp/htdocs/zhaolinlau.github.io/node_modules/.pnpm/ofetch@1.1.1/node_modules/ofetch/dist/node.mjs';
import 'file://C:/xampp/htdocs/zhaolinlau.github.io/node_modules/.pnpm/hookable@5.5.3/node_modules/hookable/dist/index.mjs';
import 'file://C:/xampp/htdocs/zhaolinlau.github.io/node_modules/.pnpm/unctx@2.3.1/node_modules/unctx/dist/index.mjs';
import 'file://C:/xampp/htdocs/zhaolinlau.github.io/node_modules/.pnpm/vue-router@4.2.4_vue@3.3.4/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file://C:/xampp/htdocs/zhaolinlau.github.io/node_modules/.pnpm/@unhead+ssr@1.1.35/node_modules/@unhead/ssr/dist/index.mjs';
import 'file://C:/xampp/htdocs/zhaolinlau.github.io/node_modules/.pnpm/unhead@1.1.35/node_modules/unhead/dist/index.mjs';
import 'file://C:/xampp/htdocs/zhaolinlau.github.io/node_modules/.pnpm/@unhead+shared@1.1.35/node_modules/@unhead/shared/dist/index.mjs';
import 'file://C:/xampp/htdocs/zhaolinlau.github.io/node_modules/.pnpm/@oruga-ui+oruga-next@0.6.0_vue@3.3.4/node_modules/@oruga-ui/oruga-next/dist/cjs/index.js';
import 'file://C:/xampp/htdocs/zhaolinlau.github.io/node_modules/.pnpm/@oruga-ui+theme-bulma@0.2.11/node_modules/@oruga-ui/theme-bulma/dist/bulma.js';
import '../../nitro/nitro-prerenderer.mjs';
import 'file://C:/xampp/htdocs/zhaolinlau.github.io/node_modules/.pnpm/node-fetch-native@1.2.0/node_modules/node-fetch-native/dist/polyfill.mjs';
import 'file://C:/xampp/htdocs/zhaolinlau.github.io/node_modules/.pnpm/destr@2.0.0/node_modules/destr/dist/index.mjs';
import 'file://C:/xampp/htdocs/zhaolinlau.github.io/node_modules/.pnpm/unenv@1.5.2/node_modules/unenv/runtime/fetch/index.mjs';
import 'file://C:/xampp/htdocs/zhaolinlau.github.io/node_modules/.pnpm/scule@1.0.0/node_modules/scule/dist/index.mjs';
import 'file://C:/xampp/htdocs/zhaolinlau.github.io/node_modules/.pnpm/klona@2.0.6/node_modules/klona/dist/index.mjs';
import 'file://C:/xampp/htdocs/zhaolinlau.github.io/node_modules/.pnpm/ohash@1.1.2/node_modules/ohash/dist/index.mjs';
import 'file://C:/xampp/htdocs/zhaolinlau.github.io/node_modules/.pnpm/unstorage@1.8.0/node_modules/unstorage/dist/index.mjs';
import 'file://C:/xampp/htdocs/zhaolinlau.github.io/node_modules/.pnpm/unstorage@1.8.0/node_modules/unstorage/drivers/fs.mjs';
import 'file://C:/xampp/htdocs/zhaolinlau.github.io/node_modules/.pnpm/radix3@1.0.1/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file://C:/xampp/htdocs/zhaolinlau.github.io/node_modules/.pnpm/pathe@1.1.1/node_modules/pathe/dist/index.mjs';
import 'file://C:/xampp/htdocs/zhaolinlau.github.io/node_modules/.pnpm/ipx@1.2.0/node_modules/ipx/dist/index.mjs';

async function imageMeta(_ctx, url) {
  const meta = await _imageMeta(url).catch((err) => {
    console.error("Failed to get image meta for " + url, err + "");
    return {
      width: 0,
      height: 0,
      ratio: 0
    };
  });
  return meta;
}
async function _imageMeta(url) {
  {
    const imageMeta2 = await import('file://C:/xampp/htdocs/zhaolinlau.github.io/node_modules/.pnpm/image-meta@0.1.1/node_modules/image-meta/dist/index.mjs').then((r) => r.imageMeta);
    const data = await fetch(url).then((res) => res.buffer());
    const metadata = imageMeta2(data);
    if (!metadata) {
      throw new Error(`No metadata could be extracted from the image \`${url}\`.`);
    }
    const { width, height } = metadata;
    const meta = {
      width,
      height,
      ratio: width && height ? width / height : void 0
    };
    return meta;
  }
}
function createMapper(map) {
  return (key) => {
    return key ? map[key] || key : map.missingValue;
  };
}
function createOperationsGenerator({ formatter, keyMap, joinWith = "/", valueMap } = {}) {
  if (!formatter) {
    formatter = (key, value) => `${key}=${value}`;
  }
  if (keyMap && typeof keyMap !== "function") {
    keyMap = createMapper(keyMap);
  }
  const map = valueMap || {};
  Object.keys(map).forEach((valueKey) => {
    if (typeof map[valueKey] !== "function") {
      map[valueKey] = createMapper(map[valueKey]);
    }
  });
  return (modifiers = {}) => {
    const operations = Object.entries(modifiers).filter(([_, value]) => typeof value !== "undefined").map(([key, value]) => {
      const mapper = map[key];
      if (typeof mapper === "function") {
        value = mapper(modifiers[key]);
      }
      key = typeof keyMap === "function" ? keyMap(key) : key;
      return formatter(key, value);
    });
    return operations.join(joinWith);
  };
}
function parseSize(input = "") {
  if (typeof input === "number") {
    return input;
  }
  if (typeof input === "string") {
    if (input.replace("px", "").match(/^\d+$/g)) {
      return parseInt(input, 10);
    }
  }
}
function prerenderStaticImages(src = "", srcset = "") {
  const paths = [
    src,
    ...srcset.split(", ").map((s) => s.trim().split(" ")[0].trim())
  ].filter((s) => s && s.includes("/_ipx/"));
  if (!paths.length) {
    return;
  }
  appendHeader(
    useRequestEvent(),
    "x-nitro-prerender",
    paths.map((p) => encodeURIComponent(p)).join(", ")
  );
}
function createImage(globalOptions) {
  const ctx = {
    options: globalOptions
  };
  const getImage2 = (input, options = {}) => {
    const image = resolveImage(ctx, input, options);
    {
      prerenderStaticImages(image.url);
    }
    return image;
  };
  const $img = (input, modifiers = {}, options = {}) => {
    return getImage2(input, {
      ...options,
      modifiers: defu(modifiers, options.modifiers || {})
    }).url;
  };
  for (const presetName in globalOptions.presets) {
    $img[presetName] = (source, modifiers, options) => $img(source, modifiers, { ...globalOptions.presets[presetName], ...options });
  }
  $img.options = globalOptions;
  $img.getImage = getImage2;
  $img.getMeta = (input, options) => getMeta(ctx, input, options);
  $img.getSizes = (input, options) => getSizes(ctx, input, options);
  ctx.$img = $img;
  return $img;
}
async function getMeta(ctx, input, options) {
  const image = resolveImage(ctx, input, { ...options });
  if (typeof image.getMeta === "function") {
    return await image.getMeta();
  } else {
    return await imageMeta(ctx, image.url);
  }
}
function resolveImage(ctx, input, options) {
  var _a, _b;
  if (typeof input !== "string" || input === "") {
    throw new TypeError(`input must be a string (received ${typeof input}: ${JSON.stringify(input)})`);
  }
  if (input.startsWith("data:")) {
    return {
      url: input
    };
  }
  const { provider, defaults } = getProvider(ctx, options.provider || ctx.options.provider);
  const preset = getPreset(ctx, options.preset);
  input = hasProtocol(input) ? input : withLeadingSlash(input);
  if (!provider.supportsAlias) {
    for (const base in ctx.options.alias) {
      if (input.startsWith(base)) {
        input = joinURL(ctx.options.alias[base], input.substr(base.length));
      }
    }
  }
  if (provider.validateDomains && hasProtocol(input)) {
    const inputHost = parseURL(input).host;
    if (!ctx.options.domains.find((d) => d === inputHost)) {
      return {
        url: input
      };
    }
  }
  const _options = defu(options, preset, defaults);
  _options.modifiers = { ..._options.modifiers };
  const expectedFormat = _options.modifiers.format;
  if ((_a = _options.modifiers) == null ? void 0 : _a.width) {
    _options.modifiers.width = parseSize(_options.modifiers.width);
  }
  if ((_b = _options.modifiers) == null ? void 0 : _b.height) {
    _options.modifiers.height = parseSize(_options.modifiers.height);
  }
  const image = provider.getImage(input, _options, ctx);
  image.format = image.format || expectedFormat || "";
  return image;
}
function getProvider(ctx, name) {
  const provider = ctx.options.providers[name];
  if (!provider) {
    throw new Error("Unknown provider: " + name);
  }
  return provider;
}
function getPreset(ctx, name) {
  if (!name) {
    return {};
  }
  if (!ctx.options.presets[name]) {
    throw new Error("Unknown preset: " + name);
  }
  return ctx.options.presets[name];
}
function getSizes(ctx, input, opts) {
  var _a, _b;
  const width = parseSize((_a = opts.modifiers) == null ? void 0 : _a.width);
  const height = parseSize((_b = opts.modifiers) == null ? void 0 : _b.height);
  const hwRatio = width && height ? height / width : 0;
  const variants = [];
  const sizes = {};
  if (typeof opts.sizes === "string") {
    for (const entry of opts.sizes.split(/[\s,]+/).filter((e) => e)) {
      const s = entry.split(":");
      if (s.length !== 2) {
        continue;
      }
      sizes[s[0].trim()] = s[1].trim();
    }
  } else {
    Object.assign(sizes, opts.sizes);
  }
  for (const key in sizes) {
    const screenMaxWidth = ctx.options.screens && ctx.options.screens[key] || parseInt(key);
    let size = String(sizes[key]);
    const isFluid = size.endsWith("vw");
    if (!isFluid && /^\d+$/.test(size)) {
      size = size + "px";
    }
    if (!isFluid && !size.endsWith("px")) {
      continue;
    }
    let _cWidth = parseInt(size);
    if (!screenMaxWidth || !_cWidth) {
      continue;
    }
    if (isFluid) {
      _cWidth = Math.round(_cWidth / 100 * screenMaxWidth);
    }
    const _cHeight = hwRatio ? Math.round(_cWidth * hwRatio) : height;
    variants.push({
      width: _cWidth,
      size,
      screenMaxWidth,
      media: `(max-width: ${screenMaxWidth}px)`,
      src: ctx.$img(input, { ...opts.modifiers, width: _cWidth, height: _cHeight }, opts)
    });
  }
  variants.sort((v1, v2) => v1.screenMaxWidth - v2.screenMaxWidth);
  const defaultVar = variants[variants.length - 1];
  if (defaultVar) {
    defaultVar.media = "";
  }
  return {
    sizes: variants.map((v) => `${v.media ? v.media + " " : ""}${v.size}`).join(", "),
    srcset: variants.map((v) => `${v.src} ${v.width}w`).join(", "),
    src: defaultVar == null ? void 0 : defaultVar.src
  };
}
const operationsGenerator = createOperationsGenerator({
  keyMap: {
    format: "f",
    fit: "fit",
    width: "w",
    height: "h",
    resize: "s",
    quality: "q",
    background: "b"
  },
  joinWith: "&",
  formatter: (key, val) => encodeParam(key) + "_" + encodeParam(val)
});
const getImage = (src, { modifiers = {}, baseURL } = {}, ctx) => {
  if (modifiers.width && modifiers.height) {
    modifiers.resize = `${modifiers.width}x${modifiers.height}`;
    delete modifiers.width;
    delete modifiers.height;
  }
  const params = operationsGenerator(modifiers) || "_";
  if (!baseURL) {
    baseURL = joinURL(ctx.options.nuxt.baseURL, "/_ipx");
  }
  return {
    url: joinURL(baseURL, params, encodePath(src))
  };
};
const validateDomains = true;
const supportsAlias = true;
const ipxRuntime$z5YeJeHAMj = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  getImage,
  supportsAlias,
  validateDomains
});
const imageOptions = {
  "screens": {
    "xs": 320,
    "sm": 640,
    "md": 768,
    "lg": 1024,
    "xl": 1280,
    "xxl": 1536,
    "2xl": 1536
  },
  "presets": {},
  "provider": "ipx",
  "domains": [],
  "alias": {}
};
imageOptions.providers = {
  ["ipx"]: { provider: ipxRuntime$z5YeJeHAMj, defaults: void 0 }
};
const useImage = () => {
  const config = /* @__PURE__ */ useRuntimeConfig();
  const nuxtApp = useNuxtApp();
  return nuxtApp.$img || nuxtApp._img || (nuxtApp._img = createImage({
    ...imageOptions,
    nuxt: {
      baseURL: config.app.baseURL
    }
  }));
};
const baseImageProps = {
  // input source
  src: { type: String, required: true },
  // modifiers
  format: { type: String, default: void 0 },
  quality: { type: [Number, String], default: void 0 },
  background: { type: String, default: void 0 },
  fit: { type: String, default: void 0 },
  modifiers: { type: Object, default: void 0 },
  // options
  preset: { type: String, default: void 0 },
  provider: { type: String, default: void 0 },
  sizes: { type: [Object, String], default: void 0 },
  preload: { type: Boolean, default: void 0 },
  // <img> attributes
  width: { type: [String, Number], default: void 0 },
  height: { type: [String, Number], default: void 0 },
  alt: { type: String, default: void 0 },
  referrerpolicy: { type: String, default: void 0 },
  usemap: { type: String, default: void 0 },
  longdesc: { type: String, default: void 0 },
  ismap: { type: Boolean, default: void 0 },
  loading: { type: String, default: void 0 },
  crossorigin: {
    type: [Boolean, String],
    default: void 0,
    validator: (val) => ["anonymous", "use-credentials", "", true, false].includes(val)
  },
  decoding: {
    type: String,
    default: void 0,
    validator: (val) => ["async", "auto", "sync"].includes(val)
  }
};
const useBaseImage = (props) => {
  const options = computed(() => {
    return {
      provider: props.provider,
      preset: props.preset
    };
  });
  const attrs = computed(() => {
    return {
      width: parseSize(props.width),
      height: parseSize(props.height),
      alt: props.alt,
      referrerpolicy: props.referrerpolicy,
      usemap: props.usemap,
      longdesc: props.longdesc,
      ismap: props.ismap,
      crossorigin: props.crossorigin === true ? "anonymous" : props.crossorigin || void 0,
      loading: props.loading,
      decoding: props.decoding
    };
  });
  const modifiers = computed(() => {
    return {
      ...props.modifiers,
      width: parseSize(props.width),
      height: parseSize(props.height),
      format: props.format,
      quality: props.quality,
      background: props.background,
      fit: props.fit
    };
  });
  return {
    options,
    attrs,
    modifiers
  };
};
const imgProps = {
  ...baseImageProps,
  placeholder: { type: [Boolean, String, Number, Array], default: void 0 }
};
const __nuxt_component_0 = /* @__PURE__ */ defineComponent({
  name: "NuxtImg",
  props: imgProps,
  emits: ["load", "error"],
  setup: (props, ctx) => {
    const $img = useImage();
    const _base = useBaseImage(props);
    const placeholderLoaded = ref(false);
    const sizes = computed(() => $img.getSizes(props.src, {
      ..._base.options.value,
      sizes: props.sizes,
      modifiers: {
        ..._base.modifiers.value,
        width: parseSize(props.width),
        height: parseSize(props.height)
      }
    }));
    const attrs = computed(() => {
      const attrs2 = { ..._base.attrs.value, "data-nuxt-img": "" };
      if (props.sizes) {
        attrs2.sizes = sizes.value.sizes;
        attrs2.srcset = sizes.value.srcset;
      }
      return attrs2;
    });
    const placeholder = computed(() => {
      let placeholder2 = props.placeholder;
      if (placeholder2 === "") {
        placeholder2 = true;
      }
      if (!placeholder2 || placeholderLoaded.value) {
        return false;
      }
      if (typeof placeholder2 === "string") {
        return placeholder2;
      }
      const size = Array.isArray(placeholder2) ? placeholder2 : typeof placeholder2 === "number" ? [placeholder2, placeholder2] : [10, 10];
      return $img(props.src, {
        ..._base.modifiers.value,
        width: size[0],
        height: size[1],
        quality: size[2] || 50
      }, _base.options.value);
    });
    const mainSrc = computed(
      () => props.sizes ? sizes.value.src : $img(props.src, _base.modifiers.value, _base.options.value)
    );
    const src = computed(() => placeholder.value ? placeholder.value : mainSrc.value);
    if (props.preload) {
      const isResponsive = Object.values(sizes.value).every((v) => v);
      useHead({
        link: [{
          rel: "preload",
          as: "image",
          ...!isResponsive ? { href: src.value } : {
            href: sizes.value.src,
            imagesizes: sizes.value.sizes,
            imagesrcset: sizes.value.srcset
          }
        }]
      });
    }
    {
      prerenderStaticImages(src.value, sizes.value.srcset);
    }
    const imgEl = ref();
    const nuxtApp = useNuxtApp();
    nuxtApp.isHydrating;
    return () => h("img", {
      ref: imgEl,
      key: src.value,
      src: src.value,
      ...{ onerror: "this.setAttribute('data-error', 1)" },
      ...attrs.value,
      ...ctx.attrs
    });
  }
});
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const isLoading = ref(false);
    const isSubmitted = ref(false);
    const captcha = ref(false);
    const isSending = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_o_icon = resolveComponent("o-icon");
      const _component_nuxt_img = __nuxt_component_0;
      const _component_o_loading = resolveComponent("o-loading");
      const _component_o_notification = resolveComponent("o-notification");
      const _component_o_field = resolveComponent("o-field");
      const _component_o_input = resolveComponent("o-input");
      const _component_o_button = resolveComponent("o-button");
      _push(`<!--[--><section class="hero is-fullheight is-dark is-bold"><div class="hero-body"><div class="container"><p class="subtitle">Hello! I am</p><p class="title is-1 is-italic">Zhaolin Lau</p><p class="subtitle is-3"> A Passionate Web Developer From Malaysia </p><div class="buttons"><a class="button is-dark" href="https://github.com/zhaolinlau" target="_blank"><span class="icon-text"><span class="icon"><span class="mdi mdi-github mdi-24px"></span></span><span>GitHub</span></span></a><a class="button is-link" href="https://www.facebook.com/zhaolinlau/" target="_blank"><span class="icon-text"><span class="icon"><span class="mdi mdi-facebook mdi-24px"></span></span><span>Facebook</span></span></a><a class="button is-danger is-light" href="https://www.instagram.com/zhaolin_lau/" target="_blank"><span class="icon-text"><span class="icon"><span class="mdi mdi-instagram mdi-24px"></span></span><span>Instagram</span></span></a><a class="button is-info" href="https://www.linkedin.com/in/zhaolinlau/" target="_blank"><span class="icon-text"><span class="icon"><span class="mdi mdi-linkedin mdi-24px"></span></span><span>LinkedIn</span></span></a><a class="button is-info is-inverted" href="https://twitter.com/zhaolin_lau" target="_blank"><span class="icon-text"><span class="icon"><span class="mdi mdi-twitter mdi-24px"></span></span><span>Twitter</span></span></a></div></div></div></section><section class="section" id="about"><div class="container"><p class="title mt-3 has-text-centered"><span class="icon-text">`);
      _push(ssrRenderComponent(_component_o_icon, {
        size: "medium",
        icon: "information-variant-circle-outline"
      }, null, _parent));
      _push(`<span>About Me</span></span></p><div class="columns is-multiline is-vcentered"><div class="column is-4"><figure class="image">`);
      _push(ssrRenderComponent(_component_nuxt_img, {
        class: "is-rounded",
        src: "img/me.jpg",
        alt: "LAU ZHAO LIN"
      }, null, _parent));
      _push(`</figure></div><div class="column is-8"><p class="subtitle has-text-centered">Jack of all trades, master of &quot;some&quot;</p><p class="has-text-justified"> Web developer with more than <b>3 years</b> of well-rounded experience with a diploma in the field of <b>Computer Science</b>, extensive knowledge of modern Web techniques and love for <b>Milo</b>. Looking for an opportunity to work and upgrade, as well as being involved in an organization that believes in gaining a competitive edge and giving back to the community. </p></div></div></div></section><section class="section has-text-centered" id="skills"><div class="container"><p class="title mt-3"><span class="icon-text">`);
      _push(ssrRenderComponent(_component_o_icon, {
        size: "medium",
        icon: "code-tags"
      }, null, _parent));
      _push(`<span>My Skills</span></span></p><div class="columns is-multiline"><div class="column is-4"><div class="box">`);
      _push(ssrRenderComponent(_component_o_icon, {
        icon: "language-html5",
        size: "large"
      }, null, _parent));
      _push(`<p class="title is-4">HTML</p></div></div><div class="column is-4"><div class="box">`);
      _push(ssrRenderComponent(_component_o_icon, {
        icon: "language-css3",
        size: "large"
      }, null, _parent));
      _push(`<p class="title is-4">CSS</p></div></div><div class="column is-4"><div class="box">`);
      _push(ssrRenderComponent(_component_o_icon, {
        icon: "language-javascript",
        size: "large"
      }, null, _parent));
      _push(`<p class="title is-4">JavaScript</p></div></div><div class="column is-4"><div class="box">`);
      _push(ssrRenderComponent(_component_o_icon, {
        icon: "language-php",
        size: "large"
      }, null, _parent));
      _push(`<p class="title is-4">PHP</p></div></div><div class="column is-4"><div class="box">`);
      _push(ssrRenderComponent(_component_o_icon, {
        icon: "dolphin",
        size: "large"
      }, null, _parent));
      _push(`<p class="title is-4">MySQL</p></div></div><div class="column is-4"><div class="box">`);
      _push(ssrRenderComponent(_component_o_icon, {
        icon: "bulma",
        size: "large"
      }, null, _parent));
      _push(`<p class="title is-4">Bulma</p></div></div><div class="column is-4"><div class="box">`);
      _push(ssrRenderComponent(_component_o_icon, {
        icon: "bootstrap",
        size: "large"
      }, null, _parent));
      _push(`<p class="title is-4">Bootstrap</p></div></div><div class="column is-4"><div class="box">`);
      _push(ssrRenderComponent(_component_o_icon, {
        icon: "vuejs",
        size: "large"
      }, null, _parent));
      _push(`<p class="title is-4">Vue.js</p></div></div><div class="column is-4"><div class="box">`);
      _push(ssrRenderComponent(_component_o_icon, {
        icon: "laravel",
        size: "large"
      }, null, _parent));
      _push(`<p class="title is-4">Laravel</p></div></div></div></div></section><section class="section" id="portfolio"><div class="container"><p class="title has-text-centered mt-3"><span class="icon-text">`);
      _push(ssrRenderComponent(_component_o_icon, {
        size: "medium",
        icon: "folder-file"
      }, null, _parent));
      _push(`<span>My Portfolio</span></span></p><div class="columns is-multiline is-centered"><div class="column is-4"><div class="card"><header class="card-header"><p class="card-header-title"><span>Zhaolin Lau</span></p></header><div class="card-content"><figure class="image">`);
      _push(ssrRenderComponent(_component_nuxt_img, {
        src: "img/zhaolinlau.png",
        alt: "zhaolinlau.png"
      }, null, _parent));
      _push(`</figure></div><footer class="card-footer"><a href="https://zhaolinlau.vercel.app/" class="card-footer-item"><span class="icon-text">`);
      _push(ssrRenderComponent(_component_o_icon, { icon: "eye" }, null, _parent));
      _push(`<span>Preview</span></span></a><a href="https://github.com/zhaolinlau/zhaolinlau.github.io" class="card-footer-item" target="_blank"><span class="icon-text">`);
      _push(ssrRenderComponent(_component_o_icon, { icon: "github" }, null, _parent));
      _push(`<span>Source Code</span></span></a></footer></div></div><div class="column is-4"><div class="card"><header class="card-header"><p class="card-header-title"><span>UTM Foundation &amp; Diploma Consultation</span></p></header><div class="card-content"><figure class="image">`);
      _push(ssrRenderComponent(_component_nuxt_img, {
        src: "img/utmfd.png",
        alt: "utmfd.png"
      }, null, _parent));
      _push(`</figure></div><footer class="card-footer"><a href="https://utmfd.vercel.app/" class="card-footer-item" target="_blank"><span class="icon-text">`);
      _push(ssrRenderComponent(_component_o_icon, { icon: "eye" }, null, _parent));
      _push(`<span>Preview</span></span></a><a href="https://github.com/Luetify/UTM-FD" class="card-footer-item" target="_blank"><span class="icon-text">`);
      _push(ssrRenderComponent(_component_o_icon, { icon: "github" }, null, _parent));
      _push(`<span>Source Code</span></span></a></footer></div></div><div class="column is-4"><div class="card"><header class="card-header"><p class="card-header-title"><span>Huawei Open Day: Intelligent World 2030</span></p></header><div class="card-content"><figure class="image">`);
      _push(ssrRenderComponent(_component_nuxt_img, {
        src: "img/huawei-intelligent-world-2030.png",
        alt: "huawei-intelligent-world-2030.png"
      }, null, _parent));
      _push(`</figure></div><footer class="card-footer"><a href="https://huawei-intelligent-world-2030.vercel.app/" class="card-footer-item" target="_blank"><span class="icon-text">`);
      _push(ssrRenderComponent(_component_o_icon, { icon: "eye" }, null, _parent));
      _push(`<span>Preview</span></span></a><a href="https://github.com/zhaolinlau/huawei-intelligent-world-2030" class="card-footer-item" target="_blank"><span class="icon-text">`);
      _push(ssrRenderComponent(_component_o_icon, { icon: "github" }, null, _parent));
      _push(`<span>Source Code</span></span></a></footer></div></div></div></div></section><section class="section" id="contact">`);
      _push(ssrRenderComponent(_component_o_loading, {
        active: isLoading.value,
        "onUpdate:active": ($event) => isLoading.value = $event
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_o_icon, {
              pack: "mdi",
              icon: "loading",
              size: "large"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_o_icon, {
                pack: "mdi",
                icon: "loading",
                size: "large"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="container"><p class="title has-text-centered mt-3"><span class="icon-text">`);
      _push(ssrRenderComponent(_component_o_icon, {
        size: "medium",
        icon: "mailbox"
      }, null, _parent));
      _push(`<span>Contact Me</span></span></p><div class="columns"><div class="column is-6 is-offset-3"><form class="box" method="post">`);
      _push(ssrRenderComponent(_component_o_notification, {
        autoClose: "",
        active: isSubmitted.value,
        "onUpdate:active": ($event) => isSubmitted.value = $event,
        message: "Your message has been sent successfully.",
        iconSize: "medium",
        duration: "5000",
        type: "success",
        closable: "",
        variant: "success",
        "aria-close-label": "Close notification"
      }, null, _parent));
      _push(ssrRenderComponent(_component_o_field, {
        label: "Captcha",
        class: "is-hidden"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_o_input, {
              name: "_captcha",
              modelValue: captcha.value,
              "onUpdate:modelValue": ($event) => captcha.value = $event,
              required: ""
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_o_input, {
                name: "_captcha",
                modelValue: captcha.value,
                "onUpdate:modelValue": ($event) => captcha.value = $event,
                required: ""
              }, null, 8, ["modelValue", "onUpdate:modelValue"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_o_field, { label: "Subject" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_o_input, {
              icon: "format-title",
              name: "_subject",
              required: ""
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_o_input, {
                icon: "format-title",
                name: "_subject",
                required: ""
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_o_field, { label: "Name" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_o_input, {
              icon: "account",
              name: "name",
              required: ""
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_o_input, {
                icon: "account",
                name: "name",
                required: ""
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_o_field, { label: "Email" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_o_input, {
              icon: "email",
              type: "email",
              name: "email",
              required: ""
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_o_input, {
                icon: "email",
                type: "email",
                name: "email",
                required: ""
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_o_field, { label: "Message" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_o_input, {
              icon: "message-text",
              type: "textarea",
              name: "message",
              required: ""
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_o_input, {
                icon: "message-text",
                type: "textarea",
                name: "message",
                required: ""
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_o_field, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_o_button, {
              nativeType: "submit",
              "icon-left": "send",
              variant: "primary",
              loading: isSending.value,
              rounded: "",
              expanded: ""
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Send`);
                } else {
                  return [
                    createTextVNode("Send")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_o_button, {
                nativeType: "submit",
                "icon-left": "send",
                variant: "primary",
                loading: isSending.value,
                rounded: "",
                expanded: ""
              }, {
                default: withCtx(() => [
                  createTextVNode("Send")
                ]),
                _: 1
              }, 8, ["loading"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</form></div></div></div></section><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-e260fc43.mjs.map
