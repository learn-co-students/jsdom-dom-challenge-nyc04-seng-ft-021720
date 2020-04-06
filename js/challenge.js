
const likeList = document.querySelector(".likes")
let counter = document.querySelector("#counter")
let i = 1
let isPaused = false
 
const commentList = document.createElement("ul")
document.querySelector("#list").append(commentList)

// increasing the counter by 1 every second
function start() {
  setInterval(increase, 1000)
}
// need to make an isPaused var as a boolean 
// 
function increase() {
  if (i && !isPaused) {
    i++
    // need to subtract one because it will leap to 2 otherwise
    // just a workaround for setting i = 1 initially. 
    // would like it to be 0, but then its falsey...
    counter.innerText = i - 1
  }
}
start()
// check if target of the click is one of the buttons by id
document.querySelector("body").addEventListener("click", e => {
  switch(e.target.id) {
    case 'minus': 
      counter.innerText = parseInt(counter.innerText) - 1
      break;
    case 'plus': 
      counter.innerText = parseInt(counter.innerText) + 1
      break;
    case 'heart': 
      let counterInt = parseInt(counter.innerText)
      // searches the ul for an li for that counter number
      let li = likeList.querySelector(`[data-counter = '${counterInt}']`)
      if (li) {
        li.dataset.value ++
        li.innerHTML = `${li.dataset.counter} has been liked ${li.dataset.value} times`
      }
      else {
        let newLi = document.createElement("li")
        newLi.setAttribute('data-counter', counterInt)
        newLi.setAttribute('data-value', 1)
        newLi.innerHTML = `${counterInt} has been liked 1 time`
        likeList.append(newLi)
      }
      break;
    case 'pause': 
      isPaused = !isPaused;
      const pauseButton = document.querySelector("#pause")
      const otherButtons = [
        document.querySelector("#minus"),
        document.querySelector("#plus"),
        document.querySelector("#heart"),
        document.querySelector("#submit"),
      ]
      // if otherButtons are disabled, need to change pause to resume
      // then, when resume is clicked, need to re-enable and change text to pause
      if (document.querySelector("#minus").disabled === false) {
        otherButtons.forEach(button => {
          button.disabled = true
        })
        pauseButton.innerText = "resume"
      }
      else {
        otherButtons.forEach(button => {
          button.disabled = false
        })
        pauseButton.innerText = "pause"
      }
      break;
    case 'submit':
      e.preventDefault()
      // gets the text that was entered into the text box
        let comment = document.createElement("li")
        comment.innerText = e.target.parentNode.querySelector("#comment-input").value
        commentList.append(comment)
      break;
  }

})