//your JS code here. If required.
const child = document.querySelector(".child")
const btn = document.querySelector("#submit")
const player1_input = document.querySelector("#player-1")
const player2_input = document.querySelector("#player-2")
const message = document.querySelector(".message")

const grid = `<h1>TIC TAC TOE</h1>
	         <div class="message"></div>
            <div class="grid">
			<div class="box"></div>
			<div class="box"></div>
			<div class="box"></div>
	 		<div class="box"></div>
			<div class="box"></div>
			<div class="box"></div>
			<div class="box"></div>
			<div class="box"></div>
			<div class="box"></div>
		 <div>`
btn.addEventListener("click",()=>{
	let a = player1_input.value
	let b = player2_input.value
	console.log(a.length,b.length)
	if(!a.length && !b.length){
		message.textContent = "Please give right input"
	}else{
	child.innerHTML = grid
	const box = document.querySelectorAll(".box")
	const grid1 = document.querySelector(".grid")
	grid1.addEventListener("click",(e)=>{
	for(let i=0; i<arr.length; i++){
		if(i==0 || i==2 || i==4 || i==6 || i==8){
			message.textContent = `${a},`
		}
	
	}
	})
	}
	
	
}) 
