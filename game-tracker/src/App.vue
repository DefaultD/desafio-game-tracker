<template class="hello">
  <div>
    <navbar class="mb-5" alt="Logo Game Tracker" href="#" />
    <gameTracker></gameTracker>
    <div class="footer">
      <div class="container py-5">
        <div class="pb-4"><img src="./assets/pwa/icon-32x32.png" height="32px" width="32px" alt="logo" /></div>
        <div class="text-center">
          <p class="col direitos align-self-center">© 2021, Game Tracker Inc. Todos os direitos reservados. Nulla
            facilisi. Etiam
            sagittis congue
            tempor.
            Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse eu
            velit
            et ante luctus egestas. Aenean sed nisi tellus. Duis non ornare libero. Quisque suscipit maximus nisi, in
            gravida
            felis. Cras ornare mauris ac nisi congue, ut condimentum sem tincidunt. Phasellus semper tellus malesuada
            turpis
            gravida cursus. Duis nec eleifend nunc, vitae finibus elit. Aliquam eget diam vitae purus suscipit viverra.
          </p>
        </div>
        <div class="text-center text-lg-start">
          <ul class="list-inline mb-0 pb-2">
            <li class="d-block d-lg-inline-block list-inline-item"><a href="#"
                class="px-2 footerlista text-decoration-none">Termos de
                Serviço</a></li>
            <li class="d-block d-lg-inline-block list-inline-item"><a href="#"
                class="px-2 footerlista text-decoration-none">Política de
                Privacidade</a></li>
            <li class="d-block d-lg-inline-block list-inline-item"><a
                href="https://github.com/StefaniniInspiring/desafio"
                class="px-2 footerlista text-decoration-none">Trabalhe
                conosco</a></li>
            <li class="d-block d-lg-inline-block list-inline-item"><a
                href="https://www.linkedin.com/in/kaue-sobral-a55873214/"
                class="px-2 footerlista text-decoration-none">Contato</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import gameTracker from './views/game-tracker.vue'
import navbar from "./components/navBar.vue"
export default {
  name: 'App',
  components: {
    gameTracker,
    navbar
  }
}
</script>

<style>
.footer {
  Width: 100%;
  background: #0B1641;
  bottom: 0%;
}

.footerlista {
  color: #FFFFFF;
  font-family: Roboto;
  font-weight: 700;
  Size: 14px;
}

.direitos {
  color: #FFFFFF;
  font-family: Roboto;
  font-size: 14px;
  font-weight: 300;
  line-height: 25px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
