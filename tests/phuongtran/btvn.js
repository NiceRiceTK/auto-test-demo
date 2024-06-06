//1

const animal = ["dog","cat","duck","cow","buffalo","hen","rooster","pig","goose","fish"];
const book ={name:"diary",color:"white",pageNumber:"100",author:"Phuong Tran",publish:"2020",ages:"18"};

//2

let sum=0;
function sumNumber(){
    for(let i=1;i<=10;i++){
        sum=sum+i;
    }
    return sum;
};
console.log("Result =",sumNumber());

 //3

const numbers = [1, -4, 6, 8, 3];
let sum2=0;
function sumPositive(){
    for(let i of numbers){
        if(i>0){
            sum2=sum2+i;
    }}
    return sum2;
}
console.log("Result =",sumPositive());


