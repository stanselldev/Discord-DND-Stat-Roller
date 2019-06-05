//this is currently what I am working on and trying to figure out on my own

//this compares the results of 2 d20s and takes the greater number
function advantage() {    

    let advantage = ("a" || "A")
    let roll1 = Math.ceil(Math.random() * 20) 
    let roll2 = Math.ceil(Math.random() * 20)

    console.log(roll1)
    console.log(roll2)

    if (roll1 > roll2){
      console.log(roll1)
      else
      console.log(roll2)
    }
}

//this compares the results of 2 d20s and takes the lesser number
function disadvantage() {    
   
    let disadvantage = ("d" || "D")
    let roll1 = Math.ceil(Math.random() * 20) 
    let roll2 = Math.ceil(Math.random() * 20)

    console.log(roll1)
    console.log(roll2)

    if (roll1 < roll2){
      console.log(roll1)
      else
      console.log(roll2)
}
