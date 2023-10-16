import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/signers';
import { expect } from 'chai';
import { ethers } from 'hardhat';
import { IERC20, LoanPlatform } from '../typechain';

describe('LoanPlatform', () => {
  let loanPlatform: LoanPlatform;
  let token: IERC20;
  let owner: SignerWithAddress;
  let user: SignerWithAddress;

  beforeEach(async () => {
    [owner, user] = await ethers.getSigners();

    // Desplegar el contrato Token ERC-20 de prueba
    const Token = await ethers.getContractFactory('SiliquaCoin');
    token = await Token.deploy('SiliquaCoin', 'SILQ', 18, ethers.utils.parseEther('1000000'));
    await token.deployed();

    // Desplegar el contrato LoanPlatform
    loanPlatform = await (await ethers.getContractFactory('LoanPlatform'))
      .connect(owner)
      .deploy(token.address);
    await loanPlatform.deployed();

    // Transfer some tokens to the user for testing purposes
    await token.transfer(user.address, ethers.utils.parseEther('1000'));
  });

  it('should allow users to request a loan', async () => {
    const initialBalance = await token.balanceOf(user.address);

    // Request a loan of 100 tokens with an interest of 10 tokens
    await token.connect(user).approve(loanPlatform.address, ethers.utils.parseEther('110'));
    await loanPlatform.connect(user).requestLoan(ethers.utils.parseEther('100'), ethers.utils.parseEther('10'));

    // Check that the loan has been created successfully
    const loan = await loanPlatform.loans(0);
    expect(loan.borrower).to.equal(user.address);
    expect(loan.amount).to.equal(ethers.utils.parseEther('100'));
    expect(loan.interest).to.equal(ethers.utils.parseEther('10'));
    expect(loan.repaid).to.be.false;

    // Check that the tokens have been transferred to the contract
    const finalBalance = await token.balanceOf(user.address);
    expect(finalBalance).to.equal(initialBalance.sub(ethers.utils.parseEther('100')));
  });

  it('should allow users to request a loan', async () => {
    const initialBalance = await token.balanceOf(await user.getAddress());

    // Asegurar que el contrato LoanPlatform tenga permiso para gastar tokens del usuario
    await token.connect(user).approve(loanPlatform.address, 100);

    // Solicitar un préstamo de 100 tokens ERC-20 con un interés de 10 tokens
    await loanPlatform.connect(user).requestLoan(100, 10);

    // Verificar que el préstamo se ha creado correctamente
    const loan = await loanPlatform.loans(0);
    expect(loan.borrower).to.equal(await user.getAddress());
    expect(loan.amount).to.equal(100);
    expect(loan.interest).to.equal(10);
    expect(loan.repaid).to.be.false;

    // Verificar que los tokens se han transferido al contrato
    const finalBalance = await token.balanceOf(await user.getAddress());
    expect(finalBalance).to.equal(initialBalance.sub(100));
  });
});