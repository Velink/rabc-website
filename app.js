"use strict";

const sanityClient = require('@sanity/client')

const client = sanityClient({
  projectId: 'bs4sdm8j',
  dataset: 'production',
  apiVersion: '2019-01-29', // use current UTC date - see "specifying API version"!
  useCdn: false, // `false` if you want to ensure fresh data
})

const query = '*[_type == "post"]';

function fetchData() {
    client.fetch(query).then(response => {
        console.log(response);
        const html = response.map(user =>{
          return `
          <div class="user">
          <p>${user.name}</p>
          `
        }).join("");
        console.log(html);
        document.querySelector("#app").insertAdjacentHTML('afterbegin', html);
    })
    .catch(error=> {
      console.log(error);
    })
}
   
fetchData();
 




