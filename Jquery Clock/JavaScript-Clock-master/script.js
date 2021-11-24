setInterval(setClock,1)

const hourHand = document.querySelector('[data-hour-hand]');
const hourMinute = document.querySelector('[data-minute-hand]');
const hourSecond = document.querySelector('[data-second-hand]');

function setClock(){
  const currentDate= new Date();
  //const millisecondsRatio=  currentDate.getMilliseconds() / (1000 * 60);
  const secondsRatio= currentDate.getSeconds() / 60;
  const minutesRatio= (secondsRatio+currentDate.getMinutes()) / 60;
  const hoursRatio= (minutesRatio+currentDate.getHours()) / 12;
 // console.log(hoursRatio);
  setRotation(hourHand,hoursRatio);
  setRotation(hourMinute,minutesRatio);
  setRotation(hourSecond,secondsRatio);

}

function setRotation(element, rotationRatio){
  element.style.setProperty('--rotation', rotationRatio * 360);
}

setClock();