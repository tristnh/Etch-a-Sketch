const containerdiv = document.querySelector('.container');

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


document.addEventListener('click', (e)=>{
    //checks to see if item clicked on is a square on the grid then colors it
    if(e.target.classList.contains('grid-item')){
        e.target.style.backgroundColor = '#ff0000';
    }
})