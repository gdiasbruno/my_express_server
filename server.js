var express = require("express");

var app = express();

app.get("/", function(request, response){
  console.log(response)
  response.send("<h1 style='color:red'> Hello Gusttavo</h1>")
});

app.get("/about", function(req, res) {
  res.send("international relations student")
});

app.listen(3000, function(){
  console.log("Server started on port 3000")
})
