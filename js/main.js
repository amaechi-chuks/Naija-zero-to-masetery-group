

//toggle Sidebar
function toggleSidebar(){
    document.getElementById("sidebar").classList.toggle('active');
}   
// Get modal element
let modal=document.getElementById('simpleModal');
// Get open modal button
let modalBtn=document.getElementById('modalBtn');
// Get close button
let closeBtn=document.getElementsByClassName('closeBtn')[0];

// listen for open click
modalBtn.addEventListener('click',openModal);

// listen for close click
closeBtn.addEventListener('click',closeModal);

//listen for outside click
window.addEventListener('click',clickOutside);

// function to open modal
function openModal(){
    modal.style.display='block';
}
// function to close modal 
function closeModal(){
    modal.style.display='none';
}
//function to close window on click outside 
function clickOutside(e){
    if (e.target==modal){
        modal.style.display='none';
    }   
}