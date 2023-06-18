const box = document.getElementsByClassName("box");
const won = new Audio("win.wav");
const draw = new Audio("draw.wav");
const click = new Audio("click.wav");
const erase = new Audio("reset.wav");
const reset = document.getElementById("reset");
const xboard = document.getElementsByClassName("xboard");
const yboard = document.getElementsByClassName("yboard");
const rstbst = document.getElementById("rstbtn");
const alt = document.getElementsByClassName("alert");
const display = document.getElementsByClassName("display");

let xscore = 0;
let yscore = 0;
let odd = 1;

let turn = "X";

for (const key in box) {
  display[0].innerHTML = `Turn For ${turn}`;
  if (Object.hasOwnProperty.call(box, key)) {
    const element = box[key];

    element.addEventListener("click", () => {
      alt[0].style.visibility = "hidden";

      if (element.innerHTML == "") {
        element.innerHTML = turn;
        click.play();
      }

      if (turn === "X") {
        turn = "0";
      } else {
        turn = "X";
      }

      display[0].innerHTML = `turn for ${turn}`;
      var win = check();
      if (win) {
        setTimeout(() => {
          won.play();
          // alert(`${win} has won`);
          rst();
        }, 500);
        if (win === "X") {
          xscore += 1;
        } else yscore += 1;
        xboard[0].innerHTML = `x wins: ${xscore}`;
        yboard[0].innerHTML = `0 wins: ${yscore}`;

        alt[0].style.visibility = "visible";
        alt[0].innerHTML = `${win}  won`;
      }
    });
  }
}

function check() {
  if (
    box[0].innerHTML === "X" &&
    box[1].innerHTML === "X" &&
    box[2].innerHTML === "X"
  ) {
    animeValue = [0, 1, 2];
    return "X";
  } else if (
    box[0].innerHTML === "0" &&
    box[1].innerHTML === "0" &&
    box[2].innerHTML === "0"
  ) {
    animeValue = [0, 1, 2];
    return "0";
  } else if (
    box[3].innerHTML === "0" &&
    box[4].innerHTML === "0" &&
    box[5].innerHTML === "0"
  ) {
    animeValue = [3, 4, 5];
    return "0";
  } else if (
    box[3].innerHTML === "X" &&
    box[4].innerHTML === "X" &&
    box[5].innerHTML === "X"
  ) {
    animeValue = [3, 4, 5];
    return "X";
  } else if (
    box[6].innerHTML === "0" &&
    box[7].innerHTML === "0" &&
    box[8].innerHTML === "0"
  ) {
    animeValue = [6, 7, 8];
    return "0";
  } else if (
    box[6].innerHTML === "X" &&
    box[7].innerHTML === "X" &&
    box[8].innerHTML === "X"
  ) {
    animeValue = [6, 7, 8];
    return "X";
  } else if (
    box[0].innerHTML === "0" &&
    box[3].innerHTML === "0" &&
    box[6].innerHTML === "0"
  ) {
    animeValue = [0, 3, 6];
    return "0";
  } else if (
    box[0].innerHTML === "X" &&
    box[3].innerHTML === "X" &&
    box[6].innerHTML === "X"
  ) {
    animeValue = [0, 3, 6];
    return "X";
  } else if (
    box[1].innerHTML === "0" &&
    box[4].innerHTML === "0" &&
    box[7].innerHTML === "0"
  ) {
    animeValue = [1, 4, 7];
    return "0";
  } else if (
    box[1].innerHTML === "X" &&
    box[4].innerHTML === "X" &&
    box[7].innerHTML === "X"
  ) {
    animeValue = [1, 4, 7];
    return "X";
  } else if (
    box[2].innerHTML === "0" &&
    box[5].innerHTML === "0" &&
    box[8].innerHTML === "0"
  ) {
    animeValue = [2, 5, 8];
    return "0";
  } else if (
    box[2].innerHTML === "X" &&
    box[5].innerHTML === "X" &&
    box[8].innerHTML === "X"
  ) {
    animeValue = [2, 5, 8];
    return "X";
  } else if (
    box[0].innerHTML === "0" &&
    box[4].innerHTML === "0" &&
    box[8].innerHTML === "0"
  ) {
    animeValue = [0, 4, 8];
    return "0";
  } else if (
    box[0].innerHTML === "X" &&
    box[4].innerHTML === "X" &&
    box[8].innerHTML === "X"
  ) {
    animeValue = [0, 4, 8];
    return "X";
  } else if (
    box[2].innerHTML === "0" &&
    box[4].innerHTML === "0" &&
    box[6].innerHTML === "0"
  ) {
    animeValue = [2, 4, 6];
    return "0";
  } else if (
    box[2].innerHTML === "X" &&
    box[4].innerHTML === "X" &&
    box[6].innerHTML === "X"
  ) {
    animeValue = [2, 4, 6];
    return "X";
  }
}

reset.addEventListener("click", () => {
  rst();
});

function rst() {
  erase.play();
  for (const element of box) {
    element.innerHTML = "";
  }
}

rstbst.addEventListener("click", () => {
  xscore = 0;
  yscore = 0;
  xboard[0].innerHTML = "x wins: 0";
  yboard[0].innerHTML = "0 wins: 0";
});


const stl =document.getElementsByTagName('head')[0].childNodes[11];
document.querySelector('#mode').addEventListener('click',()=>{
  
if(stl.getAttribute('href') == 'dark.css'){
  stl.setAttribute('href', 'light.css');
  document.querySelector('#mode').innerHTML ='Dark Mode'
  document.querySelectorAll('.nav-link')[0].classList.add('text-light')
  document.querySelectorAll('.nav-link')[1].classList.add('text-light')
  document.querySelector('.navbar-brand').classList.add('text-light')

}else{
  stl.setAttribute('href', 'dark.css')
  document.querySelector('#mode').innerHTML ='Light Mode'
  document.querySelectorAll('.nav-link')[0].classList.remove('text-light')
  document.querySelectorAll('.nav-link')[1].classList.remove('text-light')
  document.querySelector('.navbar-brand').classList.remove('text-light')


  

}
}
)
