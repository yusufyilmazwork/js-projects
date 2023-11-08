const btns = document.querySelectorAll("#btn");
const about = document.querySelectorAll(".content")
btns.forEach(function(btn) {
  btn.addEventListener("click", function(e) {
    const id = e.target.dataset.id;

    if(id) {
        about.forEach(function(about) {
            about.classList.remove("active")
        })
    }
    
    const element = document.getElementById(id);
    element.classList.add("active");
  });
});

