export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const apiKey = process.env.ZOHO_API_KEY || process.env.VITE_ZOHO_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: "API key not configured" });
  }

  const rawBody = req.body ?? await new Promise((resolve, reject) => {
    const chunks = [];
    req.on("data", (chunk) => chunks.push(chunk));
    req.on("end", () => resolve(Buffer.concat(chunks).toString()));
    req.on("error", reject);
  });

  let payload = {};
  try {
    payload = typeof rawBody === "string" && rawBody.length > 0 ? JSON.parse(rawBody) : rawBody;
  } catch (error) {
    return res.status(400).json({ error: "Invalid JSON payload" });
  }

  const params = new URLSearchParams({
    auth_type: "apikey",
    zapikey: apiKey,
    ...payload,
  });

  const zohoRes = await fetch(
    `https://www.zohoapis.com/crm/v7/functions/get/actions/execute?${params.toString()}`,
    { method: "POST" }
  );

  const data = await zohoRes.json().catch(() => ({}));
  res.status(zohoRes.status).json(data);
}
