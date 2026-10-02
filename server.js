const fs = require('fs');
const path = require('path');
const express = require('express');
const jsonServer = require('json-server');

const app = express();
const port = Number(process.env.PORT || 3000);
const dataDir = process.env.DATA_DIR || path.join(__dirname, 'data');
const dbFile = path.join(dataDir, 'db.json');

fs.mkdirSync(dataDir, { recursive: true });
if (!fs.existsSync(dbFile)) {
  fs.copyFileSync(path.join(__dirname, 'db.json'), dbFile);
}

app.use('/api', jsonServer.defaults());
app.use('/api', jsonServer.bodyParser);
app.use('/api', jsonServer.router(dbFile));

app.use('/assets', express.static(path.join(__dirname, 'assets')));
app.use(express.static(__dirname, { index: false, dotfiles: 'deny' }));
app.get('*', (_req, res) => res.sendFile(path.join(__dirname, 'index.html')));

app.listen(port, '0.0.0.0', () => {
  console.log(`Os Guardiões listening on ${port}; data: ${dbFile}`);
});
