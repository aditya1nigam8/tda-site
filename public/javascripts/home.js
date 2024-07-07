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
