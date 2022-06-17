import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { escape } from '@microsoft/sp-lodash-subset';

import styles from './MCafeNewCarouselWebPart.module.scss';
import * as strings from 'MCafeNewCarouselWebPartStrings';
import { HttpClient, SPHttpClient, SPHttpClientResponse, SPHttpClientConfiguration } from '@microsoft/sp-http';

export interface IMCafeNewCarouselWebPartProps {
  description: string;
}

export default class MCafeNewCarouselWebPart extends BaseClientSideWebPart<IMCafeNewCarouselWebPartProps> {
 public strCaroselHTML:string;
 public twentyFifthYearCelebrationImageObject: Array<Object> = [];
 public imageObject: Array<Object> = [];
 public happeningsAtMarlabsImages: Array<Object> = [];
 public welcomeList: any = [];
 public anniversaryList: any = [];
 public celebrationsList: any= [];
 public birthdayList: any = [];
 public awardList: any = [];
 
 private siteURL: string = "https://marlabsinc.sharepoint.com/sites/mCafeSite";
  

  public render(): void {
    this.onInitNew();
    this.domElement.innerHTML = `
    <div>
      <div id="twentyFiveCarosel" ></div>
      <div id="imageLibCarosel" ></div>
      <div class="happenings" >
        <h4>Happenings at Marlabs</h4>
        <div class="happenings-img" id="happenings">
        
        </div>
      </div>
      <div class="events">
        <h4>Upcoming Events</h4>
        <div class="event" id="events">
        </div>
      </div>  
      <div class="row">
                <div class="col-xl-6">
                    <!-- Welcome Aboard -->
                    <div class="page-header">
                        <h4>Welcome Aboard</h4>
                    </div>
                    <div class="page-content" id="divNew">
                        
                    </div>
                </div>
                <div class="col-xl-6">
                    <!-- Birthday -->
                    <div class="page-header">
                        <h4>Birthday</h4>
                    </div>
                    <div class="page-content" id="divBirthday">
                        
                    </div>
                </div>
                <div class="col-xl-6">
                    <!-- Awards -->
                    <div class="page-header">
                        <h4>Awards</h4>
                    </div>
                    <div class="page-content" id="divAwards">
                        
                    </div>
                </div>
                <div class="col-xl-6">
                    <!-- Anniversary -->
                    <div class="page-header">
                        <h4>Anniversary</h4>
                    </div>
                    <div class="page-content" id="divAnniversary">
                        
                    </div>
                </div>
            </div>
            <div id="divApps" />

    </div>`;
    this.gettwentyFifthyearCelebrationImageUrlsFromSP();
    this.getImageUrlsFromSP();
    this.getHappeningsAtMarlabsImagesFromSP();
    this.getEvents();
    this.getCelebrationListSP();
    this.getAwardListSP();
    this.getApps();
  }

