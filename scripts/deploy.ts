import { ethers } from 'hardhat';

async function main(): Promise<void> {
  const [deployer] = await ethers.getSigners();

  console.log('Contract deployment using the account:', deployer.address);

  const Testingrev = await ethers.getContractFactory('Testingrev');
  const testingrev = await Testingrev.deploy();

  await testingrev.waitForDeployment(); 

  console.log('Testingrev contract address:', await testingrev.getAddress());

}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
