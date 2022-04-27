## Day 2 - Scoped CSS Variables and JS
<img src="https://github.com/min630/JavaScript30_practice/blob/main/03%20-%20CSS%20Variables/screenshot.JPG" width="400" height="220" alt="image"/>

使用JavaScript操作CSS的(原生||根目錄||根元素)變數

### Practice Note

1. 在CSS根目錄(:root)設定變數，可在其他元素直接套用。例如：
`:root {  --bg-color: #BABA00;  }
.content {  background: var(--bg-color);  }
`
修改根目錄變數時套用的元素樣式也會跟著改變。

2. JS選取根目錄的方式為`document.documentElement`，要操作其CSS屬性加上.style.setProperty(propertyName, value)

3. 這次一樣有用到dataset來添加元素的屬性，元素HTML加上data-sizing="px"，在script中用dataset.sizing來取值。

4. JS的操作邏輯：選取所有的input元素，使用forEach掛監聽器監聽"change"事件，但是change只有最後的值，加上"mousemove"監聽器可以讓過程都隨著改變樣式。觸發的事件為handleUpdate函式，取得input的值帶入`document.documentElement.style.setProperty(``--${this.name}``, this.value + this.dataset.sizing)`