  public  getCaroselHTML(arrData :any[],pf :string):string
  {
   let Carid="carouselExampleIndicators"+pf;
   let strHtml: string=`<div class="main-carousel">

                <div id="`+Carid+`" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#`+Carid+`" data-bs-slide-to="0"
                            class="active" aria-current="true" aria-label="Slide 1">
                        </button>
                        <button type="button" data-bs-target="#`+Carid+`" data-bs-slide-to="1"
                            aria-label="Slide 2">
                        </button>
                        <button type="button" data-bs-target="#`+Carid+`" data-bs-slide-to="2"
                            aria-label="Slide 3">
                        </button>
                    </div>
                    <div class="carousel-inner">`;
                    for(let i=0;i<arrData.length;i++)
                    {
                      let imgUrl:string=arrData[i].image;
                      let cls:string="carousel-item carousel-img";
                      if(i==0)
                        cls="carousel-item carousel-img active";
                        strHtml+=`  <div class="`+cls+`">
                            <img src="`+imgUrl+`" class="d-block w-100" alt=".." onclick="window.open('`+arrData[i].linkUrl+`','_blank');">
                        </div>`;
                    }
                        strHtml+=`   
                    </div>
                </div>
            </div>`;
            return strHtml;
            
  }
  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }
  public gettwentyFifthyearCelebrationImageUrlsFromSP() {
    
    var restAPiUrl="/_api/Web/Lists/getByTitle('TwentyFifthYearCelebrationImages')/items?$expand=File&$select=*,File";
    this.context.spHttpClient.get(this.siteURL + restAPiUrl,
        SPHttpClient.configurations.v1)
        .then((response: SPHttpClientResponse) => {
            response.json().then((responseJSON: any) => {                   
                if (responseJSON && responseJSON.value && responseJSON.value.length > 0) {
                    for (let i = 0; i < responseJSON.value.length; i++) {
                        if(responseJSON.value[i].File==undefined || responseJSON.value[i].File==null)
                            continue;
                        var fileUrl=responseJSON.value[i].File.ServerRelativeUrl;
                        var navLink=responseJSON.value[i].NavigationUrl!=undefined || responseJSON.value[i].NavigationUrl!=null? responseJSON.value[i].NavigationUrl.Url:'';
                        this.twentyFifthYearCelebrationImageObject.push({
                            image:fileUrl,// responseJSON.value[i].Url
                            thumbImage:fileUrl,// responseJSON.value[i].Url
                            linkUrl:navLink
                        });
                    }
                    console.log("25 array");
                    console.log(this.twentyFifthYearCelebrationImageObject);
                    document.getElementById("twentyFiveCarosel").innerHTML=this.getCaroselHTML(this.twentyFifthYearCelebrationImageObject,"TF");
                }
            });
        });
        
        
  
}
  public getImageUrlsFromSP() {

  var restAPiUrl="/_api/Web/Lists/getByTitle('ImagesGallery')/items?$expand=File&$select=*,File";
  this.context.spHttpClient.get(this.siteURL + restAPiUrl,
      SPHttpClient.configurations.v1)
      .then((response: SPHttpClientResponse) => {
          response.json().then((responseJSON: any) => {                   
              if (responseJSON && responseJSON.value && responseJSON.value.length > 0) {
                  for (let i = 0; i < responseJSON.value.length; i++) {
                      if(responseJSON.value[i].File==undefined || responseJSON.value[i].File==null)
                      continue;
                      var fileUrl=responseJSON.value[i].File.ServerRelativeUrl;
                      var navLink=responseJSON.value[i].NavigationUrl!=undefined || responseJSON.value[i].NavigationUrl!=null? responseJSON.value[i].NavigationUrl.Url:'';
                      this.imageObject.push({
                           image:fileUrl,
                          thumbImage:fileUrl,
                          linkUrl:navLink
                      });
                  }
                  //imageLibCarosel
                  document.getElementById("imageLibCarosel").innerHTML=this.getCaroselHTML(this.imageObject,"IC");
              }
          });
      });
}

public getHappeningsAtMarlabsImagesFromSP() {
  var restAPiUrl="/_api/Web/Lists/getByTitle('MarlabsHappeningsImages')/items?$expand=File&$select=*,File";
  this.context.spHttpClient.get(this.siteURL + restAPiUrl,
      SPHttpClient.configurations.v1)
      .then((response: SPHttpClientResponse) => {
          response.json().then((responseJSON: any) => {
              if (responseJSON && responseJSON.value && responseJSON.value.length > 0) {
                  for (let i = 0; i < responseJSON.value.length; i++) {
                      
                    if(responseJSON.value[i].File==undefined || responseJSON.value[i].File==null)
                        continue;
                    var fileUrl=responseJSON.value[i].File.ServerRelativeUrl;
                    var navLink=responseJSON.value[i].NavigationUrl!=undefined || responseJSON.value[i].NavigationUrl!=null? responseJSON.value[i].NavigationUrl.Url:'';
                    this.happeningsAtMarlabsImages.push({
                        image:fileUrl,// responseJSON.value[i].Url
                        thumbImage:fileUrl,// responseJSON.value[i].Url
                        linkUrl:navLink
                    });
                  }
                  document.getElementById("happenings").innerHTML=this.createLeftSLiderHTML(this.happeningsAtMarlabsImages);
              }
          });
      });
}

