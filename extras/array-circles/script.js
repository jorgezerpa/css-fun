let container= document.getElementById("container");

for(let i=0; i<100; i++){
	container.innerHTML+=`
		<span class="circle"></span>
	`
}


const c_width=50;
const c_height=50;
let translateY= 0;
let translateX=0;

let circle= document.querySelectorAll(".circle");



for(let j=0; j<100; j++){
	if(j%10==0 && j>0){
		translateY=translateY+c_height;
		translateX=0;
	} 
	circle[j].style.transform=`translate(${translateX}px, ${translateY}px)`;
	translateX= translateX+c_width;
}




