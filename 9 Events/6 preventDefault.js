e.preventDefault()

// The Event interface's preventDefault() method tells the Event System that
// if the event does not get explicitly handled, 
// its default action should not be taken as it normally would be. 

// Example 1: 
// Blocking default click handling

// html
<p>Please click on the checkbox control.</p>

<form>
  <label for="id-checkbox">Checkbox:</label>
  <input type="checkbox" id="id-checkbox"/>
</form>

// js
const checkbox = document.getElementById("id-checkbox");

checkbox.addEventListener("click", (e) => {
  console.log("Sorry! preventDefault() won't let you check this!");      
  e.preventDefault();
});

// After a click event, the checkbox remains unchecked
// because preventDefault is stopping the usual behaviour of when a click happens on a checkbox

// Console Output
// > Sorry! preventDefault() won't let you check this!
