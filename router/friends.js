const express = require('express');

const router = express.Router();

let friends = {
    "johnsmith@gamil.com": {"firstName": "John","lastName": "Doe","DOB":"22-12-1990"},
    "annasmith@gamil.com":{"firstName": "Anna","lastName": "smith","DOB":"02-07-1983"},
    "peterjones@gamil.com":{"firstName": "Peter","lastName": "Jones","DOB":"21-03-1989"}
};


// GET request: Retrieve all friends
router.get("/",(req,res)=>{

  // Update the code here
  res.status(200).send(JSON.stringify(friends,null,4));
  //res.send("Yet to be implemented")//This line is to be replaced with actual return value
});

// GET by specific ID request: Retrieve a single friend with email ID
router.get("/:email",(req,res)=>{
  // Update the code here
  const email = req.params.email;
  res.status(200).send(friends[email])
  //res.send("Yet to be implemented")//This line is to be replaced with actual return value
});


// POST request: Add a new friend
router.post("/",(req,res)=>{
  // Update the code here
  if (req.body.email){
    friends[req.body.email] = {
        "firstName":req.body.firstName,
        //Add similarly for lastName
        "lastName":req.body.lastName,
        //Add similarly for DOB
        "DOB":req.body.DOB,
        }

    res.status(201).send("The user" + (' ')+ (req.body.firstName) + " Has been added!");
  }else{
    res.status(404).send("User is not added. No email provided.");
  }
  
  //res.send("Yet to be implemented")//This line is to be replaced with actual return value
});


// PUT request: Update the details of a friend with email id
router.put("/:email", (req, res) => {
  // Update the code here
  const email = req.params.email
  let friend = friends[email]
  if (friend){
    let DOB = req.body.DOB;
    if(DOB) {
        friend["DOB"] = DOB
    }

    let firstName = req.body.firstName;
    if(firstName) {
        friend["firstName"] = firstName
    }
    let lastName = req.body.lastName;
    if(lastName) {
        friend["lastName"] = lastName
    }

    friends[email] = friend

    res.status(200).send(`Friend with the email  ${email} updated.`);
  }else{
    res.status(404).send("Unable to find friend!");
  }
  //res.send("Yet to be implemented")//This line is to be replaced with actual return value
});


// DELETE request: Delete a friend by email id
router.delete("/:email", (req, res) => {
  // Update the code here
  const email = req.params.email
  let friend = friends[email]

  if (friend){
    delete friends[email]
    res.status(200).send(`Friend with the email  ${email} deleted.`);
  }else{
    res.status(404).send("Unable to find friend!");
  }
  //res.send("Yet to be implemented")//This line is to be replaced with actual return value
});

module.exports=router;
