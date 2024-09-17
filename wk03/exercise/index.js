import http from "http";
//TODO - Use Employee Module here
import { employees } from "./Employee.js";
console.log("Lab 03 -  NodeJs");

//TODO - Fix any errors you found working with lab exercise

//Define Server Port
const port = process.env.PORT || 8081;

//Create Web Server using CORE API
const server = http.createServer((req, res) => {
  if (req.method !== "GET") {
    res.end(`{"error": "${http.STATUS_CODES[405]}"}`);
  } else {
    if (req.url === "/") {
      //TODO - Display message "<h1>Welcome to Lab Exercise 03</h1>"
      res.statusCode = 200;
      res.setHeader("ContentType", "text/html");
      res.write("<h1>Welcome to Lab Exercise 03</h1>");
      res.end();
    } else if (req.url === "/employee") {
      //TODO - Display all details for employees in JSON format
      res.statusCode = 200;
      res.setHeader("ContentType", "application/json");
      res.end(JSON.stringify(employees));
    } else if (req.url === "/employee/names") {
      //TODO - Display only all employees {first name + lastname} in Ascending order in JSON Array
      //e.g. [ "Ash Lee", "Mac Mohan", "Pritesh Patel"]
      res.statusCode = 200;
      res.setHeader("ContentType", "application/json");
      const data = JSON.stringify(
        employees.map((e) => e.firstName + " " + e.lastName),
      );
      res.end(data);
    } else if (req.url === "/employee/totalsalary") {
      //TODO - Display Sum of all employees salary in given JSON format
      //e.g. { "total_salary" : 100 }
      res.statusCode = 200;
      res.setHeader("ContentType", "application/json");
      const sum = 0; 
      const totalSalary = employees.reduce((acc, e) => acc + e.Salary, sum);
      const data = JSON.stringify({totalSalary: totalSalary});
      res.end(data);
    } else {
      res.end(`{"error": "${http.STATUS_CODES[404]}"}`);
    }
  }
});

server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
