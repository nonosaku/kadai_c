 function Time(){
  //日時・時刻
  var time = new Date();
  //月を取得
  var month = time.getMonth() + 1;
  //日を取得
  var date = time.getDate();
  //曜日を取得
  var dayNum = time.getDay();
  const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  var day = weekday[dayNum];
  //時を取得
  var hour = time.getHours();
  //分を取得
  var minute = time.getMinutes();
  //秒を取得
  var second = time.getSeconds();
  
 hour = update(hour);
 minute = update(minute);
 second = update(second);
  
 let today = `${year}.${month}.${date} ${day}`;
 let time = `${hour}:${min}:${sec}`;
  
 document.querySelector("date").innerText = today;
 document.querySelector("time").innerText = time;

//document.getElementById("clock").innerText = month + "  " + date + "  " + dayNum;
//document.getElementById("clock").innerText = hour + " : " + minute + " : " + second;
// 1秒ごとにclock関数を呼び出す
setTimeout(Time, 1000);
 }

 function update(t) {
 if (t < 10) {
 return "0" + t;
 }
 else {
 return t;
 }
 }

 Time();
