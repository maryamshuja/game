let boxes = document.querySelectorAll(".box")

let turn0 = true

const winpatterns =[
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [0, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
]

boxes.forEach((box) =>{
    box.addEventListener("click" , () =>{
        console.log("button was clicked")
        if(turn0 === true){
            box.innerText ="0";
            turn0= false;
        }else{
            box.innerText="X";
            turn0=true;
        }
        box.disabled=true;
        chechWinner();
    });
});
const chechWinner =() =>{
    for( let patterns of winpatterns){
        let pos1Val = boxes[patterns[0]].innertext;
        let pos2Val = boxes[patterns[1]].innertext;
        let pos3Val = boxes[patterns[2]].innertext;
        if(pos1Val !== "" && pos2Val !== "" && pos3Val !== "" ){
            if(pos1Val === pos2Val && pos2Val === pos3Val)
                console.log("winner" ,pos1Val)
            }
    }
}