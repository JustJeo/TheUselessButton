// Connection check
console.log("AYO! This is Jeo!")

// Fired function
  // User clicks button
  // Button turns ON
    // Button changes to blue with "ON"
  //Button relays response
    // Button randomly chooses a response
    // Displays response to user
  // Button turns OFF
    // Button changes back to red with "OFF"

let uselessGame = {
  // Button relays response
  answer: function() {
    // Button randomly chooses a response
    let randomResponse = Math.floor(Math.random()*5);
    // Displays snarky response to user
    if (randomResponse === 4) {
      document.getElementsByClassName("response").innerHTML = "HEY! Who turned on the light?! I'm sleeping here!"
    } else if (randomResponse === 3) {
      document.getElementsByClassName("response").innerHTML = "Shhhh. We're watching a movie."
    } else if (randomResponse === 2) {
      document.getElementsByClassName("response").innerHTML = "It's 3am in here!"
    } else if (randomResponse === 1) {
      document.getElementsByClassName("response").innerHTML = "TA-DAAAA.... I'm done."
    } else {
      document.getElementsByClassName("response").innerHTML = "...No."
    }
  },
}

// Fired Function
  // User clicks button
const pushed = document.getElementsByClassName("push")
pushed.addEventListener("click", () => {
  // Display Response
  document.getElementsByClassName("response").style.display = "block"
  document.querySelector(".response").innerHTML = "Meow"
})
