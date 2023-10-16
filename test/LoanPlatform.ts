/*import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/signers';
import { expect } from 'chai';
import { ethers } from 'hardhat';
import { LoanPlatformType } from '../contracts/contracts';
import { LoanPlatform__factory, IERC20__factory, IERC20 } from '../typechain';

const {
  TOKEN_ADDRESS
} = process.env;

describe('LoanPlatform', () => {
  let loanPlatform: LoanPlatformType;
  let token: IERC20;
  let owner: SignerWithAddress;
  let user: SignerWithAddress;

  beforeEach(async () => {
    [owner, user] = await ethers.getSigners();
    const tokenAddress = TOKEN_ADDRESS !== undefined ? TOKEN_ADDRESS : "";

    // Desplegar el contrato Token ERC-20 de prueba
    token = IERC20__factory.connect(tokenAddress, owner);

    // Desplegar el contrato LoanPlatform
    const loanPlatformFactory = await ethers.getContractFactory('LoanPlatform') as LoanPlatform__factory;
    loanPlatform = await loanPlatformFactory.connect(owner).deploy(token.address);
  });

  it('should allow users to request a loan', async () => {
    const initialBalance = await token.balanceOf(user.address);

    // Solicitar un préstamo de 100 tokens ERC-20 con un interés de 10 tokens
    await loanPlatform.connect(user).requestLoan(100, 10);

    // Verificar que el préstamo se ha creado correctamente
    const loan = await loanPlatform.loans(0);
    expect(loan.borrower).to.equal(user.address);
    expect(loan.amount).to.equal(100);
    expect(loan.interest).to.equal(10);
    expect(loan.repaid).to.be.false;

    // Verificar que los tokens se han transferido al contrato
    const finalBalance = await token.balanceOf(user.address);
    expect(finalBalance).to.equal(initialBalance.sub(100));
  });

  it('should allow users to repay a loan', async () => {
    // Solicitar un préstamo de 100 tokens ERC-20 con un interés de 10 tokens
    await loanPlatform.connect(user).requestLoan(100, 10);

    // Repagar el préstamo
    await token.connect(user).approve(loanPlatform.address, 110);
    await loanPlatform.connect(user).repayLoan(0);

    // Verificar que el préstamo ha sido repagado correctamente
    const loan = await loanPlatform.loans(0);
    expect(loan.repaid).to.be.true;

    // Verificar que los tokens se han transferido al prestamista
    const borrowerBalance = await token.balanceOf(user.address);
    expect(borrowerBalance).to.equal(110);
  });
});
*/