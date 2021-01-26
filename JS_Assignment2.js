//Assignment 2
//Que1

var milan=function()
{
    var x=50;
    console.log(x);
     return function(y)
    {
        console.log(y);
        return "hi";
    }
}
var m=milan();
console.log(m(5));

//Que2

var f1=function()
{
    var s1="Milan";
    var s2="";
    for(var i=s1.length-1;i>=0;i--)
    {
        s2+=s1[i];
    }
console.log(s2);
}
f1();

//Que3

var radiiA = [{radius : 5}, {radius : 9}, {radius : 2}]

radiiA.sort((a,b) => (a.radius > b.radius) ? 1 : ((b.radius > a.radius) ? -1 : 0));
console.log(radiiA);

//Que4

function sort(arr)
{
    for(var i=0;i<arr.length;i++)
    {
        for(var j=0;j<arr.length;j++)
        {
            if (arr[i]<arr[j])
            {
                var temp=arr[i];
                arr[i]=arr[j];
                arr[j]=tmep;
            }
        }
    }
    console.log(arr);
}
var ar=[5,9,7,2,3];
console.log(ar); 

//Que5

function length_of_array1(length_of_array)
{
    var count = 0;
    length_of_array.forEach(i => {
        console.log(i);
        count++;
    });
    console.log(count);
}
var length_of_array = [1,2,3,4,undefined,null,undefined,10];
length_of_array1(length_of_array)

//Que6

function Bike(brand,series,model)
{
    this.brand=brand;
    this.series=series;
    this.model=model;
}

var b1= new Bike("Kawasaki","Z","Z900");
var b2= new Bike("Kawasaki","Ninja","650");

console.log(b1);

function scooter(brand,series,model, color)
{
    Bike.call(brand,series,model,this)
    this.color = color;
}

scooter.prototype = Object.create(Bike.prototype);
scooter.prototype.constructor = scooter;

scooter.prototype.details= function(){
    console.log(brand+" "+series+" "+model+" "+color);
}

var scoot=new scooter("Honda","Sports","ADV750","NeonGreen");

console.log(scoot);