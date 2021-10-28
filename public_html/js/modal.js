(() => {
    const refs = {
      openModalBtn: document.querySelector('.mainButton'),
      closeModalBtn: document.querySelector('.modalClose'),
      modal: document.querySelector('.backdrop'),
    };
  
    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle('is-hidden');
    }
  })();