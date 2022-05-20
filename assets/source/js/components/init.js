const init = () => {
  const modalConfirm = $(".modal.modal-animation-init");
  const btnInitGame = modalConfirm.find(".buttons .confirm-game");

  // ajax
  ajax({
    action: "promoEnd",
    method: "get",

    callback: function (data) {
      if (data.sucesso) {
        if (data.encerrou) {
          loadingGame.removeClass("show");
          $("#welcome").css("display", "none");
          endGame();
        } else {
          $("#endGame").css("display", "none");
          setTimeout(() => {
            loadingGame.removeClass("show");
          }, 2500);
          modalConfirm.fadeIn();
          btnInitGame.on("click", function () {
            modalConfirm.fadeOut();
            welcome();
          });
        }
      }
    },
  });
};
