const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors())
const port = process.env.PORT || 5000;
const courses = require('./data/courses.json')

app.get('/', (req, res) => {
    res.send(`server is running on port ${port}`)
})

app.get('/courses', (req, res) => {
    res.send(courses)
})

app.get('/courses/:category', (req, res) => {
    const category = req.params.category
    const selected = courses.filter(course => course.category.toLowerCase() === category || course.category.toUpperCase() === category)
    res.send(selected)
})




app.listen(port, () => {
    console.log('server listening on port', port);
})