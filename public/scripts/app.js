"use strict";


const sanityClient = require('@sanity/client')

const client = sanityClient({
  projectId: 'bs4sdm8j',
  dataset: 'production',
  apiVersion: '2019-01-29', 
  useCdn: false,
})

/* Index Intro Information */
const introInformationQuery = '*[_type == "introInformation"] | order(paragraphNumber)';

function fetchIntroInformation(){
  client.fetch(introInformationQuery).then(response => {
          const html = response.map(user =>{
            console.log(response);
            for (let i = 0; i < user.information.length; i++) {
              for (let j = 0; j < user.information[i].children.length; j++) {
              const introText = user.information[i].children[j].text;
                if(i == 0){
                  const htmlRender = introText; 
                  document.querySelector(`#intro-text-title`).insertAdjacentHTML('beforeend', htmlRender);   
                } 
                else if ( i == 1 && j == 0)
                { 
                  const htmlRender = introText;
                  document.querySelector(`#intro-text-subtitle`).insertAdjacentHTML('beforeend', htmlRender);   
                }  
                else 
                { 
                  const htmlRender = introText;
                  console.log(htmlRender);
                  document.querySelector(`#intro-text-p`).insertAdjacentHTML('beforeend', introText);   
                }   
              }
            }  
          })
  }).catch(error=> {
    console.log(error);
  })
}

fetchIntroInformation();


/* Board Employee Information */
const boardEmployeeInformation = '*[_type == "person"] | order(positionNumber)';

function fetchEmployeeInformation() {
  client.fetch(boardEmployeeInformation).then(response => {
      let k = -1;
      for (let j = 0; j < response.length; j++) {
        let valuesArray = Object.values(response[j]);
        for (let i = 9; i > 5; i--) {
          k++;
          document.querySelector(`#grid-card-${j} > #grid-card-info-${k}`).insertAdjacentHTML('beforeend', valuesArray[i]);
        }
      }
  })
  .catch(error=> {
    console.log(error);
  })
}

fetchEmployeeInformation();

/* Board Employee Images */
function fetchEmployeeImage() {
  client.fetch(boardEmployeeInformation).then(response => {
    for (let j = 0; j < response.length; j++) {
      let user = response[j];
      if(user.hasOwnProperty('Image') == true){
        let imgProp = user.Image.asset._ref;
        let imgRef = imgProp.slice(6);
        let imgRefP1 = imgRef.substring(0, imgRef.length - 4);
        if(imgProp.indexOf('-jpg') == -1){
          let imgRefP2 = imgRefP1.concat('.png');
          let employeeImage = `https://cdn.sanity.io/images/bs4sdm8j/production/${imgRefP2}`;
          document.getElementById(`employee-img-${j}`).src = employeeImage;
        } else {
          let imgRefP2 = imgRefP1.concat('.jpg');
          let employeeImage = `https://cdn.sanity.io/images/bs4sdm8j/production/${imgRefP2}`;
          document.getElementById(`employee-img-${j}`).src = employeeImage;
        }
      }
    }
})
.catch(error=> {
  console.log(error);
})
}

fetchEmployeeImage();


/* Join Information */ 
const joinInformationQuery = '*[_type == "joinInformation"] | order(paragraphNumber)';

function fetchJoinInformation(){
  client.fetch(joinInformationQuery).then(response => {
      let j = 0;
          console.log(response);
          for (let i = 0; i < response[2].information.length; i++) {
            const introText = response[2].information[i].children[0].text;
            if(i == 0){
              const htmlRender = `<h2>${introText}</h2>` 
              document.querySelector(`#intro-text-1`).insertAdjacentHTML('beforeend', htmlRender);   
            } else { 
              const htmlRender = `<p>${introText}</p>` 
              document.querySelector(`#intro-text-1`).insertAdjacentHTML('beforeend', htmlRender);   
            }
          }  
          j++;
  }).catch(error=> {
    console.log(error);
  })
}

fetchJoinInformation();

