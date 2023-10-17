const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const weekdays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  const days = document.querySelector(".days")
  const hours = document.querySelector(".hours")
  const minutes = document.querySelector(".minutes")
  const seconds = document.querySelector(".seconds")
  const offerTime = document.querySelector(".info h4")
  const kalanGun = document.querySelector(".days h4")
  const kalanSaat = document.querySelector(".hours h4")
  const kalanDakika = document.querySelector(".minutes h4")
  const kalanSaniye = document.querySelector(".seconds h4")



let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();

let offerDate = new Date(tempYear,tempMonth,tempDay + 10 , 11, 30, 0)
let offerHour = offerDate.getHours();
let offerMinute = offerDate.getMinutes();
let offerYear = offerDate.getFullYear()
let offerMonth = offerDate.getMonth();
let offerDay = offerDate.getDate();

offerTime.innerHTML = `Giveaway Ends On ${weekdays[offerDate.getDay()]}, ${offerDay} ${months[offerMonth]} ${offerYear} ${offerHour} : ${offerMinute} `


const oneDay = 24 * 60 * 60 * 1000;
const oneHour = 60 * 60 * 1000;
const oneMinute = 60 * 1000;
// calculate all values



setInterval(function(){
let today = new Date().getTime()
let remainingTime = offerDate- today;
let daysLeft = Math.floor(remainingTime / oneDay);
let hoursLeft = Math.floor((remainingTime % oneDay) / oneHour);
let minutesLeft = Math.floor((remainingTime % oneHour) / oneMinute);
let secondsLeft = Math.floor((remainingTime % oneMinute) / 1000);
kalanGun.innerHTML = daysLeft;
kalanSaat.innerHTML = hoursLeft;
kalanDakika.innerHTML = minutesLeft;
kalanSaniye.innerHTML = secondsLeft;
},1000)


