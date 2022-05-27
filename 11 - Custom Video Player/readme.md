## Day 11 - Custom Video Play
<img src="https://github.com/min630/JavaScript30_practice/blob/main/11%20-%20Custom%20Video%20Player/play.gif" width="600px" height="300px" alt="screenshot" />

學習重點：HTML video的屬性與方法。

### Practice Note

1. html和css一開始都設定好了，在script.js檔中首先先把要操作的DOM元素用querySelector選起來。

2. 播放功能：
   - 點擊"影片"和"撥放按鈕"時影片會撥放或停止，video的播放屬性是paused，若paused是true表示影片停止中，因此要呼叫video.play()讓他撥放，反之則呼叫video.pause()。   
   - 影片播放時toggle按鈕變為"❚ ❚"，停止時則變為"►"，一樣透過三元運算子來實現。 :point_right:**監聽的事件'play'和'pause'**

3. 進度條：
   - handleProgress函式顯示當前撥放進度，用`(video.currentTime / video.duration) * 100` 來計算進度百分比，然後用flex-basis來控制所占寬度。:point_right:**監聽的事件是'timeupdate'**
   - 點擊或滑鼠拖拉進度調會改變撥放進度，計算進度位置用`(e.offsetX / progress.offsetWidth) * video.duration`，再把video.currentTime指過去。
   - 'click'事件比較沒問題，'mousemove'事件希望是'mousedown'才觸發，'mouseup'就停止觸發，因此多加一個mousedown的布林變數，'mousemove'事件要符合mousedown=true才觸發scrub函式。

4. 聲音和撥放速率的調整是用input type="range"，這邊是兩個input一起監聽(用forEach)，觸發事件的元素的name就是video的屬性，因此函式中可以用`video[this.name] = this.value` (亦可用e.target取代this)  :point_right:**監聽的事件是'change'和'mousemove'**
5. 往前/往後一段時間button，在html有先用data-skip設定時間數值(字串)，兩個button一起監聽'click'事件，觸發的函式中把skip的值轉成浮點數`parseFloat(this.dataset.skip)`再加到video.currentTime。
