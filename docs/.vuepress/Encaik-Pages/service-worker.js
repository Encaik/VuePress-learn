/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "da7a597e6ac3756e8829c6bd3673685f"
  },
  {
    "url": "about/index.html",
    "revision": "570e861bb93b3bb9fd237459cc0c754a"
  },
  {
    "url": "assets/css/0.styles.0d67a1dc.css",
    "revision": "03d985f522f5b8352430e0040df7c155"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.e52ff7b5.js",
    "revision": "51010b0406e944ba994b5edef2dd958c"
  },
  {
    "url": "assets/js/11.60a5a624.js",
    "revision": "cb0045b68af9a7e7c0437c806a05169d"
  },
  {
    "url": "assets/js/12.a8a09713.js",
    "revision": "507bd3b4de9584cbe7d18de546ffdc38"
  },
  {
    "url": "assets/js/13.f654ff72.js",
    "revision": "84f2b60be2a8825232d9c9ffc42a180e"
  },
  {
    "url": "assets/js/14.54f73450.js",
    "revision": "5a68c5690861992aca8bf2487d10a86c"
  },
  {
    "url": "assets/js/15.7bce1741.js",
    "revision": "c793cdcec83d7843efa84225b95c8feb"
  },
  {
    "url": "assets/js/16.987e2993.js",
    "revision": "b1c8555f0af410f8f353df22ae859b78"
  },
  {
    "url": "assets/js/17.4ca1a609.js",
    "revision": "bf0e465ddaa046ea2711e0a5cd435221"
  },
  {
    "url": "assets/js/18.3d229db0.js",
    "revision": "dc0b70d5dfaf35cd7911eb45c50ae1eb"
  },
  {
    "url": "assets/js/19.57a7b69b.js",
    "revision": "a1afa9b5b9ff51282c883b16c23e4513"
  },
  {
    "url": "assets/js/2.d15ca89a.js",
    "revision": "69b5f69c43ae08c0ca3d66d584cd0388"
  },
  {
    "url": "assets/js/20.33a221a0.js",
    "revision": "543005fc080a4b389733b10bb06dde5c"
  },
  {
    "url": "assets/js/21.1728a248.js",
    "revision": "12400bc0bab01c500fa1d84aecac02c1"
  },
  {
    "url": "assets/js/22.09b5b9b9.js",
    "revision": "399c21cf31e4a90b748351c4dfc83a98"
  },
  {
    "url": "assets/js/23.726486bd.js",
    "revision": "320794107baf5bc7aa6e33eab2512997"
  },
  {
    "url": "assets/js/3.09683a03.js",
    "revision": "389b563b446e5e033f1d4e4b45bc02e4"
  },
  {
    "url": "assets/js/4.21007214.js",
    "revision": "f8ee06cc6f582795915ea9173e02b73b"
  },
  {
    "url": "assets/js/5.c41b33e8.js",
    "revision": "72b1a77e17d3e336cf146e4b896cb1aa"
  },
  {
    "url": "assets/js/6.4b264446.js",
    "revision": "ab183a8da404702202d1ebf689a225a7"
  },
  {
    "url": "assets/js/7.ba4aff9e.js",
    "revision": "71237bb6db8ad75c7a2fd4ab747e8f68"
  },
  {
    "url": "assets/js/8.3d17ffb0.js",
    "revision": "355e08502acab42e15a622197624bfb6"
  },
  {
    "url": "assets/js/9.adba160a.js",
    "revision": "f7c547fdbd7dfc40d504775baac5e855"
  },
  {
    "url": "assets/js/app.5ab1c228.js",
    "revision": "75337a710a525480c7d269f072c9875c"
  },
  {
    "url": "back-end/django/index.html",
    "revision": "d8bcff61dc53834693d03aa2b3979b9b"
  },
  {
    "url": "back-end/python/index.html",
    "revision": "48d6ec253da6292335319c254d4ed32e"
  },
  {
    "url": "blog/index.html",
    "revision": "8a3e117a25d5f3f64291e1ed579bafaf"
  },
  {
    "url": "front-end/css/css3/index.html",
    "revision": "3bcbaa0d3f9f0dcec43d68c3124c2aa1"
  },
  {
    "url": "front-end/css/index.html",
    "revision": "5b65d4d62c5e2b720d7c1ae170cd48f1"
  },
  {
    "url": "front-end/css/scss/index.html",
    "revision": "a03f4fc0b381552fa1f44d63be7e1933"
  },
  {
    "url": "front-end/html/html5/index.html",
    "revision": "2a385df13072a52414729497e9246f34"
  },
  {
    "url": "front-end/html/index.html",
    "revision": "3cc3cd575c2e43ea93592f1200689eda"
  },
  {
    "url": "front-end/js/index.html",
    "revision": "c0891a892a91a2d3b10628d9fb92930e"
  },
  {
    "url": "front-end/node/index.html",
    "revision": "0569b2cf9d2a9f42ac13065aaf753839"
  },
  {
    "url": "front-end/sass/index.html",
    "revision": "95503612ddd582836a16c20887659595"
  },
  {
    "url": "front-end/vue/index.html",
    "revision": "001500a6dfb5b6c293106b9ab75727c2"
  },
  {
    "url": "front-end/vue/vue-cil.html",
    "revision": "6a69b37832085026fa4d855a93bfab91"
  },
  {
    "url": "front-end/vue/vuepress.html",
    "revision": "3840868ce35a763139e5740465ae10ab"
  },
  {
    "url": "front-end/vue/vuepress/vuepress-config.html",
    "revision": "a8f08fcc2b70c1dd8bc5ef6f1ee5c0cf"
  },
  {
    "url": "front-end/vue/vuepress/vuepress-guide.html",
    "revision": "c53d21edb9415f56d89ad6667c28f136"
  },
  {
    "url": "front-end/vue/vuepress/vuepress-theme.html",
    "revision": "ac21ae7dede320c6d1f56a7ab8e78dd5"
  },
  {
    "url": "img/icon.png",
    "revision": "a82100eb0d1dc969be5a4e30cff4f17c"
  },
  {
    "url": "index.html",
    "revision": "ffcc3e28680e17c0fccf6ce6f0cd4b62"
  },
  {
    "url": "note/index.html",
    "revision": "4aac539209ee62cdc541c6d4bf01fa49"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
