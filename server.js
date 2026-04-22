const express = require('express');
const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

const app = express();
const PORT = 8000;

// ---------------------------
// Configuration
// ---------------------------
const IDLE_IMAGES_DIR = path.join(__dirname, 'idle-images');
const RCLONE_SYNC_INTERVAL_MS = 60000; // 60 seconds
// Change this to your rclone remote and path
// Example: 'myremote:/campus-idle-images'
const RCLONE_REMOTE = 'test:Images';

// ---------------------------
// Ensure the idle-images directory exists
// ---------------------------
if (!fs.existsSync(IDLE_IMAGES_DIR)) {
    fs.mkdirSync(IDLE_IMAGES_DIR, { recursive: true });
}

// ---------------------------
// Function to run rclone sync
// ---------------------------
function runRcloneSync() {
    console.log(`[${new Date().toISOString()}] Running rclone sync from ${RCLONE_REMOTE} to ${IDLE_IMAGES_DIR} ...`);
    exec(`rclone sync "${RCLONE_REMOTE}" "${IDLE_IMAGES_DIR}" --delete-after --progress`, (error, stdout, stderr) => {
        if (error) {
            console.error(`rclone error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.warn(`rclone stderr: ${stderr}`);
        }
        console.log(`[${new Date().toISOString()}] rclone sync completed.`);
        // Optional: log stdout if needed (can be verbose)
        // console.log(stdout);
    });
}

// ---------------------------
// Start periodic rclone sync
// ---------------------------
// Run once immediately on startup
runRcloneSync();
// Then schedule every 60 seconds
setInterval(runRcloneSync, RCLONE_SYNC_INTERVAL_MS);

// ---------------------------
// Serve static files (HTML, CSS, JS, images)
// ---------------------------
app.use(express.static(__dirname));

// ---------------------------
// API endpoint: return list of images in idle-images folder
// ---------------------------
app.get('/api/idle-images', (req, res) => {
    fs.readdir(IDLE_IMAGES_DIR, (err, files) => {
        if (err) {
            return res.status(500).json({ error: 'Cannot read folder' });
        }
        // Filter only image files
        const imageFiles = files.filter(file => /\.(png|jpe?g|gif|webp|bmp|svg)$/i.test(file));
        // Return full URLs relative to site root
        const imageUrls = imageFiles.map(file => `/idle-images/${file}`);
        res.json(imageUrls);
    });
});

// ---------------------------
// Start the server
// ---------------------------
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
    console.log(`Idle images API: http://localhost:${PORT}/api/idle-images`);
    console.log(`Rclone sync will run every ${RCLONE_SYNC_INTERVAL_MS / 1000} seconds.`);
});