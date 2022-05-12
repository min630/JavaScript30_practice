## Day 6 - Type Ahead

<img src="https://github.com/min630/JavaScript30_practice/blob/main/06%20-%20Type%20Ahead/play.gif" width="600" height="300" alt="image"/>

學習重點：1. 使用 fetch() 請求資源;  2. 正規表達式;

### Practice Note

1. 原始程式中有提供一個URI(JSON檔)，需要透過fetch()來取得其內容，放在自己宣告的陣列cities中。
```
fetch() 帶入URI可以得到一個promise物件，必須使用than()來承接物件資料及後續動作。
物件中的response資料可以用json(), blob(), text(), formData(), arrayBuffer()等方式提取，這邊提供的URI是JSON格式，所以用json()提取。

fetch(endpoint)
      .then(response => response.json())
      .then(data => cities.push(...data))
```
2. 要讓輸入的字串與cities中的city或state匹配，要將輸入字串轉變成正則表達式，使用String.match()對城市名稱進行匹配，再用filter()在cities中篩選出有匹配成功的城市。
```
使用new RegExp()建構新的正則表達式。後面的參數g代表global會在所有字串中搜尋匹配，i代表ignoreCase忽略大小寫。
const regex = new RegExp(wordToMatch, 'gi')

RegExp有自己的prototype方法，例如：test(), exec()，但比較常搭配String的prototype，例如：match(), replace(), search(), split()。
```
3. 找出匹配資料之後，要顯示在下方的列表中。將符合資料用map()轉換為要顯示的html格式，其中符合輸入字串的部分要有螢光色背景，因此會再度使用到正則表達式和replace()另外設定html。最後每筆資料的html再用join('')連接起來，連接符號預設是逗點，因此這邊帶入空字串。
4. 獲取列表的DOM元素suggestion，將上面的html帶入suggestion.innerHTML。
5. 獲取搜尋的DOM元素search，在上面設監聽器，監聽'change'和'keyup'，觸發搜尋匹配及顯示匹配的函式。

* 對正則表達式真的很不熟阿...附上參考資料方便以後查看：[參考1](https://pjchender.dev/javascript/js-regex/),  [MDN](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/RegExp)
