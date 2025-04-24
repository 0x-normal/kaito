export default async (req, res) => {
    const { username } = req.query;
    
    try {
        const response = await fetch(`https://api.kaito.ai/api/v1/yaps?username=${username}`);
        const data = await response.json();
        
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({
            error: 'Failed to fetch data from Kaito API'
        });
    }
};