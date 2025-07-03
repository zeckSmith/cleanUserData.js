

let data =[ {
    "name": "John Doe",
    "age": 30,
    "city": "New York",
    "skills": ["JavaScript", "Python", "Java"],
    "isEmployed": true,
},
{    "name": "Jane Smith",
    "age": 25,
    "city": "Los Angeles",
    "skills": ["HTML", "CSS", "JavaScript"],
    "isEmployed": false
},
{
    "name": "Alice Johnson",
    "age": 28,
    "city": "Chicago",
    "skills": ["React", "Node.js", "Express"],
    "isEmployed": true
}];




const cart = document.querySelectorAll('.container')

const elements = document.querySelectorAll('p')
elements.forEach((element) => {
    element.addEventListener('click', (e) => {
        // console.log(e.target.id);
    });
});


let fruits = ['apple', 'banana', 'orange', 'grape'];
let arrayNumbers = [1, 2, 3, 4, 5];

document.body.innerHTML += data
.sort((a, b) => a.age - b.age)
.map((item) => {
    return `<div class="card">
        <h2>${item.name}</h2>
        <p>Age: ${item.age}</p>
        <p>City: ${item.city}</p>
        <p>Skills: ${item.skills.join(', ')}</p>
        <p>Employed: ${item.isEmployed ? 'Yes' : 'No'}</p>
    </div>`;
})
.join('');
