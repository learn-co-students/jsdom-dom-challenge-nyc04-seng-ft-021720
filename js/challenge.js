const timerCount = document.querySelector('#counter')

let timer = setInterval(function(){
            timerCount.textContent++ ; }, 1000);


const plusButton = document.querySelector('#plus')

plusButton.addEventListener("click", function(){
    timerCount.textContent++
})

const minusButton = document.querySelector('#minus')

minusButton.addEventListener("click", function(){
    timerCount.textContent--
})


const heartButton = document.querySelector('#heart')


let newDiv = document.createElement('div')
newDiv.id = "likes"
let oldDiv = document.querySelector('div')
oldDiv.append(newDiv)

heartButton.addEventListener("click", function(){

    if(timerCount.textContent != 0 && document.querySelector(`[data-like='${timerCount.textContent}']`)){
        let likeHearted = document.querySelector(`div[data-like='${timerCount.textContent}'] p:nth-child(2)`)
        likeHearted.textContent++

    }
    else{
        let likeHearted = document.createElement('div')
        likeHearted.dataset.like = timerCount.textContent
        likeHearted.innerHTML = `
        <p> The number of likes for number ${timerCount.textContent} is </p> 
        <p> 1 </p>
        `
        newDiv.append(likeHearted)
    }



})






const pauseButton = document.querySelector('#pause')

pauseButton.addEventListener("click",function(){

    if(pauseButton.innerText === 'pause'){
        clearInterval(timer);
        plusButton.disabled = true
        minusButton.disabled = true
        heartButton.disabled = true
        pauseButton.textContent = 'resume'
    }
    else if(pauseButton.innerText === 'resume'){
        timer = setInterval(function(){
            timerCount.textContent++ ; }, 1000);
        plusButton.disabled = false
        minusButton.disabled = false
        heartButton.disabled = false
        pauseButton.textContent = 'pause'
    }   
} )





let submitButton = document.querySelector('#submit')
let commentSubmitted = document.querySelector('#comment-input')
let commentList = document.querySelector('#list')

submitButton.addEventListener('click', function(e){
        e.preventDefault()
        let pTag = document.createElement('p')
        pTag.textContent = commentSubmitted.value
        commentList.append(pTag)

})



