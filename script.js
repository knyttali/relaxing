const container = document.getElementById("container");
const text = document.getElementById("text");

const totalTime = 10000;
const breatheTime = (totalTime / 10) * 3;
const holdTime = totalTime / 5;

function breathAnimation() {
  text.innerText = "Hold";

  setTimeout(() => {
    text.innerText = "Breathe in";
    container.className = 'container grow';

    setTimeout(() => {
      text.innerText = "Hold";

      setTimeout(() => {
        text.innerText = "Breathe out";
        container.className = 'container shrink';
        setTimeout(() => {
          text.innerText = "Hold";
        }, breatheTime);
      }, holdTime);
    }, breatheTime);
  }, holdTime / 2);
}

breathAnimation();

setInterval(breathAnimation, totalTime);