/**
 * 口琴演奏家 - Service Worker
 * 提供离线缓存和 PWA 安装支持
 */

const CACHE_NAME = 'harmonica-cache-v2';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './style.css',
  './harmonicas.js',
  './songs.js',
  './app.js',
  './manifest.json',
  './icon-192.png',
  './icon-512.png'
];

// 安装阶段：缓存所有静态资源
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE).catch(err => {
        console.error('缓存部分资源失败:', err);
      });
    })
  );
  self.skipWaiting();
});

// 激活阶段：清理旧缓存
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.filter(name => name !== CACHE_NAME)
          .map(name => caches.delete(name))
      );
    })
  );
  self.clients.claim();
});

// 请求拦截：缓存优先策略
self.addEventListener('fetch', (event) => {
  const request = event.request;
  
  // 只处理 GET 请求
  if (request.method !== 'GET') return;
  
  event.respondWith(
    caches.match(request).then((cachedResponse) => {
      if (cachedResponse) {
        // 缓存命中，返回缓存，同时更新缓存（stale-while-revalidate）
        fetch(request).then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(request, networkResponse.clone());
            });
          }
        }).catch(() => {});
        return cachedResponse;
      }
      
      // 缓存未命中，从网络获取并缓存
      return fetch(request).then((networkResponse) => {
        if (!networkResponse || networkResponse.status !== 200 || networkResponse.type === 'opaque') {
          return networkResponse;
        }
        const responseClone = networkResponse.clone();
        caches.open(CACHE_NAME).then((cache) => {
          cache.put(request, responseClone);
        });
        return networkResponse;
      }).catch(() => {
        // 网络失败时尝试返回 index.html（SPA 回退）
        if (request.mode === 'navigate') {
          return caches.match('./index.html');
        }
        return new Response('网络连接失败，请检查网络设置', { 
          status: 503, 
          statusText: 'Network Error' 
        });
      });
    })
  );
});
