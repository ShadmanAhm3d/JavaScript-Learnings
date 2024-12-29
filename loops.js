/* let arr =  [10,22,333,4444];


//for loop
for (let index = 0; index < arr.length; index++) {
  const element = arr[index];
  console.log(element)
}

//for... in loops 
//preffered for objectss

for (let i in arr) {
  console.log(arr[i]);
}

const objection = [
  {
    namew : "shadman",
    group : "ABc",
    index : 0,
    married : false,
  },
  {
    namew : "shadman_Ahmed",
    group : "ABcd",
    index : 1,
    married : undefined,
  }
]

for( let key in objection){
  console.log(objection[key])
}

*/



//For .. of : iterates over values (returns values)
const str = 'hello';
for (let char of str) {
  console.log(char);
}


//For ... in : iterates over indexed ( returns indexex)
const str3 = 'hello';
for (let index in str) {
  console.log(str3[index]);
}



//NOTE : ForEach
//forEach is specifically designed for arrays and
//does not work on other types of collections like objects.
//When you don’t need a return value: Unlike map, forEach does not create and return a new array.

let arr = [1, 2, 3, 4];

arr.forEach((value, index, array) => {
  array[index] = value * 2; // Modify the original array
});

console.log(arr); // Output: [2, 4, 6, 8]























