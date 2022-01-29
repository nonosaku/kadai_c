function DigitalClock(){  
//日時・時刻
  var now = new Date();
  //月を取得
  //var month = now.getMonth()+1;
  //日を取得
  //var date = now.getDate();
  //曜日を取得
  //var dayNum = now.getDay();
  //var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  //var day = weekday[dayNum];
  //時を取得
  var hour = now.getHours();
  //分を取得
  var minute = now.getMinutes();
  //秒を取得
  var second = now.getSeconds();
  
  //文字列
 //var doc= month + " " + date + " " + day;
 var doc2=hour + ":" + minute + ":" + second;
  
//document.getElementById("digital_clock").innerHTML=doc;
document.getElementById("digital_clock").innerHTML=doc2;
}
setInterval('DigitalClock()',1000);
