anchor_links = document.getElementById("navbar_links").children;

for(var link of anchor_links){
  link.children[0].onclick = function(){
    for(var l of anchor_links){
      l.classList.remove('active');
    }
    this.parentElement.classList.add('active');
    return true;
  };
}

window.onscroll = function(){
  if(window.scrollY >= document.getElementById("contact-section").offsetTop-500)
    activate_navbar_link(6);
  else if(window.scrollY >= document.getElementById("about-section").offsetTop-300)
    activate_navbar_link(2);
  else if(window.scrollY >= document.getElementById("activity-section").offsetTop-500)
    activate_navbar_link(1);
  else
    activate_navbar_link(0)
}

let current_active_navbar_link = 0;
function activate_navbar_link(n){
  if(n == current_active_navbar_link )
    return;
  else
    current_active_navbar_link=n;
  console.log(`Activate link: ${n}`);
  for(var l of anchor_links){
    l.classList.remove('active');
  }
  anchor_links[n].classList.add('active');
}
