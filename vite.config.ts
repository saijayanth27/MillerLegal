import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const zohoApiKey = env.ZOHO_API_KEY || env.VITE_ZOHO_API_KEY;

  return {
    plugins: [
      react(),
      {
        name: "zoho-proxy",
        configureServer(server) {
          server.middlewares.use(async (req, res, next) => {
            if (!req.url?.startsWith("/api/zoho")) return next();

            if (!zohoApiKey) {
              res.writeHead(500, { "Content-Type": "application/json" });
              res.end(JSON.stringify({ error: "API key not configured" }));
              return;
            }

            try {
              const chunks: Buffer[] = [];
              for await (const chunk of req as any) chunks.push(chunk);
              const parsed = JSON.parse(Buffer.concat(chunks).toString());

              const params = new URLSearchParams({
                auth_type: "apikey",
                zapikey: zohoApiKey,
                ...parsed,
              });

              const zohoRes = await fetch(
                `https://www.zohoapis.com/crm/v7/functions/get/actions/execute?${params.toString()}`,
                { method: "POST" }
              );
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
  };
});
