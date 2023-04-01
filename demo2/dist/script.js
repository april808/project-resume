//resume資料----------------------
var resume_data = {
  namecard: [
    {
      profileImageUrl: "https://april808.github.io/blog_website/assets/image/logo/MyLogo.vectornator1.svg",
      name: "麥大名",
      job: "前端工程師",
      content:
        "視覺設計轉職前端工程師。喜歡網頁互動特效，為呈現心中的畫面而努力。",
      worksUrl: "https://codepen.io/april808/pen/wvmQEgb",
      githubUrl: "https://github.com/april808",
      phone: "暫不提供",
      email: "contact@example.com",
      address: "台灣"
    }],
  experience: [
    {time: "2021-2022",thing:"進修 Hahow 線上課程。"},
    {time: "2020",thing:"◯◯製作。"},
    {time: "2017",thing:"任職於 ◯◯科技公司",thing2:"負責公司官網的重製。"},
  ],
  school: [
    {name:"Hahow",majoring: "動畫互動網頁程式入門 (HTML/CSS/JS)",time:"2021-2022",schoolImageUrl:"https://i.imgur.com/TWyTqQ7.png"},
    {name:"◯◯大學",majoring: "視覺傳達系",time:"2017-2013",schoolImageUrl:"https://i.imgur.com/TWyTqQ7.png"},
    {name:"◯◯高中",majoring: "廣告設計科",time:"2013-2010",schoolImageUrl:"https://i.imgur.com/TWyTqQ7.png"}
  ],
  tools: [
    {name:"Figma",toolImageUrl:"https://i.imgur.com/ywouFJU.png",description:"UI Design, prototyping"},
    {name:"Vectornator",toolImageUrl:"https://i.imgur.com/lrsygaN.jpg",description:"Graphic Design"},
    {name:"Sublime Text",toolImageUrl:"https://i.imgur.com/3K5k47Z.png",description:"Code editor"},
    {name:"Glitch",toolImageUrl:"https://i.imgur.com/PYRLt0d.png",description:"網路應用程式開發平臺(Cloud IDE)"}]
};

var vm = new Vue({
  el: "#resume",
  data: resume_data
});