export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const payload = typeof req.body === "string" ? JSON.parse(req.body) : req.body;

  const params = new URLSearchParams({
    auth_type: "apikey",
    zapikey: "1003.123ce72d66630ce49b8bc65f668178d0.a69b4efbf1bbc9eae15087b1f4b9cbe8",
    ...payload,
  });

  const zohoRes = await fetch(
    `https://www.zohoapis.com/crm/v7/functions/get/actions/execute?${params.toString()}`,
    { method: "POST" }
  );

  const data = await zohoRes.json().catch(() => ({}));
  res.status(zohoRes.status).json(data);
}
