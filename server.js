const express = require('express');
const path = require('path')
const dotenv = require('dotenv')
const mongoose = require('mongoose');

dotenv.config({ path: ".env" })

const Bug = require('./src/models/Bug');
const url = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.j0hsi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = mongoose.connect(url, { useNewUrlParser: true })
const db = mongoose.connection

db.once('open', _ => {
    console.log('Database connected:', url)
});

db.on('error', err => {
    console.error('Connection error:', err)
})

const app = express();
const port = 5000;

app.use(express.json())

app.use(express.static(path.join(__dirname, 'client/build')));

app.get('/bugs', async (req, res) => {
    const bugs = await Bug.find({})
    res.json(bugs);
});

app.post('/bugs', async (req, res) => {

    const newBug = req.body

    const bug = new Bug(newBug);
    const doc = await bug.save()

    res.json(doc);
})

app.get('/bugs/:id', async (req, res) => {
    const bug = await Bug.findById(req.params.id);
    res.json(bug);
})

app.delete('/bugs/:id', async (req, res) => {
    await Bug.findOneAndRemove({_id: req.params.id });
    const bugs = await Bug.find({});
    res.json(bugs);
})

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});