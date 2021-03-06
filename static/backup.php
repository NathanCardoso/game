<?php
if ($_SERVER['SERVER_NAME'] == 'modeloresponsavel.com.br'):
  define('CDN_URL', 'https://d8ui32m30hzkh.cloudfront.net');
else:
  define('CDN_URL', '//'.$_SERVER['SERVER_NAME'].$_SERVER['REQUEST_URI']);
endif;
?>
<!DOCTYPE html>
<html>
  <head>
    <title>Corteva Quiz</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="icon" href="<?php print CDN_URL; ?>/images/icons/favicon.svg" />
    <link rel="stylesheet" href="<?php print CDN_URL; ?>/css/styles.css?<?php print dechex(crc32(file_get_contents('css/styles.css'))); ?>" />
    <script>
      var CONFIG = {
        apiURL: "https://roletacorteva-backend.clientes.codezone.com.br/api/",
        cdnURL: "<?php print CDN_URL; ?>/"
      };
    </script>
  </head>
  <body>
    <div id="app">
      <!-- loading -->
      <div class="loading show">
        <div class="overlay-loading">
          <span class="loading-ui">Carregando</span>
        </div>
      </div>
      <!--audio -->
      <div class="audioload">
        <button type="button" class="audio-control max-volume">
          <span></span>
        </button>
      </div>
      <!-- modal pra acionar as animações inicias-->
      <div class="modal modal-animation-init">
        <span class="overlay"></span>
        <span class="fix"></span>
        <div class="inside-modal">
          <div class="card card-message-feedback animation-init">
            <div class="header-card">
              <h2 class="title title-card">Pronto para Jogar!</h2>
            </div>
            <div class="body-message">
              <div class="buttons">
                <ul>
                  <li>
                    <button type="button" class="btn btn-confirm confirm-game">
                      <span> Pronto </span>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>      
      <!-- tela inicial -->
      <div id="welcome" style="display: block">
        <div class="background two-background"></div>
        <!-- transição das logos -->
        <div class="container container-content">
          <div class="wrapper">
            <div class="screen-height">
              <div class="transitions">
                <!-- as duas images das fases verde e roxo -->
                <div class="transition-bg">
                  <div class="images">
                    <img src="<?php print CDN_URL; ?>/images/fases.png" alt="" class="fases" />
                    <img
                      src="<?php print CDN_URL; ?>/images/big-circulo-centro.png"
                      alt=""
                      class="image-center"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- tela de inicio de login -->
      <div id="start" style="display: none">
        <div class="background gray-background"></div>
        <div class="container container-content">
          <div class="wrapper">
            <div class="screen-height">
              <div class="content">
                <div class="header-logo">
                  <img src="<?php print CDN_URL; ?>/images/small-center.png" alt="" />
                </div>
                <div class="content-steps">
                  <div class="step step-1" style="display: block">
                    <!-- Informe seu email -->
                    <div class="card card-form-start">
                      <div class="header-card">
                        <h2 class="title title-card">
                          Por favor informe seu email
                        </h2>
                      </div>
                      <div class="form-start">
                        <form id="form-login">
                          <div class="input-group">
                            <label for="email">Digite seu email</label>
                            <input
                              class="focused"
                              type="email"
                              id="email"
                              name="email"
                              placeholder="funcionário@servidor.com.br"
                            />
                            <span class="error-info"></span>
                          </div>
                          <div class="input-rules">
                            <div class="checkbox">
                              <div class="checkbox-input">
                                <input
                                  type="checkbox"
                                  name="check"
                                  id="rules"
                                  class="sr-only input-check"
                                />
                                <label for="rules">
                                  <span class="check"></span>
                                  <small
                                    >Eu li e concordo com o
                                    <a href="#" class="call-to-rules"
                                      >Regulamento</a
                                    ></small
                                  >
                                </label>
                              </div>
                            </div>
                          </div>
                          <div class="buttons">
                            <ul>
                              <li>
                                <button type="submit" class="btn btn-confirm">
                                  <span class="load"> Confirmar </span>
                                </button>
                              </li>
                            </ul>
                          </div>
                        </form>
                        <div class="contact-us">
                          <a href="#">Fale conosco</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="step step-2 hide" style="display: none">
                    <!-- Chave de acesso -->
                    <div class="card card-key-access">
                      <div class="header-card">
                        <h2 class="title title-card">
                          Informar chave de acesso
                        </h2>
                      </div>
                      <div class="key-access">
                        <form id="form-key-access">
                          <div class="body-card">
                            <div class="input-disclaimer">
                              <p>Agora é só informar o código recebido em:</p>
                            </div>
                            <div class="get-info-email">
                              <span class="info-email"
                                >FUNCIONÁRIO@SERVIDOR.COM.BR</span
                              >
                            </div>
                            <div class="input-group">
                              <input
                                type="text"
                                name="password"
                                id="access-code"
                                required
                              />
                              <span class="error-info"></span>
                            </div>
                          </div>
                          <div class="footer-card">
                            <div class="buttons">
                              <ul>
                                <li>
                                  <button type="button" class="btn btn-cancel">
                                    <span> Voltar </span>
                                  </button>
                                </li>
                                <li>
                                  <button type="submit" class="btn btn-confirm">
                                    <span class="load"> Confirmar </span>
                                  </button>
                                </li>
                              </ul>
                            </div>
                            <div class="contact-us footer-link">
                              <a href="#">Fale conosco</a>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                  <div class="step step-3 hide" style="display: none">
                    <!-- modal de como quero ser chamado -->
                    <div class="modal modal-want-to-be-called">
                      <span class="overlay"></span>
                      <span class="fix"></span>
                      <div class="inside-modal">
                        <div
                          class="card card-want-to-be-called card-inside-modal"
                        >
                          <div class="header-card">
                            <h2 class="title title-card">
                              Como prefere ser chamado?
                            </h2>
                          </div>
                          <div class="body-card">
                            <div class="input-disclaimer">
                              <p>Digite seu nome completo no campo abaixo:</p>
                            </div>
                            <div class="form-want-to-be-called">
                              <form id="form-rename-user">
                                <div class="input-group">
                                  <label for="nome">Digite seu nome</label>
                                  <input
                                    type="text"
                                    id="nome"
                                    class="focused"
                                    name="nome"
                                    placeholder="Funcionário Silva Andrade"
                                  />
                                </div>
                                <div class="buttons">
                                  <ul>
                                    <li>
                                      <button
                                        type="submit"
                                        class="btn btn-confirm"
                                      >
                                        <span class="load"> Enviar </span>
                                      </button>
                                    </li>
                                  </ul>
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="footer-screen-mobile">
                  <div class="logo-footer">
                    <img src="<?php print CDN_URL; ?>/images/corteva-logo-black.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="footer-screen">
          <div class="logo-footer">
            <img src="<?php print CDN_URL; ?>/images/corteva-logo-black.png" alt="" />
          </div>
        </div>
      </div>
      <!-- telas do quiz -->
      <div id="quiz" style="display: none">
        <div class="background gray-background"></div>
        <!-- timer -->
        <div class="timer" style="display: none">
          <div class="timer-wrap">
            <span class="time">00:00</span>
            <!-- <span class="circle-canvas"></span> -->
            <span class="clocktime">
              <svg viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="38" id="clockface"></circle>
                <path
                  d="M50,31 A19,19 1 0,1 50,69 A19,19 1 0,1 50,31"
                  id="spent"
                ></path>
              </svg>
            </span>
          </div>
        </div>
        <!-- / timer -->
        <div class="container container-content">
          <div class="wrapper">
            <div class="screen-height">
              <div class="content">
                <div class="header-logo">
                  <img src="<?php print CDN_URL; ?>/images/small-center-alt.png" alt="" />
                </div>
                <div class="content-steps">
                  <!-- inicio do quiz -->
                  <div class="step step-1" style="display: block">
                    <div class="start-quiz">
                      <div class="header-quiz">
                        <h2 class="title title-quiz">
                          Nada como começar uma boa conversa com uma
                          brincadeira!
                        </h2>
                      </div>
                      <div class="body-quiz">
                        <div class="buttons">
                          <ul>
                            <li>
                              <button class="btn btn-confirm">
                                <span class="load"> Começar </span>
                              </button>
                            </li>
                            <li>
                              <button class="btn btn-rank-quiz call-to-rank">
                                <span class="load"> Ranking </span>
                              </button>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div class="footer-quiz">
                        <div class="contact-us footer-link">
                          <a href="#">Fale conosco</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- telas do quiz dinamico -->
                  <div class="step step-2 hide" style="display: none">
                    <!-- modal de acerto ou erro -->
                    <div class="questions-quiz">
                      <form id="form-quiz">
                        <input type="hidden" id="id-question" />
                        <input type="hidden" id="time-question" />
                        <div class="header-questions">
                          <div class="iterate-questions-counter">
                            <p>
                              Questão <span class="number-of-question">01</span>
                            </p>
                            <span class="progressive-bar">
                              <span class="overflow-bar"></span>
                            </span>
                          </div>
                          <div class="question-statement">
                            <h3 class="question">
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Culpa similique earum totam assumenda
                              quaerat sit incidunt molestias hic sint.
                            </h3>
                          </div>
                        </div>
                        <div class="body-questions">
                          <ul class="questions-list"></ul>
                        </div>
                        <div class="footer-questions">
                          <div class="buttons">
                            <ul>
                              <li>
                                <button
                                  type="submit"
                                  class="btn btn-next-question"
                                >
                                  <span class="load"> Confirmar </span>
                                </button>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </form>
                    </div>
                    <div class="modal modal-answer-correct">
                      <span class="overlay"></span>
                      <span class="fix"></span>
                      <!-- modal de resposta feedback-->
                      <div class="inside-modal">
                        <div class="modal-answer">
                          <div class="modal-content">
                            <div class="modal-content-header">
                              <div class="answer-simbol-img">
                                <img src="<?php print CDN_URL; ?>/images/answer-correct.svg" alt="" />
                              </div>
                            </div>
                            <div class="modal-content-body">
                              <div class="response">
                                <h3 class="response-answer">
                                  A resposta está
                                  <span class="response-correct">correta</span>
                                </h3>
                                <p class="you-won">
                                  Você ganhou
                                  <span class="points">110 pontos</span>
                                </p>
                              </div>
                            </div>
                            <div class="modal-content-footer">
                              <div class="buttons">
                                <ul>
                                  <li>
                                    <button
                                      type="submit"
                                      class="btn btn-answer-next answer-correct"
                                    >
                                      <span class="load">Próximo</span>
                                      <span class="arrow">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="31.504"
                                          height="30.706"
                                          viewBox="0 0 31.504 30.706"
                                        >
                                          <path
                                            id="Icon_awesome-arrow-right"
                                            data-name="Icon awesome-arrow-right"
                                            d="M13.395,4.7l1.561-1.561a1.681,1.681,0,0,1,2.384,0L31.008,16.8a1.681,1.681,0,0,1,0,2.384L17.339,32.857a1.681,1.681,0,0,1-2.384,0L13.395,31.3a1.689,1.689,0,0,1,.028-2.412L21.9,20.813H1.688A1.683,1.683,0,0,1,0,19.125v-2.25a1.683,1.683,0,0,1,1.688-1.687H21.9L13.423,7.116A1.677,1.677,0,0,1,13.395,4.7Z"
                                            transform="translate(0 -2.647)"
                                            fill="#fff"
                                          />
                                        </svg>
                                      </span>
                                    </button>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="modal modal-answer-wrong">
                      <span class="overlay"></span>
                      <span class="fix"></span>
                      <div class="inside-modal">
                        <div class="modal-answer">
                          <div class="modal-content">
                            <div class="modal-content-header">
                              <div class="answer-simbol-img">
                                <img src="<?php print CDN_URL; ?>/images/answer-wrong.svg" alt="" />
                              </div>
                            </div>
                            <div class="modal-content-body">
                              <div class="response">
                                <h3 class="response-answer">
                                  A resposta está
                                  <span class="response-wrong">errada</span>
                                </h3>
                                <p class="you-won">
                                  Você não <span class="points">pontuou</span>
                                </p>
                              </div>
                            </div>
                            <div class="modal-content-footer">
                              <div class="buttons">
                                <ul>
                                  <li>
                                    <button
                                      type="submit"
                                      class="btn btn-answer-next answer-wrong"
                                    >
                                      <span class="load">Próximo</span>
                                      <span class="arrow">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="31.504"
                                          height="30.706"
                                          viewBox="0 0 31.504 30.706"
                                        >
                                          <path
                                            id="Icon_awesome-arrow-right"
                                            data-name="Icon awesome-arrow-right"
                                            d="M13.395,4.7l1.561-1.561a1.681,1.681,0,0,1,2.384,0L31.008,16.8a1.681,1.681,0,0,1,0,2.384L17.339,32.857a1.681,1.681,0,0,1-2.384,0L13.395,31.3a1.689,1.689,0,0,1,.028-2.412L21.9,20.813H1.688A1.683,1.683,0,0,1,0,19.125v-2.25a1.683,1.683,0,0,1,1.688-1.687H21.9L13.423,7.116A1.677,1.677,0,0,1,13.395,4.7Z"
                                            transform="translate(0 -2.647)"
                                            fill="#fff"
                                          />
                                        </svg>
                                      </span>
                                    </button>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="footer-screen-mobile">
                    <div class="logo-footer">
                      <img src="<?php print CDN_URL; ?>/images/corteva-logo-black.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="footer-screen">
          <div class="logo-footer">
            <img src="<?php print CDN_URL; ?>/images/corteva-logo-black.png" alt="" />
          </div>
        </div>
      </div>
      <!-- tela da roleta -->
      <div id="roulette" style="display: none">
        <div class="background two-background"></div>
        <div class="container container-content">
          <div class="wrapper">
            <div class="screen-height">
              <div class="content">
                <!-- ganhe mais ponto -->
                <div class="modal modal-your-chance">
                  <span class="overlay light-overlay"></span>

                  <div class="inside-modal">
                    <div class="modal-roulette modal-chance-to-win">
                      <div class="modal-content">
                        <div class="modal-content-header">
                          <div class="modal-roulette-image">
                            <img src="<?php print CDN_URL; ?>/images/mini-roleta.svg" alt="" />
                          </div>
                        </div>
                        <div class="modal-content-body">
                          <div class="body-message">
                            <h3>
                              Agora você tem a chance de ganhar mais&nbsp;<span
                                >pontos!</span
                              >
                            </h3>
                          </div>
                        </div>
                        <div class="modal-content-footer">
                          <div class="buttons">
                            <ul>
                              <li>
                                <button
                                  type="button"
                                  class="btn btn-next-step next-step"
                                >
                                  Próximo
                                  <span class="arrow">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="31.5"
                                      height="30.71"
                                      viewBox="0 0 31.504 30.706"
                                    >
                                      <path
                                        id="Icon_awesome-arrow-right"
                                        data-name="Icon awesome-arrow-right"
                                        d="M13.395,4.7l1.561-1.561a1.681,1.681,0,0,1,2.384,0L31.008,16.8a1.681,1.681,0,0,1,0,2.384L17.339,32.857a1.681,1.681,0,0,1-2.384,0L13.395,31.3a1.689,1.689,0,0,1,.028-2.412L21.9,20.813H1.688A1.683,1.683,0,0,1,0,19.125v-2.25a1.683,1.683,0,0,1,1.688-1.687H21.9L13.423,7.116A1.677,1.677,0,0,1,13.395,4.7Z"
                                        transform="translate(0 -2.647)"
                                        fill="#3D3079"
                                      />
                                    </svg>
                                  </span>
                                </button>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- roleta entra aqui-->
                <div class="roulette">
                  <div class="roulette-content">
                    <div class="spin-the-roulette">
                      <h2 class="title title-roulette">
                        GIRE A ROLETA PARA GANHAR MAIS PONTOS
                      </h2>
                    </div>
                  </div>
                  <div class="canvas">
                    <div class="hand-move showing">
                      <img src="<?php print CDN_URL; ?>/images/hand-click.png" alt="" />
                    </div>
                    <div class="canvas-content">
                      <!-- canvas -->
                      <canvas width="500" height="500"></canvas>
                      <!--/ canvas -->
                      <div class="awards">
                        <div class="award pontuation-0">
                          <img src="<?php print CDN_URL; ?>/images/nao-foi-dessa-vez.png" alt="" />
                          <span class="sr-only">0</span>
                        </div>
                        <div class="award pontuation-130">
                          <img src="<?php print CDN_URL; ?>/images/130PONTOS.png" alt="" />
                          <span class="sr-only">130</span>
                        </div>
                        <div class="award pontuation-110">
                          <img src="<?php print CDN_URL; ?>/images/110PONTOS.png" alt="" />
                          <span class="sr-only">110</span>
                        </div>
                        <div class="award pontuation-170">
                          <img src="<?php print CDN_URL; ?>/images/170PONTOS.png" alt="" />
                          <span class="sr-only">170</span>
                        </div>
                        <div class="award pontuation-150">
                          <img src="<?php print CDN_URL; ?>/images/150PONTOS.png" alt="" />
                          <span class="sr-only">150</span>
                        </div>
                        <div class="award pontuation-90">
                          <img src="<?php print CDN_URL; ?>/images/90PONTOS.png" alt="" />
                          <span class="sr-only">90</span>
                        </div>
                      </div>
                    </div>
                    <div class="content-center-image">
                      <img src="<?php print CDN_URL; ?>/images/roulette-center-image.png" alt="" />
                    </div>
                  </div>
                  <div class="footer-screen-mobile">
                    <div class="logo-footer">
                      <img src="<?php print CDN_URL; ?>/images/corteva-logo-white.png" alt="" />
                    </div>
                  </div>
                </div>
                <!-- modal ganhou pontos -->
                <div class="modal modal-winner-point">
                  <span class="overlay"></span>

                  <div class="inside-modal">
                    <div class="modal-roulette">
                      <div class="modal-content">
                        <div class="modal-content-header">
                          <div class="modal-roulette-image">
                            <img src="<?php print CDN_URL; ?>/images/roleta-winner.svg" alt="" />
                          </div>
                        </div>
                        <div class="modal-content-body">
                          <div class="body-message">
                            <h3 class="message-won">Uauuu!!!</h3>
                            <p>
                              Você ganhou mais
                              <span class="more-points">+130 pontos</span> com a
                              roleta.
                            </p>
                          </div>
                        </div>
                        <div class="modal-content-footer">
                          <div class="buttons">
                            <ul>
                              <li>
                                <button
                                  type="button"
                                  class="btn btn-next-step go-to-end"
                                >
                                  Próximo
                                  <span class="arrow">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="31.5"
                                      height="30.71"
                                      viewBox="0 0 31.504 30.706"
                                    >
                                      <path
                                        id="Icon_awesome-arrow-right"
                                        data-name="Icon awesome-arrow-right"
                                        d="M13.395,4.7l1.561-1.561a1.681,1.681,0,0,1,2.384,0L31.008,16.8a1.681,1.681,0,0,1,0,2.384L17.339,32.857a1.681,1.681,0,0,1-2.384,0L13.395,31.3a1.689,1.689,0,0,1,.028-2.412L21.9,20.813H1.688A1.683,1.683,0,0,1,0,19.125v-2.25a1.683,1.683,0,0,1,1.688-1.687H21.9L13.423,7.116A1.677,1.677,0,0,1,13.395,4.7Z"
                                        transform="translate(0 -2.647)"
                                        fill="#3D3079"
                                      />
                                    </svg>
                                  </span>
                                </button>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- modal não foi dessa vez -->
                <div class="modal modal-loser-point">
                  <span class="overlay"></span>

                  <div class="inside-modal">
                    <div class="modal-roulette">
                      <div class="modal-content">
                        <div class="modal-content-header">
                          <div class="modal-roulette-image">
                            <img src="<?php print CDN_URL; ?>/images/roleta-loser.svg" alt="" />
                          </div>
                        </div>
                        <div class="modal-content-body">
                          <div class="body-message">
                            <h3 class="message-lost">Poxa!!!</h3>
                            <p>
                              Não foi dessa vez, você não somou pontos com a
                              roleta.
                            </p>
                          </div>
                        </div>
                        <div class="modal-content-footer">
                          <div class="buttons">
                            <ul>
                              <li>
                                <button
                                  type="button"
                                  class="btn btn-next-step go-to-end"
                                >
                                  Próximo
                                  <span class="arrow">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="31.5"
                                      height="30.71"
                                      viewBox="0 0 31.504 30.706"
                                    >
                                      <path
                                        id="Icon_awesome-arrow-right"
                                        data-name="Icon awesome-arrow-right"
                                        d="M13.395,4.7l1.561-1.561a1.681,1.681,0,0,1,2.384,0L31.008,16.8a1.681,1.681,0,0,1,0,2.384L17.339,32.857a1.681,1.681,0,0,1-2.384,0L13.395,31.3a1.689,1.689,0,0,1,.028-2.412L21.9,20.813H1.688A1.683,1.683,0,0,1,0,19.125v-2.25a1.683,1.683,0,0,1,1.688-1.687H21.9L13.423,7.116A1.677,1.677,0,0,1,13.395,4.7Z"
                                        transform="translate(0 -2.647)"
                                        fill="#3D3079"
                                      />
                                    </svg>
                                  </span>
                                </button>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="footer-screen">
          <div class="logo-footer">
            <img src="<?php print CDN_URL; ?>/images/corteva-logo-white.png" alt="" />
          </div>
        </div>
      </div>
      <!-- tela de finalização do jogo -->
      <div id="end" style="display: none">
        <div class="background two-background"></div>
        <div class="container container-content">
          <div class="wrapper">
            <div class="screen-height">
              <div class="content">
                <!-- ranking and finshed-->
                <div class="content-header">
                  <div class="header-logo">
                    <img src="<?php print CDN_URL; ?>/images/small-center-alt.png" alt="" />
                  </div>
                </div>
                <div class="content-body">
                  <div class="card card-end">
                    <div class="header-card">
                      <h2 class="title title-card">Obrigado por participar!</h2>
                      <small>A sua nota e o tempo se encontra abaixo:</small>
                    </div>
                    <div class="body-card">
                      <div class="body-card-content">
                        <!-- aqui entra o colocado e sua posição -->
                        <div class="placeds top-ranked">
                          <div class="placed-content">
                            <div class="number-ranked">
                              <div class="number-wrap">
                                <span class="number">1°</span>
                              </div>
                            </div>
                            <div class="name-placed">
                              <h4>MARCIO RANGEL DE OLIVEIRA</h4>
                              <span class="sub-name">REPBREVANT</span>
                            </div>
                            <div class="total-of-points winners first-place">
                              <span class="number">130</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="footer-card">
                      <!-- aqui entra os dois boxes de finalização e tempo de resposta -->
                      <div class="grid-boxes">
                        <div class="grid box-time-duration">
                          <div class="box-header">
                            <small>O seu <span>tempo</span> no quiz foi</small>
                          </div>
                          <div class="box-body">
                            <div class="timer-box">
                              <span>10:25</span>
                            </div>
                          </div>
                          <div class="box-footer">
                            <div class="buttons">
                              <ul>
                                <li>
                                  <button
                                    type="button"
                                    class="btn btn-to-rank call-to-rank"
                                  >
                                    <span> Ranking </span>
                                  </button>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div class="grid box-congratulations">
                          <div class="box-header">
                            <strong>Parabéns</strong>
                            <small>pela sua <span>pontuação</span>!</small>
                          </div>
                          <!-- <div class="box-footer">
                          <div class="buttons">
                            <ul>                              
                              <li>
                                <button type="button" class="btn btn-to-finish">Finalizar</button>
                              </li>
                            </ul>
                          </div>
                        </div>                         -->
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="footer-screen-mobile">
                  <div class="logo-footer">
                    <img src="<?php print CDN_URL; ?>/images/corteva-logo-white.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="footer-screen">
          <div class="logo-footer">
            <img src="<?php print CDN_URL; ?>/images/corteva-logo-white.png" alt="" />
          </div>
        </div>
      </div>
      <!-- tela de Encerramento do Game -->
      <div id="endGame" style="display: block">
        <div class="background gray-background"></div>
        <div class="container container-content">
          <div class="wrapper">
            <div class="screen-height">
              <div class="content">
                <div class="content-header">
                  <div class="header-logo">
                    <img src="<?php print CDN_URL; ?>/images/small-center.png" alt="" />
                  </div>
                </div>
                <div class="content-body">
                  <div class="card end-game">
                    <div class="header">
                      <h2 class="title title-card">Período Encerrado</h2>
                    </div>
                    <div class="body">
                      <p>O período do game Modelo Responsável foi encerrado.<br>Agradecemos pela sua participação, confira o ranking no botão abaixo.</p>
                    </div>
                    <div class="footer">
                      <div class="buttons">
                        <ul>
                          <li>
                            <button
                              type="button"
                              class="btn btn-to-rank call-to-rank"
                            >
                              <span> Ir para o Ranking </span>
                            </button>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="footer-screen-mobile">
                  <div class="logo-footer">
                    <img src="<?php print CDN_URL; ?>/images/corteva-logo-black.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="footer-screen">
          <div class="logo-footer">
            <img src="<?php print CDN_URL; ?>/images/corteva-logo-black.png" alt="" />
          </div>
        </div>
      </div>
      <!-- modal regulamento -->
      <div class="modal modal-rules">
        <span class="overlay"></span>
        <span class="fix"></span>
        <div class="inside-modal">
          <!-- regulamento -->
          <div class="card card-rules">
            <button class="buttons close-card-modal close-modal"></button>
            <div class="header-card">
              <h2 class="title title-card">Regulamento</h2>
              <p><strong>“GAMEFICAÇÃO PROGRAMA MODELO RESPONSÁVEL”</strong></p>
            </div>
            <div class="body-card">
              <div class="rules-content">
                <ul class="main-rules">
                  <!-- item 1 -->
                  <li class="main-items">
                    <span>1.</span> A presente campanha (“<b>CAMPANHA</b>”) é
                    instituída pelas entidades do mesmo grupo empresarial abaixo
                    listadas, sendo conjuntamente tratadas como
                    <b>PROMOTORA</b>: <br /><br />

                    <div>
                      <b>CORTEVA AGRISCIENCE DO BRASIL LTDA</b>., com sede na
                      Alameda Itapecuru nº 506, Alphaville, no Município de
                      Barueri, Estado de São Paulo, inscrita no CNPJ/MF sob o
                      nº. 61.064.929/0001-79, nesse ato devidamente representada
                      na forma do disposto em seu Estatuto Social, doravante
                      denominada <span class="underscored">“Corteva”</span>.
                    </div>
                  </li>
                  <!-- item 2 -->
                  <li class="main-items">
                    <span>2.</span> <b>O GAME</b>. O objetivo deste game é
                    estimular os participantes elegíveis da PROMOTORA a testar
                    os conhecimentos adquiridos ao longo da campanha
                    educacional, sem fins promocionais ou de divulgação de
                    produto, do Programa Modelo Responsável que trata de boas
                    práticas agrícolas.
                    <ul>
                      <li class="sub-items">
                        <span>2.1.</span>São elegíveis para a pontuação todos os
                        funcionários, estagiários e representantes comerciais da
                        PROMOTORA que tenham um dos e-mails abaixo
                        <ul>
                          <li class="sub-sub-items">
                            <span>2.1.1.</span>@corteva.com
                          </li>
                          <li class="sub-sub-items">
                            <span>2.1.2.</span>@repcorteva.com
                          </li>
                          <li class="sub-sub-items">
                            <span>2.1.3.</span>@repbrevant.com
                          </li>
                          <li class="sub-sub-items">
                            <span>2.1.4.</span>@reppioneer.com
                          </li>
                          <li class="sub-sub-items">
                            <span>2.1.5.</span>@granular.ag
                          </li>
                        </ul>
                      </li>
                      <li class="sub-items">
                        <span>2.2.</span>Não são elegíveis para pontuação desta
                        campanha: pessoas que possam ser consideradas “público
                        externo”, ou seja, que não tem vínculo de trabalho com a
                        Corteva ou suas empresas subsidiárias, como clientes e
                        parceiros.
                      </li>
                    </ul>
                  </li>
                  <!-- item 3 -->
                  <li class="main-items">
                    <span>3.</span> <b>PERÍODO DE PARTICIPAÇÃO:</b> De
                    29/11/2021 a 06/12/2021, meia noite. <br />
                    <b>PERÍODO DE APURAÇÃO:</b> De 07/12/2021.
                    <br />
                    <b>DATA PARA DISPONIBILIZAÇÃO DO RESULTADO:</b>
                    08/12/2021. <br /><br />
                    <div>
                      <b>COMO FUNCIONA</b>. Durante o
                      <b>Período de Participação</b>, as pessoas elegíveis para
                      participação ("Participante") que desejar participar,
                      deverá acessar a página
                      <a
                        href="https://modeloresponsavel.com.br/"
                        target="_blank"
                        rel="noopener noreferrer"
                        >https://modeloresponsavel.com.br/</a
                      >
                      (“<b>Game</b>”) e, seguir o passo a passo de cadastro e
                      participar.
                    </div>

                    <ul class="roman-sub-items">
                      <li class="sub-items">
                        <span>i.</span>
                        Cada <b>Funcionário</b> terá sua pontuação salva no ranking na
                        página do game. O <b>Funcionário poderá jogar uma única vez</b>
                        e não conseguirá acessar o game novamente.
                      </li>
                      <li class="sub-items">
                        <span>ii.</span>
                        No final do jogo o funcionário terá a chance de ganhar
                        pontos girando uma roleta virtual.
                      </li>
                      <li class="sub-items">
                        <span>iii.</span>
                        As perguntas terão pontuação pré-definida.
                      </li>
                      <li class="sub-items">
                        <span>iv.</span>
                        As perguntas terão tempo pré-definido para que o
                        Funcionário possa escolher uma resposta, sendo de 45
                        segundos para cada pergunta.
                      </li>
                      <li class="sub-items">
                        <span>v.</span>
                        O game será composto por 10 perguntas.
                      </li>
                    </ul>
                    <ul>
                      <li class="sub-items">
                        <span>3.1.</span>A premiação obedecerá a pontuação
                        demonstrada na <b>Tabela 1</b>, respeitando os conceitos
                        mencionados no item 2.1. Caso os ganhadores fiquem
                        empatados, o fator de desempate será baseado no tempo
                        que o jogo foi concluído. Dessa forma, quem fizer em
                        menos tempo a pontuação equivalente, será o premiado.
                      </li>
                    </ul>
                    <!-- tabela de info do jogo -->
                    <div class="tables">
                      <p><b>Tabela 1:</b></p>
                      <!-- ou imagem ou tabela de fato -->
                      <div class="table-wrap">
                        <table>
                          <thead>
                            <tr>
                              <th>Requisitos</th>
                              <th>A Regra</th>
                              <th>Pontuação</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td><p>Jogar o Game</p></td>
                              <td>
                                <p>
                                  Ficar em primeiro, segundo ou terceiro lugar
                                  no ranking devido a pontuação. O tempo em que
                                  o game for realizado, será utilizado em caso
                                  de empate entre os primeiros colocados.
                                </p>
                                <p>
                                  Caso os ganhadores sejam RCs, eles ganharão
                                  prêmios físicos, enviados à sua casa.
                                </p>
                              </td>
                              <td>
                                <p>1.500 pontos Plataforma Shine</p>
                              </td>
                            </tr>
                            <tr>
                              <td><p>Jogar o Game</p></td>
                              <td>
                                <p>
                                  Ficar em quarto ou quinto lugar no ranking
                                  devido a pontuação 
                                </p>
                                <p>
                                  Caso os ganhadores sejam
                                  RCs, eles ganharão prêmios em valor compatível
                                  a pontuação ($ 30)
                                </p>
                              </td>
                              <td>
                                <p>600 pontos Plataforma Shine</p>
                              </td>
                            </tr>
                            <tr>
                              <td><p>Jogar o Game</p></td>
                              <td>
                                <p>
                                  Os demais jogadores, participarão de um
                                  sorteio online, onde haverão 05 sorteados. O
                                  sorteio será feito através da plataforma
                                  online Sorteador (www.sorteador.com.br). Caso
                                  os sorteados sejam RCs, eles ganharão prêmios
                                  físicos enviados à sua casa
                                </p>
                              </td>
                              <td>
                                <p>600 pontos Plataforma Shine</p>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <ul>
                      <li class="sub-items">
                        <span>3.2.</span>Os
                        <b>Pontos da Plataforma Shine</b> serão creditados para
                        o <b>Funcionário</b> titular até o dia 17/12/2021 <b>(“Data
                        de Disponibilização”)</b>.

                        <ul>
                          <li class="sub-sub-items">
                            <span>3.2.1.</span>Os Pontos concedidos por meio
                            desta campanha poderão ser visualizados pelo
                            <b>Funcionário</b> por meio da Plataforma Shine.
                          </li>
                          <li class="sub-sub-items">
                            <span>3.2.2.</span>As condições de participação e
                            premiação descritas neste regulamento referem-se
                            única e exclusivamente a esta campanha.
                          </li>
                          <li class="sub-sub-items">
                            <span>3.2.3.</span>O Funcionário somente receberá os
                            Pontos se estiver entre os 10 primeiros colocados ou
                            se for um dos sorteados, devendo também serem
                            observadas as demais regras da Plataforma de Pontos
                            Shine.
                          </li>
                          <li class="sub-sub-items">
                            <span>3.2.4.</span>Os Pontos recebidos pelos
                            colaboradores (exceto representantes comerciais)
                            obedecerão às regras de utilização e ao prazo de
                            expiração definidos na plataforma Shine.
                          </li>
                          <li class="sub-sub-items">
                            <span>3.2.5.</span>Os Pontos são pessoais,
                            intransferíveis e não serão convertidos em dinheiro.
                          </li>
                        </ul>
                      </li>
                      <li class="sub-items">
                        <span>3.3.</span>Para aqueles que não possuem acesso à
                        plataforma Shine, foram definidos prêmios físicos que
                        serão entregues aos contemplados.
                        <ul>
                          <li class="sub-sub-items">
                            <span>3.3.1.</span>Os premiados com itens físicos
                            receberão o contato da área promotora e para
                            confirmação de endereço e posterior envio dos
                            prêmios.
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <!-- item 4 -->
                  <li class="main-items">
                    <span>4.</span><b>REGRAS E EXCEÇÕES</b>. Para poder
                    participar deverão ser observadas as condições a seguir.

                    <ul>
                      <li class="sub-items">
                        <span>4.1.</span>A participação nesta CAMPANHA é
                        voluntária. A participação na presente CAMPANHA ficará
                        condicionada, ainda, à leitura e consequente aceite das
                        regras deste instrumento.
                      </li>
                      <li class="sub-items">
                        <span>4.2.</span>Os prêmios somente serão concedidos aos
                        participantes da presente CAMPANHA após a apuração dos
                        resultados pela PROMOTORA, considerando-se, para tanto,
                        o critério de elegibilidade previamente estabelecido na
                        presente CAMPANHA.
                      </li>
                      <!-- <li class="sub-items">
                        <span>4.3.</span> <span class="underscored">Não</span> serão válidas as participações:
                      </li> -->
                    </ul>
                  </li>
                  <!-- item 5 -->
                  <li class="main-items">
                    <span>5.</span><b>DISPOSIÇÕES GERAIS. </b>
                    <ul>
                      <li class="sub-items">
                        <span>5.1.</span>Este regulamento estará disponível ao
                        acessar o game, e deverá ser aceito para continuar
                        jogando e participar de eventuais premiações.
                      </li>
                      <li class="sub-items">
                        <span>5.2.</span>A <b>Corteva</b> não se responsabilizará por
                        eventuais situações que, estando fora do seu controle,
                        possam prejudicar ou impedir o <b>Funcionário</b> de realizar
                        sua participação, tais como a impossibilidade do
                        <b>Funcionário</b> se conectar à internet ou oscilações,
                        falhas, interrupções e indisponibilidades da rede sem
                        fio, da internet, dos serviços prestados pelas
                        operadoras de telefonia móvel.
                      </li>
                      <li class="sub-items">
                        <span>5.3.</span>O <b>Funcionário</b> é o único responsável
                        pelas informações e dados informados no acesso ao game,
                        responsabilidade que abrange, também, a precisão e a
                        veracidade de tais informações e dados. A <b>Corteva</b> está
                        isenta de quaisquer responsabilidades em caso de
                        incorreção ou não veracidade das informações e dados
                        inseridos ou fornecidos pelo <b>Funcionário</b>.
                      </li>
                      <li class="sub-items">
                        <span>5.4.</span>Ao participar desta campanha, os
                        <b>Funcionários</b> estarão, automaticamente, concordando e
                        autorizando o <b>Corteva</b> a:

                        <ul>
                          <li class="sub-sub-items">
                            <span>5.4.1.</span>Utilizar os dados pessoais
                            fornecidos no cadastro, sua imagem e voz e demais
                            informações que porventura lhe sejam solicitadas,
                            exclusivamente e de forma gratuita, para os fins
                            necessários à adequada realização, divulgação e
                            conclusão desta campanha, podendo estes dados serem
                            expostos, publicados, reproduzidos, armazenados e/ou
                            de qualquer outra forma usados, pela <b>Corteva</b> pelo
                            prazo de 3 meses, contados do término do <b>Período de
                            Participação</b>, em quaisquer mídias (inclusive mídia
                            impressa ou eletrônica, CD, DVD, revistas, jornais,
                            websites, redes sociais, TV aberta ou fechada e
                            rádios). A Corteva estará responsável,
                            limitadamente, quanto ao período de disparo e
                            publicação do conteúdo, excluindo-se, portanto, de
                            sua responsabilidade, eventuais difusões espontâneas
                            de material que contenham as informações acima
                            mencionadas.
                          </li>
                          <li class="sub-sub-items">
                            <span>5.4.2.</span>Suspender, cancelar e/ou excluir
                            da campanha o <b>Funcionário</b> que seja identificado
                            fraudando ou burlando e/ou tentando fraudar ou
                            burlar as regras da campanha ou, ainda, que forneça
                            dados falsos, perdendo o direito aos Pontos obtidos
                            nesta campanha, ou, por fim, que descumpra qualquer
                            cláusula do presente instrumento.
                          </li>
                          <li class="sub-sub-items">
                            <span>5.4.3.</span>Alterar as disposições deste
                            regulamento, mediante comunicação prévia aos
                            <b>Funcionários</b> com 10 dias de antecedência do início
                            da vigência das novas disposições.
                          </li>
                        </ul>
                      </li>
                      <li class="sub-items">
                        <span>5.5.</span>A CAMPANHA é uma liberalidade da
                        PROMOTORA para com seus participantes, razão pela qual
                        se reserva o direito de modificá-la ou cancelá-la, a
                        qualquer tempo, total ou parcialmente, de acordo com o
                        seu livre e exclusivo critério, sem qualquer penalidade
                        e sem que gere qualquer direito ao PARTICIPANTE.
                        Eventuais alterações ou o cancelamento serão comunicados
                        aos participantes pelos mesmos meios adotados na
                        divulgação desta CAMPANHA.
                      </li>
                      <li class="sub-items">
                        <span>5.6.</span>A contestação dos resultados da presente
                        CAMPANHA será aceita e tratada dentro de um prazo máximo
                        de 5 dias corridos.
                      </li>
                      <li class="sub-items">
                        <span>5.7.</span>A CAMPANHA não está sujeita à Lei
                        Federal nº 5.768/71 e aos atos normativos que a
                        regulamentam.
                      </li>
                      <li class="sub-items">
                        <span>5.8.</span>As dúvidas e casos omissos serão
                        resolvidos pela Corteva, por decisão soberana e
                        irrecorrível. Em caso de dúvidas e/ou questionamentos
                        relacionados a esta campanha, consulte
                        <a href="mailto:http://bpa@corteva.com">bpa@corteva.com</a>. Em
                        caso de problemas com acesso, a plataforma possui um
                        Fale Conosco para soluções.
                      </li>
                    </ul>
                  </li>
                </ul>

                <!-- box footer -->
                <div class="box-footer">
                  <div class="informations">
                    <p><strong>CORTEVA AGRISCIENCE DO BRASIL LTDA</strong></p>
                    <p>
                      Alameda Itapecuru, 506, 2º Andar, Bloco B, Parte-1, CEP
                      06.454-080, Distrito Alphaville, Barueri
                    </p>
                    <p>CEP 06.454-080 - São Paulo/SP</p>
                    <p>CNPJ nº 47.180.625/0001-46</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- modal fale conosco -->
      <div class="modal modal-contact-us">
        <span class="overlay"></span>
        <span class="fix"></span>
        <div class="inside-modal">
          <!-- modal enviar mensagem -->
          <div class="card card-send-message-feedback">
            <button class="buttons close-card-modal close-modal"></button>
            <div class="header-card">
              <h2 class="title title-card">Relate aqui o seu problema</h2>
            </div>
            <div class="form-send-message">
              <form id="form-contact-us">
                <div class="input-group">
                  <label for="email">Digite seu email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    class="focused"
                    placeholder="funcionário@servidor.com.br"
                  />
                </div>
                <div class="input-group box-message">
                  <label for="message">Mensagem</label>
                  <textarea
                    name="mensagem"
                    id="message"
                    cols="30"
                    rows="10"
                    placeholder="A pergunta da pagina ( ) não está funcionando motivos.... e por isso peço que solucione esse problema."
                    class="focused"
                  ></textarea>
                </div>
                <div class="buttons">
                  <ul>
                    <li>
                      <button type="submit" class="btn btn-confirm">
                        <span> Enviar </span>
                      </button>
                    </li>
                  </ul>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <!-- modal de mensagem enviada -->
      <div class="modal modal-send-message-success">
        <span class="overlay"></span>
        <span class="fix"></span>
        <div class="inside-modal">
          <div class="card card-message-feedback">
            <button class="buttons close-card-modal close-modal"></button>
            <div class="header-card">
              <h2 class="title title-card">Mensagem enviada</h2>
            </div>
            <div class="body-message">
              <p>
                Sua mensagem foi enviada com sucesso, aguarde nossa resposta no
                E-mail.
              </p>
              <p>Obrigado pelo feedback!</p>
            </div>
          </div>
        </div>
      </div>
      <!-- modal ranking -->
      <div class="modal modal-ranking">
        <span class="overlay"></span>
        <span class="fix"></span>
        <div class="inside-modal">
          <div class="card card-ranking">
            <button class="buttons close-card-modal close-modal"></button>
            <div class="header-card">
              <h2 class="title title-card title-ranked">
                <span>Ranking</span>
              </h2>
            </div>
            <div class="body-card">
              <div class="rank">
                <ul></ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <script src="<?php print CDN_URL; ?>/js/scripts-min.js?<?php print dechex(crc32(file_get_contents('js/scripts-min.js'))); ?>"></script>
  </body>
</html>
