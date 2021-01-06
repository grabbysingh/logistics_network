var Transport = artifacts.require("Transport");
var Driver = artifacts.require("Driver");
var Payment = artifacts.require("Payment");
module.exports = function(deployer) {
  deployer.deploy(Payment);
  deployer.link(Payment,Transport);
  deployer.deploy(Transport);
  deployer.link(Transport,Driver);
  deployer.deploy(Driver);
};
