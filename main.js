let dataAndTime = new Date(),
  h = dataAndTime.getHours(),
  m = dataAndTime.getMinutes(),
  s = dataAndTime.getSeconds(),
  d = dataAndTime.getDay(),
  date = dataAndTime.getDate(),
  year = dataAndTime.getFullYear(),
  startData = document.querySelector("#start").value,
  endData = document.querySelector("#end").value,
  result = document.querySelector("#res"),
  btn = document.querySelector("button");

function showData(dataAndTime) {
  h = dataAndTime.getHours().toString();
  m = dataAndTime.getMinutes().toString();
  s = dataAndTime.getSeconds().toString();
  d = dataAndTime.getDay().toString();
  date = dataAndTime.getDate().toString();
  month = dataAndTime.getMonth().toString();
  year = dataAndTime.getFullYear();

  if (h.length < 2) {
    h = "0" + h;
  }
  if (m.length < 2) {
    m = "0" + m;
  }
  if (s.length < 2) {
    s = "0" + s;
  }
  if (date.length < 2) {
    date = "0" + date;
  }
  if (month.length < 2) {
    month = "0" + month;
  }
  console.log(h + ":" + m + ":" + s + " " + date + "." + month + "." + year);
}
showData(dataAndTime);
function rusDay(d) {
  let week = [
    "воскресенье",
    "понедельник",
    "вторник",
    "среда",
    "четверг",
    "пятница",
    "суббота"
  ];
  week.forEach(function(e, i) {
    if (i == d) {
      console.log(e);
    }
  });
}
rusDay(d);

function numDay(dataAndTime) {
  let startDate = document.body.querySelector("#start").value,
    endData = document.body.querySelector("#end").value,
    oneDay = 1000 * 60 * 60 * 24,
    numDay = 0;
  startDate = new Date(startDate);
  endData = new Date(endData);

  numDay = Math.floor((endData - startDate) / oneDay);
  console.log(result);
  result.value = numDay;
}
// текущая дата 2018,10,12   мой д/р 2019,03,24 проверочка сколько дней до моего дня рождения
