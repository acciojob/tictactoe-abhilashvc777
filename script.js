//your JS code here. If required.
const child = document.querySelector(".child") 
const btn = document.querySelector("#submit")
const player1_input = document.querySelector("#player1")
const player2_input = document.querySelector("#player2")
const message = document.querySelector(".message")

const grid = `<h1>Tic Tac Toe</h1>
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
	let Player1 = player1_input.value
	let Player2 = player2_input.value
	if(!Player1.length && !Player2.length){
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
			   message.innerText = Player1 +", you're up"
			   let b = ""
			   let c = ""
			   let d = ""
			   let x = ""
			   let f = ""
			   let g = ""
			   let h = ""
			   let k = ""
			   for(let i=0; i<=box.length-1; i++){
				   if(i==0 || i==1 || i==2){
					   b+=box[i].textContent;
				   }
				   if(i==0|| i==3||i==6){ 
					   c+=box[i].textContent;
				   }
				   if(i==0||i==4||i==8){
					   d+=box[i].textContent;
				   }
				   if(i==1||i==4||i==7){
					   x+=box[i].textContent;
				   }
				   if(i==2||i==5||i==8){
					   f+=box[i].textContent;
				   }
				   if(i==3||i==4||i==5){
					   g+=box[i].textContent; 
				   }
				   if(i==6||i==7||i==8){
					   h+=box[i].textContent;
				   }
				   if(i==2||i==4||i==6){
					   k+=box[i].textContent;
				   }
			   } 
			   if(b=="xxx" || c=="xxx" ||d=="xxx" ||x=="xxx"||f=="xxx"||g=="xxx"||h=="xxx"||k=="xxx"){ 
					   message.innerText = Player1+" congratulations you won!"
				   box.forEach((el)=>{
					   if(el.textContent=="x"){
						   el.style.backgroundColor="#800080"
					   }
				   })
				    grid1.removeEventListener("click",call)
				   }
			   j++
		   }else{
			   j;
		   }  
	   }
	   if(j==1||j==3||j==5||j==7){
		   if(e.target.closest(".box").textContent.length==0){
			   e.target.closest(".box").textContent = "0"
			   message.innerText = Player2 +", you're up"
			    let a = ""
			   let c = ""
			   let d = ""
			   let x = ""
			   let f = ""
			   let g = ""
			   let h = ""
			   let k = ""
			   for(let i=0; i<=box.length-1; i++){
				   if(i==0 || i==1 || i==2){
					   a+=box[i].textContent;
				   }
				   if(i==0|| i==3||i==6){ 
					   c+=box[i].textContent;
				   }
				   if(i==0||i==4||i==8){
					   d+=box[i].textContent;
				   }
				   if(i==1||i==4||i==7){
					   x+=box[i].textContent;
				   }
				   if(i==2||i==5||i==8){
					   f+=box[i].textContent;
				   }
				   if(i==3||i==4||i==5){
					   g+=box[i].textContent; 
				   }
				   if(i==6||i==7||i==8){
					   h+=box[i].textContent;
				   } 
				   if(i==2||i==4||i==6){
					   k+=box[i].textContent;
				   }
			   } 
			   if(a=="000" || c=="000" ||d=="000" ||x=="000"||f=="000"||g=="000"||h=="000"||k=="000"){ 
					   message.innerText = Player2+" congratulations you won!"
				    box.forEach((el)=>{
					   if(el.textContent=="0"){
						   el.style.backgroundColor="#800080"
					   }
					})
				    grid1.removeEventListener("click",call)
				   }
			   j++ 
		   }else{ 
			   j; 
		   }
	   }
   }
	grid1.addEventListener("click",call)
 }
}) 
