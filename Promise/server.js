//Promise DeepDive

//Eventual completion or failure of an async operation nad ites resulting value

//A promise basically has 3 states
//Pending
//Fullfiled
//Completed
//Promises is an OBJECT representing eventual Completion
//Always Remember there is Creation Phase and An Consumption Phase for promises
//We majorly consume Promises from other sources

//Args ; A callBack(resolve,reject)
/*
const promiseOne = new Promise(function (resolve, reject) {
  //Do all the asynchromnous task
  //DB calls // CryptoTask // NetworkCalls

  setTimeout(function () {
    console.log("ASysn Task has benn done");
    resolve();
  }, 1000);
});

//cosumption of the promise
promiseOne.then(function () {
  console.log("Promise Consumed");
});

*/

/*
//You can also create an Promise without storing in an variable and then just resolve() it
new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async Task 2 ");
    resolve();
  }, 1000);
})
  .then(function () {
    console.log("ASycn 2 resolve()");
  }) //Just chain 
  .then(() => {
    console.log("Async task 3 ");
  })
  .then(() => {
    setTimeout(function () {
      console.log("This is the end");
    }, 4000);
  });
*/

//Now you know that Promise and then are connected to each other but if you want to send information
//from Promise to then how would you do it? You do it using resolve() and passing object information
// inside of it
/*
const PromiseThree = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve({
      username: "Chai",
      email: "Code@gmial.om",
    });
  }, 3000);
});

PromiseThree.then(function (theData) {
  console.log(theData);
});
*/

/*
const PromiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false;
    if (!error) {
      resolve({
        userName: "Shadman",
      });
    } else {
      reject("An error has been Occurred");
    }
  }, 1000);
});

PromiseFour.then(function (user) {
  console.log(user);
  return user.userName;
})
  .then(function (theUsername) {
    console.log(theUsername);
  })
  .catch(function (e) {
    console.log(e);
  })
  .finally(function () {
    console.log("Promise has been executed");
  });

  */

//ASYNC AWAIT SYNTAX FOR PROMISE

/*
const PromiseFive = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false;
    if (!error) {
      resolve({
        userName: "Jas",
        pass: "123",
      });
    } else {
      reject("An error has been Occurred");
    }
  }, 1000);
});

async function consumePromiseFive() {
  try {
    const response = await PromiseFive;
    console.log(response);
  } catch (error) {
    console.log("Error has been Spotted");
  }
}

consumePromiseFive();
*/

//Now lets do some acutla task by fetching an API

/*

async function GetAPI() {
  try {
    const response = await fetch("https://dummyjson.com/users");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("Error has occured");
  }
}

GetAPI();
*/

fetch("https://dummyjson.com/users")
  .then(function (response) {
    const data = response.json();
    return data;
  })
  .then(function (data) {
    console.log(data);
  })
  .catch((e) => console.log(e));
