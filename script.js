const quote = document.querySelector('.quote')
const authorName = document.querySelector('.author-name')
const btn = document.querySelector('.new-quote')

const url = "https://api.quotable.io/random"

function getQuote(){
  fetch(url).then(res =>{
   return res.json()
  }).then((data) =>{
    console.log(data.author)
    quote.textContent = data.content
    authorName.textContent = data.author
  })
}

setInterval(getQuote , 15000)
btn.addEventListener('click' , getQuote)
getQuote()

console.log(url)

fetch(url).then(res =>{
  console.log(res)
 return res.json()
}
).then(data =>{
  console.log(data)
  //document.write(data.author)
})









































