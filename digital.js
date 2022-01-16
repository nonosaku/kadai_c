const clock=()=>{// 現在の日時・時刻の情報を取得
  const d=new Date();
  // 年を取得
  let year = d.getFullYear();
  // 月を取得
  let month = d.getMonth() + 1;
  // 日を取得
  let date = d.getDate();
  // 曜日を取得
  let dayNum = d.getDay();
  const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  let day = weekday[dayNum];
  // 時を取得
  let hour = d.getHours();
  // 分を取得
  let min = d.getMinutes();
  // 秒を取得
  let sec = d.getSeconds();

  let today = `${year}.${month}.${date} ${day}`;
  let time = `${hour}:${min}:${sec}`;
  
  document.querySelector("p.date").innerText = today;
  document.querySelector("p.time").innerText = time;
};
setInterval(clock, 1000);
