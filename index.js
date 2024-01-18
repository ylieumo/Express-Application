const express = require("express")
const app = express();
const port = 3000;

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
})

// Define a route for the home page
app.get("/", (req, res) =>{
    res.send("Welcome to our family home page!");
});
// Define a route for /about
app.get("/about", (req, res) =>{
    res.send("This page is about us.");
});

app.get("/user", (req, res) =>{
    res.send("This is  our individual user page. ");
});

 // Define a route with multiple parameters
app.get("/user/:userName", (req, res) => {
    res.send(`This page will bring you t to the user page for: ${req.params.userName}.`);
  });

app.get("/user/:userID/activities", (req, res) => {
    res.send(`This page will direct you to the user activities page` );
  });

  app.get("/user/:userName/activities/:data", (req, res) => {
    res.send(
      `This page will direct you to the user activities pagee for ${req.params.userName}, and her favorite is ${req.params.data} for the family.`
    );
  });






 