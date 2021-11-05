(() => {
  const refs = {
    wrapper: document.querySelector(".cookiesWrapper"),
    closeBtn: document.querySelector(".cookiesBtn"),
    openBurger: document.querySelector(".input"),
    burger: document.querySelector(".navList"),
    // closeBurger
  };

  refs.closeBtn.addEventListener("click", toggleModal);
  refs.openBurger.addEventListener("click", toggleModal);


  function toggleModal() {
    refs.wrapper.classList.toggle("is-hidden");
    refs.burger.classList.toggle("is-vissually");
  }
})();
