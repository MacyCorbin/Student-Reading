import axios from "axios";

export default {
   // Gets all books
  getBooks: function() {
    return axios.get("/api/books");
  },
  // Gets the book with the given id//changed to get a student's books
  getMyBooks: function(id) {
    return axios.get("/api/studentbooks/" + id);
  },
  updateBook: function(id, bookInfo){
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
  registerTeacher: function(teacherInfo){
    return axios.post("/api/registerTeacher", teacherInfo);
  },
  login: function(id_token){
    return axios.post("/api/login", {id_token: id_token});
  },
  //Search Google Books API

  searchBook: function(title){
    return axios.get("https://www.googleapis.com/books/v1/volumes?q="+title);
  },



  ///added for assignment pages

  registerStudent: function(studentInfo){
    return axios.post("api/registerStudent", studentInfo);
  }


  //Separate API

/*getBooks: () => {
    return axios.get("/api/assignments");
},
/* searchBooks: (title) => {
  console.log("This the title in util API"+ " " + title);
    //return axios.post("/search", {title: title});
    return axios.post("/Search", "IT WORKS");
},

createAssignment: function(assignmentInfo){
  return axios.post("/api/assignments", assignmentInfo)
},


addBookToDB: (bookData) => {
   
    return axios.post("/api/assignments", bookData);
},
deleteBook: (id) => {
    return axios.delete(`/api/assignments/${id}`);
},
 
};*/

 
}