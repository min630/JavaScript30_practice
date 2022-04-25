## Day 2 - JS and CSS Clock
![image]()

用JavaScript和CSS製作的時鐘
### Practice Note

1. CSS的position定位

要做出時針、分針、秒針會用到position: absolute的技巧，將指針定位在clock-face上的固定位置。Wes Bos用的是做出寬50%高6px的橫線，定位在左邊中間(top:50%)再用`transform-origin:100%和tranform:rotate(90deg)`，將轉軸定位在橫線的右端並旋轉90度。後來參考了[Alex宅幹嘛](https://www.youtube.com/watch?v=O1YsB3qxO4g)的做法，
