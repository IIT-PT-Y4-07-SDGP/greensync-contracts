import { ethers, upgrades } from 'hardhat';

async function main() {
    // Deploy the contract
    const GreenSync = await ethers.getContractFactory('GreenSync');
    const greenSync = await upgrades.deployProxy(GreenSync);

    // Wait for the contract to be deployed
    // await greenSync.deployed();

    // console.log('Contract deployed to:', greenSync.address);
    const tx = await greenSync.deploymentTransaction()?.hash;
    console.log('Transaction hash:', tx);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });