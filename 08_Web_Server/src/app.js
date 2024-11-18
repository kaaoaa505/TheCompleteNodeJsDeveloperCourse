import path from 'path';
import express from 'express';

import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const public_path = path.join(__dirname, '..', 'public');

const app = express();
app.use(express.static(public_path));

app.get('', (_req, res) => {
    res.sendFile(path.join(public_path, 'index.html'));
});

app.get('/about', (_req, res) => {
    res.sendFile(path.join(public_path, 'about.html'));
});

app.get('/support', (_req, res) => {
    res.sendFile(path.join(public_path, 'support.html'));
});

app.get('/weather', (_req, res) => { 
    return res.send('Weather');
});

app.get('/support', (_req, res) => {
    return res.send('support');
});

app.get('/json', (_req, res) => {
    return res.send([{
        name: 'Khaled',
        age: 35
    },{
        name: 'Allam',
        age: 75
    }]);
});

app.listen(3000, ()=>{
    console.log('server is running http://localhost:3000');
});