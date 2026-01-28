importScripts('/_nuxt/workbox.476439e0.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "xc-portal",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/app.8f6a1533c62c9b470dd4.js",
    "revision": "e92ffc20d3bc5a65bf0272078bcac6cf"
  },
  {
    "url": "/_nuxt/layouts/default.b045eb5e182ed553ff8c.js",
    "revision": "2a4aee5759b91ed7dab90ceb564c5711"
  },
  {
    "url": "/_nuxt/layouts/default1.5402489a8daae09624cc.js",
    "revision": "8bc6de833d772a4f187139f64475eef1"
  },
  {
    "url": "/_nuxt/layouts/empty-page.dde9be1b531ad403cc74.js",
    "revision": "0172e6527f80e217dcf68717ec47180f"
  },
  {
    "url": "/_nuxt/layouts/test.96f6971e76513da00c83.js",
    "revision": "4bb9372464009638703a0b450a84377e"
  },
  {
    "url": "/_nuxt/manifest.410c6d0cda7d51a39108.js",
    "revision": "1e539cac22b3a389cfbf23e6d3976cad"
  },
  {
    "url": "/_nuxt/pages/about.c326ccb502db1fe98ad0.js",
    "revision": "95716948122bc58172c3f697abe36de0"
  },
  {
    "url": "/_nuxt/pages/course/search/index.596bd7f899c1ff9a6b9e.js",
    "revision": "a9fc5ce71e8ab6272fc0c432472c0de9"
  },
  {
    "url": "/_nuxt/pages/user.5acb2fac9b518a338211.js",
    "revision": "151c667fac7f9b5e92be2c23ba35f307"
  },
  {
    "url": "/_nuxt/pages/user/_id.59d8ae0ddaecad7598c6.js",
    "revision": "3d61555897ebb02c08085b2fc3e40935"
  },
  {
    "url": "/_nuxt/pages/user/index.d715bdabaf21cc94b422.js",
    "revision": "181011931bccef9e86540b2f21024e8d"
  },
  {
    "url": "/_nuxt/pages/user/one.1a10ae6d071abcccb1eb.js",
    "revision": "bdcd554835242ae61f5f20663811bd8e"
  },
  {
    "url": "/_nuxt/vendor.39cfb5fda64d40897c19.js",
    "revision": "c2f5d05e577819418ebe353d1ac7cd2a"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

