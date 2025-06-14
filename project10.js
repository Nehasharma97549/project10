// Function to update the text color based on the slider value
document.getElementById('color-slider').addEventListener('input', function(event) {
    const sliderValue = event.target.value;
    
    // Update the text color dynamically (range from 0 to 255)
    document.getElementById('text-display').style.color = `rgb(${sliderValue}, 0, 255 - ${sliderValue})`;
});
