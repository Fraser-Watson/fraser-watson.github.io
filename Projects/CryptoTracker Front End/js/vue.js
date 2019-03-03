
const CRYPTOCOMPARE_API_URI = "https://min-api.cryptocompare.com";

const API_PARAMETERS = "/data/pricemultifull?fsyms=BTC,ETH,LTC,XRP,OMG,EOS,NEO,DASH,XMR&tsyms=USD&api_key=0bf19dd98d2e5dba83157ffb931d95419799e96b6edf0a1f30a6f934f3a72469"

const UPDATE_INTERVAL = 5 * 1000;

let app = new Vue({
  el: "#app",
  mixins: [Vue2Filters.mixin],
  data: {
    coins: {},
    coinData: {}
  },
  methods: {

    getCoins: function() {
      let self = this;

      axios.get(CRYPTOCOMPARE_API_URI + API_PARAMETERS)
        .then((resp) => {
          this.coins = resp.data;
        })
        .catch((err) => {
          console.error(err);
        });
    },

    getColor: (num) => {
      return num > 0 ? "color:#78C31D;" : "color:red;";
    },

    getColorUpdate: (updated) => {
      return updated === "Just now" ? "color:#78C31D;" : "color: #ECB600;";
    },
  },

  created: function () {
    this.getCoins();
  }
});

setInterval(() => {
  app.getCoins();
}, UPDATE_INTERVAL);


var popupBtc = document.getElementById("popupBtc");
var btnBtc = document.getElementById("btnBtc");
var closeBtnBtc = document.getElementById("closeBtnBtc");
btnBtc.addEventListener('click', openPopupBtc);
closeBtnBtc.addEventListener('click', closePopupBtc);
window.addEventListener('click', clickOutsideBtc);
function openPopupBtc() {
    popupBtc.style.display = 'flex';
}
function closePopupBtc() {
    popupBtc.style.display = 'none';
}
function clickOutsideBtc(e) {
    if (e.target == popupBtc) {
        popupBtc.style.display = 'none';
    }
}


var popupEth = document.getElementById("popupEth");
var btnEth = document.getElementById("btnEth");
var closeBtnEth = document.getElementById("closeBtnEth");
btnEth.addEventListener('click', openPopupEth);
closeBtnEth.addEventListener('click', closePopupEth);
window.addEventListener('click', clickOutsideEth);
function openPopupEth() {
    popupEth.style.display = 'flex';
}
function closePopupEth() {
    popupEth.style.display = 'none';
}
function clickOutsideEth(e) {
    if (e.target == popupEth) {
        popupEth.style.display = 'none';
    }
}

var popupLtc = document.getElementById("popupLtc");
var btnLtc = document.getElementById("btnLtc");
var closeBtnLtc = document.getElementById("closeBtnLtc");
btnLtc.addEventListener('click', openPopupLtc);
closeBtnLtc.addEventListener('click', closePopupLtc);
window.addEventListener('click', clickOutsideLtc);
function openPopupLtc() {
    popupLtc.style.display = 'flex';
}
function closePopupLtc() {
    popupLtc.style.display = 'none';
}
function clickOutsideLtc(e) {
    if (e.target == popupLtc) {
        popupLtc.style.display = 'none';
    }
}

var popupXrp = document.getElementById("popupXrp");
var btnXrp = document.getElementById("btnXrp");
var closeBtnXrp = document.getElementById("closeBtnXrp");
btnXrp.addEventListener('click', openPopupXrp);
closeBtnXrp.addEventListener('click', closePopupXrp);
window.addEventListener('click', clickOutsideXrp);
function openPopupXrp() {
    popupXrp.style.display = 'flex';
}
function closePopupXrp() {
    popupXrp.style.display = 'none';
}
function clickOutsideXrp(e) {
    if (e.target == popupXrp) {
        popupXrp.style.display = 'none';
    }
}

var popupOmg = document.getElementById("popupOmg");
var btnOmg = document.getElementById("btnOmg");
var closeBtnOmg = document.getElementById("closeBtnOmg");
btnOmg.addEventListener('click', openPopupOmg);
closeBtnOmg.addEventListener('click', closePopupOmg);
window.addEventListener('click', clickOutsideOmg);
function openPopupOmg() {
    popupOmg.style.display = 'flex';
}
function closePopupOmg() {
    popupOmg.style.display = 'none';
}
function clickOutsideOmg(e) {
    if (e.target == popupOmg) {
        popupOmg.style.display = 'none';
    }
}

var popupEos = document.getElementById("popupEos");
var btnEos = document.getElementById("btnEos");
var closeBtnEos = document.getElementById("closeBtnEos");
btnEos.addEventListener('click', openPopupEos);
closeBtnEos.addEventListener('click', closePopupEos);
window.addEventListener('click', clickOutsideEos);
function openPopupEos() {
    popupEos.style.display = 'flex';
}
function closePopupEos() {
    popupEos.style.display = 'none';
}
function clickOutsideEos(e) {
    if (e.target == popupEos) {
        popupEos.style.display = 'none';
    }
}

var popupNeo = document.getElementById("popupNeo");
var btnNeo = document.getElementById("btnNeo");
var closeBtnNeo = document.getElementById("closeBtnNeo");
btnNeo.addEventListener('click', openPopupNeo);
closeBtnNeo.addEventListener('click', closePopupNeo);
window.addEventListener('click', clickOutsideNeo);
function openPopupNeo() {
    popupNeo.style.display = 'flex';
}
function closePopupNeo() {
    popupNeo.style.display = 'none';
}
function clickOutsideNeo(e) {
    if (e.target == popupNeo) {
        popupNeo.style.display = 'none';
    }
}

var popupDash = document.getElementById("popupDash");
var btnDash = document.getElementById("btnDash");
var closeBtnDash = document.getElementById("closeBtnDash");
btnDash.addEventListener('click', openPopupDash);
closeBtnDash.addEventListener('click', closePopupDash);
window.addEventListener('click', clickOutsideDash);
function openPopupDash() {
    popupDash.style.display = 'flex';
}
function closePopupDash() {
    popupDash.style.display = 'none';
}
function clickOutsideDash(e) {
    if (e.target == popupDash) {
        popupDash.style.display = 'none';
    }
}

var popupXmr = document.getElementById("popupXmr");
var btnXmr = document.getElementById("btnXmr");
var closeBtnXmr = document.getElementById("closeBtnXmr");
btnXmr.addEventListener('click', openPopupXmr);
closeBtnXmr.addEventListener('click', closePopupXmr);
window.addEventListener('click', clickOutsideXmr);
function openPopupXmr() {
    popupXmr.style.display = 'flex';
}
function closePopupXmr() {
    popupXmr.style.display = 'none';
}
function clickOutsideXmr(e) {
    if (e.target == popupXmr) {
        popupXmr.style.display = 'none';
    }
}