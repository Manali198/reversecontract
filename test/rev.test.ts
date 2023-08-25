import { expect } from "chai";
import { ethers } from "hardhat";
import { ContractFactory } from "ethers";

describe("Testingrev", function () {
    let contract: any;
    let accounts: any;
    let user: any;
    let owner: any;
    let newOwner: any;
    let recipient: any;

    before(async function () {
        [user, owner] = await ethers.getSigners();
    });

    beforeEach(async function () {
        accounts = await ethers.getSigners();
        const testingRevContract: ContractFactory = await ethers.getContractFactory("Testingrev");
        contract = await testingRevContract.deploy();
    });

    beforeEach(async function () {
        [owner, newOwner, recipient] = await ethers.getSigners();

        const Contract = await ethers.getContractFactory("Testingrev");
        contract = await Contract.deploy();
    });


    it("should have the correct name", async function () {
        const name = await contract.name();
        expect(name).to.equal("Testing Rev");
    });

    it("should have the correct symbol", async function () {
        const symbol = await contract.symbol();
        expect(symbol).to.equal("TR");
    });

    it("should have the correct decimals", async function () {
        const decimals = await contract.decimals();
        expect(decimals).to.equal(18);
    });

    const expectedTotalSupply = BigInt(1000000) * BigInt(10 ** 18);

    it("should have the correct total supply", async function () {
        const totalSupply = await contract.totalSupply();
        expect(await contract.totalSupply()).to.equal(expectedTotalSupply);
    });

    it("should mint tokens", async function () {
        const mintAmount = ethers.parseEther("1000000000000000000"); // 1 token (adjust as needed)

        // Call the mint function as the owner
        await contract.connect(owner).mint(await recipient.getAddress(), mintAmount);

        // Check recipient's balance
        const recipientBalance = await contract.balanceOf(await recipient.getAddress());
        expect(recipientBalance).to.equal(mintAmount);
    });

    it("should prevent minting to an invalid address", async function () {
        const mintAmount = ethers.parseEther("1000000000000000000"); // 1 token (adjust as needed);
        const invalidAddress = "0x0000000000000000000000000000000000000000";

        // Try to mint to an invalid address
        await expect(contract.connect(owner).mint(invalidAddress, mintAmount))
            .to.be.revertedWith("Invalid address");
    });

    it("should only allow the current owner to mint", async function () {
        const mintAmount = ethers.parseEther("1000000000000000000"); // 1 token (adjust as needed)

        // Try to mint from a non-owner account
        await expect(contract.connect(recipient).mint(await recipient.getAddress(), mintAmount))
            .to.be.revertedWith("Only owner can call this function");
    });

    it("should pause the contract", async function () {
        // Call the pause function as the owner
        await contract.connect(owner).pause();

        // Check if the contract is paused
        const isPaused = await contract.paused();
        expect(isPaused).to.equal(true);
    });

    it("should unpause the contract", async function () {
        // First, pause the contract
        await contract.connect(owner).pause();

        // Then, call the unpause function as the owner
        await contract.connect(owner).unpause();

        // Check if the contract is unpaused
        const isPaused = await contract.paused();
        expect(isPaused).to.equal(false);
    });


    it("should transfer tokens", async function () {
        const from = accounts[0];
        const to = accounts[1];
        const amount = 100;

        await contract.transfer(to.address, amount);

        const balanceOfTo = await contract.balanceOf(to.address);
        expect(balanceOfTo).to.equal(amount);
    });

    it("should not transfer tokens if the balance is not enough", async function () {
        const from = accounts[0];
        const to = accounts[1];
        const amount = 1000;

        const initialBalance = await contract.balanceOf(from.address);
        console.log("Initial balance:", initialBalance.toString());

        try {
            await contract.transfer(to.address, amount);
        } catch (error: any) {
            if (error.message === "Insufficient balance") {
                console.log("Transaction reverted as expected");
            } else {
                throw error;
            }
        }

        const finalBalance = await contract.balanceOf(from.address);
        console.log("Final balance:", finalBalance.toString());
    });


    it("should transfer ownership", async function () {
        const newOwnerAddress = await newOwner.getAddress();

        // Call the transferOwnership function as the current owner
        await contract.connect(owner).transferOwnership(newOwnerAddress);

        // Check if the ownership has been transferred
        const contractOwner = await contract.owner();
        expect(contractOwner).to.equal(newOwnerAddress);
    });

    it("should prevent transferring ownership to an invalid address", async function () {
        const invalidAddress = "0x0000000000000000000000000000000000000000";

        // Try to transfer ownership to an invalid address
        await expect(contract.connect(owner).transferOwnership(invalidAddress))
            .to.be.revertedWith("Invalid address");
    });

    it("should only allow the current owner to transfer ownership", async function () {
        const [randomAccount] = await ethers.getSigners();

        console.log("Owner:", await owner.getAddress());
        console.log("Random Account:", await randomAccount.getAddress());

        try {
            await contract.connect(randomAccount).transferOwnership(await newOwner.getAddress());
        } catch (error) {
            console.log("Error:", error);
        }

        const contractOwner = await contract.owner();
        console.log("Contract Owner:", contractOwner);

        expect(contract.connect(owner).transferOwnership(await newOwner.getAddress()))
            .to.be.revertedWith("Only owner can call this function");
    });


    it("should approve tokens", async function () {
        const from = accounts[0];
        const spender = accounts[1];
        const amount = 100;

        await contract.approve(spender.address, amount);

        const allowance = await contract.allowance(from.address, spender.address);
        expect(allowance).to.equal(amount);
    });

    it("should not approve tokens if the amount is more than the balance", async function () {
        const from = accounts[0];
        const spender = accounts[1];
        const amount = 1000;

        try {
            await contract.approve(spender.address, amount);
        } catch (error: any) {
            console.error("Actual error:", error.message);
            expect(error.message).to.equal("Insufficient balance");
        }
    });

    it("should transfer tokens from the approved address", async function () {
        const [owner, recipient] = await ethers.getSigners();

        const Testingrev = await ethers.getContractFactory("Testingrev");
        const token = await Testingrev.deploy();

        await token.connect(owner).approve(recipient.address, 50);

        const allowanceBefore = await token.allowance(owner.address, recipient.address);
        expect(allowanceBefore).to.equal(50);

        await token.connect(recipient).transferFrom(owner.address, recipient.address, 50);

        const allowanceAfter = await token.allowance(owner.address, recipient.address);
        expect(allowanceAfter).to.equal(0);

        const balanceRecipient = await token.balanceOf(recipient.address);
        expect(balanceRecipient).to.equal(50);
    });

    it("should not transfer tokens from the approved address if the amount is more than the allowance", async function () {
        const [owner, spender] = await ethers.getSigners();

        const Testingrev = await ethers.getContractFactory("Testingrev");
        const token = await Testingrev.deploy();

        await token.connect(owner).approve(spender.address, 50);

        await expect(token.connect(spender).transferFrom(owner.address, spender.address, 100)).to.be.revertedWith(
            "Allowance exceeded"
        );
    });

    it("should transfer tokens", async function () {
        const from = accounts[0];
        const to = accounts[1];
        const amount = 100;

        // Confirm transaction and handle any errors
        const tx = await expect(contract.connect(from).transfer(to.getAddress(), amount))
            .to.not.be.reverted;

        // Wait for the mined transaction to reflect in the contract state
        await tx;

        const balanceOfTo = await contract.balanceOf(await to.getAddress());

        // Compare BigInt values directly
        expect(balanceOfTo).to.equal(BigInt(amount));
    });

    it("should not transfer tokens if the balance is not enough", async function () {
        const from = accounts[0];
        const to = accounts[1];
        const amount = 1000;

        const initialBalance = await contract.balanceOf(await from.getAddress());

        try {
            const tx = await contract.connect(from).transfer(to.getAddress(), amount);
            await tx.wait();
        } catch (error: any) {

            // Expecting an error here
            expect(error.message).to.include("Insufficient balance");
        }

        const finalBalance = await contract.balanceOf(await from.getAddress());

        // Use a range for comparison
        const balanceDifference = initialBalance - finalBalance;

        // The difference should be at least the transferred amount
        expect(balanceDifference).to.be.at.least(amount);
    });

    it("should checking the gas optimization", async function () {
        const initialBalance = await contract.balanceOf(await owner.getAddress());
        const transferAmount = ethers.parseUnits("100", "wei"); // Convert to BigNumber

        await expect(contract.connect(owner).transfer(await recipient.getAddress(), transferAmount))
            .to.emit(contract, "Transfer")
            .withArgs(await owner.getAddress(), await recipient.getAddress(), transferAmount);

        const newOwnerBalance = await contract.balanceOf(await owner.getAddress());
        expect(newOwnerBalance).to.equal(initialBalance - transferAmount); // Use - for subtraction

        const newRecipientBalance = await contract.balanceOf(await recipient.getAddress());
        expect(newRecipientBalance).to.equal(transferAmount);
    });
}); 