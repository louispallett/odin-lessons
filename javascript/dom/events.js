//Method 2
const btn = document.querySelector("#btn");
btn.onclick = () => alert("Hello World!");

//Method 3
const btn2 = document.querySelector("#btn2");
btn2.addEventListener("click", () =>
{
    alert("Hello World!");
});

//We could also create a function, such as:

function alertfunction()
{
    alert("YAY! You did it!");
}

btn2.addEventListener("click", alertfunction); 
//NOTE - we don't add () after the function here, this is because this calls the function immediately - so if you add () and reload, it will show up straightaway rather than on clicking 
//the button.

btn.addEventListener("click", function (e) 
{
    console.log(e.target);
});

btn.addEventListener('click', function (e) 
{
    e.target.style.background = 'blue';
});

//The e function refers to the event itself. 

/*Attaching Listeners to Groups of Nodes

This is actually quite a lot of code if you're attaching lots of similar event listeners to many elements. There are a few ways to go about doing that more effectively. We learned above that we
can get a nodelist of all of the items matching a specific selector with querySelectorAll("selector"). In order to add a listener to each of them we simply need to iterate through the whole list 
like so:

<div id="container">
    <button id="1">Click Me</button>
    <button id="2">Click Me</button>
    <button id="3">Click Me</button>
</div>

// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll('button');

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {

  // and for each one we add a 'click' listener
  button.addEventListener('click', () => {
    alert(button.id);
  });
});

This is just the tip of the iceberg when it comes to DOM manipulation and event handling.

Some useful events include:

click
dblclick
keydown
keyup

There's a complete list of events here: https://www.w3schools.com/jsref/dom_obj_event.asp

Find out a keycode: https://www.toptal.com/developers/keycode*/

