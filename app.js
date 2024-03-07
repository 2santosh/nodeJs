const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

// Use express.urlencoded for parsing application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));


  
  // Enable CORS for all routes with the specified options
  app.use(cors());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());

// Store registered tasks
const tasks = [];
// POST endpoint for registering users
app.post('/', (req, res) => {
  const currentTask = [];
  
     if(req.body.fname != ''){
      currentTask.push(req.body.fname);
      currentTask.push(req.body.gmail);
      currentTask.push(req.body.task);
      currentTask.push(req.body.date);
     }
     tasks.push(currentTask);
     console.log(currentTask);
    // console.log(tasks);
    // Check if req.body.gmail exists and is a non-empty string
    // if (req.body.gmail && typeof req.body.gmail === 'string' && req.body.gmail.trim() !== '') {
    //     const userEmail = req.body.gmail;

    //     // Check if the email ends with '@gmail.com'
    //     if (userEmail.endsWith('@gmail.com')) {
    //         // Check if the user with the same email is already registered
    //         const isAlreadyRegistered = tasks.some(task => task.gmail === req.body.gmail);

    //         if (isAlreadyRegistered) {
    //             // Respond with a 409 Conflict status code
    //             res.status(409).json({ message: "You have already registered.", email: userEmail });
    //         } else {
    //             // Add the new user to the tasks array
    //             tasks.push(req.body);
    //             console.log("New user registered:", req.body);
    //             // Respond with a 201 Created status code
    //             res.status(201).json({ message: `Welcome, ${req.body.fname}!` });
    //         }
    //     } else {
    //         // Respond with a 400 Bad Request status code for invalid email addresses
    //         res.status(400).json({ message: "ERROR: Invalid email address" });
    //     }
    // } else {
    //     // Respond with a 400 Bad Request status code for missing or empty email
    //     res.status(400).json({ message: "ERROR: Missing or empty email address" });
    // }
    res.status(200).json({tasks});
});

app.get('/view', (req, res) => {
  // Send the tasks array as JSON data
  res.status(200).json({ tasks });
  // console.log('GET request ayo!');
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
