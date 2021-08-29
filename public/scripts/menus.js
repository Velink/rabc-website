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

 /* Hide Drop Down Menu 1 */
 // function hideAlgemeneMenu() {
 //     if(algemeneUL.classList.contains('show') == true){
 //      algemeneUL.classList.toggle('show');
 //     }
 //     console.log(1);
 // }

