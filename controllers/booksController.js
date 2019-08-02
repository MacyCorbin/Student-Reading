const db = require("../models");

// Defining methods for the booksController
module.exports = {
  //GET (X)
  findAllBooks: function (req, res) {
    db.Book
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  //GET (X)
  findBooksByStudentId: function (req, res) {
    db.Book
      .find({ student_id: req.params.id })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  //POST (X)
  createAssignment: function (req, res) {
    db.Assignment
      .create(req.body)
      .then(function (assignmentModel) {

        var tempArray = []; //array holds books to be created, so that they can be created in one db.model.create

        db.Student
          .find()
          .then(function (studentArr) {

            studentArr.forEach(function (student) {

              var tempBook = {
                student_id: student._id,
                assignment_id: assignmentModel._id,
                student_name: student.name,
                due_date: assignmentModel.due_date
              };

              tempArray.push(tempBook);
            });

            db.Book
              .create(tempArray)
              .then(res.json(assignmentModel))
              .catch(err => res.status(422).json(err));


          })
          .catch(err => res.status(422).json(err));


      })
      .catch(err => res.status(422).json(err));



  },
  //GET (X)
  findAllAssignments: function (req, res) {
    db.Assignment
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  //DELETE, id in url (X)
  deleteAssignment: function (req, res) {
    db.Assignment
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));

    db.Book.remove({ assignment_id: req.params.id });

  },
  //PUT, id in url (X)
  updateBook: function (req, res) {

    db.Book
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));

  },
  //POST (X), don't want username and password in url, which would happen i think
  login: function (req, res) {

    var username = req.body.username;
    var password = req.body.password;

    db.Teacher
      .findOne({ username: username, password: password })
      .then(function (dbModel) {

        if (dbModel) {

          res.json(dbModel);

        } else {

          db.Student
            .findOne({ username: username, password: password })
            .then(dbModel => (res.json(dbModel)))
            .catch(err => res.status(422).json(err));

        }

      })

      .catch(err => res.status(422).json(err));


  },
  //POST (X)
  createTeacher: function (req, res) {

    db.Teacher
      .create({
        username: req.body.username,
        name: req.body.name,
        password: req.body.password
      })

  },
  //POST (X)
  createStudent: function (req, res) {

    db.Student
      .create({
        username: req.body.username,
        name: req.body.name,
        password: req.body.password,
        lexile: req.body.lexile
      })

  }
};
