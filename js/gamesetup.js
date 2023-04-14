const grid = {easy:4 ,medium:8, hard:10, reset:0};
const gameImages = `<img class="card" src="img/background.png">`;

// Get the elements into an array
const menuButtons = document.getElementById("options");

menuButtons.addEventListener("click", menuCallBack );

function menuCallBack(event){
    event.preventDefault();
    let gameLevel = event.target.id;
    initializeGameMap(grid[gameLevel]);
}

function initializeGameMap(gridSize){
    const gameArea = document.getElementById('gameContainer');
    //Clear Board
    gameArea.innerHTML = '';
    
    if(gridSize === 0) return;

    const cardGridItemSize = Number(getComputedStyle(gameArea).width.replace("px",''))/gridSize;
    let columnTemplate = '';

    for (let i=1;i <= gridSize;i++){
        columnTemplate += `${cardGridItemSize}px `;
    }
    console.log(columnTemplate);
    gameArea.style.gridTemplateColumns = columnTemplate;

    //Add Images
    for (let i=0;i < gridSize**2;i++){
        const card = document.createElement('div');
        card.innerHTML=gameImages;
        gameArea.appendChild(card);
    }

    

}

















// //Listeners on each button
// for (let i=0; i < button.length; i++){
//     button[i].addEventListener("click", function(){
//         changeGridSize(Number(i));
//         if(grid === 0){
//             document.getElementById('game-section').innerHTML ='';

//         }else{
//         document.getElementById('game-section').innerHTML +=  gameImages;
//         }
//     });
// }

