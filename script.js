const container = document.querySelector('#container');
const btn = document.querySelector('button');

const addColor = (e) => {
    e.target.classList.add('black');
};
const clear = (e) =>{
    container.innerHTML = '';
    let side = prompt('How many sides do you want?');
    createGrid(side);
};
const createGrid = (side) =>{
    container.style.gridTemplateColumns = `repeat(${side},${800/side}px)`;
    container.style.gridTemplateRows = `repeat(${side},${800/side}px)`;
    for(let i =0; i<side; i++){
        for(let j = 0; j<side;j++){
            const div = document.createElement('div');
            div.classList.add('cell');
            div.style.width = `${800/side}px`;
            div.style.height = `${800/side}px`;
            div.addEventListener('mouseover',addColor);
            container.appendChild(div);
        }
    }
};

createGrid(16);

btn.addEventListener('click',clear);


