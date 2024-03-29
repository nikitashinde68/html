let body=document.body
let div=document.createElement('div')
div.className="divclass"
div.id="divid"
div.style.background="linear-gradient(pink,yellow)"
div.style.color="black"
div.style.textAlign="center"
div.innerHTML+= `<h1>Welcome</h1>`
body.appendChild(div)