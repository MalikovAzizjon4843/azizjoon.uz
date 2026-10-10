import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'

// Serves api/contact.js during `npm run dev` with the same handler Vercel
// runs in production. Server-only TELEGRAM_* variables are read from .env*
// into process.env; they never reach the client bundle (Vite only exposes
// VITE_* variables there).
function devContactApi() {
  return {
    name: 'dev-contact-api',
    apply: 'serve',
    configureServer(server) {
      Object.assign(process.env, loadEnv(server.config.mode, process.cwd(), 'TELEGRAM_'))
      server.middlewares.use('/api/contact', async (req, res) => {
        let raw = ''
        for await (const chunk of req) raw += chunk
        req.body = raw
        res.status = (code) => {
          res.statusCode = code
          return res
        }
        res.json = (data) => {
          res.setHeader('Content-Type', 'application/json')
          res.end(JSON.stringify(data))
        }
        try {
          const { default: handler } = await server.ssrLoadModule('/api/contact.js')
          await handler(req, res)
        } catch (err) {
          server.config.logger.error(`[dev-contact-api] ${err?.stack || err}`)
          if (!res.writableEnded) res.status(500).json({ ok: false, error: 'server' })
        }
      })
    }
  }
}

export default defineConfig({
  plugins: [vue(), devContactApi()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    // three.js (~550 kB) lives in its own lazily loaded GemBadge chunk.
    chunkSizeWarningLimit: 600
  }
})
