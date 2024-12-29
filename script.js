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
    const message = document.querySelector(".message")
	let j = 0;
   function call(e){
	   if(j==0||j==2||j==4||j==6||j==8){
		   if(e.target.closest(".box").textContent.length==0){
			   e.target.closest(".box").textContent = "x"
			   message.textContent = `${a}, you're up`
			   j++
		   }else{
			   j;
		   }
	   }
	   if(j==1||j==3||j==5||j==7){
		   if(e.target.closest(".box").textContent.length==0){
			   e.target.closest(".box").textContent = "0"
			   message.textContent = `${b}, you're up`
			   j++
		   }else{
			   j;
		   }
	   }
	   if(j==9){
	   for(let i=0; i<box.length; i++){
		   console.log(box[i].textContent)
	   }
	   }
   }
	grid1.addEventListener("click",call)
 }
}) 
