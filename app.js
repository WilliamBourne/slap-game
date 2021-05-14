var health = 100;
var hits = 0

let moves = {

  roll: {
    amount: 1,
    name: "roll"


  },

  block: {
    amount: 2,
    name: "block"
  },


  parry: {
    amount: 3,
    name: "parry"
  }
}









let queued = []

function roll() {
  queued.push(moves.roll)
  update()
}

function block() {
  queued.push(moves.block)
  update()
}

function parry() {
  queued.push(moves.parry)
  update()
}


function slap() {
  let modified = 0
  queued.forEach(move => modified += move.amount)
  if (modified < 2) {

    health--
  }
  queued = []

  console.log(health)
  hits += 1

  update()



}



function punch() {
  let modified = 0
  queued.forEach(move => modified += move.amount)
  if (modified < 4) {
    health = health - 5


  }
  queued = []
  console.log(health)
  hits += 1
  update()
}


function kick() {
  let modified = 0
  queued.forEach(move => modified += move.amount)
  if (modified < 6) {

    health = health - 10


  }
  console.log(health)
  queued = []
  console.log(health)
  hits += 1
  update()
}


function disableButton() {
  if (health <= 0) {
    document.getElementById("punchbutton").disabled = true;
    document.getElementById("kickbutton").disabled = true;
    document.getElementById("slapbutton").disabled = true;
    console.log("disablebutton")
  }
}




//  var hits = document.getElementById("punchbutton", "kickbutton", "slapbutton"),
//     count = 0;
// button.onclick = function () {
//     count += 1;
//     document.getElementById = "Counter" + count;
// };









function update() {

  disableButton()
  let template = ""
  queued.forEach(move => {
    template += move.name
  })
  document.getElementById("queue").innerText = template
  document.getElementById("Counter").innerText = hits
  document.getElementById("Health").innerText = health < 0 ? 0 : health

}





update()



