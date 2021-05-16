'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/Amatic.ttf": "8ba765ce9580a3bdae76b59130d0ef8a",
"assets/articulo.jpg": "74082f1a8383865b96b92856d98c4c3c",
"assets/AssetManifest.json": "ec235912bb64e81360bb57154d48f7af",
"assets/assets/Amatic.ttf": "8ba765ce9580a3bdae76b59130d0ef8a",
"assets/assets/articulo.jpg": "74082f1a8383865b96b92856d98c4c3c",
"assets/assets/cara.png": "3ae6a97845b13d33349712c720c43acb",
"assets/assets/doctoralia.png": "176503071fbe20c63fde9a63f8f50c6a",
"assets/assets/doctoralia2.png": "47a8421930f4d5a26a391e56c10820b8",
"assets/assets/facebook.png": "ad973f532bbed9c4986822a4b5d64714",
"assets/assets/facebook2.png": "ac42b1914a1af5b06df5704d3851cb20",
"assets/assets/Hoja.png": "a82cba691e9cf1393c1efc24f6ce8cc0",
"assets/assets/Hoyo.png": "5e1ecec975749a1f50ec1aefc4e12081",
"assets/assets/instagram.png": "3df131aeffdb13b58b3c41ddd4281249",
"assets/assets/instagram2.png": "3667cf35a7bd6817797b8102369ad033",
"assets/assets/landingpc.gif": "89ecc4544905a70168becfef25fb3274",
"assets/assets/landingphone.gif": "874430b5e950d0e1ed9dd9deaabe286a",
"assets/assets/libro.jpg": "d62302148918b23134a62ce00481318e",
"assets/assets/linkedin.png": "d2b8e761b665ccbc3faf10d093110cf5",
"assets/assets/linkedin2.png": "e14b8792ab980284bac733e5d44e3a75",
"assets/assets/logo-cuadrado.png": "8fd29ced10a7a1fff4bf29d6ce07c6fb",
"assets/assets/logo.png": "3b5c0fc4223d1c27d47d5471db1aed9f",
"assets/assets/Mano.png": "3c4034aed3577f586856e8936afd9e61",
"assets/assets/ninos.png": "d30dd99325df751c6d87b18cfee52934",
"assets/assets/Ola.jpg": "f0880328a1ec141232c02d7b7e98e6bf",
"assets/assets/patri.png": "971fe175f90aa4f56c655b04394e0156",
"assets/assets/Quicksand-Regular.ttf": "216d43ee8707910af457af569eda1dec",
"assets/assets/Quicksand-SemiBold.ttf": "c82b184bf7450e14adccb7b0d6117474",
"assets/assets/recurso1.jpg": "572510080ca50979c577ef4417ed6ce4",
"assets/assets/recurso2.jpg": "fe8650a676ac5eeffd86f68396359f96",
"assets/assets/recurso3.jpg": "44140c42ab32ebc2aba6f527179a7406",
"assets/assets/recurso4.jpg": "877d1ab5dd4a7c6bb2c5a314ef34d721",
"assets/assets/recurso5.jpg": "8209ae6ea3fae874e0913f805a9882a3",
"assets/assets/recurso6.jpg": "8005d8e9fed5aad9244b37e2317ce3f6",
"assets/assets/recurso7.jpg": "8ef966110afdc0db6b218038c21eaa0a",
"assets/assets/rejas.png": "850080730795402503bacb50ae2ee7a9",
"assets/assets/sanitarios.png": "cdcd4337143d0fea6d88473c2b3882b9",
"assets/assets/taller1.jpg": "967b9ef679a912b6d478dfaee1214a3f",
"assets/assets/taller2.jpg": "37b3901fa29a18aa67bb8e9054d60b66",
"assets/assets/taller3.jpg": "7c52a2217ce9a14fbe04835d58afb51f",
"assets/assets/taller4.jpg": "ca6d5fa700929c94ea7699b4f3979192",
"assets/assets/taller5.jpg": "c535e338627417303c4489a21dbacd83",
"assets/assets/taller6.jpg": "b40c30504a63abf0ec80341b950c82f5",
"assets/assets/taller7.jpg": "8e186fe4d5ae73e19a98c9babe54e887",
"assets/assets/taller8.jpg": "46021b4f1f6f9df6af8fa7c1b4416c02",
"assets/assets/taller9.jpg": "c46d6818652b45391f2a941e2fa386c1",
"assets/assets/twitter.png": "88731d9b11b30aff3f155d9d6d87b9df",
"assets/assets/twitter2.png": "e16b5983fa5e6863a43b0759efd1bdad",
"assets/assets/whatsapp.png": "3ffdd6106ddeddba9214d399879b0d08",
"assets/assets/whatsapp2.png": "c60c77e33cee8b54edbc5aee80bda39a",
"assets/assets/whatsapp3.png": "564acb039c7b28fe9da12bb2bdfb7a74",
"assets/cara.png": "3ae6a97845b13d33349712c720c43acb",
"assets/doctoralia.png": "176503071fbe20c63fde9a63f8f50c6a",
"assets/doctoralia2.png": "47a8421930f4d5a26a391e56c10820b8",
"assets/facebook.png": "ad973f532bbed9c4986822a4b5d64714",
"assets/facebook2.png": "ac42b1914a1af5b06df5704d3851cb20",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/Hoja.png": "a82cba691e9cf1393c1efc24f6ce8cc0",
"assets/Hoyo.PNG": "5e1ecec975749a1f50ec1aefc4e12081",
"assets/instagram.png": "3df131aeffdb13b58b3c41ddd4281249",
"assets/instagram2.png": "3667cf35a7bd6817797b8102369ad033",
"assets/landingpc.gif": "89ecc4544905a70168becfef25fb3274",
"assets/landingphone.gif": "874430b5e950d0e1ed9dd9deaabe286a",
"assets/libro.JPG": "d62302148918b23134a62ce00481318e",
"assets/linkedin.png": "d2b8e761b665ccbc3faf10d093110cf5",
"assets/linkedin2.png": "e14b8792ab980284bac733e5d44e3a75",
"assets/logo-cuadrado.png": "8fd29ced10a7a1fff4bf29d6ce07c6fb",
"assets/logo.png": "3b5c0fc4223d1c27d47d5471db1aed9f",
"assets/Mano.png": "3c4034aed3577f586856e8936afd9e61",
"assets/ninos.png": "d30dd99325df751c6d87b18cfee52934",
"assets/NOTICES": "ddb0f7664b089c233e45676bce845b96",
"assets/Ola.jpg": "f0880328a1ec141232c02d7b7e98e6bf",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/patri.png": "971fe175f90aa4f56c655b04394e0156",
"assets/Quicksand-Regular.ttf": "216d43ee8707910af457af569eda1dec",
"assets/Quicksand-SemiBold.ttf": "c82b184bf7450e14adccb7b0d6117474",
"assets/recurso1.jpg": "572510080ca50979c577ef4417ed6ce4",
"assets/recurso2.jpg": "fe8650a676ac5eeffd86f68396359f96",
"assets/recurso3.jpg": "44140c42ab32ebc2aba6f527179a7406",
"assets/recurso4.jpg": "877d1ab5dd4a7c6bb2c5a314ef34d721",
"assets/recurso5.jpg": "8209ae6ea3fae874e0913f805a9882a3",
"assets/recurso6.jpg": "8005d8e9fed5aad9244b37e2317ce3f6",
"assets/recurso7.jpg": "8ef966110afdc0db6b218038c21eaa0a",
"assets/rejas.png": "850080730795402503bacb50ae2ee7a9",
"assets/sanitarios.png": "cdcd4337143d0fea6d88473c2b3882b9",
"assets/taller1.jpg": "967b9ef679a912b6d478dfaee1214a3f",
"assets/taller2.jpg": "37b3901fa29a18aa67bb8e9054d60b66",
"assets/taller3.jpg": "7c52a2217ce9a14fbe04835d58afb51f",
"assets/taller4.jpg": "ca6d5fa700929c94ea7699b4f3979192",
"assets/taller5.jpg": "c535e338627417303c4489a21dbacd83",
"assets/taller6.jpg": "b40c30504a63abf0ec80341b950c82f5",
"assets/taller7.jpg": "46021b4f1f6f9df6af8fa7c1b4416c02",
"assets/taller8.jpg": "8e186fe4d5ae73e19a98c9babe54e887",
"assets/taller9.jpg": "c46d6818652b45391f2a941e2fa386c1",
"assets/twitter.png": "88731d9b11b30aff3f155d9d6d87b9df",
"assets/twitter2.png": "e16b5983fa5e6863a43b0759efd1bdad",
"assets/whatsapp.png": "3ffdd6106ddeddba9214d399879b0d08",
"assets/whatsapp2.png": "c60c77e33cee8b54edbc5aee80bda39a",
"assets/whatsapp3.png": "564acb039c7b28fe9da12bb2bdfb7a74",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "a13b29220d3427e0a9fe65637af32fdc",
"/": "a13b29220d3427e0a9fe65637af32fdc",
"main.dart.js": "5fbcf82da6a5b1dfc863d2f9de41cd1e",
"manifest.json": "95c9039bbfe33afa1588bfc299a97f24",
"version.json": "4c32bec2c6c02c2ccef5d8aaba289ff5"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
