let c=document.getElementsByTagName("span")
for(i=0;i<c.length;i++){
    c[0].style.backgroundColor="aqua"
    c[1].attributeStyleMap.backgroundColor="red"
}
console.log(c);

let p=document.querySelector(".btn")
p.style.backgroundColor="blue"
p.style.color="black"
console.log(p);

let r=document.querySelectorAll(".btn");
r[0].style.backgroundColor="yellow"
r[1].style.backgroundColor="skyblue"
r[2].style.backgroundColor="orange"
console.log(r);