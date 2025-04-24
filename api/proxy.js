export default async (req, res) => {
  console.log('Received request for username:', req.query.username);
  try {
    const response = await fetch(`https://api.kaito.ai/api/v1/yaps?username=${req.query.username}`);
    console.log('Kaito API response status:', response.status);
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error('Proxy error:', error);
    res.status(500).json({ error: error.message });
  }
};
