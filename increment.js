incrementAndShowValue();

function incrementAndShowValue() {
  
  var value = localStorage.getItem('visitcounter') || 0;
  var newValue = ("00000" + (Number(value) + 1)).slice(-6);
  var container = document.getElementById("1");
  var counter = parseInt(newValue)
  localStorage.setItem("visitcounter", counter);

  var sentence = "You are the " + counter + "th to enter this shortened link."

  setTimeout(function(){
  window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley";
  }, 3000);
  
  container.innerHTML = sentence

  
} 
