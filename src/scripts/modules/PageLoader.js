document.body.onload = function() {
  setTimeout(function() {
    let pageloader = document.getElementById("pageloader");
    if (!pageloader.classList.contains("is-done")) {
      pageloader.classList.add("is-done");
      setTimeout(() => {
        pageloader.remove();
      }, 200);
    }
  }, 1150);
};
