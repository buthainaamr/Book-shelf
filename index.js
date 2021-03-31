
var books = [{
   title: "Css",
    author: "John Doe",
    image: ""
},    {
    title: "HTML",
    author: "Doe",
    image: ""
},    {
    title: "Java",
    author: "John",
    image: ""
      },
      {
    title: "OOP",
    author: "buthaina",
    image: ""
          },
 {
    title: "Read",
    author: "buthaina",
    image: ""         
              },                    
      {   
    title: "Write",
    author: "buthaina",
    image: ""
          },
          {
    title: "draw",
     author: "buthaina",
     image: ""
              },
     {
    title: "book",
     author: "buthaina",
    image: ""
    },
    {
   title: "color",
    author: "buthaina",
    image: ""
    },
     {
     title: "code",
    author: "buthaina",
     image: ""
     }                  
];

for (let i = 0; i < 3; i++) { 
   let item= books[i].title;

var li = document.createElement("li");
var text = document.createTextNode(item);
 li.appendChild(text);
 document.getElementById("myUl").appendChild(li);
  }


  for (let i = 3; i < 7; i++) { 
    let item= books[i].title;
 
 var li = document.createElement("li");
 var text = document.createTextNode(item);
  li.appendChild(text);
  document.getElementById("myUl2").appendChild(li);
   }

   for (let i = 7; i < 11; i++) { 
    let item= books[i].title;
 
 var li = document.createElement("li");
 var text = document.createTextNode(item);
  li.appendChild(text);
  document.getElementById("myUl3").appendChild(li);
   }