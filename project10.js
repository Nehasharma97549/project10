/*Function to update the text color based on the slider value
document.getElementById('color-slider').addEventListener('input', function(event) {
    const sliderValue = event.target.value;
    
    // Update the text color dynamically (range from 0 to 255)
    document.getElementById('text-display').style.color = `rgb(${sliderValue}, 0, 255 - ${sliderValue})`;
});*/



function changeColor(hue){
    let h = document.getElementById('displayText');
    h.style.color = `hsl(${hue}, 100%, 50%)`; // Use backticks (``) for string interpolation
}
let slider=document.getElementById('colorSlider');
slider.addEventListener('input',function(){
    updatecolorGradient(this.value)
});


function updatecolorGradient(hue){
        const colorGradient=document.getElementById('colorGradient');
        colorGradient.style.background=`linear-gradient(to right,hsl(0,100%,50%),hsl(${hue},100%,50%))`;

}
