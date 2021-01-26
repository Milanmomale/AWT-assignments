//Que01
console.log("***QUE1*****");
function question (a,b)
{
return a+b;
}
console.log(question(4,5));

//Que02
console.log("***QUE2*****");
var objectName = {1 : "saurabh", 2 : "manoj", 3 : "meghana"};
for(var i in objectName)
{
    console.log(objectName[i]);
}
objectName[4]="Mln";
for(i in objectName)
{
    console.log(objectName[i]);
}

//Que03
console.log("***QUE3*****");
var mil =[1,2,3,"Sam","Mi","Lee","chee",null,function(){return true;}];

mil[15]="LASTELement";
for (let i=0;i<mil.length;i++)
{
    console.log(i+" "+mil[i]);
}
console.log("Array lenght :"+mil.length);
for(var m in mil)
{
    console.log(m+" "+mil[m]);
}

//Que04
console.log("***QUE4*****");
function is_integer(a)
{
    if (a === parseInt(a,10))
           console.log("Integer!");
         else
           console.log("Not an integer!");
}
console.log(is_integer(10.8544));

//QUE05
console.log("***QUE5*****");

function add_all(a)
{
    var sum=0;
    for(var b in a)
    {
        sum=sum+a[b];
    }
    return sum;
}
console.log(add_all([1,2,3,4,5]));

//Que06
console.log("***QUE6*****");
var f=100;
function farenheit(celcius)
{
    var celcius =(f-32)*5/9;
    return celcius;
}
console.log(farenheit(f))


//QUE07
console.log("***QUE7*****");
function factorial(num)
{
    if (num==0||num==1)
    {
        return 1;
    }
    else
    {
        var fact=1;
        for(var i=1;i<=num;i++)
        {
            fact *=i;
        }
        return fact;
    }
}
console.log(factorial(3));



//QUE08
function BreakMoney(money)
{
    function printMoney(a,notes)
    {
        for(var i = 0;i<a;i++)
            console.log(notes);
    }

    if(money >= 25)
    {
        var a = parseInt(money/25);
        console.log("money divided by 25 is: "+ a);
        printMoney(a,"25");
        money = parseInt(money%25);
        console.log("25 last : "+money)
    }
    if(money >= 10)
    {
        var a = parseInt(money/10);
        console.log("money divided by 10 is: "+ a);
        printMoney(a,"10");
        money = parseInt(money%10);
        console.log("10 last : "+money)
    }
    if(money >= 5)
    {
        var a = parseInt(money/5);
        console.log("money divided by 5 is: "+ a);
        printMoney(a,"5");
        money = parseInt(money%5);
        console.log("5 last : "+money)
    }
    if(money >= 2)
    {
        var a = parseInt(money/2);
        console.log("money divided by 2 is: "+ a);
        printMoney(a,"2");
        money = parseInt(money%2);
        console.log("2 last : "+money)
    }
    if(money >= 1)
    {
        var a = parseInt(money/1);
        console.log("money divided by 1 is: "+ a);
        printMoney(a,"1");
        console.log("1 last : "+money)
    }
}

BreakMoney(87);
