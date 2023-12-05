// add an event listener to the dog picture that listens for a "click" and gives an alert

// add an event listener to the list items in the class schedule that listens for a "mouseover" event and changes its background color

// add an event listener to the whole page that listens for a "keydown" event and prints the key that was pressed


document.querySelector("#navBar")
  .addEventListener("click", (event) => {
    console.log("Nav bar has been clicked")
  });



  document.querySelectorAll("#class-schedule-list li")
  console.log(listItems);
  for (let item in listItems){
  .addEventListener("mouseover", (event) => event.target.style.background-color = "red");
  .addEventListener("mouseout", (event) => event.target.style.background-color = "inherit");
  };


  document.addEventListener("keyup", (event) => {
    console.log(`the ${event.key} was pressed.`);
  })
