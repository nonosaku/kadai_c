function setClock(){  
  //日時・時刻を取得
  var now = new Date();
  //年を取得
  var year = now.getFullYear();
  //月を取得
  var month = now.getMonth()+1;
  //時を取得
  var hour = now.getHours();
  //分を取得
  var minute = now.getMinutes();
  //秒を取得
  var second = now.getSeconds();
  //曜日を取得
  var week= now.getDay();
  var weekDay = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][week];
  
  //文字列
  var doc=year +" ・ "+ month +" ・ "+weekDay;
  var doc2=hour + ":" + minute + ":" + second;
  document.getElementById("digitalclock").innerHTML=doc;
  document.getElementById("digitalclock2").innerHTML=doc2;
}
setInterval('setClock()',1000);
