


// // function printnaam(){
// //     console.log("animesh");
// //     console.log("abhishek");
// // }
// // printnaam();
// function addtwonum (num1,num2){
//     return num1+num2
// }
// const animesh = addtwonum(1,3)
// // console.log(animesh);
// function userislogged (name,age){
//     return `welcome ${name} and your age is ${age}`
// }
// const info = userislogged("animesh",22)
// // console.log(info);
// function calculate(num1){
// //     return num1
// // }
// // console.log(calculate(200));
// const info = {
//     username : "animesh",
//     age: 22,
// }
// function handleobject (putobj){
//     console.log(`username is ${putobj.username} and age is ${putobj.age}`);
// }
// // handleobject(info);
// handleobject({
//     username : "abhishek",
//     age : 26,
//     gender : "male"
// // });
// // //     gender : "male"
// const myarray = [100,330,220,2220]
// function myarr(getarray){
//     return getarray[2]

// }
// console.log(myarr([200,300,4000,30303,2230]));


// let arrays = [3302,314,234,21,425,32]
// let objectss = {
//     name: "animesh",
//     age: 22,
//     gender : "male"
// }
// function arrayskaval(koibhiarray){
//     return koibhiarray[2]
// }
// // console.log(arrayskaval(arrays));
// console.log(arrayskaval([2000,457,456,768]))
const infomation = {
    names: "animesh",
    age : 22,
    gender : "male",
    welcome: function (){
        console.log(`welcome ${this.names}`);
    }
}
infomation.names="ani"
infomation.welcome()