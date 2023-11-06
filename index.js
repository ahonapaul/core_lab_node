//importing express library and assign to variable
import express from 'express'

//creating an instance of express application
const app = express();

//setting the port the application will run on
const port = process.env.PORT || 3001;

//setting up response for the root path of the application
app.get('/',(req,res) => {
  res.send("Make a shapeless blob floating through the web");
})

//setting up application to listen on the specified port
app.listen(port, () =>{
  console.log(`Example app listening on port ${port}`);
})