 /* Drop Down Menu UL-1 */ 
 const hamburger = document.getElementById('hamburger'); 
 const navUL = document.getElementById('nav-ul');
 hamburger.addEventListener('click', () => {
 navUL.classList.toggle('show');
 hamburger.classList.toggle('flip');
 navUL.classList.toggle('border-outline')
 })

 document.addEventListener("click", function(event){
     if(event.target.closest('.navbar')) return
     if(navUL.classList.contains('show')){
     console.log(1);
     navUL.classList.remove('show');
     hamburger.classList.remove('flip');
     navUL.classList.remove('border-outline')
     } return
 })

 // /* Drop Down Menu UL-2 */ 
 const algemeneUL = document.getElementById('algemene-ul')
 const algemeneButton = document.getElementById('algemene-button') 
 algemeneButton.addEventListener('click', () => {
 algemeneButton.classList.toggle('border-outline')
 algemeneUL.classList.toggle('show');
 })

 /* Closing Drop-Down Menu UL-2 When user clicks outside of Menu for Mobile Layout */ 
 document.addEventListener("click", function(event){
     if(event.target.closest('.drop-down-container')) return
     if(algemeneUL.classList.contains('show')){
     algemeneUL.classList.remove('show');
     algemeneButton.classList.remove('border-outline')
     } return
 })

 /* Drop Down Menu Ul-2 Sub Menu from LI-2 */
 const joinUL = document.getElementById('join-ul')
 const joinButton = document.getElementById('join-button') 
 joinButton.addEventListener('click', () => {
 joinButton.classList.toggle('border-outline2')
 joinUL.classList.toggle('show');
 })

 document.addEventListener("click", function(event){
    if(event.target.closest('.lid-worden')) return
    if(joinUL.classList.contains('show')){
    joinUL.classList.remove('show');
    joinButton.classList.remove('border-outline2')
    } return
})


 // /* Drop Down Menu UL-3 */ 
 const tournamentUL = document.getElementById('tournament-ul')
 const tournamentButton = document.getElementById('tournament-button') 
 tournamentButton.addEventListener('click', () => {
 tournamentButton.classList.toggle('border-outline')
 tournamentUL.classList.toggle('show');
 })

 
 /* Closing Drop-Down Menu UL-3 When user clicks outside of Menu for Mobile Layout */ 
 document.addEventListener("click", function(event){
     if(event.target.closest('.drop-down-container')) return
     if(tournamentUL.classList.contains('show')){
     tournamentUL.classList.remove('show');
     tournamentButton.classList.remove('border-outline')
     } return
 })


 // /* Drop Down Menu UL-4 */ 
 const competitionUL = document.getElementById('competition-ul')
 const competitionButton = document.getElementById('competition-button') 
 competitionButton.addEventListener('click', () => {
 competitionButton.classList.toggle('border-outline')
 competitionUL.classList.toggle('show');
 })

 /* Closing Drop-Down Menu UL-4 When user clicks outside of Menu for Mobile Layout */ 
 document.addEventListener("click", function(event){
     if(event.target.closest('.drop-down-container')) return
     if(competitionUL.classList.contains('show')){
     competitionUL.classList.remove('show');
     competitionButton.classList.remove('border-outline')
     } return
 })


 /* Drop down Menu UL-5 */
//  const sponsorsUL = document.getElementById('sponsors-ul')
//  const sponsorsButton = document.getElementById('sponsors-button') 
//  sponsorsButton.addEventListener('click', () => {
//  sponsorsButton.classList.toggle('border-outline')
//  sponsorsUL.classList.toggle('show');
//  })

 
 /* Closing Drop-Down Menu UL-5 When user clicks outside of Menu for Mobile Layout */ 
 document.addEventListener("click", function(event){
     if(event.target.closest('.drop-down-container')) return
     if(sponsorsUL.classList.contains('show')){
     sponsorsUL.classList.remove('show');
     sponsorsButton.classList.remove('border-outline')
     } return
 })

 /* Hide Drop Down Menu 1 */
 // function hideAlgemeneMenu() {
 //     if(algemeneUL.classList.contains('show') == true){
 //      algemeneUL.classList.toggle('show');
 //     }
 //     console.log(1);
 // }

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
 
             /* Function for opening the Heren sub-menu 5 */
             const toggleButtonHerenSub5 = document.getElementsByClassName('toggle-button-heren-sub')[8];
             const toggleButton2HerenSub5 = document.getElementsByClassName('toggle-button-heren-sub')[9];
             toggleButtonHerenSub5.addEventListener('click', () => {
             toggleButtonHerenSub5.classList.toggle('flip');
             })
             toggleButton2HerenSub5.addEventListener('click', () => {
             toggleButtonHerenSub5.classList.toggle('flip');
             })
 
             /* Function for opening the Dames Menu and Animation of Arrow Icon */
             const toggleButton3 = document.getElementsByClassName('toggle-button-3')[0]; 
             const toggleButton4 = document.getElementsByClassName('toggle-button-3')[1];
             toggleButton3.addEventListener('click', () => {
             toggleButton3.classList.toggle('flip');
             })
             toggleButton4.addEventListener('click', () => {
             toggleButton3.classList.toggle('flip');
             })
 
             
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
 
              /* Function for opening the Gemengde sub-menu 5 */
             const toggleButtonGemengdeSub5 = document.getElementsByClassName('toggle-button-gemengde-sub')[8];
             const toggleButton2GemengdeSub5 = document.getElementsByClassName('toggle-button-gemengde-sub')[9];
             toggleButtonGemengdeSub5.addEventListener('click', () => {
             toggleButtonGemengdeSub5.classList.toggle('flip');
             })
             toggleButton2GemengdeSub5.addEventListener('click', () => {
             toggleButtonGemengdeSub5.classList.toggle('flip');
             })
 
              /* Function for opening the Gemengde sub-menu 6 */
             const toggleButtonGemengdeSub6 = document.getElementsByClassName('toggle-button-gemengde-sub')[10];
             const toggleButton2GemengdeSub6 = document.getElementsByClassName('toggle-button-gemengde-sub')[11];
             toggleButtonGemengdeSub6.addEventListener('click', () => {
             toggleButtonGemengdeSub6.classList.toggle('flip');
             })
             toggleButton2GemengdeSub6.addEventListener('click', () => {
             toggleButtonGemengdeSub6.classList.toggle('flip');
             })