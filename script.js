const containerdiv = document.querySelector('.container');
const slider = document.getElementById('sizeselect');
const slidervalue = document.querySelector('.slidervalue');
const clearbutton = document.querySelector('.clear');
let gridsize = 50;

function makeGrid(size){
    if(size>100){
        alert('Wow Thats Big!');
        return;
    }

    containerdiv.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    containerdiv.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    for(i=0; i<(size*size); i++){
        const div = document.createElement('div');
        containerdiv.appendChild(div).classList.add('grid-item');
    }
}

function getSize(){
    gridsize = slider.value;
}

function clearGrid(){
    containerdiv.textContent = '';
}

//FUNCTONS END

makeGrid(gridsize);
slidervalue.textContent = `${gridsize} X ${gridsize}`;

//checks to see if item clicked on is a square on the grid then colors it
document.addEventListener('click', (e)=>{
    if(e.target.classList.contains('grid-item')){
        e.target.style.backgroundColor = '#ff0000';
    }
});

//allows the usesr to use slider to change grid sizes
slider.addEventListener('input', () => {
    getSize();
    clearGrid();
    makeGrid(gridsize);
    slidervalue.textContent = `${gridsize} X ${gridsize}`;
});

clearbutton.addEventListener('click', () => {
    const pixels = document.querySelectorAll('.grid-item');
    pixels.forEach((pixel) => {
        pixel.style.backgroundColor = '#ffffff';
    });
});