/* Join Youth Information */
function fetchJoinYouthInformation(){
  client.fetch(joinInformationQuery).then(response => {
          console.log(response);
          for (let i = 0; i < response[3].information.length; i++) {
            const introText = response[3].information[i].children[0].text;
            if(i == 0){
              const htmlRender = `<h2>${introText}</h2>` 
              document.querySelector(`#join-youth-intro`).insertAdjacentHTML('beforeend', htmlRender);   
            } else { 
              const htmlRender = `<p>${introText}</p>` 
              document.querySelector(`#join-youth-intro`).insertAdjacentHTML('beforeend', htmlRender);   
            }
          }  
  }).catch(error=> {
    console.log(error);
  })
}

fetchJoinYouthInformation();


/* Join Competitive Information */
function fetchJoinCompetitiveInformation(){
  client.fetch(joinInformationQuery).then(response => {
          console.log(response);
          for (let i = 0; i < response[4].information.length; i++) {
            const introText = response[4].information[i].children[0].text;
            if(i == 0){
              const htmlRender = `<h2>${introText}</h2>` 
              document.querySelector(`#join-competitive-intro`).insertAdjacentHTML('beforeend', htmlRender);   
            } else { 
              const htmlRender = `<p>${introText}</p>` 
              document.querySelector(`#join-competitive-intro`).insertAdjacentHTML('beforeend', htmlRender);   
            }
          }  
  }).catch(error=> {
    console.log(error);
  })
}

fetchJoinCompetitiveInformation();

/* Join Recreation Information */
function fetchJoinRecreationInformation(){
  client.fetch(joinInformationQuery).then(response => {
          console.log(response);
          for (let i = 0; i < response[5].information.length; i++) {
            const introText = response[5].information[i].children[0].text;
            if(i == 0){
              const htmlRender = `<h2>${introText}</h2>` 
              document.querySelector(`#join-recreation-intro`).insertAdjacentHTML('beforeend', htmlRender);   
            } else { 
              const htmlRender = `<p>${introText}</p>` 
              document.querySelector(`#join-recreation-intro`).insertAdjacentHTML('beforeend', htmlRender);   
            }
          }  
  }).catch(error=> {
    console.log(error);
  })
}

fetchJoinRecreationInformation();

/* Competition Group Query - Heren */
const competitionGroupQuery = '*[_type == "group"] | order(groupNumber)';

function fetchHeren() {
    let j = 1;
    client.fetch(competitionGroupQuery).then(response => {
      const html = response.map(user =>{
        console.log(response);
            for (let i = 0; i < user.text.length; i++) {
            const textArray = user.text[i].children.map(result => {
                return `
                <li>${result.text}</li>
                `
            })
            document.querySelector(`#heren-container-list-${j}`).insertAdjacentHTML('beforeend', textArray);
            }
            j++;
        })
    })
    .catch(error=> {
      console.log(error);
    })
}

fetchHeren();

/* Competition Group Fetch Images */
function fetchGroupImage() {
  client.fetch(competitionGroupQuery).then(response => {
    for (let j = 0; j < response.length; j++) {
      let user = response[j];
      if(user.hasOwnProperty('Image') == true){
        let imgProp = user.Image.asset._ref;
        let imgRef = imgProp.slice(6);
        let imgRefP1 = imgRef.substring(0, imgRef.length - 4);
        if(imgProp.indexOf('-jpg') == -1){
          let imgRefP2 = imgRefP1.concat('.png');
          let groupImage = `https://cdn.sanity.io/images/bs4sdm8j/production/${imgRefP2}`;
          document.getElementById(`group-img-${j}`).src = groupImage;
        } else {
          let imgRefP2 = imgRefP1.concat('.jpg');
          let groupImage = `https://cdn.sanity.io/images/bs4sdm8j/production/${imgRefP2}`;
          document.getElementById(`group-img-${j}`).src = groupImage;
        }
      } else {
        var element = document.getElementById(`group-img-${j}`)
        element.classList.toggle("remove-image");
      }
    } 
})
.catch(error=> {
  console.log(error);
})
}

fetchGroupImage();

/* Hide Competition Group List Mixed */
function hideFunction4(){
  const x4 = document.getElementById("Gemengde");
  if(x4.style.display  === "none"){
    x4.style.display = "flex";
  } else {
    x4.style.display = "none";
  }
}

