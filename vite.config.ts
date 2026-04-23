import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

const ZOHO_BASE = "https://www.zohoapis.com";

export default defineConfig({
  plugins: [
    react(),
    {
      name: "zoho-proxy",
      configureServer(server) {
        server.middlewares.use(async (req, res, next) => {
          if (!req.url?.startsWith("/api/zoho")) return next();

          try {
            const zohoPath = req.url.replace("/api/zoho", "");
            const zohoRes = await fetch(`${ZOHO_BASE}${zohoPath}`, {
              method: "POST",
            });
            const text = await zohoRes.text();
            res.writeHead(zohoRes.status, { "Content-Type": "application/json" });
            res.end(text);
          } catch (err) {
            res.writeHead(500, { "Content-Type": "application/json" });
            res.end(JSON.stringify({ error: String(err) }));
          }
        });
      },
    },
  ],
  server: {
    host: "::",
    port: 8080,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
