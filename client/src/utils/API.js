import axios from "axios";

export default {
  // Gets all books
  getBooks: function() {
    return axios.get("/api/books");
  },
  // Gets the book with the given id
  getBook: function(id) {
    return axios.get("/api/studentbooks/" + id);
  },
  updateBook: function(bookInfo, id){
    return axios.put("/api/studentbooks/" + id, bookInfo);
  },
  // Deletes the book with the given id
  getAssignments: function(){
    return axios.get("/api/assignments");
  },
  createAssignment: function(assignmentInfo){
    return axios.post("/api/assignments", assignmentInfo)
  },
  deleteAssignment: function(id) {
    return axios.delete("/api/assignments/" + id);
  },
  // Saves a book to the database
  login: function(loginInfo) {
    return axios.post("/api/login", loginInfo);
  },
  registerTeacher: function(teacherInfo){
    return axios.post("/api/registerTeacher", teacherInfo);
  },
  registerStudent: function(studentInfo){
    return axios.post("api/registerStudent", studentInfo);
  },
  //Search Google Books API
  searchBook: function(title){
    return axios.get("https://www.googleapis.com/books/v1/volumes?q="+title);
  }
};