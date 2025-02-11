window.addEventListener('keydown',function(e){

    const audio = document.querySelector(`audio[data-key = "${e.keyCode}"]`)
    console.log(audio)

    const key = document.querySelector(`.key[data-key = "${e.keyCode}"]`)

    if(!audio)   return; 

        audio.currentTime=0;
        audio.play()
        console.log(key)
        
      
    

  if(key){
    setTimeout(() => {
        key.classList.remove('playing');
        console.log("Manually removed playing from:", key);
    }, 100);
        key.classList.add('playing')
   
        const imagePath = key.getAttribute('data-image');
        const imgElement = document.querySelector('.img-container img');
        imgElement.src = imagePath;
       
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundSize = "100%";
         document.body.style.backgroundPosition = "bottom-center"
       
    }
      
});


function removeTransition(e) {
    console.log("Transition ended:", e.propertyName); // Debugging
    if (e.propertyName !== 'transform') return;
    
    e.target.classList.remove('playing'); // Use e.target instead of this
}
const keys = document.querySelectorAll('.key')

keys.forEach (key => key.addEventListener('transitionend',removeTransition));

