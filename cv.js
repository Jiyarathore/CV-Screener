console.log("this is cv screener");
//data is an array of objects which contains information about candidates

const data=[
    {
        name:"Rohan Das",
        age:18,
        city:"Kolkata",
        language:"Python",
        framework:"Django",
        image: "https://randomuser.me/api/portraits/med/men/51.jpg"
    },

    {
        name:"Shubham Sharma",
        age:28,
        city:"Banglore",
        language:"Javascript",
        framework:"Angular",
        image: "https://randomuser.me/api/portraits/med/men/61.jpg"
    },

    {
        name:"Camella Cabello",
        age:18,
        city:"Kolkata",
        language:"Python",
        framework:"Django",
        image: "https://randomuser.me/api/portraits/med/women/56.jpg"
    },

    {
        name:"Aishwariya Rai",
        age:45,
        city:"Mumbai",
        language:"Python",
        framework:"Flask",
        image: "https://randomuser.me/api/portraits/med/women/59.jpg"
    },

    {
        name:"Rohit Sharma",
        age:34,
        city:"Jharkhand",
        language:"Go",
        framework:"Go Framework",
        image: "https://randomuser.me/api/portraits/med/men/66.jpg"
    }

]

//Cv Iterator it iterates all candidates's data
function cvIterator(profiles){
    let nextIndex=0;
    return{
        next:function(){
            return nextIndex < profiles.length ?
            {value: profiles[nextIndex++], done: false} :
            {done: true} 
        }
    };
}

const candidates = cvIterator(data);

nextCV();

//Button listener for next button
const next = document.getElementById('next');
next.addEventListener('click',nextCV);

function nextCV(){
    const currentCandidate = candidates.next().value;

    let image = document.getElementById('image');
    let profile =document.getElementById("profile");

    if(currentCandidate!=undefined){
    image.innerHTML = `<img src='${currentCandidate.image}'>`;

    profile.innerHTML=`<ul class="list-group">
   
    <li class="list-group-item">Name: ${currentCandidate.name}</li>
    <li class="list-group-item">${currentCandidate.age} years old</li>
    <li class="list-group-item">Lives in ${currentCandidate.city}</li>
    <li class="list-group-item">Primarily works on ${currentCandidate.language}</li>
    <li class="list-group-item">Uses ${currentCandidate.framework}</li>
  </ul>`
    }
    else{
        alert('End of applications');
        window.location.reload();
    }
}