//resume資料----------------------
var resume_data={
  namecard: [{profileImageUrl:"https://images.unsplash.com/photo-1633933329834-44543f91720f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0OTIzNTA0MA&ixlib=rb-1.2.1&q=80&w=400"
      ,name:"麥大名"
      ,job:" | 動畫互動網頁特效入門"
      ,content:"動畫互動網頁程式入門講師、墨雨設計 Monoame Design 負責人、設計與網頁全端雙棲的工程師，為了有趣的想法赴湯蹈火。"
      ,worksurl:"https://www.google.com.tw/"
      ,testurl:"https://"
  }],
  l_titles: [{c:"專業技能",e:"Skills"
              ,listSkill: [["前端網頁開發(html/css/js)","p90","p180","p270","p360"]
                          ,["後端網頁 (laravel)","p90","p180","p270",""]
                          ,["平面設計/插畫","p90","p180","p270",""]
                          ,["平面設計/插畫","p90","p180","p270",""]
                          ,["平面設計/插畫","p90","p180","p270",""]]
             },
             {c:"程式技能",e:"Programming Skill"
              ,listProgram: [["Html/Css/Js","p40"]
                            ,["Pug/Sass","p50"]
                            ,["Vue2","p30"]]
             }],
  r_titles: [{c:"經歷與作品",e:"Experience / Works"},
             {c:"比賽經歷",e:"Contests"}],
  listExperience: [{year: "2014",list: [{name:"遊戲 程式開發"}
                                        ,{name:"網頁設計 / 開發"}]},
                   {year: "2016",list: [{name:"01遊戲程式遊戲程式 / 開發"}
                                         ,{name:"01遊戲程式遊戲程式 / 開發"}
                                         ,{name:"Dyverse Studio 歧響音樂 互動官網 設計 / 開發"}]}],
    contests: [{name:"數位創作獎第五屆首獎"}
               ,{name:"數位創作獎第五屆首獎"}
               ,{name:"數位創作獎第五屆首獎"}
               ,{name:"宏碁數位創作獎第七屆首獎暨評審團大獎"}]
};


var vm=new Vue({
  el: "#resume",
  data: resume_data
});