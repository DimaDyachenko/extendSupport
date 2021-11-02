(() => {
    const refs = {
      wrapper: document.querySelector('.cookiesWrapper'),
      closeBtn: document.querySelector('.cookiesBtn'),
    };
  
    refs.closeBtn.addEventListener('click', toggleModal);

    function toggleModal() {
      refs.wrapper.classList.toggle('is-hidden');
    }
  })();