## Day 12 - Key Sequence Detection

<img src="" width="600px" height="300px" alt="screenshot" />

學習重點：按鍵監聽、陣列裁切、字串比對。

### Practice Note

1. 設定secret code和一個用來存放按鍵的空陣列(pressed)。

2. 使用windows.addEventListener來監聽keyup事件，把e.key的值push到pressed中。

3. 對pressed進行裁剪，若pressed超過secret code的長度就把先放入的值裁剪掉。

   這邊Wes Bos的做法是用pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length)，splice會改變原陣列，從pressed尾端往前數secretCode長度為起點(位置是從-1開始算，因此要再減1)，剪下pressed.length - secretCode.length的長度，因為一開始pressed長度還沒超過secretCode，因此會是負值，此時splice不會剪下任何值；隨按下的鍵增加，pressed超過secretCode長度後就會開始從後面往前數secretCode長度為起點，剪下secretCode的長度的陣列。 (這個邏輯真的很微妙，要想一下才能理解:dizzy_face: 我只想的到用shift。)

4. 將pressed陣列join成一個字串，用includes來檢測是否鍵入了secretCode，若為true則console出"Ding Ding!"，並呼叫獨角獸的外掛函式。
