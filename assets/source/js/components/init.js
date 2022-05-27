const init = () => {
  const modalConfirm = $(".modal.modal-animation-init");
  const btnInitGame = modalConfirm.find(".buttons .confirm-game");  

  setTimeout(() => {
    loadingGame.removeClass("show");
  }, 2500);
  modalConfirm.fadeIn();
  btnInitGame.on("click", function () {

    modalConfirm.fadeOut();
    welcome();
  });
};
