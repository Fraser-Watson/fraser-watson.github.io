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
        mktBtc: "",
        splyBtc: "",
        chgBtc: "",
        updBtc: "",

        priceEth: "",
        hrHiEth: "",
        hrLowEth: "",
        volEth: "",
        mktCapEth: "",
        mktEth: "",
        splyEth: "",
        chgEth: "",
        updEth: "",

        priceLtc: "",
        hrHiLtc: "",
        hrLowLtc: "",
        volLtc: "",
        mktCapLtc: "",
        mktLtc: "",
        splyLtc: "",
        chgLtc: "",
        updLtc: "",

        priceXrp: "",
        hrHiXrp: "",
        hrLowXrp: "",
        volXrp: "",
        mktCapXrp: "",
        mktXrp: "",
        splyXrp: "",
        chgXrp: "",
        updXrp: "",

        priceOmg: "",
        hrHiOmg: "",
        hrLowOmg: "",
        volOmg: "",
        mktCapOmg: "",
        mktOmg: "",
        splyOmg: "",
        chgOmg: "",
        updOmg: "",

        priceEos: "",
        hrHiEos: "",
        hrLowEos: "",
        volEos: "",
        mktCapEos: "",
        mktEos: "",
        splyEos: "",
        chgEos: "",
        updEos: "",

        priceNeo: "",
        hrHiNeo: "",
        hrLowNeo: "",
        volNeo: "",
        mktCapNeo: "",
        mktNeo: "",
        splyNeo: "",
        chgNeo: "",
        updNeo: "",
        
        priceDash: "",
        hrHiDash: "",
        hrLowDash: "",
        volDash: "",
        mktCapDash: "",
        mktDash: "",
        splyDash: "",
        chgDash: "",
        updDash: "",

        priceXmr: "",
        hrHiXmr: "",
        hrLowXmr: "",
        volXmr: "",
        mktCapXmr: "",
        mktXmr: "",
        splyXmr: "",
        chgXmr: "",
        updXmr: ""

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
            this.mktBtc = response.data.DISPLAY.BTC.USD.MARKET
            this.splyBtc = response.data.DISPLAY.BTC.USD.SUPPLY
            this.chgBtc = response.data.DISPLAY.BTC.USD.CHANGE24HOUR
            this.updBtc = response.data.DISPLAY.BTC.USD.LASTUPDATE


            this.priceEth = response.data.DISPLAY.ETH.USD.PRICE
            this.hrHiEth = response.data.DISPLAY.ETH.USD.HIGH24HOUR
            this.hrLowEth = response.data.DISPLAY.ETH.USD.LOW24HOUR
            this.volEth = response.data.DISPLAY.ETH.USD.VOLUME24HOUR
            this.mktCapEth = response.data.DISPLAY.ETH.USD.MKTCAP
            this.mktEth = response.data.DISPLAY.ETH.USD.MARKET
            this.splyEth = response.data.DISPLAY.ETH.USD.SUPPLY
            this.chgEth = response.data.DISPLAY.ETH.USD.CHANGE24HOUR
            this.updEth = response.data.DISPLAY.ETH.USD.LASTUPDATE

            this.priceLtc = response.data.DISPLAY.LTC.USD.PRICE
            this.hrHiLtc = response.data.DISPLAY.LTC.USD.HIGH24HOUR
            this.hrLowLtc = response.data.DISPLAY.LTC.USD.LOW24HOUR
            this.volLtc = response.data.DISPLAY.LTC.USD.VOLUME24HOUR
            this.mktCapLtc = response.data.DISPLAY.LTC.USD.MKTCAP
            this.mktLtc = response.data.DISPLAY.LTC.USD.MARKET
            this.splyLtc = response.data.DISPLAY.LTC.USD.SUPPLY
            this.chgLtc = response.data.DISPLAY.LTC.USD.CHANGE24HOUR
            this.updLtc = response.data.DISPLAY.LTC.USD.LASTUPDATE

            this.priceXrp = response.data.DISPLAY.XRP.USD.PRICE
            this.hrHiXrp = response.data.DISPLAY.XRP.USD.HIGH24HOUR
            this.hrLowXrp = response.data.DISPLAY.XRP.USD.LOW24HOUR
            this.volXrp = response.data.DISPLAY.XRP.USD.VOLUME24HOUR
            this.mktCapXrp = response.data.DISPLAY.XRP.USD.MKTCAP
            this.mktXrp = response.data.DISPLAY.XRP.USD.MARKET
            this.splyXrp = response.data.DISPLAY.XRP.USD.SUPPLY
            this.chgXrp = response.data.DISPLAY.XRP.USD.CHANGE24HOUR
            this.updXrp = response.data.DISPLAY.XRP.USD.LASTUPDATE

            this.priceOmg = response.data.DISPLAY.OMG.USD.PRICE
            this.hrHiOmg = response.data.DISPLAY.OMG.USD.HIGH24HOUR
            this.hrLowOmg = response.data.DISPLAY.OMG.USD.LOW24HOUR
            this.volOmg = response.data.DISPLAY.OMG.USD.VOLUME24HOUR
            this.mktCapOmg = response.data.DISPLAY.OMG.USD.MKTCAP
            this.mktOmg = response.data.DISPLAY.OMG.USD.MARKET
            this.splyOmg = response.data.DISPLAY.OMG.USD.SUPPLY
            this.chgOmg = response.data.DISPLAY.OMG.USD.CHANGE24HOUR
            this.updOmg = response.data.DISPLAY.OMG.USD.LASTUPDATE

            this.priceEos = response.data.DISPLAY.EOS.USD.PRICE
            this.hrHiEos = response.data.DISPLAY.EOS.USD.HIGH24HOUR
            this.hrLowEos = response.data.DISPLAY.EOS.USD.LOW24HOUR
            this.volEos = response.data.DISPLAY.EOS.USD.VOLUME24HOUR
            this.mktCapEos = response.data.DISPLAY.EOS.USD.MKTCAP
            this.mktEos = response.data.DISPLAY.EOS.USD.MARKET
            this.splyEos = response.data.DISPLAY.EOS.USD.SUPPLY
            this.chgEos = response.data.DISPLAY.EOS.USD.CHANGE24HOUR
            this.updEos = response.data.DISPLAY.EOS.USD.LASTUPDATE

            this.priceNeo = response.data.DISPLAY.NEO.USD.PRICE
            this.hrHiNeo = response.data.DISPLAY.NEO.USD.HIGH24HOUR
            this.hrLowNeo = response.data.DISPLAY.NEO.USD.LOW24HOUR
            this.volNeo = response.data.DISPLAY.NEO.USD.VOLUME24HOUR
            this.mktCapNeo = response.data.DISPLAY.NEO.USD.MKTCAP
            this.mktNeo = response.data.DISPLAY.NEO.USD.MARKET
            this.splyNeo = response.data.DISPLAY.NEO.USD.SUPPLY
            this.chgNeo = response.data.DISPLAY.NEO.USD.CHANGE24HOUR
            this.updNeo = response.data.DISPLAY.NEO.USD.LASTUPDATE

            this.priceDash = response.data.DISPLAY.DASH.USD.PRICE
            this.hrHiDash = response.data.DISPLAY.DASH.USD.HIGH24HOUR
            this.hrLowDash = response.data.DISPLAY.DASH.USD.LOW24HOUR
            this.volDash = response.data.DISPLAY.DASH.USD.VOLUMEHOUR
            this.mktCapDash = response.data.DISPLAY.DASH.USD.MKTCAP
            this.mktDash = response.data.DISPLAY.DASH.USD.MARKET
            this.splyDash = response.data.DISPLAY.DASH.USD.SUPPLY
            this.chgDash = response.data.DISPLAY.DASH.USD.CHANGE24HOUR
            this.updDash = response.data.DISPLAY.DASH.USD.LASTUPDATE

            this.priceXmr = response.data.DISPLAY.XMR.USD.PRICE
            this.hrHiXmr = response.data.DISPLAY.XMR.USD.HIGH24HOUR
            this.hrLowXmr = response.data.DISPLAY.XMR.USD.LOW24HOUR
            this.volXmr = response.data.DISPLAY.XMR.USD.VOLUMEHOUR
            this.mktCapXmr = response.data.DISPLAY.XMR.USD.MKTCAP
            this.mktXmr = response.data.DISPLAY.XMR.USD.MARKET
            this.splyXmr = response.data.DISPLAY.XMR.USD.SUPPLY
            this.chgXmr = response.data.DISPLAY.XMR.USD.CHANGE24HOUR
            this.updXmr = response.data.DISPLAY.XMR.USD.LASTUPDATE
        })
        
    }
  })


