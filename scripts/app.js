"use strict";

const sanityClient = require('@sanity/client')

const client = sanityClient({
  projectId: 'bs4sdm8j',
  dataset: 'production',
  apiVersion: '2019-01-29', 
  useCdn: false,
})

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
    let j = 1;
    client.fetch(joinInformationQuery).then(response => {
        const html = response.map(user =>{
            for (let i = 0; i < user.information.length; i++) {
              const introText = user.information[i].children[0].text;
              if(i == 0){
                const htmlRender = `<h2>${introText}</h2>` 
                document.querySelector(`#intro-text-${j}`).insertAdjacentHTML('beforeend', htmlRender);   
              } else { 
                const htmlRender = `<p>${introText}</p>` 
                document.querySelector(`#intro-text-${j}`).insertAdjacentHTML('beforeend', htmlRender);   
              }
            }
        })
        j++;  
    })
    .catch(error=> {
      console.log(error);
    })
}

fetchJoinInformation();


/* Competition Group Query - Heren */
const competitionGroupQuery = '*[_type == "group"] | order(groupNumber)';

function fetchHeren() {
    let j = 1;
    client.fetch(competitionGroupQuery).then(response => {
      const html = response.map(user =>{
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

/* Hide Competition Group List Mixed */
function hideFunction4(){
  const x4 = document.getElementById("Gemengde");
  if(x4.style.display  === "none"){
    x4.style.display = "block";
  } else {
    x4.style.display = "none";
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
    x3.style.display = "block";
  } else {
    x3.style.display = "none";
  }
}

/* Hide competition list inner Women */
function hideFunctionD1(){
  const x = document.getElementById('heren-container-6');
  if(x.style.display  === "none"){
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function hideFunctionD2(){
  const x = document.getElementById('heren-container-7');
  if(x.style.display  === "none"){
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

/* Hide competition group list Men */
function hideFunction2(){
  const x2 = document.getElementById("Heren");
  if(x2.style.display  === "none"){
    x2.style.display = "block";
  } else {
    x2.style.display = "none";
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
      for(let j = 0; j < response.length; j++){
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
          document.querySelector(`#youth-playing-card`).insertAdjacentHTML('beforeend', htmlRender); 
      }
  })
  .catch(error=> {
    console.log(error);
  })
}

fetchPlayingMoments();


/* Tournament Information */ 
const tournamentInformationQuery = '*[_type == "tournamentInfo"]';

function fetchTournamentInformation(){
    client.fetch(tournamentInformationQuery).then(response => {
        const html = response.map(user =>{
            var introText = [];
            for (let i = 0; i < user.information.length; i++) {
              introText[i] = user.information[i].children[0].text;  
            }
            const htmlRender = `
            <h2>${introText[0]}</h2>
            <h4>${introText[1]}</h4>
            <p>${introText[2]}</p>
            <a id="tournament-link" href="" target="_blank">${introText[3]}</a>
            ` 
            document.querySelector(`#tournament-intro-text`).insertAdjacentHTML('beforeend', htmlRender); 
            document.getElementById('tournament-link').setAttribute("href", introText[3]);
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
    client.fetch(playerTypeQuery).then(response => {
        const html = response.map(user =>{
          for(let i = 0; i < user.information.length; i++){
            playerText[i] = user.information[i].children[0].text;  
            const htmlRender = `${playerText[i]}` 
            document.querySelector(`.player-types .grid-card:nth-of-type(${j})`).insertAdjacentHTML('beforeend', htmlRender);   
          }
          j++;  
        })
    })
    .catch(error=> {
      console.log(error);
    })
}

fetchPlayerType();


/* Sending Message Form */





