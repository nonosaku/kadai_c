const clock = () => {
  //日時・時刻
  const time = new Date();
  //月を取得
  let month = time.getMonth() + 1;
  //日を取得
  let date = time.getDate();
  //曜日を取得
  let dayNum = time.getDay();
  const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  let day = weekday[dayNum];
  //時を取得
  let hour = time.getHours();
  //分を取得
  let min = time.getMinutes();
 
  //1桁の時間　0(時間)の表示
  month = month < 10 ? "0" + month : month;
  date = date < 10 ? "0" + date : date;
  hour = hour < 10 ? "0" + hour : hour;
  min = min < 10 ? "0" + min : min;
 
  // 日付・時刻の文字列を作成
  let today = `${month}.${date} ${day}`;
  let time = `${hour} ${min}`;

  // 文字列を出力
  document.querySelector("div.date").innerText = today;
  document.querySelector("div.time").innerText = time;
  
};
// 1秒ごとにclock関数を呼び出す
setInterval(clock, 1000);
