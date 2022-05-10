## Day 5 - Flex Panel Gallery

<img src="" width="600" height="300" alt="image"/>

這個單元主要是練習使用flexbox排版

### Practice Note

1. 在5個panel的父層panels的CSS設定`display: flex`，使5個panel水平並列，此時panel的`display從block變成inline`，因此寬度會隨內容變化，在panel的CSS加入`flex: 1`可將剩餘空間平均分配。
2. 每個panel裡面有3個文字段落 \<p>，要使他們垂直置中排列，一樣設定panel的`display: flex`，`flex-direction: column`，`justify-content: center`，此時3個 \<p>縮在中間，需要再調整 \<p>的flex。

```
flex 包含三種屬性：
 1. flex-grow 預設值為 0，代表空間剩餘時分配的比例。
 2. flex-shrink 預設值為 1，代表空間不足時壓縮的比例。
 3. flex-basis 預設值為 auto，代表寬度的基礎設定值，預設就是元素的寬度。
```
3. 每個\<p>設定`flex: 1`後，內容文字是靠上的，為了讓文字水平垂直都置中，每個\<p>也加上`display: flex`，`justify-content: center`，`align-items: center`，有了flexbox的功能置中真的很方便。
4. 接下來要先讓上下行的文字先在畫面消失，滑鼠點選後才從上下滑進來，所以分別設定`transform: translateY(-100%)`，`transform: translateY(100%)`。
5. 到這邊排版結束，可以開始設定JavaScript了。在每個panel上設置監聽器監聽'click'事件，事件會觸發函式在panel元素上增加/刪除(toggle)一個class叫做open，open的CSS設定`flex: 5`和`font-size: 40px`使所占空間和字體加大。
6. 由於panel的CSS原本就有設定transition，因此可以在設定一個監聽器監聽'transitionend'事件，事件會觸發函式在panel元素增加/刪除(toggle)一個叫做open-active的class，panel子層上下兩個\<p>的CSS就設定`transform: translateY(0)`，讓文字回到畫面中。
