const express = require('express')
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());


const courses = require('./data/courses.json');
const coursedetails = require('./data/coursedetails.json');


app.get('/courses', (req, res) => {
    res.send(courses)
  })

app.get('/courses/:id', (req, res) => {
   
    const id = req.params.id;
    const category_news = coursedetails.filter(n => n.category_id === id);
    res.send(category_news);

})
    
  app.listen(port, () => {
    console.log(`Example app listening on the port ${port}`)
  })