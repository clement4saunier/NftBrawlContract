const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Brawler", function() {
  let name = "BrawlerCollection";
  let symbol = "Bwlr";
  let instance;

  //Deploys a new contract for each following test
  beforeEach(async function() {
    const Brawler = await hre.ethers.getContractFactory("Brawler");
    instance = await Brawler.deploy(name, symbol);

    await instance.deployed();
  });

  it("Should construct with correct name and symbol", async function() {
    const contractName = await instance.name();
    const contractSymbol = await instance.symbol();

    expect(contractName).to.equal(name);
    expect(contractSymbol).to.equal(symbol);
  });

  it("Should expose owner and be deployer's address", async function() {
    const [deployer] = await ethers.getSigners();
    const contractOwner = await instance.owner();

    expect(contractOwner).to.equal(deployer.address);
  });
});
