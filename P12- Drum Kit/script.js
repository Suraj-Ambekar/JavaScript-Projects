window.addEventListener("keydown",function(e){
    // to find the key code number of every key
    // console.log(e.keyCode);

    // created audio variable to select the pressed key
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.div[data-key="${e.keyCode}"]`);
    // console.log(audio);
    if(!audio) return;
    // if audio is present then play the audio file
    audio.currentTime = 0;
    audio.play()
    // console.log(key)
    key.classList.add("playing");

    //to remove the transition effect
    function removeTransition(e){
        if(e.propertyName !== 'transform') return;

        this.classList.remove("playing");
    }

    const keys = document.querySelectorAll('.div');
    keys.forEach(key => key.addEventListener("transitionend",removeTransition));
});