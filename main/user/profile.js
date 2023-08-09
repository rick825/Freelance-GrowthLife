const ps = () =>{


const ham1 = document.querySelector('.idham1');
const ham2 = document.querySelector('.idham2');
const profile = document.querySelector('.profile-i');
// const profileshow = document.querySelector('.profileshow');

ham1.addEventListener('click',()=>{
console.log("akash");
 profile.classList.add('profileshow');
 ham2.classList.add('idhamsh');
 ham1.classList.add('idhamhide');
});

ham2.addEventListener('click',()=>{
console.log("akash");
 profile.classList.remove('profileshow');
 ham1.classList.add('idhamsh');
 ham2.classList.remove('idhamsh');
});
}

ps();