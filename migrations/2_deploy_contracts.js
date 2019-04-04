let ERC20 = artifacts.require("Kubcoin");


module.exports = function(deployer) {
    deployer.deploy(ERC20);

}