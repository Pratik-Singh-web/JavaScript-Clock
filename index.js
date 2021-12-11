let date;
let time;
setInterval(function() {
  a = new Date();
  date = a.toLocaleDateString();
  time = a.getHours() + ':' + a.getMinutes() + ':' + a.getSeconds();

  document.getElementById('t').innerHTML = " " + time + " on " + date;
}, 1000);
