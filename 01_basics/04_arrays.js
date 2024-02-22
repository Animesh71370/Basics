const myarr = [0,1,2,3]



//arrays methods
myarr.push(6);

myarr.pop()

//SPLICE////SLICE*********************************************************************************
// console.log("A ", myarr);
const myn1 = myarr.slice(1,3)


//in SPLICE it manipulate original array And in SLICE it manipulate copy of array



//SPREAD METHOD **************************************************************************************
const myfav = [1,2,3,4,5];
const myfav1 = [6,7,8,9];
const combinearr = [...myfav ,... myfav1];
// console.log(combinearr);



//***************FOR CONVERSION OF THE DATA WE USE isARRAY method */**************************************

console.log(Array.isArray('Animesh'));
console.log(Array.from('Animesh'));

//**************************/