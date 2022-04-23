const hre = require("hardhat");

async function main() {
  const Brawler = await hre.ethers.getContractFactory("Brawler");
  const brawler = await Brawler.deploy("[COLLECTION]", "[SYMBOL]");

  await brawler.deployed();

  console.log("Brawler deployed to:", brawler.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
