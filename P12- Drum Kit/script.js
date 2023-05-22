window.addEventListener("keydown",function(e){
    // to find the key code number of every key
    // console.log(e.keyCode);

    // created audio variable to select the pressed key
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    console.log(audio);
    if(!audio) return;

    audio.play()
});