public getCelebrationListSP()
{
    this.welcomeList=this.anniversaryList=this.celebrationsList=this.birthdayList=[];
    var restAPiUrl="/_api/Web/Lists/getByTitle('mcafe_view_empCelebrationsList')/items?$select=*"
    this.context.spHttpClient.get(this.siteURL + restAPiUrl,
    SPHttpClient.configurations.v1)
        .then((response: SPHttpClientResponse) => {
            response.json().then((responseJSON: any) => {                   
                
                if (responseJSON && responseJSON.value && responseJSON.value.length > 0) {
                    for (let i = 0; i < responseJSON.value.length; i++) {
                        this.celebrationsList.push({
                            EmpName:responseJSON.value[i].EmpName,// responseJSON.value[i].Url
                            DeptDescription:responseJSON.value[i].DeptDescription,// responseJSON.value[i].Url
                            Designation:responseJSON.value[i].Designation,
                            OffEmailID:responseJSON.value[i].OffEmailID,
                            category:responseJSON.value[i].category,
                            displayDate:responseJSON.value[i].displayDate,
                            empid:responseJSON.value[i].empid,
                            thumbnailPhoto:"https://marlabsinc.sharepoint.com/_layouts/15/userphoto.aspx?size=L&accountname="+responseJSON.value[i].OffEmailID
                        });
                    }
                    this.welcomeList = this.celebrationsList.filter(x => x.category == 'NewJoinee');
                    this.anniversaryList = this.celebrationsList.filter(x => x.category == 'ServiceCompletion');
                    this.birthdayList =this.celebrationsList.filter(x => x.category == 'Birthday');
                    document.getElementById("divNew").innerHTML=this.createWishCardCarousel(this.welcomeList,"New");
                    document.getElementById("divAnniversary").innerHTML=this.createWishCardCarousel(this.anniversaryList,"Anniversary");
                    document.getElementById("divBirthday").innerHTML=this.createWishCardCarousel(this.birthdayList,"Birthday");
                }
            });
        });
}

public getAwardListSP()
{
    this.awardList=[];
    var restAPiUrl="/_api/Web/Lists/getByTitle('mcafe_view_AwardDetails')/items?$select=*"
    this.context.spHttpClient.get(this.siteURL + restAPiUrl,
    SPHttpClient.configurations.v1)
        .then((response: SPHttpClientResponse) => {
            response.json().then((responseJSON: any) => {                   
                
                if (responseJSON && responseJSON.value && responseJSON.value.length > 0) {
                    for (let i = 0; i < responseJSON.value.length; i++) {
                        this.awardList.push({
                            EmpName:responseJSON.value[i].EmpName,// responseJSON.value[i].Url
                            DeptDescription:responseJSON.value[i].DeptDescription,// responseJSON.value[i].Url
                            Designation:responseJSON.value[i].Designation,
                            OffEmailID:responseJSON.value[i].OffEmailID,
                            awardtype:responseJSON.value[i].awardtype,
                            WorkLocation:responseJSON.value[i].WorkLocation,
                            description:responseJSON.value[i].description,
                            empid:responseJSON.value[i].empid,
                            thumbnailPhoto:"https://marlabsinc.sharepoint.com/_layouts/15/userphoto.aspx?size=L&accountname="+responseJSON.value[i].OffEmailID
                        });
                    }
                    document.getElementById("divAwards").innerHTML=this.createWishCardCarousel(this.awardList,"Award");
                    console.log("Award");
                   console.log(this.awardList)
                }
                 
            });
        });
}

