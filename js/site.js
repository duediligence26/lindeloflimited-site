(function () {
  var toggle = document.querySelector(".nav-toggle");
  var menu = document.querySelector(".nav-mobile");
  var closeBtn = document.querySelector(".nav-close");

  function setOpen(open) {
    if (!menu || !toggle) return;
    menu.hidden = !open;
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
    toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    document.body.style.overflow = open ? "hidden" : "";
  }

  if (toggle && menu) {
    toggle.addEventListener("click", function () {
      setOpen(menu.hidden);
    });
  }
  if (closeBtn) closeBtn.addEventListener("click", function () { setOpen(false); });
  if (menu) {
    menu.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () { setOpen(false); });
    });
  }

  var sections = Array.prototype.slice.call(document.querySelectorAll("[data-header]"));
  function updateHeader() {
    if (!sections.length) return;
    var mark = 48;
    var current = sections[0];
    sections.forEach(function (section) {
      var rect = section.getBoundingClientRect();
      if (rect.top <= mark && rect.bottom > mark) current = section;
    });
    var light = current.getAttribute("data-header") === "light";
    document.body.classList.toggle("header-light", light);
    document.body.classList.toggle("header-dark", !light);
  }
  updateHeader();
  window.addEventListener("scroll", updateHeader, { passive: true });

  document.querySelectorAll("[data-carousel]").forEach(function (root) {
    var track = root.querySelector(".track");
    var prev = root.querySelector(".prev");
    var next = root.querySelector(".next");
    if (!track) return;
    function step(dir) {
      var amount = Math.max(track.clientWidth * 0.75, 240) * dir;
      track.scrollBy({ left: amount, behavior: "smooth" });
    }
    if (prev) prev.addEventListener("click", function () { step(-1); });
    if (next) next.addEventListener("click", function () { step(1); });
  });
})();
