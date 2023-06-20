




const container = document.querySelector('.container-square');

function updatePosition() {
			container.style.top = (window.innerHeight  - container.offsetHeight) ;
      container.style.left = (window.innerWidth - container.offsetWidth)  ;
			requestId = null;
		}

		window.addEventListener("resize", function() {
			if (!requestId) {
				requestId = requestAnimationFrame(updatePosition);
			}
		});

		window.addEventListener("load", function() {
			updatePosition();
		});

const dataInfo = document.querySelectorAll("[data-info]");

const deliveryId = document.getElementById("deliveryId");

const retiradaId = document.getElementById("retiradaId");

const infoHidden = document.getElementsByClassName("info-hidden");

const dataShowit = document.querySelectorAll("[data-showIt]");

const buttonHover = document.querySelector(".info-hidden button");



function removeDelivery(){

   

   for(var i=0;i<dataInfo.length;i += i + 1){
  
     dataInfo[i].style.display = "";
   }
}

function showRetirada(){


 for(var i=0;i<infoHidden.length;i += i + 1){

   infoHidden[i].style.display = "block";

   


 }

 document.querySelector(".square").style.height = "330px";

 deliveryId.style.backgroundColor = "#C4BCBC"; 
 deliveryId.style.alignSelf = "flex-end";
 deliveryId.style.borderTopLeftRadius = "4px";
 deliveryId.style.borderTopRightRadius = "4px";
 deliveryId.style.height = "48px";
 deliveryId.style.color = "#8b8b8b";
 deliveryId.style.filter = "grayscale(100%)";

 retiradaId.style.backgroundColor = "white";
 retiradaId.style.borderTopLeftRadius = "4px";
 retiradaId.style.borderTopRightRadius = "4px";
 retiradaId.style.height = "60px";
 retiradaId.style.color = "red ";
 retiradaId.style.filter = "none";

 document.querySelector(".info-hidden p:nth-of-type(1)").style.marginTop = "20px";
 document.querySelector(".info-hidden p:nth-of-type(1)").style.fontSize = "16px";

 document.querySelector(".info-hidden form input  ").style.width = "100%";
 document.querySelector(".info-hidden form input  ").style.height = "60px";
 document.querySelector(".info-hidden form input  ").style.paddingLeft = "13px";
 document.querySelector(".info-hidden form input  ").style.border = "1px solid #e9ebee";

 document.querySelector(".info-hidden form ").style.display = "flex";
 document.querySelector(".info-hidden form ").style.height = "65px";
 document.querySelector(".info-hidden form ").style.marginTop = "40px";
 document.querySelector(".info-hidden form ").style.overflowY = "hidden";
 
 document.querySelector(".info-hidden button  ").style.height = "60px";
 document.querySelector(".info-hidden button  ").style.backgroundColor = "#70A401";
 document.querySelector(".info-hidden button  ").style.border = "none";
 document.querySelector(".info-hidden button  ").style.width = "70px";
 document.querySelector(".info-hidden button  ").style.color = "white";
 document.querySelector(".info-hidden button  ").style.borderRadius = "4px";
 document.querySelector(".info-hidden button  ").style.fontWeight = "600";
 document.querySelector(".info-hidden button  ").style.fontSize = "14px";


 document.querySelector(".info-hidden .localizacao ").style.float = "left";
 document.querySelector(".info-hidden .localizacao ").style.paddingLeft = "22px";
 

 
}



function showDelivery(){

 
  for(var i=0;i<dataInfo.length;i += i + 1){
 
    dataInfo[i].style.display = "";
 
  }  

 retiradaId.style.backgroundColor = ""; 
 retiradaId.style.alignSelf = "flex-end";
 retiradaId.style.height = "48px";
 retiradaId.style.color = "";
 retiradaId.style.borderTopLeftRadius = "4px";
 retiradaId.style.borderTopRightRadius = "4px";
 retiradaId.style.filter = "grayscale(100%)";
 
 
 deliveryId.style.backgroundColor = "";
 deliveryId.style.borderTopLeftRadius = "4px";
 deliveryId.style.borderTopRightRadius = "4px";
 deliveryId.style.height = "60px";
 deliveryId.style.color = "";
 deliveryId.style.filter = "none";


 document.querySelector(".square").style.height = "400px";

}

function darkHover(){

  buttonHover.style.color = "black";
}

function whiteHover(){

  buttonHover.style.color = "#FFF";
}

 function removeRetirada(){

  for(var i=0;i<infoHidden.length;i += i + 1){
 
    infoHidden[i].style.display = "none";
 

  } 
 }

 buttonHover.addEventListener("mouseover", function(){

  darkHover();

 });

 buttonHover.addEventListener("mouseleave", function(){

  whiteHover();

 });



retiradaId.addEventListener("click",function(){

  
   removeDelivery();
   showRetirada();
});

deliveryId.addEventListener("click", function(){

 
  removeRetirada();
  showDelivery();
});
