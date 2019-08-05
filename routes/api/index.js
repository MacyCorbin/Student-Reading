const router = require("express").Router();
const booksController = require("../../controllers/booksController");

// All routes begin with /api

router.route("/books") //(X)
  .get(booksController.findAllBooks)

router
  .route("/studentbooks/:id") //(X)
  .get(booksController.findBooksByStudentId)
  .put(booksController.updateBook)

router
    .route("/assignments") //(X)
    .get(booksController.findAllAssignments)
    .post(booksController.createAssignment)

router
    .route("/assignments/:id") //(X)
    .delete(booksController.deleteAssignment)

router
    .route("/login") //(X)
    .post(booksController.login)

router
    .route("/registerTeacher") //(X)
    .post(booksController.createTeacher)

router
    .route("/registerStudent") // (X)
    .post(booksController.createStudent)


module.exports = router;
