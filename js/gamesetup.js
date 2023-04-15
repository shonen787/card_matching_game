const grid = {easy:4 ,medium:8, hard:9, reset:0};
const gameImages = `<img class="cardFace cardFaceFront" src="img/background.png">`;
let timer = Number(0);
let gameOver=false;


// Get the elements into an array
const menuButtons = document.getElementById("options");

menuButtons.addEventListener("click",menuCallBack);


function menuCallBack(event){
    event.preventDefault();
    let gameLevel = event.target.id;
    initializeGameMap(grid[gameLevel]);
    startTimer();
}


function initializeGameMap(gridSize){
    const imageLocations = [
        "0kaCC",
        "2K9MO",
        "58e7h",
        "7QWm5",
        "90uj0",
        "AO9r5",
        "D1Wls",
        "FNAnV",
        "H9s7M",
        "IU4OU",
        "JlnXU",
        "Kasbu",
        "NU6UT",
        "PBpfa",
        "QQfi3",
        "RpMkt",
        "SqdvK",
        "Tq9b1",
        "VrlQA",
        "XGHJd",
        "YSBGi",
        "c3kJV",
        "d16oA",
        "fR3aY",
        "j0yR1",
        "jkPTA",
        "lJ69w",
        "mzNQJ",
        "oipKU",
        "qCZ0w",
        "rLaXD",
        "tlXMp",
        "urMP8",
        "wVPcR",
        "z0i7Q",
        "11pue",
        "2yU1L",
        "63R9b",
        "7X7sE",
        "95N42",
        "BZasA",
        "DHTsl",
        "FV2KL",
        "HBupq",
        "J8vym",
        "JwGeG",
        "L4eQA",
        "NuWw6",
        "PW4ih",
        "QuQLd",
        "RvdwF",
        "T3O26",
        "UAIWT",
        "W9AhT",
        "Xbpqq",
        "Z88sy",
        "cLFrm",
        "devDx",
        "hCCFv",
        "j292k",
        "jlSgQ",
        "lKaLf",
        "nmZJ0",
        "ol5Ud",
        "qNNl1",
        "rNIqi",
        "ttgAP",
        "uuhC2",
        "xRQDc",
        "zdYZN",
        "21akY",
        "34Uv4",
        "63fUk",
        "7ayLf",
        "9KSW2",
        "Bssrf",
        "DUWSR",
        "FWwQz",
        "HEjl1",
        "JJvCX",
        "K0WEI",
        "M6Yrc",
        "OIH0E",
        "PiyRK",
        "R0GmI",
        "SFILS",
        "T3sSx",
        "UHf3i",
        "W9CO4",
        "XpSrJ",
        "ZLRTE",
        "cMagS",
        "eCAKO",
        "hgqAo",
        "jQvnL",
        "jzWwo",
        "lTqrz",
        "nvBQY",
        "p3hGc",
        "qXYlx",
        "sP1OR",
        "u95wI",
        "vR5HW",
        "xip8a",
        "21fNn",
        "3ef2M",
        "6FeNO",
        "8RCjc",
        "9OQVl",
        "ByhbI",
        "EMb9G",
        "FkvJi",
        "HHYaE",
        "JNGrU",
        "K98Fy",
        "MC0To",
        "OIR6d",
        "Po6No",
        "R6ewG",
        "SHSpJ",
        "TJNB2",
        "Ubgml",
        "WO2Id",
        "XrUdT",
        "ZcTYl",
        "cP4Ui",
        "eOV0G",
        "i13OH",
        "jRNpM",
        "kq6B7",
        "lgZ1H",
        "ocD8y",
        "pl1Cg",
        "qweLQ",
        "sY0GC",
        "u9SUk",
        "vwPmx",
        "yAPXH",
        "29ucV",
        "3o8hc",
        "6KsPM",
        "8SRsf",
        "9bo0J",
        "BzQis",
        "FF9qY",
        "G1m7i",
        "HNd9L",
        "JiUNy",
        "KETzN",
        "N6lKD",
        "OVtyf",
        "QALCl",
        "RIHhb",
        "SYVNv",
        "TUGkF",
        "UtIWX",
        "WOA5U",
        "Y3gvB",
        "amXcC",
        "cQSJO",
        "eSA1k",
        "imI21",
        "jRsKm",
        "lAig1",
        "mPoex",
        "odGvv",
        "poxQN",
        "r0d6v",
        "sjepC",
        "uFP3j",
        "w3nOs",
        "yBHME",
        "2JR6X",
        "4Q1Bs",
        "6vvaq",
        "8lYd6",
        "AGDru",
        "CM3hQ",
        "FJRV6",
        "GqKRb",
        "Hpqrq",
        "JjHlE",
        "KTs2K",
        "N8sRb",
        "Ohu4j",
        "QGwgW",
        "RNYPr",
        "Sk1sg",
        "Todjq",
        "V12fj",
        "We5kT",
        "YAzwK",
        "ba9S0",
        "cXkLD",
        "fPj3U",
        "iwldr",
        "jTOnG",
        "lGm9f",
        "mpgCa",
        "ohW8o",
        "q28lK",
        "r6Rer",
        "sn974",
        "uYnw7",
        "wTv1d",
        "yx633"
    ];
    const gameArea = document.getElementById('gameContainer');
    //Clear Board
    gameArea.innerHTML = '';
    if(gridSize === 0) return;

    const cardGridItemSize = Number(getComputedStyle(gameArea).width.replace("px",''))/gridSize;
    const grideSize2 = gridSize**2;
    let columnTemplate = '';

    for (let i=1;i <= gridSize;i++){
        columnTemplate += `${cardGridItemSize}px `;
    }

    gameArea.style.gridTemplateColumns = columnTemplate;

    let chosenImages = [];
    for(let i=0;i<(grideSize2/2);i++){
        const randomNumber = Math.floor(Math.random() * (imageLocations.length - 1))
        if (imageLocations[randomNumber] !== undefined){
            chosenImages[i] = imageLocations[randomNumber];
            delete imageLocations[randomNumber];
        }else{
            i--;
        }              
    }
    {
        const tempArray = [...chosenImages];
        for (item in tempArray){
            chosenImages.push(tempArray[item]);
        }
    }   

    shuffle(chosenImages);

    //Add Images
    for (let i=0;i < grideSize2;i++){
        //Add div and card backs
        const scene = document.createElement('div');
        const card = document.createElement('div');
        scene.className = "scene scene--card";
        card.className = "card";
        card.innerHTML = gameImages;
        card.innerHTML += `<img class=cardFace cardFaceBack src="./img/${chosenImages[i]}">`;
        card.id=`card-${i}`; //chat-gpt
        gameArea.appendChild(card);
    }


    //Get all Cards and add an eventlistener to toggle the "is-flipped" css value

    var cards = document.querySelectorAll('.card');

    [...cards].forEach((card)=>{
      card.addEventListener( 'click', isflipped);
    });

}

