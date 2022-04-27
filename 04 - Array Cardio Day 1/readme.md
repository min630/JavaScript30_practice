## Day 4 - Array Cardio Day 1

### Practice Note

這個單元是練習對陣列的操作方法

1. `Array.prototype.filter()`

    filter()將Array中所有元素依序傳入callback function進行檢驗，並將結果為true的元素組成一個"新陣列"回傳。

2. `Array.prototype.map()`

    map()將Array中所有元素依序傳入callback function，將所有元素的回傳值建立一個"新陣列"並回傳。

3. `Array.prototype.sort()`

    sort()會對Array中所有元素進行排列，並回傳"原陣列"。預設的排列順序是根據字串的Unicode編碼位置，也可以呼叫compare function來進行排序。
    
    `compare function(a, b)` 會依序對Array中的兩個元素進行排列。
    若結果 < 0，則a排序在b前面；若 > 0，則b排序在a前面。若 = 0，則不變動排列順序。

4. `Array.prototype.reduce()`

    reduce()將一個累加器(或初始值)及陣列中所有元素依序傳入回呼函式，最後回傳單一值。若未提供初始值則會帶入Array的第一個值作為初始值。
    
5. `String.prototype.split()`

    split()依據指定的分隔符號將字串分割後回傳被分割的字串組成的元素。
    
    容易搞混的是：
    
    `Array.prototype.slice()` 將Array中選擇之 begin 到 end（不含 end）的元素回傳一個新陣列。String也有String.prototype.slice()的用法。
    
    `Array.prototype.splice()` 藉由刪除既有元素並／或加入新元素來改變一個陣列的內容
