let z=document.getElementById("hello")
z.style.backgroundColor="yellow"
let pchildElem=document.createElement("div")
let bahubaliImage=document.createElement("img")
bahubaliImage.width="400"
bahubaliImage.src="https://peachmode.com/cdn/shop/articles/bahubali-inspired-ethnics-for-your-traditional-closet-peachmode.jpg?v=1668999039"
pchildElem.textcontent="this is div tag in p tag"
z.append(pchildElem,bahubaliImage)
let saipallaviImg=document.createElement("img")
saipallaviImg.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLnJwY5dsJFFop_4idaXCg_OaJOp76eObvBQ&s"
z.replaceChild(saipallaviImg,bahubaliImage)
const cloneElem=z.cloneNode(true)
document.body.append(cloneElem)
let ntrpic=document.createElement("img")
ntrpic.setAttribute("src","https://content.tupaki.com/en/feeds/2024/09/16/517701-ntr.webp")
ntrpic.setAttribute("width","500")
ntrpic.style.backgroundColor="red"
ntrpic.style.padding="20px"
console.log(ntrpic.getAttribute("width"))
document.body.appendChild(ntrpic)
console.log(ntrpic)

let divTag=document.createElement("div")
divTag.className="container"
divTag.classList.add("vamsi")
divTag.classList.add("ravi")
divTag.classList.remove("vamsi")
divTag.classList.replace("ravi","rakesh")
console.log(divTag)

ntrpic.addEventListener("click",function(){
    alert("ntrpic is clicked")
    ntrpic.style.borderRadius="50%"
})

let div=document.querySelector("div")
console.log(div.firstChild)
console.log(div.firstElementChild)
console.log(div.lastChild)
console.log(div.lastElementChild)

let M=document.querySelector(".two")
M.insertAdjacentElement("afterend",bahubaliImage)

