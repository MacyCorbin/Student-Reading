require("dotenv").config();
const axios = require("axios");
const db = require("../models");
const path = require("path");

module.exports = function(app) {
    app.get("/api/assignments", (req, res) => {
        db.Assignment.find().then(
            (booksData) => {
                res.json(booksData);
                console.log(response);
            }
        ).catch(
            (err) => {
                res.json({error: err});
            }
        );
    });

    app.post("/search", (req, res) => {
        // set bookTitle to the req.body.title with spaces replaced with plus signs(+)
        let bookTitle = req.body.title.replace(/\s/g, "+");
        axios.get(
            `https://www.googleapis.com/books/v1/volumes?q=${bookTitle}&key=${process.env.GBOOKS_KEY}`
        ).then(
            (response) => {
                res.json(response.data.items)
                console.log("it works");
                console.log(response.data.items);
            }
        ).catch(
            (err) => {
                res.json({error: error})
            }
        );
    });

    app.post("/api/assignments", (req, res) => {
       // let date = req.body.due_date;
        db.Assignment.create(req.body).then(
            (response) => {
                res.json({successful: response});
                console.log (response);
            }
        ).catch(
            (err) => {
                res.json({error: err});
            }
        );
    });

    app.delete("/api/assignments/:id", (req, res) => {
        db.Assignment.findByIdAndDelete(req.params.id).then(
            (response) => {
                res.json({successful: response});
            }
        ).catch(
            (err) => {
                rres.json({error: err});
            }
        );
    });

    // Send every other request to the React app
    // Define any API routes before this runs
    app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
    });
}