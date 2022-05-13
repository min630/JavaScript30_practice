## Day 6 - Type Ahead

<img src="" width="600" height="300" alt="image"/>

學習重點：1.透過Canvas API達成畫圖的效果; 2. 認識 hsl色調設定

### Practice Note

1. 在html中定義一個canvas標籤，可使用JavaScript進行操作。 `<canvas id="draw"></canvas>`
2. 在script中選取canvas元素，起手式就是`getContext('2d')`取得畫布內容，並定義為2d。canvas元素可用width和height定義寬高，這邊帶入視窗內部的寬和高。
```
    const canvas = document.querySelector('#draw')
    const ctx = canvas.getContext('2d')
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
```

3. canvas的畫布內容提供各種屬性來設定和控制畫圖功能，這個練習用的只是冰山一角(頭暈)
   * [顏色樣式設定](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Applying_styles_and_colors)
   * [基本畫圖功能](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes)
 
   這邊先設定畫筆顏色`strokeStyle`，線條連接(轉折)處的樣式`lineJoin`，線條端點樣式`lineCap`，和線條寬度`lineWidth`。

4. 設定畫圖功能的函式，首先用`beginPath()`開始設定畫圖路徑，用`moveTo(lastX, lastY)`將位置設到滑鼠點擊的位置(開始畫圖位置)，用`lineTo(e.offsetX, e.offsetY)`來設定畫圖終點的位置(滑鼠移動到的位置)，最後用`stroke()`來達成畫圖的效果，這四個指令可以看成是一組的。最後記得把lastX和lastY指向最後的位置offsetX, offsetY，用到的是賦值的方法。

```
function draw(e) {
      if (!isDrawing) return  //用布林值isDrawing來判斷是否有需要跳出函式(停止畫圖)的狀況
      ctx.strokeStyle = `hsl(${hue}, 100%, 50%)` //透過改變變數hue的值讓顏色改變
      ctx.beginPath()
      ctx.moveTo(lastX, lastY)
      ctx.lineTo(e.offsetX, e.offsetY)
      ctx.stroke()
      ;[lastX, lastY] = [e.offsetX, e.offsetY]   //前面加;才不會被誤判
      //......以下省略
}
```
5. 顏色是用 hsl(色調(0~360), 飽和度(%), 明亮度(%))來設定 [參考資料](https://www.w3schools.com/colors/colors_hsl.asp)

6. 畫筆隨著滑鼠移動要從粗到細再變粗不斷循環，這邊是利用宣告一個布林值變數direction，當畫筆尺寸大於或小於設定範圍布林值就反轉，再用這個布林值作為判斷條件讓畫筆加粗或變細。
```
if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1) {
        direction = !direction
    }
if (direction) {
        ctx.lineWidth++
    } else {
        ctx.lineWidth--
    }
```
7. 在canvas元素設置監聽器，當按下滑鼠'mousedown'事件發生時， isDrawing變成true(函式draw不會跳出)，把起始位置lastX, lastY設為目前位置e.offsetX, e.offsetY。
8. 當移動滑鼠'mousemove'事件發生，呼叫函式draw 開始畫圖。 當滑鼠放開'mouseup'或移出視窗外'mouseout'時isDrawing變成false，函式draw跳出停止畫圖。
