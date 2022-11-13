window.onscroll = function(){
	navscroll();
	contactform();
}


function navscroll(){
	var navtop = document.querySelector('.navtop');
	var navmain = document.querySelector('.nav');
	var before = navmain.querySelector(':before');
	 if(document.body.scrollTop > 200 || document.documentElement.scrollTop > 200){
       navtop.classList.add('navtophide');
}else{
	navtop.classList.remove('navtophide');
}
}






function contactform(){
 var cntbtn = document.querySelector('.contactbutton');
 var cntback = document.querySelector('.contactback');
 var cntf = document.querySelector('.contactf');

  cntbtn.addEventListener('click',()=>{
    cntback.classList.add('contactbackhide');
    cntf.classList.add('contactfshow');
    cntbtn.classList.add('cntbtnhide');
  });


}









const navopen = () => {
	const ham = document.querySelector('.ham');
	const nav = document.querySelector('.navlist');
	const bckblack = document.querySelector('.backblacknav');
	const navitem = document.querySelectorAll('.navitem');
  

	ham.addEventListener('click',()=>{
		nav.classList.toggle('navopen');
		bckblack.classList.toggle('backblacknavshow');
	});

	for(var i = 0; i < navitem.length; i++){
			navitem[i].addEventListener('click',()=>{
           nav.classList.remove('navopen');
           bckblack.classList.remove('backblacknavshow');
			});
		}
}


navopen();