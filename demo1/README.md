# Project 3 - Resume(技能網頁)

A Pen created on CodePen.io.

預覽：

1. CodePen URL: [https://codepen.io/april808/pen/WNXBPvz](https://codepen.io/april808/pen/WNXBPvz).
1. GitHub: [Resume(技能網頁設計)](./dist/index.html)

說明：

1. 課程學習。
1. Layout 規劃設計。
1. 字體套用。英：Fjalla One , 中：微軟正黑體
1. 字體和圖標工具套件：Material Icons
1. 二欄固定式版型筆記

使用：

- Pug (HTML模板語言)
- Sass (CSS預處理器)

筆記:

- 父層

  // 調整到Resume左右間距 //  

  font-size: 0 /* inline-block 二欄固定式版型 要點(3/4) */

  letter-spacing: 0px // 添加字距後 iPad 上查看不會跑版，但 windows 會。

  // display: flex /* windows 假如跑版，需要開啟。 */

  // flex-wrap: wrap /* windows 假如跑版，需要開啟。 */
- 子層
  & .left,& .right

      margin-top: auto 
      display: inline-block/* inline-block 二欄固定式版型 要點(1/4) */
      vertical-align: bottom /* inline-block 二欄固定式版型 要點(2/4) */
      font-size: 16px/* inline-block 二欄固定式版型 要點(4/4) */
`