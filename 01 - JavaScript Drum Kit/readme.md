## Day 1 - JavaScript Drum Kit
![image](https://github.com/min630/JavaScript30_practice/blob/main/01%20-%20JavaScript%20Drum%20Kit/screenshot.JPG)

按下與畫面中相同的按鍵，會發出音效，畫面也會出現特效。
### Practice Note

1. 要按下鍵盤後出現音效和畫面效果，需要設置鍵盤按下時的監聽器，
   鍵盤監聽器是掛在window上的：
   ```window.addEventListener('keydown', func())```
   KeybordEvent有一個屬性"keyCode"，是鍵盤中每個按鍵的代碼。

2. 這邊html的div和audio元素預先加上了data-key屬性，有別於使用class屬性，可以更方便的操作個別DOM元素。
   例如：選取要播放的音效 
   ```
   const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
   ```
3. audio元素可以調用play()、pause()等方法來控制播放，常用屬性包含:
   src 可以指定音源, duration 指定音效長度, currentTime 返回音效播放位置(秒), controls 瀏覽器會提供播放控制面板。

4. 在播放音效的同時加上playing這個class讓畫面出現特效，但之後要讓特效消失，以便下次按下按鍵時再次出現特效。
   直覺可能會利用setTimeout來操作，但是setTimeout要配合畫面特效的漸變時間來設定等候時間，比較麻煩。
   
   解決方法是利用監聽"transitionend"這個事件。 TransitionEvent有propertyName這個屬性，因此可以指定是哪一個漸變效果的事件。
   
5. 另外我發現長按後畫面效果會停留無法回復原狀，因此增加了一個keyup的監聽器。一樣是掛在window，利用data-key屬性選取DOM物件，然後把效果的class移除。
