
## 🚀 Run Locally

To run Kalea Timer:

1. Clone or download this repo.
2. Open `index.html` in your browser (use Live Server or a simple HTTP server for service worker to work).
3. For offline support, ensure the service worker is registered correctly.

## 📲 Install Instructions (as a PWA)

- On **Chrome (desktop)**: Click install icon in address bar.
- On **Android Chrome**: Tap menu → "Install App".
- On **Safari iOS**: Tap Share → "Add to Home Screen".

## 🌐 Hosting for Free

Recommended platforms:

- [GitHub Pages](https://pages.github.com/)
- [Netlify](https://www.netlify.com/)
- [Vercel](https://vercel.com/)
- [Firebase Hosting](https://firebase.google.com/products/hosting)

## 📄 manifest.json Preview

```json
{
  "name": "Kalea Timer",
  "short_name": "Kalea",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#1e1e1e",
  "theme_color": "#1e1e1e",
  "icons": [
    {
      "src": "/icon.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "/icon.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ]
}

🌟 Inspiration

Named in quiet honor of two stars whose names form a secret constellation.
Built as a gift to the future — one Pomodoro at a time.
