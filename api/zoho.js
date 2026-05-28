export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const apiKey = process.env.VITE_ZOHO_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: "API key not configured" });
  }

  const payload = typeof req.body === "string" ? JSON.parse(req.body) : req.body;

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
