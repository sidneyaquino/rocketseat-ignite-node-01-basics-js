const express = require('express');
const app = express();

const _COURSES_ = "courses"

app.get("/", (resquest, response) => {                                    
  return response.json({"message": "Hello JSON! =P"});        // Text.
});
app.get(`/${_COURSES_}`, (request, response) => {
  return response.json(["Course 1", "Course 2", "Course 3"])  //  Array.
});

// Route Params.
app.put(`/${_COURSES_}/:id`, (request, response) => {
  const params = request.params;
  console.log(params);
  return response.json(["Course 6", "Course 2", "Course 3", "Course 4"]);  
}); 
app.patch(`/${_COURSES_}/:id`, (request, response) => {
  const {id} = request.params;
  console.log(id);
  return response.json(["Course 6", "Course 7", "Course 3", "Course 4"]);
});

// Query Params.
app.delete(`/${_COURSES_}/`, (request, response) => {
  const {query} = request;
  console.log(query);
  return response.json(["Course 6", "Course 7", "Course 3"]);
});

// Body Params.
app.use(express.json());  // Parse json.
app.post(`/${_COURSES_}`, (request, response) => {
  const {body} = request;
  console.log(body);
  return response.json(["Course 1", "Course 2", "Course 3", "Course 4"]);
});

app.listen(3333);