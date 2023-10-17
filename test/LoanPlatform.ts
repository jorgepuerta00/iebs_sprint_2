import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/signers';
import { expect } from 'chai';
import { ContractFactory } from "ethers";
import { ethers } from 'hardhat';
import { IERC20, LoanPlatform, LoanPlatform__factory } from '../typechain';

describe('LoanPlatform', () => {
  let loanPlatform: LoanPlatform;
  let SiliquaCoin: ContractFactory;
  let token: IERC20;
  let owner: SignerWithAddress;
  let user1: SignerWithAddress;
  let user2: SignerWithAddress;

  beforeEach(async () => {
    [owner, user1, user2] = await ethers.getSigners();

    // Deploy the test ERC-20 Token contract
    const Token = await ethers.getContractFactory('SiliquaCoin');
    token = await Token.deploy('SiliquaCoin', 'SILQ', 18, ethers.utils.parseEther('1000000'));
    await token.deployed();

    // Deploy the LoanPlatform contract
    const LoanPlatform = await ethers.getContractFactory('LoanPlatform');
    loanPlatform = await LoanPlatform.connect(user1).deploy(token.address, 10);
    await loanPlatform.deployed();
  });

  it('should allow loanPlatform transfer found to own account', async () => {
    // Transfer 1000 tokens to the loanPlatform contract
    await token.connect(owner).approve(user1.address, ethers.utils.parseEther('10000'));
    await token.connect(user1).transferFrom(owner.address, user1.address, ethers.utils.parseEther('1000'));
    // Check that the transfer was successful
    const user1Balance = await token.balanceOf(user1.address);
    expect(user1Balance).to.equal(ethers.utils.parseEther('1000'));
  });

  it('should allow setInterestRate', async () => {
    await loanPlatform.connect(user1).setInterestRate(20);

    expect(await loanPlatform.interestRate()).to.equal(20);
  });

  it('should allow users to request a loan', async () => {
    // Transfer 1000 tokens to the user1 account
    await token.connect(owner).transfer(user1.address, ethers.utils.parseEther('1000'));
    // Approve the user2 account to transfer 100 tokens from the user1 account
    await token.connect(user1).approve(loanPlatform.address, ethers.utils.parseEther('100'));

    const initialBalance = await token.balanceOf(user2.address);
    const loanAmount = ethers.utils.parseEther('100');

    // Request a loan of 100 tokens with an interest of 10 tokens
    await loanPlatform.connect(user2).requestLoan(loanAmount);

    // Check that the loan has been created successfully
    const loan = await loanPlatform.loans('0');
    expect(initialBalance).to.equal(0);
    expect(loan.borrower).to.equal(user2.address);
    expect(loan.amount).to.equal(loanAmount);
    expect(loan.interest).to.equal(ethers.utils.parseEther('10'));
    expect(loan.active).to.be.true;

    // Check that the tokens have been transferred to the contract
    const finalBalance = await token.balanceOf(user2.address);
    expect(finalBalance).to.equal(loanAmount);
  });

  it('should allow users to pay a loan', async () => {
    // Transfer 1000 tokens to the user1 account
    await token.connect(owner).transfer(user1.address, ethers.utils.parseEther('1000'));
    // Approve the user2 account to transfer 100 tokens from the user1 account
    await token.connect(user1).approve(loanPlatform.address, ethers.utils.parseEther('100'));

    const loanAmount = ethers.utils.parseEther('100');

    // Request a loan of 100 tokens with an interest of 10 tokens
    await loanPlatform.connect(user2).requestLoan(loanAmount);

    const finalBalance = await token.balanceOf(user2.address);
    expect(finalBalance).to.equal(loanAmount);

    // Check that the loan has been reduced correctly
    const loan = await loanPlatform.loans('0');
    expect(loan.amount).to.equal(ethers.utils.parseEther('100'));
    expect(loan.repaidAmount).to.equal(ethers.utils.parseEther('0'));
    expect(loan.active).to.be.true;

    // Pay 50 tokens of the loan
    await loanPlatform.connect(user2).repayLoan(0, ethers.utils.parseEther('50'));
    expect(loan.amount).to.equal(ethers.utils.parseEther('50'));
    expect(loan.repaidAmount).to.equal(ethers.utils.parseEther('50'));
    expect(loan.active).to.be.true;

    // Pay total tokens of the loan
    await loanPlatform.connect(user2).repayLoan(0, ethers.utils.parseEther('50'));
    expect(loan.amount).to.equal(ethers.utils.parseEther('0'));
    expect(loan.repaidAmount).to.equal(ethers.utils.parseEther('100'));
    expect(loan.active).to.be.false;

  });

});