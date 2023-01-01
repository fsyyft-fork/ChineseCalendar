"use strict";function header(e,t,l){let i,n=[];0==e?(i={id:"menuconversion",title:"Calendar<br />Conversion"},i.sub=[{title:"Yearly Calendar",url:"index.html"},{title:"Conversion Table",url:"table.html"},{title:"Sun &amp; Moon Phenomena",url:"sunMoon.html"},{title:"Julian &amp; Sexagenary Date Calculator",url:"Julian.html"}],n.push(i),i={id:"menuCalendarBasics",title:"Chinese Calendar<br />Basics"},i.sub=[{title:"24 Solar Terms",url:"solarTerms.html"},{title:"Sexagenary Cycle",url:"sexagenary.html"},{title:"Chinese Calendar Rules",url:"rules.html"},{title:"Calendar Quiz",url:"simpleQuiz.html"}],n.push(i),i={id:"menuCalendarComputation",title:"Calendar<br />Computation"},i.sub=[{title:"Chinese Calendar Generation",url:"computation.html"},{title:"Moon Phases and Solar Terms",url:"docs/sunMoon.pdf"},{title:"Chunqiu Calendar",url:"chunqiu.html"},{title:"Ancient Six Calendars",url:"guliuli.html"},{title:"Qin &amp; Early Han Calendars",url:"QinHanCalendars.html"}],n.push(i),i={id:"menuMisc",title:"Other<br />Links"},i.sub=[{title:"Miscellaneous",url:"others.html"},{title:"FAQ",url:"faq.html"}],n.push(i)):1==e?(i={id:"menuconversion",title:"中 西 曆 對 照"},i.sub=[{title:"年曆",url:"index_chinese.html"},{title:"朔閏表",url:"table_chinese.html"},{title:"氣朔時刻",url:"sunMoon_chinese.html"},{title:"中國歷史年表",url:"era_names.html"},{title:"儒略日數和日干支計算器",url:"Julian_chinese.html"}],n.push(i),i={id:"menuCalendarBasics",title:"農 曆 知 識"},i.sub=[{title:"二十四節氣",url:"solarTerms_chinese.html"},{title:"六十干支",url:"sexagenary_chinese.html"},{title:"農曆編算法則",url:"rules_chinese.html"},{title:"曆法測驗",url:"simpleQuiz_chinese.html"}],n.push(i),i={id:"menuCalendarComputation",title:"曆 法 計 算"},i.sub=[{title:"編算農曆",url:"computation_chinese.html"},{title:"月相和二十四節氣算法",url:"docs/sunMoon_chinese.pdf"},{title:"春秋曆復原法",url:"chunqiu_chinese.html"},{title:"古六曆計算法",url:"guliuli_chinese.html"},{title:"秦至漢初的曆法復原",url:"QinHanCalendars_chinese.html"}],n.push(i),i={id:"menuMisc",title:"其 他"},i.sub=[{title:"雜 項",url:"others_chinese.html"},{title:"常見問題",url:"faq_chinese.html"}],n.push(i)):(i={id:"menuconversion",title:"中 西 历 对 照"},i.sub=[{title:"年历",url:"index_simp.html"},{title:"朔闰表",url:"table_simp.html"},{title:"气朔时刻",url:"sunMoon_simp.html"},{title:"中国历史年表",url:"era_names_simp.html"},{title:"儒略日数和日干支计算器",url:"Julian_simp.html"}],n.push(i),i={id:"menuCalendarBasics",title:"农 历 知 识"},i.sub=[{title:"二十四节气",url:"solarTerms_simp.html"},{title:"六十干支",url:"sexagenary_simp.html"},{title:"农历编算法则",url:"rules_simp.html"},{title:"历法测验",url:"simpleQuiz_simp.html"}],n.push(i),i={id:"menuCalendarComputation",title:"历 法 计 算"},i.sub=[{title:"编算农历",url:"computation_simp.html"},{title:"月相和二十四节气算法",url:"docs/sunMoon_simp.pdf"},{title:"春秋历复原法",url:"chunqiu_simp.html"},{title:"古六历计算法",url:"guliuli_simp.html"},{title:"秦至汉初的历法复原",url:"QinHanCalendars_simp.html"}],n.push(i),i={id:"menuMisc",title:"其 他"},i.sub=[{title:"杂项",url:"others_simp.html"},{title:"常见问题",url:"faq_simp.html"}],n.push(i));let s='<div class="menu">';n.forEach((function(e){s+='<div class="dropdown" id="'+e.id+'">';let t=e.sub.length;if(0==t)s+='<button class="dropbtn" style="cursor:pointer;"  onclick="myloadurl(\''+e.url+"')\">"+e.title+"</button></div>";else{s+='<button class="dropbtn" onclick="display_dropdown_menu(\''+e.id+"')\">"+e.title+"</button>",s+='<div class="dropdown-content">';for(let l=0;l<t;l++)s+="<p onclick=\"myloadurl('"+e.sub[l].url+"')\">"+e.sub[l].title+"</p>";s+="</div></div>"}})),s+="</div>",document.getElementById("menu").innerHTML=s,""!=l&&(s='<h2 style="text-align:right;">',s+=0==e?'Chinese versions: <a href="'+l+'_chinese.html">傳統中文</a> &nbsp; <a href="'+l+'_simp.html">简体中文</a></h2>':1==e?'<a href="'+l+'.html">English 英文</a> &nbsp; <a href="'+l+'_simp.html">简体中文</a></h2>':'<a href="'+l+'.html">English 英文</a> &nbsp; <a href="'+l+'_chinese.html">傳統中文</a></h2>',document.getElementById("language").innerHTML=s),window.location!==window.parent.location&&("table"==t?""==l?document.getElementById("table").style.display=none:document.getElementById("mainMenu").style.display=none:document.getElementById("wrapper0").style.display=none),add_footer()}function display_dropdown_menu(e){document.getElementById(e).classList.toggle("showdropdown");let t=document.getElementsByClassName("showdropdown"),l=t.length;for(let i=0;i<l;i++)if(t[i].id!=e){t[i].classList.remove("showdropdown");break}}function myloadurl(e){let t=document.getElementsByClassName("showdropdown");1==t.length&&t[0].classList.remove("showdropdown"),location.href=e}function add_footer(){let e=document.createElement("FOOTER");e.innerHTML='<hr /><p style="text-align:center;font-size:90%;">&copy; 2018&ndash;2023 Yuk Tung Liu</p>',document.body.appendChild(e)}