const color1 = document.getElementById('first-color');
const color2 = document.getElementById('second-color');
const rangeInput = document.getElementById('orientation');
const degreeData = document.getElementById('degree-value'); 
const copyButton = document.getElementById('copy');
const randomButton = document.getElementById('random');
const previewDiv = document.querySelector('.gradient-preview');
const areaCopy = document.getElementById('text-to-copy');

//function to upDate gradient 
function updateGradient() {
    const firstValue = color1.value;
    const secondValue = color2.value;
    const angle = rangeInput.value;
    const gradientString = `linear-gradient(${angle}deg, ${firstValue}, ${secondValue})`;
    
    previewDiv.style.background = gradientString;
    areaCopy.textContent = gradientString;
    degreeData.textContent = `${angle}°`;

    console.log(gradientString);
}

color1.addEventListener('input', updateGradient);
color2.addEventListener('input', updateGradient);
rangeInput.addEventListener('input', updateGradient);


function randomColor() {
    const random = Math.floor(Math.random() * 16777215);
    const convertedToHexa = random.toString(16);
    const colorResult = `#${convertedToHexa.padStart(6, '0')}`
    return colorResult;
}

randomButton.addEventListener('click', () => {
    color1.value = randomColor();
    color2.value = randomColor();
    
    updateGradient();
})

copyButton.addEventListener('click', () => {
    navigator.clipboard.writeText(areaCopy.textContent);
    setTimeout(() => {
        console.log('Message copié');
    }, 2000)
})