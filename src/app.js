
import Web3 from "web3";
import {calling} from "./timer"
//var web3 = new Web3();
import driverArtifact from "../build/contracts/Payment.json";

const App = {
  web3: null,
  account: null,
  meta: null,
  getBalance: function() {
    
  },
  start: async function() {
    const { web3 } = this;

    try {
      //1563792758727
      // get contract instance
      const networkId = await web3.eth.net.getId();
      //console.log(networkId);
      //console.log(driverArtifact.networks);
      const deployedNetwork = driverArtifact.networks[networkId];
      //console.log(deployedNetwork);
      this.meta = new web3.eth.Contract(
        driverArtifact.abi,
      
        deployedNetwork.address,
      );

      // get accounts
      const accounts = await web3.eth.getAccounts();
      this.account = accounts[0];

     // this.refreshBalance();
    } catch (error) {
      console.log(error.message);
      console.log(error);
      console.error("Could not connect to contract or chain.");
    }
    App.Pay();
  },

 /* Ddrive: async function() {
      const product = parseInt(document.getElementById("prodID").value);
      const Dist = document.getElementById("distributor").value;
      const Prod = document.getElementById("producer").value;
      const quant = parseInt(document.getElementById("quantity").value);
    console.log(quant);
      this.setStatus("Driver Running and deployed");
    },
    */

    Pay: async function() {
      const Prod = document.getElementById("producer").value;
      const Dist = document.getElementById("distributor").value;
      const amt = document.getElementById("amount").value;
    },
    setStatus: function(message) {
        const status = document.getElementById("status");
        status.innerHTML = message;
    },
};

    window.App = App;

    window.addEventListener("load", function() {
      if (window.ethereum) {
        // use MetaMask's provider
        App.web3 = new Web3(window.ethereum);
        window.ethereum.enable(); // get permission to access accounts
      } else {
        console.warn(
          "No web3 detected. Falling back to http://127.0.0.1:8545. You should remove this fallback when you deploy live",
        );
        // fallback - use your fallback strategy (local node / hosted node + in-dapp id mgmt / fail)
        App.web3 = new Web3(
          new Web3.providers.HttpProvider("http://127.0.0.1:8545"),
        );
      }
    
      App.start();
    });
    

