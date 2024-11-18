import express from 'express';

const app = express();

app.get('', (_req, res) => {
    return res.send('<b style="font-size: 24px;">Home</b>');
});

app.get('/about', (_req, res) => {
    return res.send('About');
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