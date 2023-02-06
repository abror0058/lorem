const inp = document.querySelector(".inp")
const btn = document.querySelector(".btn")
const list = document.querySelector(".list")


btn.addEventListener("click", ()=>{
    let v = inp.value
    if(v.trim() === ""){
        return
    }
    if(v.toLowerCase().includes("maraz")){
        return alert("saytda so`kinma maraz!!!")
    }
    let li = document.createElement("li")
    li.innerHTML = v                                                              
    .replace("mol", "yaxshi")
    .replace("iplos", "zo`r")   
    
    
    
    list.appendChild(li)
    inp.value = ""
})









let str = "salom dunyo"

console.log( str.includes("salom")); // boolean
console.log( str.indexOf("dunyo")); // false === -1

console.log( str.concat(" hello")); // same as + "hello"
console.log( str + " hello"); // same as concat
console.log( str.replace("dunyo", "bitch"));

console.log("Mark molsan molsan Molsan".replace(/molsan/gi, "yaxwisan"));