// (A) WAIT FOR PAGE TO FULLY LOAD
window.addEventListener("load", function(){
  // (B) ATTACH KEY UP LISTENER TO SEARCH BOX
  document.getElementById("the-filter").addEventListener("keyup", function(){
    // (C) GET THE SEARCH TERM
    var search = this.value.toLowerCase();

    // (D) GET ALL LIST ITEMS
    var all = document.querySelectorAll("#the-list li")

    // (E) LOOP THROUGH LIST ITELS - ONLY SHOW ITEMS THAT MATCH SEARCH
    for (let i of all) {
      let item = i.innerHTML.toLowerCase();
      if (item.indexOf(search) == -1) { i.classList.add("hide"); }
      else { i.classList.remove("hide"); }
    }
  });
});
Give feedback
