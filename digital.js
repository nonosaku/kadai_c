function setClock(){  
  //日時・時刻
  var now = new Date();
  //時を取得
  var hour = now.getHours();
  //分を取得
  var minute = now.getMinutes();
  //秒を取得
  var second = now.getSeconds();
  
  //文字列
  var doc=hour + ":" + minute + ":" + second;
  document.getElementById("digitalclock").innerHTML=doc;
}
setInterval('setClock()',1000);
