const CRYPTOCOMPARE_API_URI = "https://min-api.cryptocompare.com";

const API_PARAMETERS =
  "/data/pricemultifull?fsyms=BTC,ETH,LTC,XRP,OMG,EOS,NEO,DASH,XMR&tsyms=USD&api_key=0bf19dd98d2e5dba83157ffb931d95419799e96b6edf0a1f30a6f934f3a72469";

const API_NEWS_PARAMETERS = "/data/v2/news/?categories=?";

const API_NEWS_MINING_PARAMETERS =
  API_NEWS_PARAMETERS +
  "cryptocurrency mining,Bitcoin,Mining,Ledger,Wallet,Attack,Antminer,Bitmain&excludeCategories=eth,ethereum,ltc,litecoin,ripple,xrp,monero,xmr";

const API_NEWS_BTC_PARAMETERS =
  API_NEWS_PARAMETERS +
  "Bitcoin,Ledger&excludeCategories=eth,ethereum,ltc,litecoin,ripple,xrp,monero,xmr,neo,eos,dash,omg";

const API_NEWS_ETH_PARAMETERS =
  API_NEWS_PARAMETERS +
  "eth,ethereum,ledger&excludeCategories=bitcoin,btc,xrp,ltc,monero,xmr,neo,eos,dash,omg";

const API_NEWS_LTC_PARAMETERS =
  API_NEWS_PARAMETERS +
  "ltc,litecoin,ledger,mining&excludeCategories=bitcoin,btc,xrp,monero,xmr,ethereum,eth,blockchain,china,neo";

const API_NEWS_OTHER_PARAMETERS =
  API_NEWS_PARAMETERS +
  "neo,omg,eos,monero,xmr,&excludeCategories=bitcoin,btc,xrp,ethereum,eth,litecoin,ltc,ripple";

const API_NEWS_XRP_PARAMETERS =
  API_NEWS_PARAMETERS +
  "xrp,ripple&excludeCategories=bitcoin,btc,monero,xmr,ethereum,eth,blockchain,china,neo";

const UPDATE_INTERVAL = 10 * 1000;

Vue.component("line-chart", {
  extends: VueChartJs.Line,
  data: () => ({
    chardata: {
      datacollection: {
        labels: [
          "11 days",
          "10 days",
          "9 days",
          "8 days",
          "7 days",
          "6 days",
          "5 days",
          "4 days",
          "3 days",
          "2 days",
          "Today"
        ],
        datasets: [
          {
            label: "Value",
            borderColor: "#F7931A",
            pointBackgroundColor: "#F7931A",
            borderWidth: 1,
            pointBorderColor: "white",
            backgroundColor: "#EBEBEB",
            data: [
              3298.19,
              3495.19,
              3614.21,
              3844.21,
              4038.21,
              4753.21,
              4931.21,
              4854.21,
              5032.43,
              5239.22,
              5199.32
            ]
          }
        ]
      }
    },
    options: {
      responsive: true,
      maintainAspectRatio: false
    }
  }),

  mounted() {
    this.gradient = this.$refs.canvas
      .getContext("2d")
      .createLinearGradient(0, 0, 0, 450);
    this.gradient.addColorStop(0, "rgba(86, 192, 250, 0.9)");
    this.gradient.addColorStop(0.5, "rgba(86, 192, 250, 0.5)");
    this.gradient.addColorStop(1, "rgba(86, 192, 250, 0.2)");
  }
});

Vue.component("line-chart-2", {
  extends: VueChartJs.Line,
  mounted() {
    this.gradient2 = this.$refs.canvas
      .getContext("2d")
      .createLinearGradient(0, 0, 0, 450);
    this.gradient2.addColorStop(0, "rgba(86, 192, 250, 0.9)");
    this.gradient2.addColorStop(0.5, "rgba(86, 192, 250, 0.5)");
    this.gradient2.addColorStop(1, "rgba(86, 192, 250, 0.2)");

    this.renderChart(
      {
        labels: [
          "November",
          "December",
          "January",
          "February",
          "March",
          "April",
          "May"
        ],
        datasets: [
          {
            label: "Portfolio Value",
            borderColor: "#05CBE1",
            pointBackgroundColor: "white",
            pointBorderColor: "white",
            borderWidth: 1,
            backgroundColor: this.gradient2,
            data: [440, 302, 356, 505, 385, 489, 683]
          }
        ]
      },
      { responsive: true, maintainAspectRatio: false }
    );
  }
});

let app = new Vue({
  el: "#app",
  mixins: [Vue2Filters.mixin],
  data: {
    coins: {},
    coinData: {},
    n_btc: {},
    n_eth: {},
    n_ltc: {},
    n_xrp: {},
    n_mining: {},
    n_other: {}
  },
  methods: {
    getCoins: function() {
      let self = this;

      axios
        .get(CRYPTOCOMPARE_API_URI + API_PARAMETERS)
        .then(resp => {
          this.coins = resp.data;
        })
        .catch(err => {
          console.error(err);
        });
    },

    getNewsBtc: function() {
      let self = this;

      axios
        .get(CRYPTOCOMPARE_API_URI + API_NEWS_BTC_PARAMETERS)

        .then(resp => {
          this.n_btc = resp.data;
        })
        .catch(err => {
          console.error(err);
        });
    },

    getNewsEth: function() {
      let self = this;

      axios
        .get(CRYPTOCOMPARE_API_URI + API_NEWS_ETH_PARAMETERS)

        .then(resp => {
          this.n_eth = resp.data;
        })
        .catch(err => {
          console.error(err);
        });
    },

    getNewsLtc: function() {
      let self = this;

      axios
        .get(CRYPTOCOMPARE_API_URI + API_NEWS_LTC_PARAMETERS)

        .then(resp => {
          this.n_ltc = resp.data;
        })
        .catch(err => {
          console.error(err);
        });
    },

    getNewsXrp: function() {
      let self = this;

      axios
        .get(CRYPTOCOMPARE_API_URI + API_NEWS_XRP_PARAMETERS)

        .then(resp => {
          this.n_xrp = resp.data;
        })
        .catch(err => {
          console.error(err);
        });
    },

    getNewsMining: function() {
      let self = this;

      axios
        .get(CRYPTOCOMPARE_API_URI + API_NEWS_MINING_PARAMETERS)

        .then(resp => {
          this.n_mining = resp.data;
        })
        .catch(err => {
          console.error(err);
        });
    },

    getNewsOther: function() {
      let self = this;

      axios
        .get(CRYPTOCOMPARE_API_URI + API_NEWS_OTHER_PARAMETERS)

        .then(resp => {
          this.n_other = resp.data;
        })
        .catch(err => {
          console.error(err);
        });
    },

    changeData: function() {
      this.dataChart = [6, 6, 3, 5, 5, 6, 7];
    },

    getColor: num => {
      return num > 0 ? "color:#78C31D;" : "color:red;";
    },

    getColorUpdate: updated => {
      return updated === "Just now" ? "color:#78C31D;" : "color: #ECB600;";
    }
  },

  created: function() {
    this.getCoins();
    this.getNewsMining();
    this.getNewsBtc();
    this.getNewsEth();
    this.getNewsLtc();
    this.getNewsXrp();
    this.getNewsOther();
  }
});

setInterval(() => {
  app.getCoins();
}, UPDATE_INTERVAL);
