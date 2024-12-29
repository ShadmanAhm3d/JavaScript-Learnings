//This is the creation phasse

/*
const promiseResult = new Promise( async (resolve,reject)=>{
  const url = "https://api.github.com/ShadmanAhm3d"
  const result = await fetch(url);
  const res = await result.json();

  if(result.ok){
    console.log(res)
    console.log(result)
    resolve("Result Recived");
  }else{
    reject("Result not Recived");
  }
}).then(()=>{
  //some operations
  console.log("Promise Resolved")
}).catch((err)=>{
  console.log("Some error ::: ", err);
  })

*/



/*
const newPromse = new Promise((resolve, reject) => {
  const err = false;
  setTimeout(() => {
    if (!err) {
      resolve([
        {
          userName: "ShadmanAhmed",
          phone: 1212
        },
        {
          userName: "Somethingelse",
          phone: 12121221
        },
      ]);
    } else {
      reject({
        msg: "Some error has occured",
      });
    }
  }, 1000);
}).then((value) => {
  //value hamara array 

  //map

  value.map((res, index) => {
    console.log(`Value : ${res.userName} , Index : ${index}`);
  })

  //filter
  const filtered = value.filter((elem) => {
    return elem.phone == 1212
  })

  console.log(filtered);
  //reduce
  



}).catch((err) => {
  console.log(err);
});

*/





