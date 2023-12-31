import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/signers';
import { expect } from 'chai';
import { ethers } from 'hardhat';
import { IERC20, LoanPlatform } from '../typechain';

describe('LoanPlatform', () => {
  let loanPlatform: LoanPlatform;
  let token: IERC20;
  let owner: SignerWithAddress;
  let user1: SignerWithAddress;
  let user2: SignerWithAddress;
  let user3: SignerWithAddress;

  beforeEach(async () => {
    [owner, user1, user2, user3] = await ethers.getSigners();

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
    const loan = await loanPlatform.loans(user2.address);
    expect(initialBalance).to.equal(0);
    expect(loan.borrower).to.equal(user2.address);
    expect(loan.amount).to.equal(loanAmount);
    expect(loan.interest).to.equal(ethers.utils.parseEther('10'));
    expect(loan.active).to.be.true;

    // Check that the tokens have been transferred to the contract
    const finalBalance = await token.balanceOf(user2.address);
    expect(finalBalance).to.equal(loanAmount);
  });

  it('should allow user 2 and 3 to pay a loan', async () => {
    // Transfer 1000 tokens to the user1 account
    await token.connect(owner).transfer(user1.address, ethers.utils.parseEther('1000'));
    // Approve the user2 account to transfer 100 tokens from the user1 account
    await token.connect(user1).approve(loanPlatform.address, ethers.utils.parseEther('1000'));
    await token.connect(user2).approve(loanPlatform.address, ethers.utils.parseEther('1000'));
    await token.connect(user3).approve(loanPlatform.address, ethers.utils.parseEther('1000'));

    const loanAmount = ethers.utils.parseEther('100');

    // initial balance of user2 is 0
    var initialBalance = await token.balanceOf(user2.address);
    expect(initialBalance).to.equal(0);

    // Request a loan of 100 tokens with an interest of 10 tokens
    await loanPlatform.connect(user2).requestLoan(loanAmount);

    // Check that the tokens have been transferred to the contract
    var finalBalance = await token.balanceOf(user2.address);
    expect(finalBalance).to.equal(loanAmount);

    // Check that the loan has been created successfully
    var loan = await loanPlatform.loans(user2.address);
    expect(loan.amount).to.equal(ethers.utils.parseEther('100'));
    expect(loan.repaidAmount).to.equal(ethers.utils.parseEther('0'));
    expect(loan.totalAmount).to.equal(ethers.utils.parseEther('110'));
    expect(loan.active).to.be.true;

    // Pay 50 tokens of the loan
    await loanPlatform.connect(user2).repayLoan(ethers.utils.parseEther('50'));
    var loan = await loanPlatform.loans(user2.address);
    expect(loan.amount).to.equal(ethers.utils.parseEther('50'));
    expect(loan.repaidAmount).to.equal(ethers.utils.parseEther('50'));
    expect(loan.totalAmount).to.equal(ethers.utils.parseEther('60'));
    expect(loan.active).to.be.true;

    // Check new balance of user2 is 50
    var finalBalance = await token.balanceOf(user2.address);
    expect(finalBalance).to.equal(ethers.utils.parseEther('50'));

    // Pay total tokens of the loan
    await loanPlatform.connect(user2).repayLoan(ethers.utils.parseEther('50'));
    var loan = await loanPlatform.loans(user2.address);
    expect(loan.amount).to.equal(ethers.utils.parseEther('0'));
    expect(loan.repaidAmount).to.equal(ethers.utils.parseEther('100'));
    expect(loan.totalAmount).to.equal(ethers.utils.parseEther('10'));
    expect(loan.active).to.be.true;

    // Pay total tokens of the loan
    await token.connect(owner).transfer(user2.address, ethers.utils.parseEther('10'));
    await loanPlatform.connect(user2).repayLoan(ethers.utils.parseEther('10'));
    var loan = await loanPlatform.loans(user2.address);
    expect(loan.amount).to.equal(ethers.utils.parseEther('0'));
    expect(loan.repaidAmount).to.equal(ethers.utils.parseEther('110'));
    expect(loan.totalAmount).to.equal(ethers.utils.parseEther('0'));
    expect(loan.active).to.be.false;

    // initial balance of user2 is 0
    var initialBalance = await token.balanceOf(user2.address);
    expect(initialBalance).to.equal(0);

    // Request a loan of 100 tokens with an interest of 10 tokens
    await loanPlatform.connect(user2).requestLoan(loanAmount);

    // Check that the tokens have been transferred to the contract
    var finalBalance = await token.balanceOf(user2.address);
    expect(finalBalance).to.equal(loanAmount);

    // initial balance of user3 is 0
    var initialBalance = await token.balanceOf(user3.address);
    expect(initialBalance).to.equal(0);

    // Request a loan of 100 tokens with an interest of 10 tokens
    await loanPlatform.connect(user3).requestLoan(loanAmount);

    // Check that the tokens have been transferred to the contract
    var finalBalance = await token.balanceOf(user3.address);
    expect(finalBalance).to.equal(loanAmount);

    // Check that the loan has been created successfully
    var loan = await loanPlatform.loans(user3.address);
    expect(loan.amount).to.equal(ethers.utils.parseEther('100'));
    expect(loan.repaidAmount).to.equal(ethers.utils.parseEther('0'));
    expect(loan.totalAmount).to.equal(ethers.utils.parseEther('110'));
    expect(loan.active).to.be.true;

    // Pay 50 tokens of the loan
    await loanPlatform.connect(user3).repayLoan(ethers.utils.parseEther('50'));
    var loan = await loanPlatform.loans(user3.address);
    expect(loan.amount).to.equal(ethers.utils.parseEther('50'));
    expect(loan.repaidAmount).to.equal(ethers.utils.parseEther('50'));
    expect(loan.totalAmount).to.equal(ethers.utils.parseEther('60'));
    expect(loan.active).to.be.true;

    // Check new balance of user3 is 50
    var finalBalance = await token.balanceOf(user3.address);
    expect(finalBalance).to.equal(ethers.utils.parseEther('50'));

    // Pay total tokens of the loan
    await loanPlatform.connect(user3).repayLoan(ethers.utils.parseEther('50'));
    var loan = await loanPlatform.loans(user3.address);
    expect(loan.amount).to.equal(ethers.utils.parseEther('0'));
    expect(loan.repaidAmount).to.equal(ethers.utils.parseEther('100'));
    expect(loan.totalAmount).to.equal(ethers.utils.parseEther('10'));
    expect(loan.active).to.be.true;

    // Pay total tokens of the loan
    await token.connect(owner).transfer(user3.address, ethers.utils.parseEther('10'));
    await loanPlatform.connect(user3).repayLoan(ethers.utils.parseEther('10'));
    var loan = await loanPlatform.loans(user3.address);
    expect(loan.amount).to.equal(ethers.utils.parseEther('0'));
    expect(loan.repaidAmount).to.equal(ethers.utils.parseEther('110'));
    expect(loan.totalAmount).to.equal(ethers.utils.parseEther('0'));
    expect(loan.active).to.be.false;
  });

});