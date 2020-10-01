var eachDrum = document.querySelectorAll(".drum").length;
for (var i = 0; i < eachDrum; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click",function() {

    var button = this.innerHTML;

switch (button) {
    case "w":
        var btn1 = new Audio("sounds/tom-1.mp3");
        btn1.play();
        break;
    case "a":
        var btn2 = new Audio("sounds/tom-2.mp3");
        btn2.play();
        break;
    case "s":
        var btn3 = new Audio("sounds/tom-3.mp3");
        btn3.play();
        break;
    case "d":
        var btn4 = new Audio("sounds/tom-4.mp3");
        btn4.play();
        break;
    case "j":
        var btn5 = new Audio("sounds/snare.mp3");
        btn5.play();
        break;
    case "k":
        var btn6 = new Audio("sounds/kick-bass.mp3");
        btn6.play();
        break; 
    case "l":
        var btn7 = new Audio("sounds/crash.mp3");
        btn7.play();
        break;    

    default:console.log(button)
        break;
        }
        
    });
  
}
document.addEventListener("keypress",function(event){
     makesound(event.key);
  
    
    });

    function makesound(key) {
        
 switch (key) {
     case "w":
         var btn1 = new Audio("sounds/tom-1.mp3");
         btn1.play();
         break;
     case "a":
         var btn2 = new Audio("sounds/tom-2.mp3");
         btn2.play();
         break;
     case "s":
         var btn3 = new Audio("sounds/tom-3.mp3");
         btn3.play();
         break;
     case "d":
         var btn4 = new Audio("sounds/tom-4.mp3");
         btn4.play();
         break;
     case "j":
        var btn5 = new Audio("sounds/snare.mp3");
        btn5.play();
         break;
     case "k":
         var btn6 = new Audio("sounds/kick-bass.mp3");
         btn6.play();
         break;     case "l":
         var btn7 = new Audio("sounds/crash.mp3");
         btn7.play();
        break;    

     default:console.log(key)
         break;
         }
        
     }