(() => {
    const refs = {
      openModalBtn: document.querySelector('.mainButton'),
      closeModalBtn: document.querySelector('.modalClose'),
      modal: document.querySelector('.backdrop'),
      openMenu: document.querySelector(".menu"),
      menu: document.querySelector(".mobile"),
    };
  
    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);
    refs.openMenu.addEventListener('click', toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle('is-hidden');
      refs.menu.classList.toggle('is-hidden');
    }
  })();

  