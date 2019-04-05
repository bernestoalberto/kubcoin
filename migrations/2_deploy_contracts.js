let kubFcoin = artifacts.require("KubFcoin");

module.exports = function(deployer) {
    deployer.deploy(kubFcoin,"KubFcoin","KUBF",8,1000000000,35,50);
}