public getEvents()
{
  let strHTML=`
  
          <div class="event-card" *ngFor="let event of events">
              <div class="date-card">
                  28
                  <span>May</span>
              </div>
              <p>25 year celebration series</p>
              <h5 class="lh-base">Practice Talk: Demystifying AI/ML Practice</h5>
              <p>28 May 2022<br>4:30 PM INR</p>
              <p class="text-center mb-0">
                  <a href="#">Learn More</a>
              </p>
          </div>
          <div class="event-card" *ngFor="let event of events">
              <div class="date-card">
                  28
                  <span>May</span>
              </div>
              <p>25 year celebration series</p>
              <h5 class="lh-base">Practice Talk: Demystifying AI/ML Practice</h5>
              <p>28 May 2022<br>4:30 PM INR</p>
              <p class="text-center mb-0">
                  <a href="#">Learn More</a>
              </p>
          </div>
          <div class="event-card" *ngFor="let event of events">
              <div class="date-card">
                  28
                  <span>May</span>
              </div>
              <p>25 year celebration series</p>
              <h5 class="lh-base">Practice Talk: Demystifying AI/ML Practice</h5>
              <p>28 May 2022<br>4:30 PM INR</p>
              <p class="text-center mb-0">
                  <a href="#">Learn More</a>
              </p>
          </div>
          <div class="event-card" *ngFor="let event of events">
              <div class="date-card">
                  28
                  <span>May</span>
              </div>
              <p>25 year celebration series</p>
              <h5 class="lh-base">Practice Talk: Demystifying AI/ML Practice</h5>
              <p>28 May 2022<br>4:30 PM INR</p>
              <p class="text-center mb-0">
                  <a href="#">Learn More</a>
              </p>
          </div>
          <div class="event-card" *ngFor="let event of events">
              <div class="date-card">
                  28
                  <span>May</span>
              </div>
              <p>25 year celebration series</p>
              <h5 class="lh-base">Practice Talk: Demystifying AI/ML Practice</h5>
              <p>28 May 2022<br>4:30 PM INR</p>
              <p class="text-center mb-0">
                  <a href="#">Learn More</a>
              </p>
          </div>
          <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossorigin="anonymous"></script>
          <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js" integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF" crossorigin="anonymous"></script>
       `
       ;
  document.getElementById('events').innerHTML=strHTML;
}

public getApps()
{
  let strHtml:string=`<h4>My Apps</h4>
  <div class="my-apps">
      <div class="app">
          <div class="app-card">
              <img src="`+this.siteURL+`/Style%20Library/marlabs-logo.png" alt="">
          </div>
          <strong>Marlabs</strong>
      </div>
      <div class="app">
          <div class="app-card">
              <img src="`+this.siteURL+`/Style%20Library/mRecruitment.png" alt="">
          </div>
          <strong>mRecruit</strong>
      </div>
      <div class="app">
          <div class="app-card">
              <img src="`+this.siteURL+`/Style%20Library/mDeclare.png" alt="">
          </div>
          <strong>mDeclare</strong>
      </div>
      <div class="app">
          <div class="app-card">
              <img src="`+this.siteURL+`/Style%20Library/mcafe.png" alt="">
          </div>
          <strong>mCafe</strong>
      </div>
      <div class="app">
          <div class="app-card">
              <img src="`+this.siteURL+`/Style%20Library/mSpace.png" alt="">
          </div>
          <strong>mSpace</strong>
      </div>
      <div class="app">
          <div class="app-card">
              <img src="`+this.siteURL+`/Style%20Library/marlabs.png" alt="">
          </div>
          <strong>Marlabs</strong>
      </div>
  </div>`;
  document.getElementById("divApps").innerHTML=strHtml;
}
public createLeftSLiderHTML(arData:any[])
{
  let strHtml: string='';
  strHtml=``;
     for(let i=0;i<arData.length;i++)
     {
        let data=arData[i];
        let imgUrl=data.image;
        let linkUrl=data.linkUrl;
      strHtml+=`<img src="`+imgUrl+`" class="img-fluid"
          onclick="window.open('`+linkUrl+`','_blank');" alt="">`;
     }
     strHtml+=``;
return strHtml;
}


