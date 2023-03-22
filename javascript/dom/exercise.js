/*
a <p> with red text that says “Hey I’m red!”

an <h3> with blue text that says “I’m a blue h3!”

a <div> with a black border and pink background color with the following 
elements inside of it:

    another <h1> that says “I’m in a div”

    a <p> that says “ME TOO!”

    Hint for this one: after creating the <div> with createElement, append 
    the <h1> and <p> to it before adding it to the container. */

//Select to edit #container
const container = document.querySelector("#container");
    //Create element <p>
    const pContent = document.createElement("p");
    pContent.classList.add("paragraph");
    pContent.textContent = "Hey, I'm red!";

        //Add content to nextContainer variable (#container)
        container.appendChild(pContent);

            //Add inline style to pContent
            pContent.setAttribute("style", "color: red;");
        
    //Create element <h3>
    const hContent = document.createElement("h3");
    hContent.classList.add("headingThree");
    hContent.textContent = "I'm a blue h3!";

        //Add content to container variable (#container)
        container.appendChild(hContent);

            //Add inline style to hContent
            hContent.setAttribute("style", "color: blue;");

//Create a new div element
    const divContent = document.createElement("div");
    divContent.classList.add("secondSection");
    
    

        const h1Content = document.createElement("h1");
        h1Content.textContent = "I'm a child in this div";

        divContent.appendChild(h1Content);

        const p2Content = document.createElement("p");
        p2Content.textContent = "ME TOO!";

        divContent.appendChild(p2Content);

        divContent.setAttribute("style", "background: pink; border: 1px solid black;")

        container.appendChild(divContent);



