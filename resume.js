//Define Variables
/* */
let myName = "Kimberly";
let title = "Student";
let education = "Oral Roberts University";
let experience = ["Student Sports Manager", "Worship Leader", "Student Ambassador"];

function showFunFact(){
    alert("Fun Fact: I love rollercoasters");

//Creates an unordered list with the elements of the list 'skills'
let skills = ["Public Relations", "Organization", "Conflict Resolution"];
letskillsList=document.createElement("ul");
for (let i = 0; i < skills.length; i++){
    let li = document.createElement('li');
    li.textContent = skills[i];
    skillsList.appendChild(li);
}
document.body.appendChild(skillsList);
//connect variables to HTML (ligaments)
document.getElementById("my-name").textContent = myName;
document.getElementById("title").textContent = title;
document.getElementById("experience").textContent = experience;
document.getElementById("education").textContent = education;

//Displays a pop-up that shows a fun fact
function showFunFact(){
  alert("Fun Fact: I love rolllercoasters!")
}
