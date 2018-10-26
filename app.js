// Play drum by keyboard press
const clap =document.getElementById('clap');
const hihat =document.getElementById('hihat');
const kick =document.getElementById('kick');
const openhat =document.getElementById('openhat');
const boom =document.getElementById('boom');
const ride =document.getElementById('ride');
const snare =document.getElementById('snare');
const tom =document.getElementById('tom');
const tink =document.getElementById('tink');

const ahem =new Audio('sounds/ahem.wav');

clap.addEventListener('click',() =>{
    // var clapSound = document.getElementById('clapSound');
    
    clapSound.play();   
   
})

hihat.addEventListener('click',() =>{
    // var hihatSound = document.getElementById('hihatSound');
    hihatSound.play();
})

kick.addEventListener('click',() =>{
    kickSound.play();
})

openhat.addEventListener('click',() =>{
  
    openhatSound.play();
})

boom.addEventListener('click',() =>{
    boomSound.play();
})

ride.addEventListener('click',() =>{
    rideSound.play();
})

snare.addEventListener('click',() =>{ 
    snareSound.play();
})

tom.addEventListener('click',() =>{ 
    tomSound.play();
})
tink.addEventListener('click',() =>{
    tinkSound.play();
})







onkeydown = function keycode(){

    let key =event.key;
    if (key =='a'){
        clapSound.currenttime=0;
        clapSound.play();
        clap.classList.add("style");
        setTimeout(function(){  clap.classList.remove("style"); }, 100);
    }

    else if (key=='s'){
        hihatSound.play();
        hihat.classList.add("style");
        setTimeout(function(){  hihat.classList.remove("style"); }, 100);
    }

    else if (key=='d'){
        kickSound.play();
        kick.classList.add("style");
        setTimeout(function(){  kick.classList.remove("style"); }, 100);
    }

    else if (key=='f'){
        openhatSound.play();
        openhat.classList.add("style");
        setTimeout(function(){  openhat.classList.remove("style"); }, 100);
    }

    else if (key=='g'){
        boomSound.play();
        boom.classList.add("style");
        setTimeout(function(){  boom.classList.remove("style"); }, 100);
    }

    else if (key=='h'){
        rideSound.play();
        ride.classList.add("style");
        setTimeout(function(){  ride.classList.remove("style"); }, 100);
    }


    else if (key=='j'){
        snareSound.play();
        snare.classList.add("style");
        setTimeout(function(){  snare.classList.remove("style"); }, 100);
    }

    else if (key=='k'){
        tomSound.play();
        tom.classList.add("style");
        setTimeout(function(){  tom.classList.remove("style"); }, 100);
    }

    else if (key=='l'){
        tinkSound.play();
        tink.classList.add("style");
        setTimeout(function(){  tink.classList.remove("style"); }, 100);
    }

    else{
        ahem.play()
    }
    

}
// Play music by mouse click
