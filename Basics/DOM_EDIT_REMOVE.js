<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>First Website</title>
</head>
<body style="background-color: black; color: beige;">

    <ul class="language">
        <li>Javascript</li>
    </ul>

</body>
    <script>
        function addLanguage(langName) {
          const li =  document.createElement("li");
          li.innerHTML = `${"langName"}`
          document.querySelector(".language").appendChild(li)
        }
        addLanguage("Python")
        addLanguage("Typescript")

        function addlanguage2 (langname){
            const li = document.createElement("li")
            li.appendChild(document.createTextNode(langName))
            document.querySelector(".language").appendChild(li)
        }

        addlanguage2("typescript")



        //Edit

       const secondLang =  document.querySelector("li:nth-child(2)")
        const newli = document.createElement("li")
        newli.textContent = 'MOJO'
        secondLang.replaceWith(newli)

        //edit

        const firstLang = document.querySelector("li:first-child")
        firstLang.outerHTML = "<li>Typrscript</li>"

        //remove

        const lastLang = document.querySelector("li:last-chid")
        langName.remove()
        
    </script>
</html>















