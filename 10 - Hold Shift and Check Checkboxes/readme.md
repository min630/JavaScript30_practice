## Day 10 - Hold Shift and Check Checkboxes

<img src="https://github.com/min630/JavaScript30_practice/blob/main/10%20-%20Hold%20Shift%20and%20Check%20Checkboxes/play.gif" width="600" height="300" alt="screenshot"/>

學習重點：認識click事件的屬性shiftKey，利用迴圈加條件式設定連續選取區間。

### Practice Note

1. 利用document.querrySelectorAll選取所有的checkbox，放到變數checkboxes。

2. 在checkboxes掛上監聽器，監聽滑鼠點擊的'click'事件，而非input的change事件。
3. 事件觸發handleCheck函式，函式一開始將inBetween設為false，假設第一次沒有同時按shift，不符合判斷式，直接跳最後一行將this存到lastChecked。
4. 假設第二次同時點checkbox和按下shiftKey時，滿足this.checked和e.shiftKey為true的條件，此時利用forEach一一檢查所有checkbox，若checkbox為當次點擊的this或是上次點擊的lastChecked就把inBetween的布林值反轉，也就是第一次碰到this(或lastChecked)時inBetween會變為true，第二次碰到lastChecked(或this)時inBetween變為false。
5. 在上一段checkbox的遍歷中，inBetween為true時將checkbox.checked指定為true，這樣在inBetween為true的遍歷區間就都會被選取。
6. 函式最後將this值指派給lastChecked，這樣一開始沒有同時按下shift的checkbox就會先指派給lastChecked。若一開始就同時按下shift也會造成沒有可以讓inBetween反轉為false的值，所以this後面checkbox全部都會被選取。(***可以先加一個判斷lastChecked為false就先return)
```
function handleCheck(e) {
      let inBetween = false
      if (this.checked && e.shiftKey) {
        checkboxes.forEach(checkbox => {
          //***加在這邊 if(!lastChecked) return)
          if (checkbox === this || checkbox === lastChecked) {
            inBetween = !inBetween
            console.log('Starting to check...')
          }
          if (inBetween) {
            checkbox.checked = true
          }
        })
      }
      lastChecked = this
    }
```
