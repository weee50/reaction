var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var gamestate = 0;
// 0 = before start
// 1 = after start, before button turns yellow
// 2 = after button turns yellow

var changingTime = 0;
var timeout = 0;

function fillWithColor(color)
{
  ctx.fillStyle = color;
  ctx.fillRect(0, 0, 200, 100);
}

function changeText(new_text)
{
  document.getElementById("text").innerText = new_text
}

fillWithColor("yellow");

function onClick(event)
{
  if (gamestate == 0)
  {
    gamestate = 1;
    fillWithColor("#DDDDDD");
    changeText("Now click again as soon as you see the button turn blue!");
    timeout = setTimeout(changeColor, Math.random() * 2000 + 3000);
  }
  else if (gamestate == 1)
  {
    gamestate = 0;
    fillWithColor("yellow");
    changeText("Too early! Click the yellow button again to start!");
    clearTimeout(timeout);
  }
  else if (gamestate == 2)
  {
    gamestate = 0;
    fillWithColor("yellow");
    let reactionTime = Date.now() - changingTime;
    changeText("Your reaction time is " + reactionTime + " milliseconds! Click the yellow button to start again.")
  }
}

canvas.addEventListener("click", onClick, false)

function changeColor()
{
  gamestate = 2;
  fillWithColor("blue")
  changingTime = Date.now();
}