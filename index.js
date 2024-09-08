function handleclick(){
    alert("i got click");
}

let numberofdrum=document.querySelectorAll(".drum").length

for (var i=0 ; i<numberofdrum ; i++){

    document.getElementsByClassName("drum")[i].addEventListener("click", function (){
        var v = this.innerHTML;
       
        beat(v);
    });
}

document.addEventListener('keydown', function(event){
   var b=event.key;  
    beat(b);
});

function beat(key){
    var v = key;
    console.log(v);
    transitiony(v);
    switch (v){
        case "w":
            var audio= new Audio("sounds/crash.mp3");
            audio.play();
        break;
        case 'a':
            var audio= new Audio("sounds/kick-bass.mp3");
            audio.play();
        break;
        case "s":
            var audio= new Audio("sounds/snare.mp3");
            audio.play();
        break;
        case "d":    
            var audio= new Audio("sounds/tom-1.mp3");
            audio.play();
        break;
        case "k":
            var audio= new Audio("sounds/tom-2.mp3");
            audio.play();
        break;
        case "j":
            var audio= new Audio("sounds/tom-3.mp3");
            audio.play();
        break;
        case "l":
            var audio= new Audio("sounds/tom-4.mp3");
            audio.play();
        break;
        default:
            alert("unkown")   ;
             
    }
}

document.querySelector("button").setAttribute("onclick",setTimeout(transitiony, 100))

function transitiony(key)
{
    var bkey=document.querySelector('.'+key);
    bkey.classList.add("pressed");
    setTimeout(function(){
        bkey.classList.remove("pressed");
    }, 300)
}

// document.addEventListener('keydown', 
//                             function(event)  
//             { 
//                 if(event.key !== "k") { 
//                     alert('Keydown event! Key pressed: ' 
//                                       + event.key); 
//                 } 
//             }); 
        