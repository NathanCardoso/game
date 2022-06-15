const init = () => {
  const modalConfirm = $(".modal.modal-animation-init");
  const btnInitGame = $(".btn-confirm.confirm-game");  

  console.log(btnInitGame)

  setTimeout(() => {
    loadingGame.removeClass("show");
  }, 2500);
  modalConfirm.fadeIn();
  btnInitGame.on("click", function () {

    modalConfirm.fadeOut();
    welcome();
  });
};
