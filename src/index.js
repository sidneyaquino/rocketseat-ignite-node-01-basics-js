const express = require('express');
const app = express();

app.get("/", (resquest, response) => {                                    
  return response.json({"message": "Hello JSON! =P"});                     
});
app.get("/courses", (request, response) => {
  return response.json(["Course 1", "Course 2", "Course 3"])
});

// Route Params.
app.put("/courses/:id", (request, response) => {
  const params = request.params;
  return response.json(["Course 6", "Course 2", "Course 3", "Course 4"]);  
}); 
app.patch("/courses/:id", (request, response) => {
  const {id} = request.params;
  return response.json(["Course 6", "Course 7", "Course 3", "Course 4"]);
});

// Query Params.
app.delete("/courses/", (request, response) => {
  const query = request.query;
  return response.json(["Course 6", "Course 7", "Course 3"]);
});

// Body Params.
app.use(express.json());  // Parse json.
app.post("/courses", (request, response) => {
  const body = request.body;
  return response.json(["Course 1", "Course 2", "Course 3", "Course 4"]);
});

app.listen(3333);