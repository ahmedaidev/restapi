const pool = require('./db')
const queries = require('./queries')

const getStudents = (req, res) => {
  pool.query(queries.getStudents, (errors, results) => {
    if (errors) throw errors
    res.status(200).json(results.rows)
  })
}

const getStudentById = (req, res) => {
  const id = +req.params.id

  pool.query(queries.getStudentById, [id], (errors, results) => {
    if (errors) throw errors
    res.status(200).json(results.rows)
  })
}

const addStudent = (req, res) => {
  const { name, email, age, dob } = req.body
  // Check if email exists
  pool.query(queries.checkEmailExists, [email], (errors, results) => {
    if (results.rows.length) {
      res.status(400).send('Email already exists!')
    }

    // Add student to db
    pool.query(
      queries.addStudent,
      [name, email, +age, dob],
      (errors, results) => {
        if (errors) throw errors
        res.status(201).json({ success: 'Student created' })
      }
    )
  })
}

const removeStudent = (req, res) => {
  const id = +req.params.id

  pool.query(queries.getStudentById, [id], (errors, results) => {
    console.log(results.rows.length)
    const student = results.rows.length
    if (!student) {
      res.status(400).send('No Student Found')
    }

    pool.query(queries.removeStudent, [id], (errors, results) => {
      if (errors) throw errors
      res.status(200).json({ success: 'Student deleted' })
    })
  })
}

const updateStudent = (req, res) => {
  const id = +req.params.id
  const { name } = req.body

  pool.query(queries.getStudentById, [id], (errors, results) => {
    const student = results.rows.length
    if (!student) {
      res.status(400).send('No Student Found')
    }

    pool.query(queries.updateStudent, [name, id], (errors, results) => {
      if (errors) throw errors
      res.status(200).json({ success: 'Student updated' })
    })
  })
}

module.exports = {
  getStudents,
  getStudentById,
  addStudent,
  removeStudent,
  updateStudent,
}
