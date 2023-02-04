// (A) WAIT FOR PAGE TO LOAD
window.addEventListener("load", function(){
  // (B) GET CONTENTS FROM SERVER VIA AJAX
  var xhr = new XMLHttpRequest();
  xhr.open('GET', "e2-server.html");
  xhr.onload = function(){
    // (C) PUT CONTENTS INTO LIST
    document.getElementById("the-list").innerHTML = this.response;

    // (D) ATTCH KEY UP LISTENER ON SEARCH BOX
    // ** THIS PART IS EXACTLY THE SAME AS BEFORE
    document.getElementById("the-filter").addEventListener("keyup", function(){
      var search = this.value.toLowerCase();
      var all = document.querySelectorAll("#the-list li")
      if (all.length>0) { for (let i of all) {
        let item = i.innerHTML.toLowerCase();
        if (item.indexOf(search) == -1) { i.classList.add("hide"); }
        else { i.classList.remove("hide"); }
      }}
    });
  };
  xhr.send();
});