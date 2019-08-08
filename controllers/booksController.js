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
       // console.log('hi');
        var tempArray = []; //array holds books to be created, so that they can be created in one db.model.create
        db.Student
          .find()
          .then(function (studentArr) {
            //console.log(studentArr);
            studentArr.forEach(function (student) {

              var tempBook = {
                student_id: student._id,
                assignment_id: assignmentModel._id,
                student_name: student.name,
                due_date: assignmentModel.due_date,
                googlebook_id: assignmentModel.googlebook_id,
                book_name: assignmentModel.book_name,
                author: assignmentModel.author,
                book_length: assignmentModel.book_length
              };

              tempArray.push(tempBook);
            });

            console.log(tempArray);
            db.Book
              .create(tempArray)
              .then(res.json(assignmentModel))
              .catch(err => //res.status(422).json(err)
              console.log(err));


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
  login: async function (req, res) {

    var userid = await verify(req.body.id_token);

    db.Teacher
      .findOne({ google_id: userid })
      .then(function (dbModel) {

        if (dbModel) {

          res.json({ teacher: dbModel });

        } else {

          db.Student
            .findOne({ google_id: userid })
            .then(dbModel2 => {
              if(dbModel2){
                res.json({ student: dbModel2 })
              }
            })
            .catch(err => res.status(422).json(err));

        }

      })

      .catch(err => res.status(422).json(err));


  },
  //POST (X)
  createTeacher: async function (req, res) {

    var userid = await verify(req.body.id_token);
/*
{
  id_token: sessionStorage.getItem('idtoken'),
  name: JSON.parse(sessionStorage.getItem('google_profile')).fullName

}

*/
  if(userid){
    db.Teacher
      .create({
        google_id: userid,
        name: req.body.name
      })
      .then(res.json(true))
      .catch(err => console.log(err));
    }

  },
  //POST (X)
  createStudent: async function (req, res) {

    var userid = await verify(req.body.id_token);

    if(userid){
    db.Student
      .create({
        google_id: userid,
        name: req.body.name
      })
      .then(res.json(true))
      .catch(err => console.log(err));
    }
  }


};

async function verify(idToken) {

  const CLIENT_ID = '1093509902491-rq5f2e5ivb38ppepvtvkqg4fd6vojc48.apps.googleusercontent.com';
  const { OAuth2Client } = require('google-auth-library');
  const client = new OAuth2Client(CLIENT_ID);

  const ticket = await client.verifyIdToken({
      idToken: idToken,
      audience: CLIENT_ID,  // Specify the CLIENT_ID of the app that accesses the backend
      // Or, if multiple clients access the backend:
      //[CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3]
  })
      .catch(console.error);

  const payload = ticket.getPayload();
  const userid = payload['sub'];
  // If request specified a G Suite domain:
  //const domain = payload['hd'];

  return userid;



}