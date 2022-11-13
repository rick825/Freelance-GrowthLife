const jobMenu = () =>{
  
  const jbut = document.querySelector('.job-menu');
  const jList = document.querySelector('.jobmenu-list');

  jbut.addEventListener('click',()=>{
   jList.classList.toggle('jobmenushow');
  });

}


jobMenu();