/* -----------------------------------------
  Have focus outline only for keyboard users 
 ---------------------------------------- */

const handleFirstTab = (e) => {
  if (e.key === "Tab") {
    document.body.classList.add("user-is-tabbing");

    window.removeEventListener("keydown", handleFirstTab);
    window.addEventListener("mousedown", handleMouseDownOnce);
  }
};

const handleMouseDownOnce = () => {
  document.body.classList.remove("user-is-tabbing");

  window.removeEventListener("mousedown", handleMouseDownOnce);
  window.addEventListener("keydown", handleFirstTab);
};

window.addEventListener("keydown", handleFirstTab);

function loadContent(path, project) {
  fetch(path)
    .then(response => response.text()).then(data => { document.getElementById(project).innerHTML = data; }).catch(error => console.error('Error loading content:', error));
}

document.addEventListener("DOMContentLoaded", function () {

  loadContent('static/projects/sokoban.html', 'sokoban');
  loadContent('static/projects/musisys.html', 'musisys');

  var mybutton = document.getElementById("toTop");
  window.onscroll = function () { scrollFunction() };

  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }

  function topFunction() {
    document.documentElement.scrollTop = 0;
  }

  var popoverTrigger = document.getElementById("avatar");
  var popover = new bootstrap.Popover(popoverTrigger, {
    trigger: "manual",
  });

  popover.show();

  popoverTrigger.addEventListener("click", function (e) {
    e.stopPropagation();
    popover.toggle();
  });

  document.addEventListener("click", function (e) {
    if (!popoverTrigger.contains(e.target)) {
      popover.hide();
    }
  });
});
