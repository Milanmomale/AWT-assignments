JS. ASSIGNMENT 4
-------------------------------------------------------------------------------
1.Write a jQuery program to hide all headings on a page when they are clicked.
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="jqueri.js"></script>
    <title>MERCURY</title>
</head>
<body>
    <h1>Lorem ipsum dolor sit amet.</h1>
    <H2>Lorem ipsum dolor sit amet.</H2>
    <h3>Lorem ipsum dolor sit amet.</h3>
    <script>
        $(document).ready(function(){
            $("h1 , h2 ,h3").click(function(){
                $("h1 ,h2 ,h3").hide()
            })
        })
    </script>
</body>
</html>
------------------------------------------------------------------------------------------
2.Write a jQuery program to attach a click and double-click events to all <p> elements.
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="jqueri.js"></script>
    <title>MERCURY</title>
</head>
<body>
    <h1>Lorem ipsum dolor sit amet.</h1>
    <H2>Lorem ipsum dolor sit amet.</H2>
    <h3>Lorem ipsum dolor sit amet.</h3>
    <script>
        $(document).ready(function(){
            $("h1 , h2 ,h3").dblclick(function(){
                $("h1 ,h2 ,h3").css("color","red")
            })
        })
    </script>
</body>
</html>

------------------------------------------------------------------------------------------
3.Write a jQuery program to get a single element from a selection of elements ofa HTML page.
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="jqueri.js"></script>
    <title>MERCURY</title>
</head>
<body class="get">
    <h1>Lorem ipsum dolor sit amet.</h1>
    <H2>Lorem ipsum dolor sit amet.</H2>
    <h3>Lorem ipsum dolor sit amet.</h3>
    <script>
        $(document).ready(function(){
            $(".get").dblclick(function(){
               var a= $(".get").html()
               console.log(a)
            })
        })
    </script>
</body>
</html>

------------------------------------------------------------------------------------------
4.Write a jQuery program to attach a click and double-click events to all <p> elements.
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="jqueri.js"></script>
    <title>MERCURY</title>
</head>
<body class="get">
    <h1>Lorem ipsum dolor sit amet.</h1>
    <H2>Lorem ipsum dolor sit amet.</H2>
    <h3>Lorem ipsum dolor sit amet.</h3>
    <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia 
        dolores est pariatur voluptatum saepe temporibus iste libero, delectus qui facere.
    </p>
    <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam, unde.
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
        Facilis eligendi facere sed, voluptatibus doloremque veritatis.
         Tempore animi minima commodi soluta optio ea similique assumenda mollitia, suscipit distinctio, doloremque odit. 
         Ex in doloribus cum necessitatibus reprehenderit atque eius voluptatum commodi, perspiciatis 
         totam explicabo natus reiciendis sit, quam sequi maiores sed id voluptas?
          Laudantium, quis odio aperiam itaque molestias distinctio mollitia inventore obcaecati eos. 
          Doloremque est temporibus consectetur. 
          Expedita, voluptates aliquam distinctio alias maxime earum ea quibusdam velit consectetur aspernatur unde nostrum tenetur, 
          vitae totam exercitationem temporibus explicabo sint similique doloribus tempore! 
        Ea nostrum sapiente ipsum atque animi mollitia doloremque fuga natus!
    </p>
    <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
        Facilis eligendi facere sed, voluptatibus doloremque veritatis.
         Tempore animi minima commodi soluta optio ea similique assumenda mollitia, suscipit distinctio, doloremque odit. 
         Ex in doloribus cum necessitatibus reprehenderit atque eius voluptatum commodi, perspiciatis 
         totam explicabo natus reiciendis sit, quam sequi maiores sed id voluptas?
          Laudantium, quis odio aperiam itaque molestias distinctio mollitia inventore obcaecati eos. 
          Doloremque est temporibus consectetur. 
          Expedita, voluptates aliquam distinctio alias maxime earum ea quibusdam velit consectetur aspernatur unde nostrum tenetur, 
          vitae totam exercitationem temporibus explicabo sint similique doloribus tempore! 
        Ea nostrum sapiente ipsum atque animi mollitia doloremque fuga natus!
    </p>
    <script>
        $(document).ready(function(){
            $("p:first").dblclick(function(){
               $("p:first").css("color","blue")
            })
        })
        $(document).ready(function(){
            $("p:first").click(function(){
               $("p:last").css("color","grey")
            })
        })
    </script>
</body>
</html>

------------------------------------------------------------------------------------------
5.Write a JavaScript function to validate whether a given value is RegEx or not.