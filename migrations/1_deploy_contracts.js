const ConvertLib = artifacts.require("ConvertLib");
const MetaCoin = artifacts.require("MetaCoin");
const TestEval = artifacts.require("TestEval");
const Node=artifacts.require("Node");
const PublicContract=artifacts.require("PublicContract");



module.exports = function(deployer) {
  deployer.deploy(ConvertLib);
  deployer.link(ConvertLib, MetaCoin);
  deployer.deploy(MetaCoin);
  deployer.deploy(TestEval);
  deployer.deploy(Node);
  deployer.deploy(PublicContract);
  deployer.link(ConvertLib, MetaCoin);
  
};
