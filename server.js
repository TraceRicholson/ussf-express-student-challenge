const express = require('express')
const app = express()
const port = 3000
const students = require('./students.json')
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

app.get('/students', (req, res) => {

  res.send(students)
})

app.get('/students/:studentId', (req, res) => {

  res.send(students[req.params.studentId])

})

app.get('/grades/:studentId', (req, res) => {

  res.send(students[req.params.studentId.grades])

})

app.post('/grades/', (req, res) => {
  if (req.body.grade && req.body.studentId) {
  res.send("The student's grade has been updated!")
  } else {
    res.send("Please supply both a grade and student ID.")
  }

})

app.post('/register/', (req, res) => {
  if (req.body.email && req.body.username) {
  res.send("The student has been added into the system.")
  } else {
    res.send("Please supply both an email and username.")
  }

})

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})