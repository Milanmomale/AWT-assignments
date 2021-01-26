//Q.1 
What is a sparse array illustrate its importance with example.


------------------------------------------------------------------------
//Q.2
List different keywords in javascript

var person = {
	firstName: "AKSHAY",
	lastName : "KUMAR",
	id     : 5566,
	fullName : function() 
	   {
	    return this.firstName + " " + this.lastName;
	   }
   };
------------------------------------------------------------------------
//Q.3 
List and understand importance of different operators in JS

var num1 = 5;
var num2 = 3;

var sum = num1 + num2;
var sub=num1-num2;
var mul=num1*num2;
var div=num1/num2;

console.log('The sum of ' + num1 + ' and ' + num2 + ' is: ' + sum);
console.log('The sub of ' + num1 + ' and ' + num2 + ' is: ' + sub);
console.log('The mul of ' + num1 + ' and ' + num2 + ' is: ' + mul);
console.log('The sdiv of ' + num1 + ' and ' + num2 + ' is: ' + div);
------------------------------------------------------------------------
//Q.4 
1 Difference between == and === operators in javascript , illustrate with example

<!-----(for ==/ value will be same for == operator)-------->
	<!---------------output will be true------------------>
<!DOCTYPE html>
	<html>
	 <head>
		<title>Javascript</title>
		<script>
			var a = 10;
			var b = "10"
			console.log(a==b);
		</script>
	 </head>
</html>


<!-----(for ===/ value and dat type will be check for === operator)-------->
	<!-----------output will be false because data type not same------------->

<!DOCTYPE html>
	<html>
	 <head>
		<title>Javascript</title>
		<script>
			var a = 10;
			var b = "10"
			console.log(a===b);
			<!-- console.log(null === undefined); -->
		</script>
	 </head>
</html>
------------------------------------------------------------------------
//Q.5 
With example illustrate typeof operator in JS

<!-- -:Logical operator:- -->


<html>
 <head>
	<title>Javascript</title>
	 <script>
		var age = 20;
		if(age >= 18 && age <= 21)
		<!-- if(age >= 18 || age <= 21) -->
		{
		console.log("You are eligible")
		}
	 </script>
 </head>
</html>

        <!----------Ternary operator------------>
<html>
 <head>
  <title>Javascript</title>
    <script>
		var a = 100;
		var b;
		<!-- b="value is "+(a == 100 ? "true" : "false"); -->
		(a == 500)? b= "true" : b = "false";
		document.write(b);

	</script>
 </head>
</html>


------------------------------------------------------------------------
//Q.6 
With a suitable example explain for loop in javascript

<html>
	<head>
	  <title>Javascript</title>
		<script>
			for(var a =1; a<=10; a++)
			{
			document.write("Hello Dear Friends </br>");
			}
		</script>
	</head>
</html>
------------------------------------------------------------------------
//Q.7 
With suitable example explain date methods in javascript

<html>
	<head>
	  <title>Javascript</title>
		<script>
			var now = new Date();
			document.write(now.toDateString());
			document.write(now.getDate());
		</script>
	</head>
</html>

------------------------------------------------------------------------
//Q.8
 With example understand different types of sfunctions in JS

<!DOCTYPE html>
<html>
	<head>
	<title>Javascript</title>
	  <script>
		function hello(){
		 document.write("hello javaScript");
		}

		 hello();
		  document.write("<br>");
		 hello();
		  document.write("<br>");
		 hello();
		  document.write("<br>");
		 hello();
	   </script>
	 </head>
</html>
------------------------------------------------------------------------
//Q.9 
Write a javascript to get first and last name from previously created resume form.

<!DOCTYPE html>
  <html>
    <head>
      <title>Javascript</title>
      <script>
          function hello("fname, lname"){
          document.write("Hello" + " " + fname + " " + lname);
          }
      </script>
    </head>
</html>
------------------------------------------------------------------------
//Q.10 
Validate the Resume form using javascript.


<html>   
   <head>
      <title>Form Validation</title>      
      <script type = "text/javascript">
         <!-- Form validation code will come here-->
      </script>      
   </head>
   
   <body>
      <form action = "/cgi-bin/test.cgi" name = "myForm" onsubmit = "return(validate());">
         <table cellspacing = "2" cellpadding = "2" border = "1">
            
            <tr>
               <td align = "right">Name</td>
               <td><input type = "text" name = "Name" /></td>
            </tr>
            
            <tr>
               <td align = "right">EMail</td>
               <td><input type = "text" name = "EMail" /></td>
            </tr>
            
            <tr>
               <td align = "right">Zip Code</td>
               <td><input type = "text" name = "Zip" /></td>
            </tr>
            
            <tr>
               <td align = "right">Country</td>
               <td>
                  <select name = "Country">
                     <option value = "-1" selected>[choose yours]</option>
                     <option value = "1">USA</option>
                     <option value = "2">UK</option>
                     <option value = "3">INDIA</option>
                  </select>
               </td>
            </tr>
            
            <tr>
               <td align = "right"></td>
               <td><input type = "submit" value = "Submit" /></td>
            </tr>
            
         </table>
      </form>      
   </body>
</html> 




------------------------------------------------------------------------
//Q.11 
write a suitable example to illustrate jquery
<script src="jqueri.js"></script>
        <script>
            $(document).ready(function(){
                $("pre").css("color","blue")
                $("pre").css("border","2px solid red")
                $("pre").css("background","white")
            })
            $(document).ready(function(){
                $("pre").click(function(){
                $("pre").css("background","navy")
                let a=$("pre").html()
                console.log(a)
                })
            })
            $(document).ready(function(){
                $("#b1").mouseenter(function(){
                $("#b1").css("color","black")
                })
            })
            $(document).ready(function(){
                $("#b1").mouseleave(function(){
                $("#b1").css("color","")
                })
            })
            $(document).ready(function(){
                $("body").keypress(function(){
                $("body").css("background-color","white")
                })
            })
            $(document).ready(function(){
                $("body").keyup(function(){
                $("body").css("background-color","red")
                })
            })
            // $(document).ready(function(){
            //     $(window).scroll(function(){
            //     alert("you scrolled")
            //     })
            // })
        </script>
=============================================================
Get fname using javascript
<!DOCTYPE html>
<html>
<body>

First Name: <input name="fname" type="text" value="Michael"><br>
First Name: <input name="fname" type="text" value="Doug">

<p>Click the button to get the tag name of the first element in the document that has a name attribute with the value "fname".</p>

<button onclick="myFunction()">Try it</button>

<p id="demo"></p>

<script>
function myFunction() {
  var x = document.getElementsByName("fname")[0].tagName;
  document.getElementById("demo").innerHTML = x;
}
</script>

</body>
</html>.


