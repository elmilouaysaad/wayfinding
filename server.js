const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 8000;

// Serve all static files (HTML, CSS, JS, images)
app.use(express.static(__dirname));

// API endpoint: returns list of images in idle-images folder
app.get('/api/idle-images', (req, res) => {
    const imagesDir = path.join(__dirname, 'idle-images');
    fs.readdir(imagesDir, (err, files) => {
        if (err) {
            return res.status(500).json({ error: 'Cannot read folder' });
        }
        // Keep only image files
        const images = files.filter(f => /\.(png|jpe?g|gif|webp|bmp|svg)$/i.test(f));
        // Return full URLs (relative to site root)
        const urls = images.map(f => `/idle-images/${f}`);
        res.json(urls);
    });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
    console.log(`Idle images API: http://localhost:${PORT}/api/idle-images`);
});