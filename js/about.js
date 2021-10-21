(function() {
    "use strict";
    
    let items = document.querySelectorAll(".timeline li");
    
    function isElementInViewport(item) {
      let rect = item.getBoundingClientRect();
      return (
        rect.left > 0 &&
        rect.top > 0 &&
        rect.right < document.documentElement.clientWidth &&
        rect.bottom < document.documentElement.clientHeight
      );
    }
    
    function callbackFunc() {
      for (let i = 0; i < items.length; i++) {
        if (isElementInViewport(items[i])) {
          items[i].className = "in-view";
        }
      }
    }
    
    window.addEventListener("scroll", callbackFunc);
    window.addEventListener("load", callbackFunc);
    window.addEventListener("resize", callbackFunc);
  })();