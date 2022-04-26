## Day 2 - JS and CSS Clock
![image](https://github.com/min630/JavaScript30_practice/blob/main/02%20-%20JS%20and%20CSS%20Clock/screenshot.JPG)

用JavaScript和CSS製作的時鐘
### Practice Note

1. 指針：CSS的position定位及transform:rotate()效果

   要做出時針、分針、秒針會用到position: absolute的技巧，將指針定位在clock-face上。Wes Bos用的是做出寬50%高6px的橫線，定位在左邊中間(top:50%)再用`transform-origin:100%和tranform:rotate(90deg)`，將轉軸定位在橫線的右端並旋轉90度。後來參考了[Alex宅幹嘛](https://www.youtube.com/watch?v=O1YsB3qxO4g)的做法，把每個class為hand的div做成一個填滿父層的方形，每個hand做出一個寬5~15px高50%~30%的偽元素(::after)，並定位在hand的中上部：`left:50%, bottom:50%, transform: translate(-50%, 0)`，之後設定hand旋轉指針就會跟著旋轉。

2. JavaScript

   取得時間用`const now = new Date()`，再用`getHours(), getMinutes(), getSeconds()`可取得時、分、秒，計算每時、每分、每秒指針旋轉的度數。
   `DOMElement.style.transform = rotate(``${hourDegrees}deg/``)`設定選轉度數。
   `setInterval(取得時間的函式, 1000)`讓函式每秒更新時間一次。
