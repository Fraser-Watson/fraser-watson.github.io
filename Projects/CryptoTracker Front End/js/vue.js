/* var app = new Vue({
  el: "#app",
  data: {
    priceBtc: "",
    hrHiBtc: "",
    hrLowBtc: "",
    volBtc: "",
    mktCapBtc: ""
  },

  methods: {
    fetchBtc: function() {
      axios
        .get(
          "https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,LTC,XRP&tsyms=USD"
        )
        .then(function(response) {
          this.priceBtc = response.data.RAW.BTC.USD.PRICE;
        })
        .catch(function(error) {
          this.priceBtc = "Error";
        });
    }
  },

  created: function(){
      this.fetchBtc()
  }
})

*/


 var app = new Vue({
    el: '#app',
    data () {
      return {
        priceBtc: "",
        hrHiBtc: "",
        hrLowBtc: "",
        volBtc: "",
        mktCapBtc: "",

        priceEth: "",
        hrHiEth: "",
        hrLowEth: "",
        volEth: "",
        mktCapEth: "",

        priceLtc: "",
        hrHiLtc: "",
        hrLowLtc: "",
        volLtc: "",
        mktCapLtc: "",

        priceXrp: "",
        hrHiXrp: "",
        hrLowXrp: "",
        volXrp: "",
        mktCapXrp: "",

        priceOmg: "",
        hrHiOmg: "",
        hrLowOmg: "",
        volOmg: "",
        mktCapOmg: "",

        priceEos: "",
        hrHiEos: "",
        hrLowEos: "",
        volEos: "",
        mktCapEos: "",

        priceNeo: "",
        hrHiNeo: "",
        hrLowNeo: "",
        volNeo: "",
        mktCapNeo: "",
        
        priceDash: "",
        hrHiDash: "",
        hrLowDash: "",
        volDash: "",
        mktCapDash: "",

        priceXmr: "",
        hrHiXmr: "",
        hrLowXmr: "",
        volXmr: "",
        mktCapXmr: ""

      }
    },
    mounted () {
      axios
        .get('https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC,ETH,LTC,XRP,OMG,EOS,NEO,DASH,XMR&tsyms=USD&api_key=0bf19dd98d2e5dba83157ffb931d95419799e96b6edf0a1f30a6f934f3a72469')
        .then(response => {
            this.priceBtc = response.data.DISPLAY.BTC.USD.PRICE
            this.hrHiBtc = response.data.DISPLAY.BTC.USD.HIGH24HOUR
            this.hrLowBtc = response.data.DISPLAY.BTC.USD.LOW24HOUR
            this.volBtc = response.data.DISPLAY.BTC.USD.VOLUME24HOUR
            this.mktCapBtc = response.data.DISPLAY.BTC.USD.MKTCAP

            this.priceEth = response.data.DISPLAY.ETH.USD.PRICE
            this.hrHiEth = response.data.DISPLAY.ETH.USD.HIGH24HOUR
            this.hrLowEth = response.data.DISPLAY.ETH.USD.LOW24HOUR
            this.volEth = response.data.DISPLAY.ETH.USD.VOLUME24HOUR
            this.mktCapEth = response.data.DISPLAY.ETH.USD.MKTCAP

            this.priceLtc = response.data.DISPLAY.LTC.USD.PRICE
            this.hrHiLtc = response.data.DISPLAY.LTC.USD.HIGH24HOUR
            this.hrLowLtc = response.data.DISPLAY.LTC.USD.LOW24HOUR
            this.volLtc = response.data.DISPLAY.LTC.USD.VOLUME24HOUR
            this.mktCapLtc = response.data.DISPLAY.LTC.USD.MKTCAP

            this.priceXrp = response.data.DISPLAY.XRP.USD.PRICE
            this.hrHiXrp = response.data.DISPLAY.XRP.USD.HIGH24HOUR
            this.hrLowXrp = response.data.DISPLAY.XRP.USD.LOW24HOUR
            this.volXrp = response.data.DISPLAY.XRP.USD.VOLUME24HOUR
            this.mktCapXrp = response.data.DISPLAY.XRP.USD.MKTCAP

            this.priceOmg = response.data.DISPLAY.OMG.USD.PRICE
            this.hrHiOmg = response.data.DISPLAY.OMG.USD.HIGH24HOUR
            this.hrLowOmg = response.data.DISPLAY.OMG.USD.LOW24HOUR
            this.volOmg = response.data.DISPLAY.OMG.USD.VOLUME24HOUR
            this.mktCapOmg = response.data.DISPLAY.OMG.USD.MKTCAP

            this.priceEos = response.data.DISPLAY.EOS.USD.PRICE
            this.hrHiEos = response.data.DISPLAY.EOS.USD.HIGH24HOUR
            this.hrLowEos = response.data.DISPLAY.EOS.USD.LOW24HOUR
            this.volEos = response.data.DISPLAY.EOS.USD.VOLUME24HOUR
            this.mktCapEos = response.data.DISPLAY.EOS.USD.MKTCAP

            this.priceNeo = response.data.DISPLAY.NEO.USD.PRICE
            this.hrHiNeo = response.data.DISPLAY.NEO.USD.HIGH24HOUR
            this.hrLowNeo = response.data.DISPLAY.NEO.USD.LOW24HOUR
            this.volNeo = response.data.DISPLAY.NEO.USD.VOLUME24HOUR
            this.mktCapNeo = response.data.DISPLAY.NEO.USD.MKTCAP

            this.priceDash = response.data.DISPLAY.DASH.USD.PRICE
            this.hrHiDash = response.data.DISPLAY.DASH.USD.HIGH24HOUR
            this.hrLowDash = response.data.DISPLAY.DASH.USD.LOW24HOUR
            this.volDash = response.data.DISPLAY.DASH.USD.VOLUMEHOUR
            this.mktCapDash = response.data.DISPLAY.DASH.USD.MKTCAP

            this.priceXmr = response.data.DISPLAY.XMR.USD.PRICE
            this.hrHiXmr = response.data.DISPLAY.XMR.USD.HIGH24HOUR
            this.hrLowXmr = response.data.DISPLAY.XMR.USD.LOW24HOUR
            this.volXmr = response.data.DISPLAY.XMR.USD.VOLUMEHOUR
            this.mktCapXmr = response.data.DISPLAY.XMR.USD.MKTCAP
        })
        
    }
  })


