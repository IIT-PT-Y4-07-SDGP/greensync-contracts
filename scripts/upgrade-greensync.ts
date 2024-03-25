import { ethers, upgrades } from 'hardhat';

async function main() {
    // Deploy the contract
    const proxyAddress = "0x5b9D99037ccEc5868faa74098B7D11cBc4782d62";
    const GreenSync = await ethers.getContractFactory('GreenSync');
    const greenSync = await upgrades.upgradeProxy(proxyAddress,GreenSync);

    // Wait for the contract to be deployed
    await greenSync.deployed();

    console.log('Contract deployed to:', greenSync.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });