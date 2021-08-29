 /*  ---------------------------------------------------- Competition Drop-Down Menus ---------------------------------------------------- */

             /* Function for opening the Heren Menu and Animation of Arrow Icon */
             const toggleButton1 = document.getElementsByClassName('toggle-button-2')[0]; 
             const toggleButton2 = document.getElementsByClassName('toggle-button-2')[1];
             toggleButton1.addEventListener('click', () => {
             toggleButton1.classList.toggle('flip');
             })
             toggleButton2.addEventListener('click', () => {
             toggleButton1.classList.toggle('flip');
             })

              /* Clicking Heren in Navbar triggers Icon flip */
              function iconFlipHeren(){
                const toggleButton2 = document.getElementsByClassName('toggle-button-2')[0]; 
                const toggleButton2HerenSub1 = document.getElementsByClassName('toggle-button-heren-sub')[0];
                const toggleButtonHerenSub2 = document.getElementsByClassName('toggle-button-heren-sub')[2];
                const toggleButton3HerenSub1 = document.getElementsByClassName('toggle-button-heren-sub')[4];
                const toggleButton4HerenSub1 = document.getElementsByClassName('toggle-button-heren-sub')[6];
                // const toggleButton5HerenSub1 = document.getElementsByClassName('toggle-button-heren-sub')[8];
                toggleButton2.classList.toggle('flip');
                toggleButton2HerenSub1.classList.toggle('flip');
                toggleButtonHerenSub2.classList.toggle('flip');
                toggleButton3HerenSub1.classList.toggle('flip');
                toggleButton4HerenSub1.classList.toggle('flip');
                // toggleButton5HerenSub1.classList.toggle('flip');
            }
 
             /* Function for opening the Heren sub-menu 1 */
             const toggleButtonHerenSub1 = document.getElementsByClassName('toggle-button-heren-sub')[0];
             const toggleButton2HerenSub1 = document.getElementsByClassName('toggle-button-heren-sub')[1];
             toggleButtonHerenSub1.addEventListener('click', () => {
             toggleButtonHerenSub1.classList.toggle('flip');
             })
             toggleButton2HerenSub1.addEventListener('click', () => {
             toggleButtonHerenSub1.classList.toggle('flip');
             })
 
             /* Function for opening the Heren sub-menu 2 */
             const toggleButtonHerenSub2 = document.getElementsByClassName('toggle-button-heren-sub')[2];
             const toggleButton2HerenSub2 = document.getElementsByClassName('toggle-button-heren-sub')[3];
             toggleButtonHerenSub2.addEventListener('click', () => {
             toggleButtonHerenSub2.classList.toggle('flip');
             })
             toggleButton2HerenSub2.addEventListener('click', () => {
             toggleButtonHerenSub2.classList.toggle('flip');
             })
 
             /* Function for opening the Heren sub-menu 3 */
             const toggleButtonHerenSub3 = document.getElementsByClassName('toggle-button-heren-sub')[4];
             const toggleButton2HerenSub3 = document.getElementsByClassName('toggle-button-heren-sub')[5];
             toggleButtonHerenSub3.addEventListener('click', () => {
             toggleButtonHerenSub3.classList.toggle('flip');
             })
             toggleButton2HerenSub3.addEventListener('click', () => {
             toggleButtonHerenSub3.classList.toggle('flip');
             })
 
             /* Function for opening the Heren sub-menu 4 */
             const toggleButtonHerenSub4 = document.getElementsByClassName('toggle-button-heren-sub')[6];
             const toggleButton2HerenSub4 = document.getElementsByClassName('toggle-button-heren-sub')[7];
             toggleButtonHerenSub4.addEventListener('click', () => {
             toggleButtonHerenSub4.classList.toggle('flip');
             })
             toggleButton2HerenSub4.addEventListener('click', () => {
             toggleButtonHerenSub4.classList.toggle('flip');
             })
 
            //  /* Function for opening the Heren sub-menu 5 */
            //  const toggleButtonHerenSub5 = document.getElementsByClassName('toggle-button-heren-sub')[8];
            //  const toggleButton2HerenSub5 = document.getElementsByClassName('toggle-button-heren-sub')[9];
            //  toggleButtonHerenSub5.addEventListener('click', () => {
            //  toggleButtonHerenSub5.classList.toggle('flip');
            //  })
            //  toggleButton2HerenSub5.addEventListener('click', () => {
            //  toggleButtonHerenSub5.classList.toggle('flip');
            //  })
 
             /* Function for opening the Dames Menu and Animation of Arrow Icon */
             const toggleButton3 = document.getElementsByClassName('toggle-button-3')[0]; 
             const toggleButton4 = document.getElementsByClassName('toggle-button-3')[1];
             toggleButton3.addEventListener('click', () => {
             toggleButton3.classList.toggle('flip');
             })
             toggleButton4.addEventListener('click', () => {
             toggleButton3.classList.toggle('flip');
             })
             
             /* Clicking Dames in Navbar triggers Icon flip */
            function iconFlip(){
                const toggleButton3 = document.getElementsByClassName('toggle-button-3')[0]; 
                const toggleButton2DamesSub1 = document.getElementsByClassName('toggle-button-dames-sub')[0];
                const toggleButtonDamesSub2 = document.getElementsByClassName('toggle-button-dames-sub')[2];
                toggleButton3.classList.toggle('flip');
                toggleButton2DamesSub1.classList.toggle('flip');
                toggleButtonDamesSub2.classList.toggle('flip');
            }
             
             /* Function for opening the Dames sub-menu 1 */
             const toggleButtonDamesSub1 = document.getElementsByClassName('toggle-button-dames-sub')[0];
             const toggleButton2DamesSub1 = document.getElementsByClassName('toggle-button-dames-sub')[1];
             toggleButtonDamesSub1.addEventListener('click', () => {
             toggleButtonDamesSub1.classList.toggle('flip');
             })
             toggleButton2DamesSub1.addEventListener('click', () => {
             toggleButtonDamesSub1.classList.toggle('flip');
             })

              /* Function for opening the Dames sub-menu 2 */
             const toggleButtonDamesSub2 = document.getElementsByClassName('toggle-button-dames-sub')[2];
             const toggleButton2DamesSub2 = document.getElementsByClassName('toggle-button-dames-sub')[3];
             toggleButtonDamesSub2.addEventListener('click', () => {
             toggleButtonDamesSub2.classList.toggle('flip');
             })
             toggleButton2DamesSub2.addEventListener('click', () => {
             toggleButtonDamesSub2.classList.toggle('flip');
             })
 
             /* Function for opening the Gemengde Menu and Animation of Arrow Icon */
             const toggleButton5 = document.getElementsByClassName('toggle-button-4')[0]; 
             const toggleButton6 = document.getElementsByClassName('toggle-button-4')[1];
             toggleButton5.addEventListener('click', () => {
             toggleButton5.classList.toggle('flip');
             })
             toggleButton6.addEventListener('click', () => {
             toggleButton5.classList.toggle('flip');
             })

             /* Function for Icon Flip Gemengde from Navbar click */

             function iconFlipGemengde(){
                const toggleButton4 = document.getElementsByClassName('toggle-button-4')[0]; 
                const toggleButtonGemengde2 = document.getElementsByClassName('toggle-button-gemengde-sub')[0];
                const toggleButtonGemengde3 = document.getElementsByClassName('toggle-button-gemengde-sub')[2];
                const toggleButtonGemengde4 = document.getElementsByClassName('toggle-button-gemengde-sub')[4];
                const toggleButtonGemengde5 = document.getElementsByClassName('toggle-button-gemengde-sub')[6];
                const toggleButtonGemengde6 = document.getElementsByClassName('toggle-button-gemengde-sub')[8];
                const toggleButtonGemengde7 = document.getElementsByClassName('toggle-button-gemengde-sub')[10];
                toggleButton4.classList.toggle('flip');
                toggleButtonGemengde2.classList.toggle('flip');
                toggleButtonGemengde3.classList.toggle('flip');
                toggleButtonGemengde4.classList.toggle('flip');
                toggleButtonGemengde5.classList.toggle('flip');
                toggleButtonGemengde6.classList.toggle('flip');
                toggleButtonGemengde7.classList.toggle('flip');
            }
 
 
              /* Function for opening the Gemengde sub-menu 1 */
             const toggleButtonGemengdeSub1 = document.getElementsByClassName('toggle-button-gemengde-sub')[0];
             const toggleButton2GemengdeSub1 = document.getElementsByClassName('toggle-button-gemengde-sub')[1];
             toggleButtonGemengdeSub1.addEventListener('click', () => {
             toggleButtonGemengdeSub1.classList.toggle('flip');
             })
             toggleButton2GemengdeSub1.addEventListener('click', () => {
             toggleButtonGemengdeSub1.classList.toggle('flip');
             })
 
             /* Function for opening the Gemengde sub-menu 2 */
             const toggleButtonGemengdeSub2 = document.getElementsByClassName('toggle-button-gemengde-sub')[2];
             const toggleButton2GemengdeSub2 = document.getElementsByClassName('toggle-button-gemengde-sub')[3];
             toggleButtonGemengdeSub2.addEventListener('click', () => {
             toggleButtonGemengdeSub2.classList.toggle('flip');
             })
             toggleButton2GemengdeSub2.addEventListener('click', () => {
             toggleButtonGemengdeSub2.classList.toggle('flip');
             })
 
             
             /* Function for opening the Gemengde sub-menu 3 */
             const toggleButtonGemengdeSub3 = document.getElementsByClassName('toggle-button-gemengde-sub')[4];
             const toggleButton2GemengdeSub3 = document.getElementsByClassName('toggle-button-gemengde-sub')[5];
             toggleButtonGemengdeSub3.addEventListener('click', () => {
             toggleButtonGemengdeSub3.classList.toggle('flip');
             })
             toggleButton2GemengdeSub3.addEventListener('click', () => {
             toggleButtonGemengdeSub3.classList.toggle('flip');
             })
 
              /* Function for opening the Gemengde sub-menu 4 */
             const toggleButtonGemengdeSub4 = document.getElementsByClassName('toggle-button-gemengde-sub')[6];
             const toggleButton2GemengdeSub4 = document.getElementsByClassName('toggle-button-gemengde-sub')[7];
             toggleButtonGemengdeSub4.addEventListener('click', () => {
             toggleButtonGemengdeSub4.classList.toggle('flip');
             })
             toggleButton2GemengdeSub4.addEventListener('click', () => {
             toggleButtonGemengdeSub4.classList.toggle('flip');
             })
 
            //   /* Function for opening the Gemengde sub-menu 5 */
            //  const toggleButtonGemengdeSub5 = document.getElementsByClassName('toggle-button-gemengde-sub')[8];
            //  const toggleButton2GemengdeSub5 = document.getElementsByClassName('toggle-button-gemengde-sub')[9];
            //  toggleButtonGemengdeSub5.addEventListener('click', () => {
            //  toggleButtonGemengdeSub5.classList.toggle('flip');
            //  })
            //  toggleButton2GemengdeSub5.addEventListener('click', () => {
            //  toggleButtonGemengdeSub5.classList.toggle('flip');
            //  })
 
            //   /* Function for opening the Gemengde sub-menu 6 */
            //  const toggleButtonGemengdeSub6 = document.getElementsByClassName('toggle-button-gemengde-sub')[10];
            //  const toggleButton2GemengdeSub6 = document.getElementsByClassName('toggle-button-gemengde-sub')[11];
            //  toggleButtonGemengdeSub6.addEventListener('click', () => {
            //  toggleButtonGemengdeSub6.classList.toggle('flip');
            //  })
            //  toggleButton2GemengdeSub6.addEventListener('click', () => {
            //  toggleButtonGemengdeSub6.classList.toggle('flip');
            //  })


/* -------------------------------------------- From Bundle ------------------------------------------------------------- */ 

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
    const x1 = document.getElementById('heren-container-7');
    const x2 = document.getElementById('heren-container-8');
    const x3 = document.getElementById('heren-container-9');
    const x4 = document.getElementById('heren-container-10');
    // const x5 = document.getElementById('heren-container-12');
    // const x6 = document.getElementById('heren-container-13');
    const toggleButtonGemengde = document.getElementsByClassName('toggle-button-4')[0]; 
    const toggleButtonGemengde2 = document.getElementsByClassName('toggle-button-gemengde-sub')[0];
    const toggleButtonGemengde3 = document.getElementsByClassName('toggle-button-gemengde-sub')[2];
    const toggleButtonGemengde4 = document.getElementsByClassName('toggle-button-gemengde-sub')[4];
    const toggleButtonGemengde5 = document.getElementsByClassName('toggle-button-gemengde-sub')[6];
    // const toggleButtonGemengde6 = document.getElementsByClassName('toggle-button-gemengde-sub')[8];
    // const toggleButtonGemengde7 = document.getElementsByClassName('toggle-button-gemengde-sub')[10];
    const gemengdeContainer = document.getElementById('Gemengde');
    if(window.location.href.indexOf("Gemengde") > -1){
    x0.style.display = "flex";
    x1.style.display = "block";
    x2.style.display = "block";
    x3.style.display = "block";
    x4.style.display = "block";
    // x5.style.display = "block";
    // x6.style.display = "block";
    toggleButtonGemengde.classList.toggle('flip');
    toggleButtonGemengde2.classList.toggle('flip');
    toggleButtonGemengde3.classList.toggle('flip');
    toggleButtonGemengde4.classList.toggle('flip');
    toggleButtonGemengde5.classList.toggle('flip');
    // toggleButtonGemengde6.classList.toggle('flip');
    // toggleButtonGemengde7.classList.toggle('flip');
    }
  }
  
  function hideFunctionG1(){
    const x4 = document.getElementById("heren-container-7");
    if(x4.style.display  === "none"){
      x4.style.display = "block";
    } else {
      x4.style.display = "none";
    }
  }
  
  function hideFunctionG2(){
    const x4 = document.getElementById("heren-container-8");
    if(x4.style.display  === "none"){
      x4.style.display = "block";
    } else {
      x4.style.display = "none";
    }
  }
  
  
  function hideFunctionG3(){
    const x4 = document.getElementById("heren-container-9");
    if(x4.style.display  === "none"){
      x4.style.display = "block";
    } else {
      x4.style.display = "none";
    }
  }
  
  function hideFunctionG4(){
    const x4 = document.getElementById("heren-container-10");
    if(x4.style.display  === "none"){
      x4.style.display = "block";
    } else {
      x4.style.display = "none";
    }
  }
  
  
  // function hideFunctionG5(){
  //   const x4 = document.getElementById("heren-container-12");
  //   if(x4.style.display  === "none"){
  //     x4.style.display = "block";
  //   } else {
  //     x4.style.display = "none";
  //   }
  // }
  
  
  // function hideFunctionG6(){
  //   const x4 = document.getElementById("heren-container-13");
  //   if(x4.style.display  === "none"){
  //     x4.style.display = "block";
  //   } else {
  //     x4.style.display = "none";
  //   }
  // }
  
  
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
    const x2 = document.getElementById('heren-container-5');
    const x1 = document.getElementById('heren-container-6');
    const toggleButton3 = document.getElementsByClassName('toggle-button-3')[0]; 
    const toggleButton2DamesSub1 = document.getElementsByClassName('toggle-button-dames-sub')[0];
    const toggleButtonDamesSub2 = document.getElementsByClassName('toggle-button-dames-sub')[2];
    // const damesContainer = document.getElementById('Dames');
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
    const x = document.getElementById('heren-container-5');
    if(x.style.display  === "none"){
      x.style.display = "flex";
    } else {
      x.style.display = "none";
    }
  }
  
  function hideFunctionD2(){
    const x = document.getElementById('heren-container-6');
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
    // const x5 = document.getElementById('heren-container-5');
    const toggleButton2 = document.getElementsByClassName('toggle-button-2')[0]; 
    const toggleButton2HerenSub1 = document.getElementsByClassName('toggle-button-heren-sub')[0];
    const toggleButtonHerenSub2 = document.getElementsByClassName('toggle-button-heren-sub')[2];
    const toggleButton3HerenSub1 = document.getElementsByClassName('toggle-button-heren-sub')[4];
    const toggleButton4HerenSub1 = document.getElementsByClassName('toggle-button-heren-sub')[6];
    // const toggleButton5HerenSub1 = document.getElementsByClassName('toggle-button-heren-sub')[8];
    const herenContainer = document.getElementById('Heren');
    if(window.location.href.indexOf("Heren") > -1){
    x0.style.display = "flex";
    x1.style.display = "block";
    x2.style.display = "block";
    x3.style.display = "block"; 
    x4.style.display = "block";
    // x5.style.display = "block";
    toggleButton2.classList.toggle('flip');
    toggleButton2HerenSub1.classList.toggle('flip');
    toggleButtonHerenSub2.classList.toggle('flip');
    toggleButton3HerenSub1.classList.toggle('flip');
    toggleButton4HerenSub1.classList.toggle('flip');
    // toggleButton5HerenSub1.classList.toggle('flip');
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