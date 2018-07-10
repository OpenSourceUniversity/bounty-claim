var BountyClaim = artifacts.require("./BountyClaim.sol");

module.exports = function(deployer) {
    deployer.deploy(BountyClaim);
};
