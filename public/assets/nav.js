(function () {
  let loadWaypoints = function () {
    if (typeof Waypoint == "undefined") {
      setTimeout(function () {
        loadWaypoints();
      }, 100);

      return;
    }

    let boxes = [];
    document.querySelectorAll(".nav-link").forEach((elem) => {
      let href = elem.getAttribute("href");
      let link = elem;
      if (href.startsWith('#')) {
        const box = document.querySelector(elem.getAttribute("href"));
        if (box) {
          var waypoint = new Waypoint({
            element: box,
            offset: 65,
            handler: function () {
              document.querySelectorAll(".nav-link").forEach((otherLink) => {
                otherLink.classList.remove("active");
              });
              link.classList.add("active");
            },
          });
        }
      }
    });
  };

  loadWaypoints();

  document.addEventListener(
    "click",
    function (event) {
      // If the clicked element doesn't have the right selector, bail
      if (!event.target.matches(".nav-link")) return;

      document.querySelector("#side-menu").checked = false;
    },
    false
  );

})();
