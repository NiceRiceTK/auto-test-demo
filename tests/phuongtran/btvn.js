//1

const animal = ["dog","cat","duck","cow","buffalo","hen","rooster","pig","goose","fish"];
const infor =[
    {name:"Phuong", age: 26},
    {name:"Linh", age: 26},
    {name:"Hanh", age: 18},
    {name:"Hoa", age: 40},
    {name:"Ha", age: 26},
    {name:"Lan", age: 26}
];

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


/////////////

const numbers2 = [1,2,3,4,5,6,7,8,9,10];
let result = [];

for (let i = 0; i < numbers2.length; i++){
    if(numbers2[i]%2 == 0){
        result.push(numbers2[i]);
    }
}

console.log("AAAAAA", result);
