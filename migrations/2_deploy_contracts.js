let ERC20 = artifacts.require("cubcoin");


module.exports = function(deployer) {
    deployer.deploy(ERC20);

}