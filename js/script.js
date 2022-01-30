const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];
//oppgave 1
console.log("oppgave 1:");

let cat = {
  complain: function() {
      console.log("meow");
  } 
}

// to test if the method in the object works
// cat.complain();
// console.table(cat);


//Oppgave 2
console.log("Oppgave 2:");

const heading = document.querySelector("h3");
heading.innerHTML=`Updated heading`;

//Oppgave 3
console.log("Oppgave 3:");

heading.style.fontSize="2em";

//Oppgave 4
console.log("Oppgave 4:");

heading.classList.add("subheading");

//Oppgave 5
//this code only selects the p elements that are currently displayed on the html, not the p elments that i add later in the code
const paragraphs = document.querySelectorAll("p");
for(let i=0; i < paragraphs.length; i++) {
    paragraphs[i].style.color = "red";
}


//Oppgave 6
const resultContainer = document.querySelector(".results");
resultContainer.innerHTML = `<p>New paragraph</p>`;
resultContainer.style.backgroundColor ="yellow";



//Oppgave 7
console.log("Oppgave7");

function catName(list) {
    for(let i=0; i < list.length; i++){
        console.log(list[i].name);
    }
}
catName(cats);

//Oppgave 8
console.log("Oppgave 8");

const catContainer = document.querySelector(".cat-container");

let string = "";
function createCats(cats){
 for(let i=0; i < cats.length; i++) {
     let catAge = cats[i].age;
     if(cats[i].age === undefined) {
         catAge = "Age unknown";
     }
     let addToString =`<div><h5>${cats[i].name}</h5><p> ${catAge}</p></div>`;
     string += addToString;
}
return string;
}
const insertIntoHTML = createCats(cats);
catContainer.innerHTML = insertIntoHTML;
