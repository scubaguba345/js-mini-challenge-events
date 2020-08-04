/***** Beginning of Starter Code ****/

const playerContainer = document.querySelector(".player-container")

// render one player to the DOM
function renderPlayer(player) {
  // create an element for the outer div
  const playerDiv = document.createElement("div")

  // set attributes on the outer div
  playerDiv.className = "player"
  playerDiv.dataset.number = player.number

  // use innerHTML to create any child elements of the div
  playerDiv.innerHTML = `
    <h3>${player.name} (<em>${player.nickname}</em>)</h3>
    <img src="${player.photo}" alt="${player.name}">
    <p class="likes">${player.likes} likes</p>
    <button class="like-button">❤️</button>
  `

  // append the element to the container
  playerContainer.append(playerDiv)
}

// for each player in the array, render to the DOM
PLAYERS.forEach(renderPlayer)

/***** End of Starter Code ****/




/***** Deliverable 1 *****/
const header = document.getElementById('header')
function toggleColor(element) {
    if (element.style.color === "red") {
      element.style.color = "black"
    } else {
      element.style.color = "red"
    }
  }

  header.addEventListener('click', function(e) {
    toggleColor(e.target);
  })

/***** Deliverable 2 *****/

const newForm = document.getElementById("new-player-form")
newForm.addEventListener('submit', function(e) {
  e.preventDefault()
  //console.log(e.target)
  let newPlayer = {};
  newPlayer.number = newForm[0].value
  newPlayer.name = newForm[1].value
  newPlayer.nickname = newForm[2].value
  newPlayer.photo = newForm[3].value
  newPlayer.likes = 1;
  renderPlayer(newPlayer)
})

/***** Deliverable 3 *****/
document.addEventListener('click', function(e) {
  if(e.target.className === "like-button") {
    let likes = e.target.parentNode.querySelector('.likes') //we are going one up from the target of like button to grab the number of likes above
    likes.innerText = `${(parseInt(likes.innerText) + 1)} likes`
  }
})