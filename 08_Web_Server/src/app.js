import path from 'path';
import express from 'express';
import hbs from 'hbs';

import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const public_path = path.join(__dirname, '..', 'public');
const views_path = path.join(__dirname, '..', 'views/pages');
const partials_path = path.join(__dirname, '..', 'views/_partials');

const app = express();

app.set('view engine', 'hbs');
app.set('views', views_path);

hbs.registerPartials(partials_path);

app.use(express.static(public_path));

app.get('', (_req, res) => {
    res.render('index', {
        title: 'Home',
        content: 'Welcome, Khaled Allam'
    });
});

app.get('/about', (_req, res) => {
    res.render('about', {
        title: 'About',
        content: 'About page content...'
    });
});

app.get('/support', (_req, res) => {
    res.render('support', {
        title: 'Support',
        content: 'Support page content...'
    });
});

app.get('/weather', (_req, res) => { 
    return res.send('Weather');
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