public createWishCardCarousel(arrData:any[],type:string)
{
  let strHtml:string='';
  let Subheading="";
  
  let iconUrl="";
  if(type=="New")
  { 
    Subheading="Welcome Aboard!"
    
    iconUrl=this.siteURL+"/Style%20Library/deal.png";
  }
  else  if(type=="Birthday")
   {
      Subheading="Happy Birthday!"
      
      iconUrl=this.siteURL+"/Style%20Library/cake.png";
   }
  else  if(type=="Anniversary")
  {
    Subheading="Happy work Anniversary!"
    
    iconUrl=this.siteURL+"/Style%20Library/valentines-day.png";
  }
  else if(type=="Award")
  {
    Subheading="Awards!"
    
    iconUrl=this.siteURL+"/Style%20Library/award.png";
  }
  strHtml=` <div class="card wish-card">
  <div class="card-body">
      <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner">`
          for(let i=0;i<arrData.length;i++)
          {
              let item=arrData[i];
              let Name=item.EmpName;
              let title=item.Designation;
              
              let img=item.thumbnailPhoto;

              let Subheading="";
              let SubTitle="";
              let iconUrl="";
              if(type=="New")
              { 
                SubTitle=item.displayDate;
              }
              else  if(type=="Birthday")
               {
                  SubTitle=item.displayDate;
               }
              else  if(type=="Anniversary")
              {
                SubTitle=item.displayDate;
              }
              else if(type=="Award")
              {
                SubTitle=item.awardtype;
              }
              let cls:string="carousel-item carousel-img";
              if(i==0)
                cls="carousel-item carousel-img active";
              strHtml+=`<div class="`+cls+`">
                  <div class="carousel-card">
                      <div class="card-img">
                          <img src="`+img+`" class="img-fluid" alt="">
                      </div>
                      <div class="card-details">
                          <h5>`+Subheading+`</h5>
                          <div>
                              <h3 class="mb-0">`+Name+`</h3>
                              <span>`+title+`</span>
                              <span>`+SubTitle+`</span>
                          </div>
                      </div>
                  </div>
              </div>`
          }  
             
          strHtml+=`</div>
      </div>
      <img src="`+iconUrl+`" class="wish-img" alt="">
  </div>
</div>`;
  return strHtml;
}



public onInitNew() {
    

    //  SPComponentLoader.loadCss('https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css');

    // Wait for the placeholders to be created (or handle them being changed) and then
    // render.


    const head: any = document.getElementsByTagName("head")[0] || document.documentElement;

    // let articleRedirectScriptTag: HTMLScriptElement = document.createElement("script");
    // let jsurl = `${this.context.pageContext.web.serverRelativeUrl}/Style library/Hemanthkumar.js`;
    // articleRedirectScriptTag.src = jsurl;
    // articleRedirectScriptTag.type = "text/javascript";
    // head.insertAdjacentElement("beforeEnd", articleRedirectScriptTag);

    // console.log('jsurl:',jsurl);

    // require('../../../asset/Hemanthkumar.js');

    let faUrl = 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css';
    let faStyle: HTMLLinkElement = document.createElement("link");
    faStyle.href = faUrl;
    faStyle.rel = "stylesheet";
    faStyle.type = "text/css";
    head.insertAdjacentElement("beforeEnd", faStyle);

    //inject CSS
    let cssUrl = '/sites/mCafeSite/Style%20Library/custom.css';
    let customStyle: HTMLLinkElement = document.createElement("link");
    customStyle.href = cssUrl;
    customStyle.rel = "stylesheet";
    customStyle.type = "text/css";
    head.insertAdjacentElement("beforeEnd", customStyle);

    let customCSSStyle: HTMLLinkElement = document.createElement("link");
    customCSSStyle.href = "/sites/mcafeportal/Style%20Library/mCafe.css";
    customCSSStyle.rel = "stylesheet";
    customCSSStyle.type = "text/css";
    head.insertAdjacentElement("beforeEnd", customCSSStyle);


    let bsCSSStyle: HTMLLinkElement = document.createElement("link");
    bsCSSStyle.href = "https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css";
    bsCSSStyle.rel = "stylesheet";
    bsCSSStyle.type = "text/css";
   
    head.insertAdjacentElement("beforeEnd", bsCSSStyle);

    let faCSSUrl = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css';
    let faCSSStyle: HTMLLinkElement = document.createElement("link");
    faCSSStyle.href = faCSSUrl;
    faCSSStyle.rel = "stylesheet";
    faCSSStyle.type = "text/css";
    head.insertAdjacentElement("beforeEnd", faCSSStyle);

    document.getElementById("SuiteNavWrapper").style.display = "none";
    let articleRedirectScriptTag: HTMLScriptElement = document.createElement("script");
    let jsurl = `/sites/mCafeSite/Style library/custom.js`;
    articleRedirectScriptTag.src = jsurl;
    articleRedirectScriptTag.type = "text/javascript";
    head.insertAdjacentElement("beforeEnd", articleRedirectScriptTag);

    let bootStrapScriptTag: HTMLScriptElement = document.createElement("script");
    let btjsurl = `https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js`;
    bootStrapScriptTag.src = btjsurl;
    bootStrapScriptTag.type = "text/javascript";
    head.insertAdjacentElement("beforeEnd", bootStrapScriptTag);
    

}


  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }

}
