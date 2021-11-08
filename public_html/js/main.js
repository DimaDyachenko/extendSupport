(() => {
  const refs = {
    wrapper: document.querySelector(".cookiesWrapper"),
    closeBtn: document.querySelector(".cookiesBtn"),
    openBurger: document.querySelector(".input"),
    burger: document.querySelector(".navList"),
    // closeBurger
  };

  refs.closeBtn.addEventListener("click", toggleModal);
  refs.openBurger.addEventListener("click", burger);


  function burger() {
    refs.burger.classList.toggle("is-vissually");
  }
  function toggleModal() {
    refs.wrapper.classList.toggle("is-hidden");
  }
})();
