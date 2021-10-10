// console.log("Hello World");
// console.dir("Hello World");
// console.error("CRASH & BURN");
// let table = [
//     {fname:'Nikolina', lname: "Eliskovska"},
//     {fname:'Stanka', lname: "Stankovska"}
// ];

// console.table(table);

// setTimeout(()=> {
//     console.log("prv");
// },2000);

// const myTimeout = () =>{}

// const myTimeout = () => {
//     return new Promise(()=>{
//         setTimeout(()=> {
//             console.log("prv");
//         },2000);
//     });

const myTimeout = (timeout) => {
    return new Promise((success, fail)=>{
        setTimeout(()=> {
            console.log("prv");
            success() // the function placed in the .then(...)
        }, timeout);
    });
};

myTimeout(2000)
.then(()=>{
    console.log("vtor");
    return myTimeout(1000);
})
.then(()=>{
    console.log("tret");
})
.catch(err=>{
    console.error(err);
})

const main = async () => {
    try{
        await myTimeout(2000);  //await until done then go to next line
        console.log("vtor");
        await myTimeout(1000); //await until done then go to next line
        console.log("tret");
    }catch(err){
        console.error(err);
    }
}

main();




console.log('Hello World');
console.dir('Hello World');
console.error('Crash&Burn!');
let table = [
    {fname: 'Qwerty', lname: 'Qwerty'},
    {fname: 'Qwerty', lname: 'Qwerty'}
]
console.table(table);


setTimeout(() => {
    console.log('suki')
}, 2000)
console.log('muki')


let array = [1,2,3,4,5,6,7]
let n3 = array.reduce((acc, v) => {
    return acc + v;
})
console.log(n3)

const myTimeout = (timeout) => {
    return new Promise((success, fail) => {
        setTimeout(() => {
            console.log('first');
            success(); // the function placed in the .then(...)
        }, timeout);
    });
};

myTimeout(2000)
    .then(() => {
        console.log('second');
        return myTimeout(1000);
    })
    .then(() => {
        console.log('third');
    })
    .catch(err => {
        console.error(err);
    });


const main = async () => {
    try {
        await myTimeout(2000); // wait until done then go to next line
        console.log('second');
        await myTimeout(1000); // wait until done then go to next line
        console.log('third');
    } catch(err) {
        console.error(err);
    }
};

main();

// map
// reduce
// sort
// forEach
// filter



let studenti = [
    {ime: 'P', prosek: 8},
    {ime: 'J', prosek: 9},
    {ime: 'S', prosek: 6},
    {ime: 'I', prosek: 10},
    {ime: 'G', prosek: 7}
];

studenti.sort(function (a, b) {
    // return a.prosek - b.prosek;
    return b.prosek - a.prosek;
});


// studenti.reverse();
console.log(studenti);