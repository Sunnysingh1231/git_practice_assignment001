count=0;
let arr=[2,3,4,5,6,7,8,9,10,11,12,13,14,15];
for(let i=0;i<arr.length;i++){
let bag="";
for(let j=0;j<arr.length;j++){
if(arr[i]%j==0){
count++
}
}if(count=2){
bag+=i;}
}console.log(bag);