define("5167d05e-1b1d-4b81-d191-456574d98f94_0.0.3",["@microsoft/sp-property-pane","@microsoft/sp-loader","MCafeNewCarouselWebPartStrings","@microsoft/sp-core-library","@microsoft/sp-webpart-base","@microsoft/sp-http"],function(e,t,n,i,a,s){return function(e){var t={};function n(i){if(t[i])return t[i].exports;var a=t[i]={i:i,l:!1,exports:{}};return e[i].call(a.exports,a,a.exports,n),a.l=!0,a.exports}return n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(i,a,function(t){return e[t]}.bind(null,a));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s="qni5")}({"26ea":function(t,n){t.exports=e},I6O9:function(e,n){e.exports=t},LzUt:function(e,t){e.exports=n},UWqr:function(e,t){e.exports=i},br4S:function(e,t){e.exports=a},qni5:function(e,t,n){"use strict";n.r(t);var i,a,s=n("UWqr"),l=n("26ea"),r=n("br4S"),o=n("LzUt"),c=n("vlQI"),d=n("I6O9"),u=(i=function(e,t){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}i(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),p=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.twentyFifthYearCelebrationImageObject=[],t.imageObject=[],t.happeningsAtMarlabsImages=[],t.welcomeList=[],t.anniversaryList=[],t.celebrationsList=[],t.SendWishesByEmailConfigList=[],t.birthdayList=[],t.awardList=[],t.UpcomingEvents=[],t.slideDeck=1,t.hapSlideDeck=1,t.siteURL="https://marlabsinc.sharepoint.com/sites/mCafeSite",t.emailIconURL="https://marlabsinc.sharepoint.com/sites/mcafeportal/Style Library/Email.png",t}return u(t,e),t.prototype.render=function(){a=this,this.onInitNew(),this.domElement.innerHTML='\n    <div>\n      <div id="twentyFiveCarosel" ></div>\n      <div id="imageLibCarosel" ></div>\n      <div class="happenings" >  \n        <div class="d-flex justify-content-between">\n            <div>\n            <h4>Happenings at Marlabs </h4>\n            </div>\n            <div>\n            <span class="btn btn-link" id="happeningsLeft" data-bs-target="#happenings" data-bs-slide="prev">\n                    <i class="fas fa-chevron-left"></i>\n                </span>\n                <span class="btn btn-link" id="happeningsRight" data-bs-target="#happenings" data-bs-slide="next">\n                    <i class="fas fa-chevron-right"></i>\n                </span>\n            </div>\n        </div>\n        <div class="happenings-img mt-3" id="happenings">\n        \n        </div>\n      </div>\n       <div class="events ">       \n        <div class="d-flex justify-content-between">\n            <div class="d-none">\n            <h4>Upcoming Events</h4>\n            </div>\n            <div class="d-none">\n                <span class="btn btn-link" id="eventsLeft" data-bs-target="#events" data-bs-slide="prev">\n                    <i class="fas fa-chevron-left"></i>\n                </span>\n                <span class="btn btn-link" id="eventsRight" data-bs-target="#events" data-bs-slide="next">\n                    <i class="fas fa-chevron-right"></i>\n                </span>\n            </div>\n        </div>\n        <div id="events" class="event"></div> \n      <div class="row">\n                <div class="col-xl-6">\n                    \x3c!-- Welcome Aboard --\x3e\n                    <div class="page-header">\n                        <h4>Welcome Aboard</h4>\n                    </div>\n                    <div class="page-content" id="divNew">\n                        \n                    </div>\n                </div>\n                <div class="col-xl-6">\n                    \x3c!-- Birthday --\x3e\n                    <div class="page-header">\n                        <h4>Birthday</h4>\n                    </div>\n                    <div class="page-content" id="divBirthday">\n                        \n                    </div>\n                </div>\n                <div class="col-xl-6">\n                    \x3c!-- Awards --\x3e\n                    <div class="page-header">\n                        <h4>Awards</h4>\n                    </div>\n                    <div class="page-content" id="divAwards">\n                        \n                    </div>\n                </div>\n                <div class="col-xl-6">\n                    \x3c!-- Anniversary --\x3e\n                    <div class="page-header">\n                        <h4>Anniversary</h4>\n                    </div>\n                    <div class="page-content" id="divAnniversary">\n                        \n                    </div>\n                </div>\n            </div>\n            <div id="divApps" />\n\n    </div>',this.getSendWishesByEmailConfigListSP(),this.gettwentyFifthyearCelebrationImageUrlsFromSP(),this.getImageUrlsFromSP(),this.getHappeningsAtMarlabsImagesFromSP(),this.getEventFromSP(),this.getCelebrationListSP(),this.getAwardListSP(),this.getApps()},t.prototype.getCaroselHTML=function(e,t){for(var n="carouselExampleIndicators"+t,i='<div class="main-carousel">\n\n                <div id="'+n+'" class="carousel slide" data-bs-ride="carousel">\n                    <div class="carousel-indicators">',a=0;a<e.length;a++)i+='<button id="'+n+"_CarouselBtn"+(a+1)+'" type="button" data-bs-target="#'+n+'" data-bs-slide-to="'+a+'"\n                            class="active" aria-current="true" aria-label="Slide '+(a+1)+'">\n                        </button>\n                   ';for(i+=' </div><div class="carousel-inner">',a=0;a<e.length;a++){var s="carousel-item carousel-img";0==a&&(s="carousel-item carousel-img active"),i+='  <div class="'+s+'" >\n                            <img src="'+e[a].image+'" class="d-block w-100" alt=".." onclick="window.open(\''+e[a].linkUrl+"','_blank');\">\n                        </div>"}return i+"   \n                    </div>\n                </div>\n            </div>"},Object.defineProperty(t.prototype,"dataVersion",{get:function(){return s.Version.parse("1.0")},enumerable:!0,configurable:!0}),t.prototype.gettwentyFifthyearCelebrationImageUrlsFromSP=function(){var e=this;this.context.spHttpClient.get(this.siteURL+"/_api/Web/Lists/getByTitle('TwentyFifthYearCelebrationImages')/items?$expand=File&$select=*,File",c.SPHttpClient.configurations.v1).then(function(t){t.json().then(function(t){if(t&&t.value&&t.value.length>0)for(var n=0;n<t.value.length;n++)if(null!=t.value[n].File&&null!=t.value[n].File){var i=t.value[n].File.ServerRelativeUrl,a=null!=t.value[n].NavigationUrl||null!=t.value[n].NavigationUrl?t.value[n].NavigationUrl.Url:"";e.twentyFifthYearCelebrationImageObject.push({image:i,thumbImage:i,linkUrl:a}),n==t.value.length-1&&(document.getElementById("twentyFiveCarosel").innerHTML=e.getCaroselHTML(e.twentyFifthYearCelebrationImageObject,"TF"))}})})},t.prototype.getImageUrlsFromSP=function(){var e=this;this.context.spHttpClient.get(this.siteURL+"/_api/Web/Lists/getByTitle('ImagesGallery')/items?$expand=File&$select=*,File",c.SPHttpClient.configurations.v1).then(function(t){t.json().then(function(t){if(t&&t.value&&t.value.length>0)for(var n=0;n<t.value.length;n++)if(null!=t.value[n].File&&null!=t.value[n].File){var i=t.value[n].File.ServerRelativeUrl,a=null!=t.value[n].NavigationUrl||null!=t.value[n].NavigationUrl?t.value[n].NavigationUrl.Url:"";e.imageObject.push({image:i,thumbImage:i,linkUrl:a}),n==t.value.length-1&&(document.getElementById("imageLibCarosel").innerHTML=e.getCaroselHTML(e.imageObject,"IC"))}})})},t.prototype.getHappeningsAtMarlabsImagesFromSP=function(){var e=this;this.context.spHttpClient.get(this.siteURL+"/_api/Web/Lists/getByTitle('MarlabsHappeningsImages')/items?$expand=File&$select=*,File",c.SPHttpClient.configurations.v1).then(function(t){t.json().then(function(t){if(t&&t.value&&t.value.length>0){for(var n=0;n<t.value.length;n++)if(null!=t.value[n].File&&null!=t.value[n].File){var i=t.value[n].File.ServerRelativeUrl,a=null!=t.value[n].NavigationUrl||null!=t.value[n].NavigationUrl?t.value[n].NavigationUrl.Url:"";e.happeningsAtMarlabsImages.push({image:i,thumbImage:i,linkUrl:a})}document.getElementById("happenings").innerHTML=e.createLeftSLiderHTML(e.happeningsAtMarlabsImages)}})})},t.prototype.getCelebrationListSP=function(){var e=this;this.welcomeList=this.anniversaryList=this.celebrationsList=this.birthdayList=[],this.context.spHttpClient.get(this.siteURL+"/_api/Web/Lists/getByTitle('mcafe_view_empCelebrationsList')/items?$select=*",c.SPHttpClient.configurations.v1).then(function(t){t.json().then(function(t){if(t&&t.value&&t.value.length>0){for(var n=0;n<t.value.length;n++)e.celebrationsList.push({EmpName:t.value[n].EmpName,DeptDescription:t.value[n].DeptDescription,Designation:t.value[n].Designation,OffEmailID:t.value[n].OffEmailID,category:t.value[n].category,displayDate:t.value[n].displayDate,empid:t.value[n].empid,thumbnailPhoto:"https://marlabsinc.sharepoint.com/_layouts/15/userphoto.aspx?size=L&accountname="+t.value[n].OffEmailID});e.welcomeList=e.celebrationsList.filter(function(e){return"NewJoinee"==e.category}),e.anniversaryList=e.celebrationsList.filter(function(e){return"ServiceCompletion"==e.category}),e.birthdayList=e.celebrationsList.filter(function(e){return"Birthday"==e.category}),document.getElementById("divNew").innerHTML=e.createWishCardCarousel(e.welcomeList,"New"),document.getElementById("divAnniversary").innerHTML=e.createWishCardCarousel(e.anniversaryList,"Anniversary"),document.getElementById("divBirthday").innerHTML=e.createWishCardCarousel(e.birthdayList,"Birthday")}})})},t.prototype.getSendWishesByEmailConfigListSP=function(){var e=this;this.SendWishesByEmailConfigList=[],this.context.spHttpClient.get(this.siteURL+"/_api/Web/Lists/getByTitle('SendWishesByEmailConfigList')/items?$select=*",c.SPHttpClient.configurations.v1).then(function(t){t.json().then(function(t){if(t&&t.value&&t.value.length>0)for(var n=0;n<t.value.length;n++)e.SendWishesByEmailConfigList.push({Subject:t.value[n].Title,Body:t.value[n].Body,Category:t.value[n].Category,ToolTipHeading:t.value[n].ToolTipHeading})})})},t.prototype.getAwardListSP=function(){var e=this;this.awardList=[],this.context.spHttpClient.get(this.siteURL+"/_api/Web/Lists/getByTitle('mcafe_view_AwardDetails')/items?$select=*",c.SPHttpClient.configurations.v1).then(function(t){t.json().then(function(t){if(t&&t.value&&t.value.length>0){for(var n=0;n<t.value.length;n++)e.awardList.push({EmpName:t.value[n].EmpName,DeptDescription:t.value[n].DeptDescription,Designation:t.value[n].Designation,OffEmailID:t.value[n].OffEmailID,awardtype:t.value[n].awardtype,WorkLocation:t.value[n].WorkLocation,description:t.value[n].description,empid:t.value[n].empid,thumbnailPhoto:"https://marlabsinc.sharepoint.com/_layouts/15/userphoto.aspx?size=L&accountname="+t.value[n].OffEmailID});document.getElementById("divAwards").innerHTML=e.createWishCardCarousel(e.awardList,"Award")}})})},t.prototype.getEventFromSP=function(){var e=this;this.context.spHttpClient.get(this.siteURL+"/_api/Web/Lists/getByTitle('Upcoming_Events')/items?$select=*",c.SPHttpClient.configurations.v1).then(function(t){t.json().then(function(t){if(t&&t.value&&t.value.length>0){e.UpcomingEvents=[];for(var n=0;n<t.value.length;n++){var i=t.value[n],a=new Date(i.Event_Date),s=a.toLocaleDateString("en-GB",{day:"numeric",month:"short",year:"numeric"}).replace(/ /g,"-"),l=a.toLocaleTimeString("en-US",{hour:"numeric",hour12:!0,minute:"numeric"});e.UpcomingEvents.push({Title:i.Title+" : "+i.Description,Day:a.getDate(),Month:a.toLocaleString("en-US",{month:"short"}),Date:s,Time:l,Url:i.App_URL?i.App_URL.Url:"",Series:i.Celebration_Series})}document.getElementById("events").innerHTML=e.getEvents(e.UpcomingEvents)}})})},t.prototype.getEvents=function(e){var t="";t+='<div class="carousel-inner">';for(var n=0;n<e.length;n++)0!=n&&n%5!=0||(0==n?(t+='<div id="slideDeck'+a.slideDeck+'" class="card-deck carousel-item carousel-img d-flex active">',a.slideDeck=a.slideDeck+1):(t+='<div id="slideDeck'+a.slideDeck+'" class="card-deck carousel-item carousel-img d-none">',a.slideDeck=a.slideDeck+1)),t+='\n    \n            <div class="event-card card" *ngFor="let event of events">\n                <div class="date-card">\n                    '+e[n].Day+"\n                    <span>"+e[n].Month+"</span>\n                </div>\n                <p>"+e[n].Series+'</p>\n                <h5 class="lh-base">'+e[n].Title+"</h5>\n                <p>"+e[n].Date+"<br>"+e[n].Time+' INR</p>\n                <p class="text-center mb-0">\n                    <a href="'+e[n].Url+'">Learn More</a>\n                </p>\n            </div>',n!=e.length-1&&n%5!=4||(t+="</div>"),n==e.length-1&&(a.slideDeck=1);return t},t.prototype.getApps=function(){var e='<h4>My Apps</h4>\n        <div class="my-apps">\n            <div class="app">\n                <div class="app-card">\n                    <img src="'+this.siteURL+'/Style%20Library/marlabs-logo.png" alt="">\n                </div>\n                <strong><a>Marlabs</a></strong>\n            </div>\n            <div class="app">\n                <div class="app-card">\n                    <img src="'+this.siteURL+'/Style%20Library/mRecruitment.png" alt="">\n                </div>\n                <strong><a onclick="window.open (\'https://jobopenings.marlabs.com/manage/\', \'\'); return false" href="javascript:void(0);">mRecruit</a></strong>\n            </div>\n            <div class="app">\n                <div class="app-card">\n                    <img src="'+this.siteURL+'/Style%20Library/mDeclare.png" alt="">\n                </div>\n                <strong><a onclick="window.open (\'https://marlabsinc.sharepoint.com/sites/mCafeSite/SitePages/mDeclare.aspx\', \'\'); return false" href="javascript:void(0);">mDeclare</a></strong>\n            </div>\n            <div class="app">\n            <div class="app-card">\n                <img src="'+this.siteURL+'/Style%20Library/mSeat.png" alt="">\n            </div>\n            <strong><a onclick="window.open (\'https://mseat.marlabs.com/dist/#/login\', \'\'); return false" href="javascript:void(0);">mSeat</a></strong>\n            </div>\n            <div class="app">\n                <div class="app-card">\n                    <img src="'+this.siteURL+'/Style%20Library/mcafe.png" alt="">\n                </div>\n                <strong><a>mCafe</a></strong>\n            </div>\n            <div class="app">\n                <div class="app-card">\n                    <img src="'+this.siteURL+'/Style%20Library/marlabs.png" alt="">\n                </div>\n                <strong><a>Marlabs</a></strong>\n            </div>\n        </div>';document.getElementById("divApps").innerHTML=e},t.prototype.createLeftSLiderHTML=function(e){var t="";t="";for(var n=0;n<e.length;n++){0!=n&&n%3!=0||(0==n?(t+='<div id="hapSlideDeck'+a.hapSlideDeck+'" class="card-deck carousel-item carousel-img d-flex active">',a.hapSlideDeck=a.hapSlideDeck+1):(t+='<div id="hapSlideDeck'+a.hapSlideDeck+'" class="card-deck carousel-item carousel-img d-none">',a.hapSlideDeck=a.hapSlideDeck+1));var i=e[n];t+='<img src="'+i.image+'"\n          onclick="window.open(\''+i.linkUrl+"','_blank');\" alt=\"\">",n!=e.length-1&&n%3!=2||(t+="</div>"),n==e.length-1&&(a.hapSlideDeck=1)}return t},t.prototype.createWishCardCarousel=function(e,t){var n="",i=this.SendWishesByEmailConfigList.filter(function(e){return e.Category==t})[0].Subject,s=this.SendWishesByEmailConfigList.filter(function(e){return e.Category==t})[0].Body,l=this.SendWishesByEmailConfigList.filter(function(e){return e.Category==t})[0].ToolTipHeading,r="";"New"==t?r=this.siteURL+"/Style%20Library/deal.png":"Birthday"==t?r=this.siteURL+"/Style%20Library/cake.png":"Anniversary"==t?r=this.siteURL+"/Style%20Library/valentines-day.png":"Award"==t&&(r=this.siteURL+"/Style%20Library/award.png"),n=' <div class="card wish-card">\n  <div class="card-body">\n      <div id="carouselExampleIndicators'+t+'" class="carousel slide" data-bs-ride="carousel">\n      \n          <div class="carousel-inner">';for(var o=0;o<e.length;o++){var c=e[o],d="mailto:"+c.OffEmailID+"?subject="+i+"&body="+s,u=c.EmpName,p=c.Designation,v=c.thumbnailPhoto,m="";"New"==t||"Birthday"==t||"Anniversary"==t?m=c.displayDate:"Award"==t&&(m=c.awardtype);var g="carousel-item carousel-img";0==o&&(g="carousel-item carousel-img active"),n+='<div class="'+g+'">\n            <a class="emailWishes'+t+'" title="'+l+'" href="'+d+'"><img src="'+a.emailIconURL+'" class="sendWishesEmail" alt=""/></a>\n                  <div class="carousel-card">\n                      <div class="card-img">\n                          <img src="'+v+'" class="img-fluid" alt="">\n                      </div>\n                      <div class="card-details">\n                          <h5></h5>\n                          <div>\n                              <h3 class="mb-0" style="font-size: 1.50rem;">'+u+"</h3>\n                              <div> <span>"+p+"</span> </div>\n                              \n                              <span>"+m+"</span>\n                          </div>\n                      </div>\n                  </div>\n              </div>"}return n+'</div>\n        <button class="carousel-control-prev d-none" type="button" data-bs-target="#carouselExampleIndicators'+t+'" data-bs-slide="prev">\n          <span class="carousel-control-prev-icon"></span>\n        </button>\n        <button id="btnLastSlideShowClickNext'+t+'" class="carousel-control-next d-none" type="button" data-bs-target="#carouselExampleIndicators'+t+'" data-bs-slide="next">\n          <span class="carousel-control-next-icon"></span>\n        </button>\n      </div>\n      <img src="'+r+'" class="wish-img" alt="">\n  </div>\n</div>'},t.prototype.onInitNew=function(){d.SPComponentLoader.loadScript("https://smtpjs.com/v3/smtp.js");var e=document.getElementsByTagName("head")[0]||document.documentElement;setTimeout(function(){var e=document.querySelectorAll('button[data-bs-target="#carouselExampleIndicatorsTF"]').length,t=2;setInterval(function(){document.getElementById("carouselExampleIndicatorsTF_CarouselBtn"+t).click(),t<=e-1?t++:t=1},5e3);var n=document.querySelectorAll('button[data-bs-target="#carouselExampleIndicatorsIC"]').length,i=2;setInterval(function(){document.getElementById("carouselExampleIndicatorsIC_CarouselBtn"+i).click(),i<=n-1?i++:i=1},4e3),setInterval(function(){document.getElementById("btnLastSlideShowClickNextNew").click()},8500),setInterval(function(){document.getElementById("btnLastSlideShowClickNextBirthday").click()},1e4),setInterval(function(){document.getElementById("btnLastSlideShowClickNextAward").click()},9e3),setInterval(function(){document.getElementById("btnLastSlideShowClickNextAnniversary").click()},9500),document.getElementById("eventsRight").addEventListener("click",function(){var e=document.querySelectorAll("#events .carousel-item").length,t=a.slideDeck+1;a.slideDeck=t,a.slideDeck>e&&(a.slideDeck=1),document.querySelectorAll("#events .carousel-item").forEach(function(e){return e.classList.add("d-none")}),document.getElementById("slideDeck"+a.slideDeck).classList.remove("d-none"),document.getElementById("slideDeck"+a.slideDeck).classList.add("d-flex")}),document.getElementById("eventsLeft").addEventListener("click",function(){var e=document.querySelectorAll("#events .carousel-item").length,t=a.slideDeck-1;a.slideDeck=t,0==a.slideDeck&&(a.slideDeck=e),document.querySelectorAll("#events .carousel-item").forEach(function(e){return e.classList.add("d-none")}),document.getElementById("slideDeck"+a.slideDeck).classList.remove("d-none"),document.getElementById("slideDeck"+a.slideDeck).classList.add("d-flex")}),document.getElementById("happeningsRight").addEventListener("click",function(){var e=document.querySelectorAll("#happenings .carousel-item").length,t=a.hapSlideDeck+1;a.hapSlideDeck=t,a.hapSlideDeck>e&&(a.hapSlideDeck=1),document.querySelectorAll("#happenings .carousel-item").forEach(function(e){return e.classList.add("d-none")}),document.getElementById("hapSlideDeck"+a.hapSlideDeck).classList.remove("d-none"),document.getElementById("hapSlideDeck"+a.hapSlideDeck).classList.add("d-flex")}),document.getElementById("happeningsLeft").addEventListener("click",function(){var e=document.querySelectorAll("#happenings .carousel-item").length,t=a.hapSlideDeck-1;a.hapSlideDeck=t,0==a.hapSlideDeck&&(a.hapSlideDeck=e),document.querySelectorAll("#happenings .carousel-item").forEach(function(e){return e.classList.add("d-none")}),document.getElementById("hapSlideDeck"+a.hapSlideDeck).classList.remove("d-none"),document.getElementById("hapSlideDeck"+a.hapSlideDeck).classList.add("d-flex")})},4e3);var t=document.createElement("link");t.href="/sites/mCafeSite/Style%20Library/custom.css",t.rel="stylesheet",t.type="text/css",e.insertAdjacentElement("beforeEnd",t);var n=document.createElement("link");n.href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css",n.rel="stylesheet",n.type="text/css",e.insertAdjacentElement("beforeEnd",n),document.getElementById("SuiteNavWrapper").style.display="none";var i=document.createElement("script");i.src="/sites/mCafeSite/Style library/custom.js",i.type="text/javascript",e.insertAdjacentElement("beforeEnd",i)},t.prototype.getPropertyPaneConfiguration=function(){return{pages:[{header:{description:o.PropertyPaneDescription},groups:[{groupName:o.BasicGroupName,groupFields:[Object(l.PropertyPaneTextField)("description",{label:o.DescriptionFieldLabel})]}]}]}},t}(r.BaseClientSideWebPart);t.default=p},vlQI:function(e,t){e.exports=s}})});