// promises
// 1.pending....
// 2.resolve -> promises is fullfill
// 3.reject

// promise as aconstructor or promises as a object

// executor function is called after creating promises object

const pobj1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    let roll_no = [1, 2, 3, 4, 5, 6, 7, 8];
    resolve(roll_no);
    // reject('error while Fetching data....');
  }, 2000);
});

const getbio = (indexdata) => {
  return new Promise((resolve, reject) => {
    setTimeout(
      (indexdata) => {
        let biodata = {
          name: "Himanshu",
          age: 21,
        };
        resolve(
          `My rollno is ${indexdata}. My name is ${biodata.name} and iam ${biodata.age} year old`
        );
      },
      2000,
      indexdata
    );
  });
};

pobj1.then((rollno) => {
    console.log(rollno);
    return getbio(rollno[1]);

  }).then((kuchbhi) =>{
    console.log(kuchbhi);
  } )
.catch((error) => {
    console.log(error);
  
})

// calllback function()

// const funA = ()=>{

//  setTimeout(() => {

//     console.log('Welcome to my college ');
//     funB();

//  }, 2000);


// }


// const funB = ()=>{

//     console.log('Welcome to my  ');
    
//     }




// funA();


// const perOne = (friend, callfriend)=>{

//     console.log(`iam busy right now call you back ${friend}.caaaaaal`);
//     callfriend();

// }


// const perTwo = ()=>{

//     console.log(`Hey i called you back `);
// }

// perOne("Himanshu rawat",perTwo);
// //  and here pertwo is a call back Function


// CallbackHell
// const getrollno = ()=>{

// setInterval(() => {
   
// let roll_no = [1,2,3,4,5];
// console.log(roll_no); 


// setInterval((rollno) => {

//     let biodata = {
//         name:"himanshu",
//         age:23
//     }

// console.log(`and my roll no is ${rollno} My name is ${biodata.name} and my age is ${biodata.age}`);


// setTimeout((name) => {

//     biodata.gender = 'male';


//     console.log(`my rollno is ${rollno} ,name is {biodata.name},age is ${biodata.age} and my gender is ${biodata.gender}`);

// }, 2000,biodata.name);



// }, 2000,roll_no[1]);


// }, 2000);

// }

// getrollno();









