
/*
const arr = [1,2,3,4];

const more = arr.map((nums,index ,arr)=>{
    return nums > 2 ;
})

console.log(more);


//reduces 

const sum =  arr.reduce((acc,curr,i,arr)=>{
    return acc + curr;
},0);


console.log(sum);

*/



//Implement map function () 

//Array.map((nums,i,arr)={})

/*
Array.prototype.myMap = function(cb){
    
    let temp = [];
    for(let i=0; i < this.length;i++){
        temp.push(cb(this[i],i,this));
    }
    return temp;
}

const arr = [1,2,3,4,6];

const multiplythree = arr.myMap((nums,i,arr)=>{
    return nums*3;
});
console.log(multiplythree);

*/

//NOTE : Question 1 : Return ONly name of Students in capital 


/* let students = [
  { name: "sad", roll: 31, marks: 22 },
  { name: "skldfjsdklf", roll: 32, marks: 40 },
  { name: "jklfdjsdklf", roll: 33, marks: 50 },
]; */

/* // Use forEach to modify the array in-place
students.forEach((student, i, arr) => {
  // Convert the name to uppercase and reassign it
  student.name = student.name.toUpperCase();
}); */

/* console.log(students);


const res = students.map(stud => stud.name.toLocaleUpperCase())

console.log(res); */




//NOTE : Reduce and Calculate marks

/*
let students = [
  { name: "sad", roll: 31, marks: 22 },
  { name: "skldfjsdklf", roll: 32, marks: 40 },
  { name: "jklfdjsdklf", roll: 33, marks: 50 },
];



const res = students.reduce((acc,curr,i,students)=>{
  acc = acc + curr.marks;
  return acc;
},0);

console.log(res)

*/



//NOTE : Return only names of Students who has more than 60 marks

/*
let students = [
  { name: "sad", roll: 31, marks: 22 },
  { name: "skldfjsdklf", roll: 32, marks: 90 },
  { name: "jklfdjsdklf", roll: 33, marks: 70 },
];


const res = students.filter((students)=>{
 return students.marks > 60
}).map((students)=>{
  return students.name;
})


console.log(res);

*/




let students = [
  { name: "sad", roll: 31, marks: 52 },
  { name: "skldfjsdklf", roll: 32, marks: 90 },
  { name: "jklfdjsdklf", roll: 33, marks: 70 },
];



const res= students.map((students,i,curr)=>{

    if(students.marks < 60){
    students.marks +=20;
  }

  return students;
}).filter(studs => studs.marks > 60);

console.log(res);





