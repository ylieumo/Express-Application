// Import the Express module
const express = require("express")
// Create an instance of the Express application
const app = express();
// Import the EJS view engine
const ejs = require('ejs');

// Set EJS as the view engine
app.set('view engine', 'ejs');

const port = 3000;


// Use the custom middleware for all routes
app.use(middleware)

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
})

// // Define a route for the home page

app.get("/", (req, res) =>{
    res.render('index');
});

// // Define a route for /about 
app.get("/about", (req, res) =>{
    res.render(" about");
});

app.get("/user/:userName", (req, res) => {
    res.render(`userName`);
  });

  app.get("/blogs/create", (req, res) =>{
    res.render('create')
  })

  app.use((req, res) =>{
    res.status(404).render( '404' )
  });


    
  // Custom middleware function
  function middleware (req, res, next) {
    console.log('The page wxiste');
    next(); // Call the next middleware in the stack
  };

 