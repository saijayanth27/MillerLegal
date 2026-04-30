export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const payload = typeof req.body === "string" ? JSON.parse(req.body) : req.body;

  const params = new URLSearchParams({
    auth_type: "apikey",
    zapikey: "1003.65dfa4d29d3227093f32ace76bf71471.75ed2b039da2f1d997787cc328a14c16",
    ...payload,
  });

  const zohoRes = await fetch(
    `https://www.zohoapis.com/crm/v7/functions/millerlegalwebsite/actions/execute?${params.toString()}`,
    { method: "POST" }
  );

  const data = await zohoRes.json().catch(() => ({}));
  res.status(zohoRes.status).json(data);
}
