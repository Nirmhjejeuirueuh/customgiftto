import https from 'https';
import fs from 'fs';
import path from 'path';

const blogImagesDir = 'b:/Projects/Work/Axcer/customgiftto/src/assets/images/blog/';

// Unsplash IDs for relevant photos - using guaranteed active IDs
const images = {
    '1.jpg': 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1200', // Study group
    '2.jpg': 'https://images.unsplash.com/photo-1513201099705-a9746e1e201f?q=80&w=1200', // Gift Box
    '3.jpg': 'https://images.unsplash.com/photo-1512909006721-3d6018887383?q=80&w=1200', // Christmas Gift
    '4.jpg': 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=1200', // Education/Study
    '5.jpg': 'https://images.unsplash.com/photo-1511174511562-5f7f18b874f8?q=80&w=1200', // Gifts
    '6.jpg': 'https://images.unsplash.com/photo-1513201099705-a9746e1e201f?q=80&w=1200'  // Wrapped Gift
};

async function downloadImage(url, filename) {
    return new Promise((resolve, reject) => {
        const fullPath = path.join(blogImagesDir, filename);
        const file = fs.createWriteStream(fullPath);

        https.get(url, (response) => {
            if (response.statusCode >= 300 && response.statusCode < 400 && response.headers.location) {
                // Handle redirects
                downloadImage(response.headers.location, filename).then(resolve).catch(reject);
                return;
            }

            if (response.statusCode !== 200) {
                reject(new Error(`Failed to download ${filename}: Status ${response.statusCode}`));
                return;
            }

            response.pipe(file);
            file.on('finish', () => {
                file.close();
                const stats = fs.statSync(fullPath);
                console.log(`✅ Downloaded ${filename} (${stats.size} bytes)`);
                resolve();
            });
        }).on('error', (err) => {
            fs.unlink(fullPath, () => {}); // Delete partial file
            reject(err);
        });
    });
}

async function start() {
    console.log('🚀 Starting image downloads...');
    
    if (!fs.existsSync(blogImagesDir)) {
        fs.mkdirSync(blogImagesDir, { recursive: true });
    }

    const tasks = Object.entries(images).map(([filename, url]) => downloadImage(url, filename));
    
    try {
        await Promise.all(tasks);
        console.log('✨ All images downloaded successfully.');
    } catch (err) {
        console.error('❌ Error during downloads:', err.message);
    }
}

start();
