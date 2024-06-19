const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", function(e) {
    //e.pageX ---> across
    //e.pageY ---> up/down
    moveCursor(e.pageX, e.pageY)
})

const moveCursor = function (pageX, pageY) {
    //cursor.style.left and cursor.style.top are helping us to locate the position of the div 
  cursor.style.left = pageX + "px";
  cursor.style.top = pageY + "px";
};
