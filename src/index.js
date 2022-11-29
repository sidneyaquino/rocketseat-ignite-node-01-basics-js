const express = require('express');
const app = express();

const port = 3000;
const route = "courses"

app.get("/", (resquest, response) => {                                    
  return response.json({message: "Hello JSON! =P"});        // Text.
});
app.get(`/${route}`, (request, response) => {
  return response.json(["Course 1", "Course 2", "Course 3"])  //  Array.
});

// Route Params.
app.put(`/${route}/:id`, (request, response) => {
  const params = request.params;
  console.log(params);
  return response.json(["Course 6", "Course 2", "Course 3"]);  
}); 
app.patch(`/${route}/:id`, (request, response) => {
  const {id} = request.params;
  console.log(id);
  return response.json(["Course 6", "Course 7", "Course 3"]);
});

// Query Params.
app.delete(`/${route}/`, (request, response) => {
  const {query} = request;
  console.log(query);
  return response.json(["Course 6", "Course 7"]);
});

// Body Params.
app.use(express.json());  // Parse json.
app.post(`/${route}`, (request, response) => {
  const {body} = request;
  console.log(body);
  return response.json(["Course 6", "Course 7", "Course 8", "Course 4"]);
});

app.listen(port, () => {
  console.log(`The server is listening on the port: ${port}`);
});