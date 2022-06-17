define("d1ad35e6-2e06-4430-b243-d23db219b336_0.0.2",["@microsoft/sp-property-pane","MCafeNewCarouselWebPartStrings","@microsoft/sp-core-library","@microsoft/sp-webpart-base","@microsoft/sp-http"],function(e,t,n,a,i){return function(e){var t={};function n(a){if(t[a])return t[a].exports;var i=t[a]={i:a,l:!1,exports:{}};return e[a].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(a,i,function(t){return e[t]}.bind(null,i));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s="qni5")}({"26ea":function(t,n){t.exports=e},LzUt:function(e,n){e.exports=t},UWqr:function(e,t){e.exports=n},br4S:function(e,t){e.exports=a},qni5:function(e,t,n){"use strict";n.r(t);var a,i=n("UWqr"),r=n("26ea"),s=n("br4S"),l=n("LzUt"),o=n("vlQI"),c=(a=function(e,t){return(a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}a(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),d=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.twentyFifthYearCelebrationImageObject=[],t.imageObject=[],t.happeningsAtMarlabsImages=[],t.welcomeList=[],t.anniversaryList=[],t.celebrationsList=[],t.birthdayList=[],t.awardList=[],t.siteURL="https://marlabsinc.sharepoint.com/sites/mCafeSite",t}return c(t,e),t.prototype.render=function(){this.domElement.innerHTML='\n    <div>\n      <div id="twentyFiveCarosel" ></div>\n      <div id="imageLibCarosel" ></div>\n      <div class="happenings" >\n        <h4>Happenings at Marlabs</h4>\n        <div class="happenings-img" id="happenings">\n        \n        </div>\n      </div>\n      <div class="events">\n        <h4>Upcoming Events</h4>\n        <div class="event" id="events">\n        </div>\n      </div>  \n      <div class="row">\n                <div class="col-xl-6">\n                    \x3c!-- Welcome Aboard --\x3e\n                    <div class="page-header">\n                        <h4>Welcome Aboard</h4>\n                    </div>\n                    <div class="page-content" id="divNew">\n                        \n                    </div>\n                </div>\n                <div class="col-xl-6">\n                    \x3c!-- Birthday --\x3e\n                    <div class="page-header">\n                        <h4>Birthday</h4>\n                    </div>\n                    <div class="page-content" id="divBirthday">\n                        \n                    </div>\n                </div>\n                <div class="col-xl-6">\n                    \x3c!-- Awards --\x3e\n                    <div class="page-header">\n                        <h4>Awards</h4>\n                    </div>\n                    <div class="page-content" id="divAwards">\n                        \n                    </div>\n                </div>\n                <div class="col-xl-6">\n                    \x3c!-- Anniversary --\x3e\n                    <div class="page-header">\n                        <h4>Anniversary</h4>\n                    </div>\n                    <div class="page-content" id="divAnniversary">\n                        \n                    </div>\n                </div>\n            </div>\n            <div id="divApps" />\n\n    </div>',this.gettwentyFifthyearCelebrationImageUrlsFromSP(),this.getImageUrlsFromSP(),this.getHappeningsAtMarlabsImagesFromSP(),this.getEvents(),this.getCelebrationListSP(),this.getAwardListSP(),this.getApps()},t.prototype.getCaroselHTML=function(e){for(var t='    <div class="main-carousel">\n\n                <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">\n                    <div class="carousel-indicators">\n                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0"\n                            class="active" aria-current="true" aria-label="Slide 1">\n                        </button>\n                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"\n                            aria-label="Slide 2">\n                        </button>\n                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"\n                            aria-label="Slide 3">\n                        </button>\n                    </div>\n                    <div class="carousel-inner">',n=0;n<e.length;n++){var a="carousel-item carousel-img";0==n&&(a="carousel-item carousel-img active"),t+='  <div class="'+a+'">\n                            <img src="'+e[n].image+'" class="d-block w-100" alt=".." onclick="window.open(\''+e[n].linkUrl+"','_blank');\">\n                        </div>"}return t+"   \n                    </div>\n                </div>\n            </div>"},Object.defineProperty(t.prototype,"dataVersion",{get:function(){return i.Version.parse("1.0")},enumerable:!0,configurable:!0}),t.prototype.gettwentyFifthyearCelebrationImageUrlsFromSP=function(){var e=this;this.context.spHttpClient.get(this.siteURL+"/_api/Web/Lists/getByTitle('TwentyFifthYearCelebrationImages')/items?$expand=File&$select=*,File",o.SPHttpClient.configurations.v1).then(function(t){t.json().then(function(t){if(t&&t.value&&t.value.length>0){for(var n=0;n<t.value.length;n++)if(null!=t.value[n].File&&null!=t.value[n].File){var a=t.value[n].File.ServerRelativeUrl,i=null!=t.value[n].NavigationUrl||null!=t.value[n].NavigationUrl?t.value[n].NavigationUrl.Url:"";e.twentyFifthYearCelebrationImageObject.push({image:a,thumbImage:a,linkUrl:i})}console.log("25 array"),console.log(e.twentyFifthYearCelebrationImageObject),document.getElementById("twentyFiveCarosel").innerHTML=e.getCaroselHTML(e.twentyFifthYearCelebrationImageObject)}})})},t.prototype.getImageUrlsFromSP=function(){var e=this;this.context.spHttpClient.get(this.siteURL+"/_api/Web/Lists/getByTitle('ImagesGallery')/items?$expand=File&$select=*,File",o.SPHttpClient.configurations.v1).then(function(t){t.json().then(function(t){if(t&&t.value&&t.value.length>0){for(var n=0;n<t.value.length;n++)if(null!=t.value[n].File&&null!=t.value[n].File){var a=t.value[n].File.ServerRelativeUrl,i=null!=t.value[n].NavigationUrl||null!=t.value[n].NavigationUrl?t.value[n].NavigationUrl.Url:"";e.imageObject.push({image:a,thumbImage:a,linkUrl:i})}document.getElementById("imageLibCarosel").innerHTML=e.getCaroselHTML(e.imageObject)}})})},t.prototype.getHappeningsAtMarlabsImagesFromSP=function(){var e=this;this.context.spHttpClient.get(this.siteURL+"/_api/Web/Lists/getByTitle('MarlabsHappeningsImages')/items?$expand=File&$select=*,File",o.SPHttpClient.configurations.v1).then(function(t){t.json().then(function(t){if(t&&t.value&&t.value.length>0){for(var n=0;n<t.value.length;n++)if(null!=t.value[n].File&&null!=t.value[n].File){var a=t.value[n].File.ServerRelativeUrl,i=null!=t.value[n].NavigationUrl||null!=t.value[n].NavigationUrl?t.value[n].NavigationUrl.Url:"";e.happeningsAtMarlabsImages.push({image:a,thumbImage:a,linkUrl:i})}document.getElementById("happenings").innerHTML=e.createLeftSLiderHTML(e.happeningsAtMarlabsImages)}})})},t.prototype.getCelebrationListSP=function(){var e=this;this.welcomeList=this.anniversaryList=this.celebrationsList=this.birthdayList=[],this.context.spHttpClient.get(this.siteURL+"/_api/Web/Lists/getByTitle('mcafe_view_empCelebrationsList')/items?$select=*",o.SPHttpClient.configurations.v1).then(function(t){t.json().then(function(t){if(t&&t.value&&t.value.length>0){for(var n=0;n<t.value.length;n++)e.celebrationsList.push({EmpName:t.value[n].EmpName,DeptDescription:t.value[n].DeptDescription,Designation:t.value[n].Designation,OffEmailID:t.value[n].OffEmailID,category:t.value[n].category,displayDate:t.value[n].displayDate,empid:t.value[n].empid,thumbnailPhoto:"https://marlabsinc.sharepoint.com/_layouts/15/userphoto.aspx?size=L&accountname="+t.value[n].OffEmailID});e.welcomeList=e.celebrationsList.filter(function(e){return"NewJoinee"==e.category}),e.anniversaryList=e.celebrationsList.filter(function(e){return"ServiceCompletion"==e.category}),e.birthdayList=e.celebrationsList.filter(function(e){return"Birthday"==e.category}),document.getElementById("divNew").innerHTML=e.createWishCardCarousel(e.welcomeList,"New"),document.getElementById("divAnniversary").innerHTML=e.createWishCardCarousel(e.anniversaryList,"Anniversary"),document.getElementById("divBirthday").innerHTML=e.createWishCardCarousel(e.birthdayList,"Birthday")}})})},t.prototype.getAwardListSP=function(){var e=this;this.awardList=[],this.context.spHttpClient.get(this.siteURL+"/_api/Web/Lists/getByTitle('mcafe_view_AwardDetails')/items?$select=*",o.SPHttpClient.configurations.v1).then(function(t){t.json().then(function(t){if(t&&t.value&&t.value.length>0){for(var n=0;n<t.value.length;n++)e.awardList.push({EmpName:t.value[n].EmpName,DeptDescription:t.value[n].DeptDescription,Designation:t.value[n].Designation,OffEmailID:t.value[n].OffEmailID,awardtype:t.value[n].awardtype,WorkLocation:t.value[n].WorkLocation,description:t.value[n].description,empid:t.value[n].empid,thumbnailPhoto:"https://marlabsinc.sharepoint.com/_layouts/15/userphoto.aspx?size=L&accountname="+t.value[n].OffEmailID});document.getElementById("divAwards").innerHTML=e.createWishCardCarousel(e.awardList,"Award"),console.log("Award"),console.log(e.awardList)}})})},t.prototype.getEvents=function(){document.getElementById("events").innerHTML='\n  \n          <div class="event-card" *ngFor="let event of events">\n              <div class="date-card">\n                  28\n                  <span>May</span>\n              </div>\n              <p>25 year celebration series</p>\n              <h5 class="lh-base">Practice Talk: Demystifying AI/ML Practice</h5>\n              <p>28 May 2022<br>4:30 PM INR</p>\n              <p class="text-center mb-0">\n                  <a href="#">Learn More</a>\n              </p>\n          </div>\n          <div class="event-card" *ngFor="let event of events">\n              <div class="date-card">\n                  28\n                  <span>May</span>\n              </div>\n              <p>25 year celebration series</p>\n              <h5 class="lh-base">Practice Talk: Demystifying AI/ML Practice</h5>\n              <p>28 May 2022<br>4:30 PM INR</p>\n              <p class="text-center mb-0">\n                  <a href="#">Learn More</a>\n              </p>\n          </div>\n          <div class="event-card" *ngFor="let event of events">\n              <div class="date-card">\n                  28\n                  <span>May</span>\n              </div>\n              <p>25 year celebration series</p>\n              <h5 class="lh-base">Practice Talk: Demystifying AI/ML Practice</h5>\n              <p>28 May 2022<br>4:30 PM INR</p>\n              <p class="text-center mb-0">\n                  <a href="#">Learn More</a>\n              </p>\n          </div>\n          <div class="event-card" *ngFor="let event of events">\n              <div class="date-card">\n                  28\n                  <span>May</span>\n              </div>\n              <p>25 year celebration series</p>\n              <h5 class="lh-base">Practice Talk: Demystifying AI/ML Practice</h5>\n              <p>28 May 2022<br>4:30 PM INR</p>\n              <p class="text-center mb-0">\n                  <a href="#">Learn More</a>\n              </p>\n          </div>\n          <div class="event-card" *ngFor="let event of events">\n              <div class="date-card">\n                  28\n                  <span>May</span>\n              </div>\n              <p>25 year celebration series</p>\n              <h5 class="lh-base">Practice Talk: Demystifying AI/ML Practice</h5>\n              <p>28 May 2022<br>4:30 PM INR</p>\n              <p class="text-center mb-0">\n                  <a href="#">Learn More</a>\n              </p>\n          </div>\n       '},t.prototype.getApps=function(){var e='<h4>My Apps</h4>\n  <div class="my-apps">\n      <div class="app">\n          <div class="app-card">\n              <img src="'+this.siteURL+'/Style%20Library/marlabs-logo.png" alt="">\n          </div>\n          <strong>Marlabs</strong>\n      </div>\n      <div class="app">\n          <div class="app-card">\n              <img src="'+this.siteURL+'/Style%20Library/mRecruitment.png" alt="">\n          </div>\n          <strong>mRecruit</strong>\n      </div>\n      <div class="app">\n          <div class="app-card">\n              <img src="'+this.siteURL+'/Style%20Library/mDeclare.png" alt="">\n          </div>\n          <strong>mDeclare</strong>\n      </div>\n      <div class="app">\n          <div class="app-card">\n              <img src="'+this.siteURL+'/Style%20Library/mcafe.png" alt="">\n          </div>\n          <strong>mCafe</strong>\n      </div>\n      <div class="app">\n          <div class="app-card">\n              <img src="'+this.siteURL+'/Style%20Library/mSpace.png" alt="">\n          </div>\n          <strong>mSpace</strong>\n      </div>\n      <div class="app">\n          <div class="app-card">\n              <img src="'+this.siteURL+'/Style%20Library/marlabs.png" alt="">\n          </div>\n          <strong>Marlabs</strong>\n      </div>\n  </div>';document.getElementById("divApps").innerHTML=e},t.prototype.createLeftSLiderHTML=function(e){var t="";t="";for(var n=0;n<e.length;n++){var a=e[n];t+='<img src="'+a.image+'" class="img-fluid"\n          onclick="window.open(\''+a.linkUrl+"','_blank');\" alt=\"\">"}return t+""},t.prototype.createWishCardCarousel=function(e,t){var n="",a="";"New"==t?a=this.siteURL+"/Style%20Library/deal.png":"Birthday"==t?a=this.siteURL+"/Style%20Library/cake.png":"Anniversary"==t?a=this.siteURL+"/Style%20Library/valentines-day.png":"Award"==t&&(a=this.siteURL+"/Style%20Library/award.png"),n=' <div class="card wish-card">\n  <div class="card-body">\n      <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">\n          <div class="carousel-inner">';for(var i=0;i<e.length;i++){var r=e[i],s=r.EmpName,l=r.Designation,o=r.thumbnailPhoto,c="";"New"==t||"Birthday"==t||"Anniversary"==t?c=r.displayDate:"Award"==t&&(c=r.awardtype);var d="carousel-item carousel-img";0==i&&(d="carousel-item carousel-img active"),n+='<div class="'+d+'">\n                  <div class="carousel-card">\n                      <div class="card-img">\n                          <img src="'+o+'" class="img-fluid" alt="">\n                      </div>\n                      <div class="card-details">\n                          <h5></h5>\n                          <div>\n                              <h3 class="mb-0">'+s+"</h3>\n                              <span>"+l+"</span>\n                              <span>"+c+"</span>\n                          </div>\n                      </div>\n                  </div>\n              </div>"}return n+'</div>\n      </div>\n      <img src="'+a+'" class="wish-img" alt="">\n  </div>\n</div>'},t.prototype.getPropertyPaneConfiguration=function(){return{pages:[{header:{description:l.PropertyPaneDescription},groups:[{groupName:l.BasicGroupName,groupFields:[Object(r.PropertyPaneTextField)("description",{label:l.DescriptionFieldLabel})]}]}]}},t}(s.BaseClientSideWebPart);t.default=d},vlQI:function(e,t){e.exports=i}})});