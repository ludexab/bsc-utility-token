const Gaz = artifacts.require("Gaz");

module.exports = async function (deployer) {
	let dep = deployer.deploy(Gaz);
};
