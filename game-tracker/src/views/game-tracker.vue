<template>
    <div class="container">
      <div class="text-center text-lg-start">
        <h2 class="text-light">Ofertas</h2>
      </div>
  
      <div class="py-4 row justify-content-start align-items-end">
        <div class="col-6 col-lg-4 order-1 order-lg-1">
          <div class="w-100 inputSearch boxShadow input-group">
            <span class="background-azul-escuro border-0 input-group-text" @click="carregarJogos" id="basic-addon1">
              <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <g>
                  <path style="fill: #DADADA;" fill-rule="evenodd" clip-rule="evenodd"
                    d="M14.9649 14.255H15.7549L20.7449 19.255L19.2549 20.745L14.2549 15.755V14.965L13.9849 14.685C12.8449 15.665 11.3649 16.255 9.75488 16.255C6.16488 16.255 3.25488 13.345 3.25488 9.755C3.25488 6.165 6.16488 3.255 9.75488 3.255C13.3449 3.255 16.2549 6.165 16.2549 9.755C16.2549 11.365 15.6649 12.845 14.6849 13.985L14.9649 14.255ZM5.25488 9.755C5.25488 12.245 7.26488 14.255 9.75488 14.255C12.2449 14.255 14.2549 12.245 14.2549 9.755C14.2549 7.265 12.2449 5.255 9.75488 5.255C7.26488 5.255 5.25488 7.265 5.25488 9.755Z" />
                </g>
              </svg></span>
            <input @keyup="carregarJogos" type="text" v-model="pesquisarJogo"
              class="background-azul-escuro text-light border-0 form-control" placeholder="Procurar" aria-label="Procurar"
              aria-describedby="basic-addon1">
          </div>
        </div>
        <div class="col-lg-3 order-3 order-lg-2"></div>
        <div class="col-6 col-lg-5 order-2 order-lg-3 justify-content-end">
          <div class="row align-items-center">
            <div class="col-lg-7">
              <div class="align-self-center mx-3 text-lg-end">
                <p class="text-light mb-lg-0">
                  Ordernar por:
                </p>
              </div>
            </div>
            <div class="col-lg-5">
              <div class="select">
                <select v-model="selected" class="form-select text-light border-0 select background-azul-escuro boxShadow"
                  aria-label="Default select example">
                  <option class="option" :key="item" v-for="item of items">{{ item.name }}</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="listaDeOfertas.length > 0" class="row">
        <div :key="item" v-for="item in listaDeOfertas" class="my-3 col-lg-4 rounded border-radius-8px">
          <div class="card h-100 border-0 w-100 background-azul-escuro">
            <img
              :src="item.steamAppID ? 'https://cdn.akamai.steamstatic.com/steam/apps/' + item.steamAppID + '/header.jpg' : require('./../assets/sem-imagem.jpg') "
              class="img-fluid w-100 border-radius-top-8px" alt="imagem do jogo">
            <div class="card-body w-100">
              <h5 class="d-flex text-light justify-content-start mb-1 card-title"
                style="height: 28px; text-overflow: ellipsis; overflow: hidden; white-space: nowrap;">{{item.title}}
              </h5>
              <div class="d-flex mb-3 border-radius-bottom-8px">
                <button class="me-auto btn text-light detalhes">DETALHES</button>
                <div class="pe-2">
                  <div class="text-light text-muted col align-self-end font-size-12px"><del>{{`$`
                  +item.normalPrice}}</del></div>
                  <div class="text-light" style="font-size: 16px;">{{`$` +item.salePrice}}</div>
                </div>
                <button disabled class="gratis text-light">{{item.desconto}}</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-else>
        <div class="col align-self-center">
          <p class="text-light">Nenhum Item encontrado!</p>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-4 offset-lg-4">
          <div class="p-5" v-if="res.length != 0 && !pesquisarJogo">
            <button @click="carregarMais"
              class="text-muted btn w-100 background-azul-escuro align-self-center text-light">Carregar mais... </button>
          </div>
        </div>
      </div>
  
    </div>
  </template>
  
  <script>
  import axios from "axios";
  export default {
    name: "gameTracker",
    data() {
      return {
        selected: "% de Desconto",
        listaDeOfertas: [],
        pesquisarJogo: '',
        porcentagemDesconto: ``,
        items: [
          { name: `% de Desconto`, value: 1 },
          { name: `Maior preço`, value: 2 },
          { name: `Menor preço`, value: 3 },
          { name: `Titulo`, value: 4 },
        ],
        pageSize: 12,
        pageNumber: 0,
        res: [],
      };
    },
  
    async mounted() {
      await this.load()
    },
  
    watch: {
      selected(_) {
        this.selecionarFiltro(_)
      }
    },
  
    methods: {
      async getOfertas() {
        let res = await axios
          .get(`https://www.cheapshark.com/api/1.0/deals?pageNumber=${this.pageNumber}&pageSize=12&storeID=1&title=${this.pesquisarJogo}&onSale=1&`)
          .then((res) => {
            return res.data;
          })
          .catch((error) => {
            console.log(error);
          });
  
        return res
      },
  
      async searchOfertas() {
        let res = await axios
          .get(`https://www.cheapshark.com/api/1.0/deals?pageNumber=${0}&pageSize=12&storeID=1&title=${this.pesquisarJogo}&onSale=1&`)
          .then((res) => {
            return res.data;
          })
          .catch((error) => {
            console.log(error);
          });
  
        return res
      },
  
      async carregarMais() {
        this.pageNumber += 1
        this.res = await this.getOfertas()
  
        this.listaDeOfertas = this.listaDeOfertas.concat(this.res)
        this.calcularPorcentagem()
        this.selecionarFiltro(this.selected)
      },
  
      async load() {
        this.carregarJogos()
      },
  
      async carregarJogos() {
        this.res = await this.searchOfertas()
  
        console.log(this.res)
        this.listaDeOfertas =  this.res
        this.calcularPorcentagem()
        this.selecionarFiltro(this.selected)
      },
      selecionarFiltro(valor) {
        if (valor == `Titulo`) {
          this.listaDeOfertas.sort(function (x, y) {
            let a = x.title.toUpperCase(),
              b = y.title.toUpperCase();
            return a == b ? 0 : a > b ? 1 : -1
          })
        } else if (valor == 'Menor preço') {
          this.listaDeOfertas.sort(function (x, y) {
            let a = parseFloat(x.salePrice)
            let b = parseFloat(y.salePrice)
  
            return a - b
          })
        } else if (valor == `Maior preço`) {
          this.listaDeOfertas.sort(function (x, y) {
            let a = parseFloat(x.salePrice)
            let b = parseFloat(y.salePrice)
  
            return b - a
          })
        } else if (valor == `% de Desconto`) {
          this.listaDeOfertas.sort(function (x, y) {
  
            let a = parseFloat(x.desconto)
            let b = parseFloat(y.desconto)
  
            return a - b
          })
        }
      },
      async calcularPorcentagem() {
        for (let i of this.listaDeOfertas) {
          let result = ((parseFloat(i.salePrice) / parseFloat(i.normalPrice)) * 100) - 100
          let desconto = result.toFixed(0).toString()
  
          if (desconto == `-100`) {
            i.desconto = `Gratis`
          } else {
            i.desconto = desconto + `%`
          }
        }
      }
    },
    props: {
      msg: String
    },
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  h2 {
    font-size: 36px;
    font-family: roboto;
  }
  
  
  .container{
    min-height: 587px;
  }
  .select {
    height: 50px;
    border-radius: 8px;
    background-image: url(./../assets/baixo.svg);
    fill: #ffffff;
  }
  
  .btn {
    height: 50px;
    border-radius: 8px;
  }
  
  .card-body {
    height: 104px;
    border-radius: 0 0 8px 8px;
    background: #0B1641;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
  
  .font-size-12px {
    font-size: 12px
  }
  
  .option {
    color: #ffffff;
    font-family: Roboto;
    font-size: 18px;
    font-weight: 100;
    line-height: 21px;
    letter-spacing: 0em;
    text-align: left;
  
  }
  
  .detalhes {
    background-color: #C70160;
    border-radius: 8px;
    height: 39px;
    font-size: 18px
  }
  
  .border-radius-top-8px {
    border-radius: 8px 8px 0 0;
  }
  
  .border-radius-bottom-8px {
    border-radius: 0 0 8px 8px;
  }
  
  .card-body {
    background-color: #0B1641;
    ;
  }
  
  .gratis {
    background-color: #16857B;
    width: 84px;
    border-radius: 8px;
    height: 39px
  }
  
  .boxShadow {
    box-shadow: 0px 4px 4px rgb(0 0 0 / 25%);
  }
  
  .background-azul-escuro {
    background-color: #0B1641;
  }
  
  .background-azul-escuro {
    background-color: #0B1641;
  }
  
  .inputSearch {
    border: none;
    background-color: #0B1641;
    height: 50px;
    width: 380px;
    border-radius: 8px;
  }
  </style>
  