/* If Gemengde exists in URL then have those group cards already open on page load */ 
const gemengdeLink = document.getElementById("gemengde-link");
gemengdeLink.addEventListener("click", gemengdeFunction3());
function gemengdeFunction3(){
  const x0 = document.getElementById("Gemengde");
  const x1 = document.getElementById('heren-container-8');
  const x2 = document.getElementById('heren-container-9');
  const x3 = document.getElementById('heren-container-10');
  const x4 = document.getElementById('heren-container-11');
  const x5 = document.getElementById('heren-container-12');
  const x6 = document.getElementById('heren-container-13');
  const toggleButtonGemengde = document.getElementsByClassName('toggle-button-4')[0]; 
  const toggleButtonGemengde2 = document.getElementsByClassName('toggle-button-gemengde-sub')[0];
  const toggleButtonGemengde3 = document.getElementsByClassName('toggle-button-gemengde-sub')[2];
  const toggleButtonGemengde4 = document.getElementsByClassName('toggle-button-gemengde-sub')[4];
  const toggleButtonGemengde5 = document.getElementsByClassName('toggle-button-gemengde-sub')[6];
  const toggleButtonGemengde6 = document.getElementsByClassName('toggle-button-gemengde-sub')[8];
  const toggleButtonGemengde7 = document.getElementsByClassName('toggle-button-gemengde-sub')[10];
  const gemengdeContainer = document.getElementById('Gemengde');
  if(window.location.href.indexOf("Gemengde") > -1){
  x0.style.display = "flex";
  x1.style.display = "block";
  x2.style.display = "block";
  x3.style.display = "block";
  x4.style.display = "block";
  x5.style.display = "block";
  x6.style.display = "block";
  toggleButtonGemengde.classList.toggle('flip');
  toggleButtonGemengde2.classList.toggle('flip');
  toggleButtonGemengde3.classList.toggle('flip');
  toggleButtonGemengde4.classList.toggle('flip');
  toggleButtonGemengde5.classList.toggle('flip');
  toggleButtonGemengde6.classList.toggle('flip');
  toggleButtonGemengde7.classList.toggle('flip');
  }
}

function hideFunctionG1(){
  const x4 = document.getElementById("heren-container-8");
  if(x4.style.display  === "none"){
    x4.style.display = "block";
  } else {
    x4.style.display = "none";
  }
}

function hideFunctionG2(){
  const x4 = document.getElementById("heren-container-9");
  if(x4.style.display  === "none"){
    x4.style.display = "block";
  } else {
    x4.style.display = "none";
  }
}


function hideFunctionG3(){
  const x4 = document.getElementById("heren-container-10");
  if(x4.style.display  === "none"){
    x4.style.display = "block";
  } else {
    x4.style.display = "none";
  }
}

function hideFunctionG4(){
  const x4 = document.getElementById("heren-container-11");
  if(x4.style.display  === "none"){
    x4.style.display = "block";
  } else {
    x4.style.display = "none";
  }
}


function hideFunctionG5(){
  const x4 = document.getElementById("heren-container-12");
  if(x4.style.display  === "none"){
    x4.style.display = "block";
  } else {
    x4.style.display = "none";
  }
}


function hideFunctionG6(){
  const x4 = document.getElementById("heren-container-13");
  if(x4.style.display  === "none"){
    x4.style.display = "block";
  } else {
    x4.style.display = "none";
  }
}


/* Hide Competition Group List Women */
function hideFunction3(){
  const x3 = document.getElementById("Dames");
  if(x3.style.display  === "none"){
    x3.style.display = "flex";
  } else {
    x3.style.display = "none";
  }
}

