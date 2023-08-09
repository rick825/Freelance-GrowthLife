

window.onload = function(){
const dashboard = document.querySelector(".dashboard");
dashboard.classList.add('feed-growth-show');
feedScript();
 
}

const feedScript = () =>{
var i;
  const nav = document.querySelectorAll(".navitem");
  const feed = document.querySelectorAll(".feed-growth");
  
    
    nav[0].addEventListener('click',()=>{
    	feed[0].classList.add('feed-growth-show');
    	feed[1].classList.remove('feed-growth-show');
    	feed[2].classList.remove('feed-growth-show'); 
    	feed[3].classList.remove('feed-growth-show');
    	feed[4].classList.remove('feed-growth-show');
    	feed[5].classList.remove('feed-growth-show');
    	heads.classList.add('head-img-back-show');	 
   });

     nav[1].addEventListener('click',()=>{
    	feed[1].classList.add('feed-growth-show');
    	feed[0].classList.remove('feed-growth-show');
    	feed[2].classList.remove('feed-growth-show');
    	feed[3].classList.remove('feed-growth-show');
    	feed[4].classList.remove('feed-growth-show');
    	feed[5].classList.remove('feed-growth-show');
    	
   });

      nav[2].addEventListener('click',()=>{
    	feed[2].classList.add('feed-growth-show');
        feed[0].classList.remove('feed-growth-show');
    	feed[1].classList.remove('feed-growth-show'); 
    	feed[3].classList.remove('feed-growth-show');
    	feed[4].classList.remove('feed-growth-show');
    	feed[5].classList.remove('feed-growth-show');  
    		
   });

       nav[3].addEventListener('click',()=>{
    	feed[3].classList.add('feed-growth-show');
    	feed[0].classList.remove('feed-growth-show');
        feed[1].classList.remove('feed-growth-show');
    	feed[2].classList.remove('feed-growth-show');
    	feed[4].classList.remove('feed-growth-show');
    	feed[5].classList.remove('feed-growth-show');
    		
   });
    
        nav[4].addEventListener('click',()=>{
    	feed[4].classList.add('feed-growth-show');
    	feed[0].classList.remove('feed-growth-show');
        feed[1].classList.remove('feed-growth-show');
    	feed[2].classList.remove('feed-growth-show');	
    	feed[3].classList.remove('feed-growth-show');
    	feed[5].classList.remove('feed-growth-show');
    	
   });

         nav[5].addEventListener('click',()=>{
    	feed[5].classList.add('feed-growth-show');
    	feed[0].classList.remove('feed-growth-show');
        feed[1].classList.remove('feed-growth-show');
    	feed[2].classList.remove('feed-growth-show');	
    	feed[3].classList.remove('feed-growth-show');
    	feed[4].classList.remove('feed-growth-show');
    	

   });

  

       
}
