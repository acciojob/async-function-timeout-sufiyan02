//your JS code here. If required.

let name = document.getElementById("text")
let time = document.getElementById("delay")
let btn = document.getElementById("btn")
let res = document.getElementById("output")
btn.addEventListener("click",()=>{
	let firstVal = name.value
	let secVal = time.value
	 setTimeout(()=>{

		  res.innerText = firstVal
		 
	 },secVal)
	
})