/* If Dames exists in URL then have those group cards already open on page load */ 
const damesLink = document.getElementById("dames-link");
damesLink.addEventListener("click", linkFunction3());
function linkFunction3(){
  const x3 = document.getElementById("Dames");
  const x2 = document.getElementById('heren-container-6');
  const x1 = document.getElementById('heren-container-7');
  const toggleButton3 = document.getElementsByClassName('toggle-button-3')[0]; 
  const toggleButton2DamesSub1 = document.getElementsByClassName('toggle-button-dames-sub')[0];
  const toggleButtonDamesSub2 = document.getElementsByClassName('toggle-button-dames-sub')[2];
  const damesContainer = document.getElementById('Dames');
  if(window.location.href.indexOf("Dames") > -1){
  x3.style.display = "flex";
  x2.style.display = "block";
  x1.style.display = "block";
  toggleButton3.classList.toggle('flip');
  toggleButton2DamesSub1.classList.toggle('flip');
  toggleButtonDamesSub2.classList.toggle('flip');
  }
}

/* Hide competition list inner Women */
function hideFunctionD1(){
  const x = document.getElementById('heren-container-6');
  if(x.style.display  === "none"){
    x.style.display = "flex";
  } else {
    x.style.display = "none";
  }
}

function hideFunctionD2(){
  const x = document.getElementById('heren-container-7');
  if(x.style.display  === "none"){
    x.style.display = "flex";
  } else {
    x.style.display = "none";
  }
}

/* Hide competition group list Men */
function hideFunction2(){
  const x2 = document.getElementById("Heren");
  if(x2.style.display  === "none"){
    x2.style.display = "flex";
  } else {
    x2.style.display = "none";
  }
}

/* If Heren exists in URL then have those group cards already open on page load */ 
const herenLink = document.getElementById("heren-link");
herenLink.addEventListener("click", herenFunction3());
function herenFunction3(){
  const x0 = document.getElementById("Heren");
  const x1 = document.getElementById('heren-container-1');
  const x2 = document.getElementById('heren-container-2');
  const x3 = document.getElementById('heren-container-3');
  const x4 = document.getElementById('heren-container-4');
  const x5 = document.getElementById('heren-container-5');
  const toggleButton2 = document.getElementsByClassName('toggle-button-2')[0]; 
  const toggleButton2HerenSub1 = document.getElementsByClassName('toggle-button-heren-sub')[0];
  const toggleButtonHerenSub2 = document.getElementsByClassName('toggle-button-heren-sub')[2];
  const toggleButton3HerenSub1 = document.getElementsByClassName('toggle-button-heren-sub')[4];
  const toggleButton4HerenSub1 = document.getElementsByClassName('toggle-button-heren-sub')[6];
  const toggleButton5HerenSub1 = document.getElementsByClassName('toggle-button-heren-sub')[8];
  const herenContainer = document.getElementById('Heren');
  if(window.location.href.indexOf("Heren") > -1){
  x0.style.display = "flex";
  x1.style.display = "block";
  x2.style.display = "block";
  x3.style.display = "block"; 
  x4.style.display = "block";
  x5.style.display = "block";
  toggleButton2.classList.toggle('flip');
  toggleButton2HerenSub1.classList.toggle('flip');
  toggleButtonHerenSub2.classList.toggle('flip');
  toggleButton3HerenSub1.classList.toggle('flip');
  toggleButton4HerenSub1.classList.toggle('flip');
  toggleButton5HerenSub1.classList.toggle('flip');
  }
}

