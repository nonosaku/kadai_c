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
  var min = time.getMinutes();
  //秒を取得
  var sec = date.getSeconds();
   
  }
  
 hour = update(hour);
 min = update(min);
 sec = update(sec);
  
 document.getElementById("digital-clock").innerText = hour + " : " + min + " : " + sec;
// 1秒ごとにclock関数を呼び出す
setInterval(clock, 1000);
