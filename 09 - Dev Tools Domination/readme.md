## Day 9 - Dev Tools Domination

<img src="" width="300" alt="image"/>

學習重點：將程式結果印在瀏覽器開發工具(DevTools)的console上的各種方法。

### Practice Note

1. console.log() 常規方法：例如 `console.log('Hello')`，印出Hello。

2. 用 %s 插入數值：例如 `console.log('Hello %s', 'World')`，印出Hello World，逗點後的字串為%s的帶入值，也可用數字、布林值等。
3. 用 %c 設定樣式：例如 `console.log('%c I am some great text', 'font-size: 20px; color: red; text-shadow: 2px 2px 2px grey')`，印出20px紅色帶有陰影的字。
4. console.warn()：例如 `console.warn('OOPS!')`，印出帶有驚嘆號的文字。
5. console.error()：例如 `console.error('Wrong answer!')`，印出帶有錯誤符號的文字。
6. console.info()：例如 `console.info('How are you?')`，印出帶有i訊息符號的文字。(Chrome似乎沒有效果)
7. console.assert() 斷言不為真時印出錯誤訊息：例如 `console.assert( 1 > 2, 'That is wrong! ')`，1 > 2為false，所以印出'That is wrong!'。
8. console.clear()：將console清空。
9. console.dir(obj)：將物件的屬性印出。
10. console.group()：將印出的資料以群組呈現，例如以狗的名字為分群方式，必須要加上`console.groupEnd()`。
```
dogs.forEach(dog => {
      console.group(`${dog.name}`)
      console.log(`This is ${dog.name}.`)
      console.log(`${dog.name} is ${dog.age} years old.`)
      console.groupEnd(`{$dog.name}`)
    })
```
11. console.count()：印出結果會計算印出次數。

12. console.time()：必須加上`console.timeEnd()`，計算從console.time()到console.timeEnd()的執行時間。

13. console.table()：將結果以表格方式呈現。
