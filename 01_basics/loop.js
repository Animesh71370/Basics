// for (let index = 0; index < 5; index++) {
//     console.log(`the value of outer loop is ${index}`);
//     for (let ind = 0; ind < 10; ind++) {
//         console.log(`the value of inner loop is ${ind}`);
        
//     }
    
// // }
// const animesh = ["Surname","age","devloper"]
// for (let index = 0; index < animesh.length; index++) {
//     console.log(`show me all info : ${animesh[0]}`);
    
// // }
// const arr = [1,2,3,4,5,6]
// for (const num of arr) {
//     console.log(num);
// }
// const country = ["ind","pak","nepal"]
// country.forEach( (lol) => {
//     console.log(lol);
// }    )
// //**********************HIGH ORDER LOOPS********************************************************************* */
// const arr = [
//     {
//         name : "Animesh"
//     },
//     {
//         age : 21
//     },
//     {
//         gender : "male"
//     },
// ]
// arr.forEach((lol) => {
//     console.log(lol.name);
// } )
//********************************FILTER METHOD ********************************************* */
// const nums = [ 10,20,10,300,40,32,21,22]
// const lol = nums.filter( (ans) => {
//     return ans > 4
// })
// console.log(lol);
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ]
  const idk = books.filter( (bk) => {
    return bk.genre == "History" && bk.publish >= 1995
  })
  console.log(idk);

