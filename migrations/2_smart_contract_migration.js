const SmartContract = artifacts.require('Perfect Match Society');

module.exports = function (deployer) {
  deployer.deploy(SmartContract, 'Perfect Match Societ', 'PMS', 'https://');
};
