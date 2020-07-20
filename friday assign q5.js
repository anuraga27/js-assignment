let sales = prompt("enter the sales value");
console.log(sales);
let reward = prompt("enter the reward in percentage");
console.log(reward);
if(sales<=5000)
{
 reward=2;

}
else if(sales>5001 && sales<=10000)
{
    reward=5;
}
else if(sales>10001 && sales<=20000)
{
    reward=7;
}
else if(sales>20000)
{
    reward=10;
}