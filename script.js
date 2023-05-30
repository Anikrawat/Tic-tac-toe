let boxtexts = document.getElementsByClassName("boxText");

let Turn = "X";
let gameover = false;

let changeTurn = ()=>{
    if(Turn === "X")
    {
        Turn = "0";
        return Turn;
    }
    else{
        Turn = "X";
        return Turn;
    }
}

let checkWin = ()=>{
    let text = document.getElementsByClassName("text");
    let arr = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ]

    arr.forEach(e => {
        if ((text[e[0]].innerText === text[e[1]].innerText) && (text[e[1]].innerText === text[e[2]].innerText) && (text[e[0]].innerText !== "")) {
            let ohyeah = document.getElementsByClassName("ohyeah")[0];
            ohyeah.innerText = text[e[0]].innerText + " Won";
            gameover = true;
        }
    })
}

Array.from(boxtexts).forEach((e)=>{
    let box = e.querySelector(".text");
    e.addEventListener('click',()=>{
        if(box.innerText === ""){
            box.innerText = Turn;  
            changeTurn();
            checkWin();
                    if (!gameover) {
                        let ohyeah = document.getElementsByClassName("ohyeah")[0];
                        ohyeah.innerText = "Turn For " + Turn;
                    }
                }
            })
        })

reset.addEventListener('click',()=>{
    let box = document.querySelectorAll(".text");
    Array.from(box).forEach((element) => {
        element.innerText = "";
    })
    Turn = "X";
    let ohyeah = document.getElementsByClassName("ohyeah")[0];
    ohyeah.innerText = "Turn For " + Turn;
})
