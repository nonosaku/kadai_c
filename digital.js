function DigitalClock(){  
//日時・時刻
  var time = new Date();
  //月を取得
  var month = time.getMonth()+1;
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
  
  //文字列
 minute = update(minute);
 var doc= month +" "+date+" "+" "+day;
 var doc2=hour+":"+"minute+":"+second;
document.getElementById("clock").innerHTML=doc;
document.getElementById("clock").innerHTML=doc2;
}
setInterval('DigitalClock()',1000);
