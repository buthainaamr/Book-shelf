
var books = [{
   title: "CSS BOOK ",
    author: "John Doe",
    
},    {
    title: "HTML Book",
    author: "John Doe",
   
},    {
    title: "Java Book",
    author: "John Doe",
   
      },
      {
    title: "OOP Book",
    author: "John Doe",
    
          }                 
];

for (let i = 0; i < books.length; i++) { 
   let item= books[i].title;

var li = document.createElement("li");
var text = document.createTextNode(item);
 li.appendChild(text);
 document.getElementById("myUl").appendChild(li);
  }


  