function isflipped(){
    this.classList.toggle('is-flipped');
    checkMatchingcards();
}

async function checkMatchingcards(){
    const cards = document.querySelectorAll('.is-flipped');

    if (cards.length === Number(2)){
        if (cards[0].lastChild.src === cards[1].lastChild.src){
            temporaryDisableEvents();
            await new Promise(resolve => setTimeout(resolve, 1000));
            for (let card of cards){
             card.removeEventListener('click',isflipped);
             card.classList.toggle('is-flipped');
             card.classList.toggle('stays-flipped');
            }
            enableEvents();
        }else{
            temporaryDisableEvents();
            await new Promise(resolve => setTimeout(resolve, 1000));
            for (let card of cards){
                card.classList.toggle('is-flipped');
            }
            enableEvents();
            
        }
    }
    const winner = document.querySelectorAll('.stays-flipped');
    console.log(winner.length);
    if (winner.length === (document.querySelectorAll('.card').length)){
        gameOver = true;
        await new Promise(resolve => setTimeout(resolve, 500));
        for (let card of winner){
            card.classList.add('box');
        }
        document.querySelector('.options').innerHTML = '';


    }

}

function temporaryDisableEvents(){
    const cards = document.querySelectorAll('.card');
    [...cards].forEach((card) => {
        card.removeEventListener('click', isflipped);
    });
}

function enableEvents(){
    const cards = document.querySelectorAll('.card:not(.stays-flipped)');
    [...cards].forEach((card) => {
        card.addEventListener('click', isflipped);
    });
}

function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }

async function startTimer(){
    if (!gameOver){
        await new Promise(resolve => setTimeout(resolve, 1000));
        timer = timer + Number(1);
        document.getElementById('timer').innerHTML = timer;
    }
    startTimer()
}
