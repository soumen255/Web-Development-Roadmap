const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

const PUBLIC_DIR = path.join(__dirname, 'public');
const CREATED_DIR = path.join(__dirname, 'created_files');

app.use(express.static(PUBLIC_DIR));
app.use(express.json());

// Serve newly created files
app.use('/created', express.static(CREATED_DIR));

app.post('/create', (req, res) => {
    const { fileName } = req.body;
    const cleanName = fileName.replace(/\s+/g, '_');

    const newFilePath = path.join(CREATED_DIR, `${cleanName}.html`);
    const newFileContent = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>${cleanName}</title>
    <link rel="stylesheet" href="/default.css">
</head>
<body>
    <h1>Welcome to ${cleanName}</h1>
</body>
</html>`;

    fs.writeFileSync(newFilePath, newFileContent);

    // Update index.html with new button
    const indexPath = path.join(PUBLIC_DIR, 'index.html');
    let indexHtml = fs.readFileSync(indexPath, 'utf-8');
    const newButton = `<button onclick="window.location.href='/created/${cleanName}.html'">${cleanName}</button>\n`;
    indexHtml = indexHtml.replace('</div>', newButton + '</div>');
    fs.writeFileSync(indexPath, indexHtml);

    res.json({ success: true });
});

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
