const fs = require('fs');
const path = require('path');
const jsonServer = require('json-server');

const app     = jsonServer.create();
const port    = Number(process.env.PORT || 3000);
const dataDir = process.env.DATA_DIR || path.join(__dirname, 'data');
const dbFile  = path.join(dataDir, 'db.json');
fs.mkdirSync(dataDir, { recursive: true });
if (!fs.existsSync(dbFile)) fs.copyFileSync(path.join(__dirname, 'db.json'), dbFile);

app.use(jsonServer.defaults({ noCors: false }));
app.use(jsonServer.bodyParser);
app.use('/api', jsonServer.router(dbFile));
app.use(expressStatic());
app.get('*', (_req, res) => res.sendFile(path.join(__dirname, 'index.html')));
app.listen(port, '0.0.0.0', () => console.log(`Os Guardiões listening on ${port}; data: ${dbFile}`));

function expressStatic() {
  return require('express').static(__dirname);
}
