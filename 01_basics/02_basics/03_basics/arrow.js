// const user = {
//     name : "Animesh",
//     age: 22,
//     welcomemsg: function (){
//         console.log(`${this.name},welcome to website`)
//         console.log(this);
//     }
// }
// user.welcomemsg()
// user.name = "sam";
// user.welcomemsg()
// function one(){
//     console.log(this);
// }
// // one()
// const one = () =>{
//     let a = 20
// }
//***************IMMEDIATELY INVOKED FUNCTION EXPRESSION  */
(function one (){
    let a =10
})()

const a = () => {}
//IT is used to prevent pollution from the global inputs and also to immediately use the function 