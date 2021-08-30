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
      console.log(response);
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

// fetchPdfFile();