/* Hide competition group list inner Men */ 
function hideFunctionH1(){
  const x = document.getElementById('heren-container-1');
  if(x.style.display  === "none"){
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function hideFunctionH2(){
  const x = document.getElementById('heren-container-2');
  if(x.style.display  === "none"){
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function hideFunctionH3(){
  const x = document.getElementById('heren-container-3');
  if(x.style.display  === "none"){
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function hideFunctionH4(){
  const x = document.getElementById('heren-container-4');
  if(x.style.display  === "none"){
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function hideFunctionH5(){
  const x = document.getElementById('heren-container-5');
  if(x.style.display  === "none"){
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

/* Playing Moments Cards */ 
const playingMomentsQuery = '*[_type == "playingCard"] | order(cardNumber)';

function fetchPlayingMoments(){
    client.fetch(playingMomentsQuery).then(response => {
        for(let j = 0; j < response.length - 3; j++){
          var introText = [];
          console.log(response);
          for (let i = 0; i < response[j].information.length; i++) {
            introText[i] = response[j].information[i].children[0].text;  
          }
          const htmlRender = `
          <div class="grid-card">
            <h3>${introText[0]}</h3>
            <h5>${introText[1]}</h5>
            <h5>${introText[2]}</h5>
            <p>${introText[3]}</p>
            <p>${introText[4]}</p>
          </div>` 

           
           document.querySelector(`#playing-moments-grid`).insertAdjacentHTML('beforeend', htmlRender); 
  
        }
    })
    .catch(error=> {
      console.log(error);
    })
}

fetchPlayingMoments();


/* Youth Playing Moment Card */
const playingMomentsQuery2 = '*[_type == "playingCard"] | order(cardNumber)';

function fetchPlayingMoments2(){
    client.fetch(playingMomentsQuery2).then(response => {
        for(let j = 0; j < response.length; j++){
          var introText = [];
          console.log(response);
          for (let i = 0; i < response[j].information.length; i++) {
            introText[i] = response[j].information[i].children[0].text;  
          }
          const htmlRender = `
          <div class="grid-card">
          <h3>${introText[0]}</h3>
          <p>${introText[1]}</p>
          <p>${introText[2]}</p>
          <p>${introText[3]}</p>
          <p>${introText[4]}</p>
          <p>${introText[5]}</p>
          <p>${introText[6]}</p>
          </div>` 

           if(j == 5){
              document.querySelector(`#youth-playing-card`).insertAdjacentHTML('beforeend', htmlRender); 
           }
        }
    })
    .catch(error=> {
      console.log(error);
    })
}

fetchPlayingMoments2();

/* Competition Playing Card */

const playingMomentsQuery3 = '*[_type == "playingCard"] | order(cardNumber)';

function fetchPlayingMoments3(){
    client.fetch(playingMomentsQuery3).then(response => {
        for(let j = 5; j < response.length; j++){
          var introText = [];
          console.log(response);
          for (let i = 0; i < response[j].information.length; i++) {
            introText[i] = response[j].information[i].children[0].text;  
          }
          const htmlRender = `
          <div class="grid-card">
          <h3>${introText[0]}</h3>
          <p>${introText[1]}</p>
          <p>${introText[2]}</p>
          <p>${introText[3]}</p>
          <p>${introText[4]}</p>
          </div>` 

        if(j == 6){
            document.querySelector(`#competition-playing-card`).insertAdjacentHTML('beforeend', htmlRender); 
         }
        }
    })
    .catch(error=> {
      console.log(error);
    })
}

fetchPlayingMoments3();

/* Recreation Playing Card */

const playingMomentsQuery4 = '*[_type == "playingCard"] | order(cardNumber)';

function fetchPlayingMoments4(){
    client.fetch(playingMomentsQuery3).then(response => {
        for(let j = 0; j < response.length; j++){
          var introText = [];
          console.log(response);
          for (let i = 0; i < response[j].information.length; i++) {
            introText[i] = response[j].information[i].children[0].text;  
          }
          const htmlRender = `
          <div class="grid-card">
          <h3>${introText[0]}</h3>
          <p>${introText[1]}</p>
          <p>${introText[2]}</p>
          <p>${introText[3]}</p>
          <p>${introText[4]}</p>
          </div>` 

        if( j ==  7){
            document.querySelector(`#recreation-playing-card`).insertAdjacentHTML('beforeend', htmlRender); 
         }
        }
    })
    .catch(error=> {
      console.log(error);
    })
}

fetchPlayingMoments4();



/* Tournament Information */ 
const tournamentInformationQuery = '*[_type == "tournamentInfo"]';

function fetchTournamentInformation(){
    client.fetch(tournamentInformationQuery).then(response => {
        const html = response.map(user =>{
          console.log(user);
            for (let i = 0; i < user.information.length; i++) {
              for(let j = 0; j < user.information[i].children.length; j++){
                const introText = user.information[i].children[j].text;  
                const htmlRender = introText;
                let k = 0;
                  if(user.information[i].markDefs.length > 0 && user.information[i].markDefs[0]._type === 'link'){
                    const htmlRender = `<a id=link-${k}>${introText}</a>`
                    document.querySelector(`#tournament-intro-text`).insertAdjacentHTML('beforeend', htmlRender);
                    document.getElementById(`link-${k}`).setAttribute("href", introText);
                    document.getElementById(`link-${k}`).setAttribute("target", "_blank");
                    k++;
                }

                else if(user.information[i].markDefs.length <= 0){
                    document.querySelector(`#tournament-intro-text`).insertAdjacentHTML('beforeend', htmlRender); 
                }
                console.log(introText);
              }
            }
        })
    })
    .catch(error=> {
      console.log(error);
    })
}

fetchTournamentInformation();

/* Sponsor Information */ 
const sponsorInformationQuery = '*[_type == "sponsor"] | order(sponsorNumber)';

function fetchSponsorInformation(){
    let j = 1;
    client.fetch(sponsorInformationQuery).then(response => {
        const html = response.map(user =>{
            for (let i = 0; i < user.information.length; i++) {
              const introText = user.information[i].children[0].text;
              if(i == 0){
                const htmlRender = `<h2>${introText}</h2>` 
                document.querySelector(`#sponsor-text-${j}`).insertAdjacentHTML('beforeend', htmlRender);   
              } else { 
                const htmlRender = `<p>${introText}</p>` 
                document.querySelector(`#sponsor-text-${j}`).insertAdjacentHTML('beforeend', htmlRender);   
              }
            }
        })
        j++;  
    })
    .catch(error=> {
      console.log(error);
    })
}

fetchSponsorInformation();


/* Fetch Player Type Card */
const playerTypeQuery = '*[_type == "playerType"] | order(cardNumber)';

function fetchPlayerType(){
    let j = 1;
    let playerText = [];
    let youthLink = '/joinYouth.html';
    let competitiveLink = '/joinCompetitive.html';
    let recreationLink = '/joinRecreation.html'
    client.fetch(playerTypeQuery).then(response => {
        const html = response.map(user =>{
          for(let i = 0; i < user.information.length; i++){
            playerText[i] = user.information[i].children[0].text;  
            const htmlRender = `${playerText[i]}` 
            document.querySelector(`.player-types .grid-card:nth-of-type(${j})`).insertAdjacentHTML('beforeend', htmlRender);   
          }
          j++;  
        })
        document.getElementById('youth-learn-more').setAttribute("href", youthLink);
        document.getElementById('competitive-learn-more').setAttribute("href", competitiveLink);
        document.getElementById('recreation-learn-more').setAttribute("href", recreationLink);
    })
    .catch(error=> {
      console.log(error);
    })
}

fetchPlayerType();


/* Sending Message Form */

// document.querySelector('#contactus').addEventListener("submit", submitForm);

// function submitForm(e){
//   e.preventDefault();

//   //Get Input Values
//   let name = document.querySelector("#firstName").value;
//   let email = document.querySelector("#email").value;
//   let message = document.querySelector("#message").value;

//   document.querySelector("#contactus").reset();

//   sendEmail(name, email, message);
// }

// //Send Email info
// function sendEmail(name, email, message){
//     Email.send({
//       Host: "smtp.gmail.com",
//       Username: 'velinkalenderski@gmail.com',
//       Password: 'tycoon97',
//       To: 'velinkalenderski@hotmail.co.uk',
//       From: 'velinkalenderski@gmail.com',
//       Subject: `${name} sent you a message`,
//       Body: `Name: ${name} <br/> Email: ${email} <br/> Message: ${message}`
//     }).then((message) => alert("Message sent successfully"))
// }


/* Query for PDF Files */ 
const pdfFileQuery = '*[_type == "pdfFiles"]';

function fetchPdfFile(){
  client.fetch(pdfFileQuery).then(response => {
      console.log(response);
      const html = response.map(user =>{
        console.log(user);
        let pdfRef = response[0].pdfFile.asset._ref;
        const [_file, id, extension] = pdfRef.split('-');
        const downloadUrl = `https://cdn.sanity.io/files/bs4sdm8j/production/${id}.${extension}`;
        console.log(downloadUrl);
        document.getElementById('pdf-brochure-link').setAttribute("href", downloadUrl);
      })
  })
  .catch(error=> {
    console.log(error);
  })
}

fetchPdfFile();





