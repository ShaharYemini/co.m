incrementAndShowValue();

function incrementAndShowValue() {
  
  var value = localStorage.getItem('visitcounter') || 0;
  var newValue = ("00000" + (Number(value) + 1)).slice(-6);
  var container = document.getElementById("1");
  var counter = parseInt(newValue)
  localStorage.setItem("visitcounter", counter);

  var sentence = "You are the " + counter + " to enter this shortened link."
  container.innerHTML = sentence

  
}