import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/signers';
import { expect } from 'chai';
import { ethers, waffle } from 'hardhat';
import { SiliquaCoin } from '../typechain';
const { deployContract } = waffle;

describe('SiliquaCoin', () => {
  let siliquaCoin: SiliquaCoin;
  let owner: SignerWithAddress;
  let addr1: SignerWithAddress;
  let addr2: SignerWithAddress;

  beforeEach(async () => {
    [owner, addr1, addr2] = await ethers.getSigners();
    siliquaCoin = (await deployContract(owner, await ethers.getContractFactory('SiliquaCoin'))) as SiliquaCoin;
  });

  describe('Deployment', () => {
    it('Should set the correct name, symbol, and decimals', async () => {
      expect(await siliquaCoin.name()).to.equal('SiliquaCoin');
      expect(await siliquaCoin.symbol()).to.equal('SILQ');
      expect(await siliquaCoin.decimals()).to.equal(18);
    });

    it('Should assign the total supply of tokens to the owner', async () => {
      const ownerBalance = await siliquaCoin.balanceOf(owner.address);
      expect(await siliquaCoin.totalSupply()).to.equal(ownerBalance);
    });
  });

  describe('Transactions', () => {
    it('Should transfer tokens between accounts', async () => {
      await siliquaCoin.transfer(addr1.address, ethers.utils.parseEther('100'));
      const addr1Balance = await siliquaCoin.balanceOf(addr1.address);
      expect(addr1Balance).to.equal(ethers.utils.parseEther('100'));

      await siliquaCoin.connect(addr1).transfer(addr2.address, ethers.utils.parseEther('50'));
      const addr2Balance = await siliquaCoin.balanceOf(addr2.address);
      expect(addr2Balance).to.equal(ethers.utils.parseEther('50'));
    });

    it('Should fail if sender doesn’t have enough tokens', async () => {
      const initialOwnerBalance = await siliquaCoin.balanceOf(owner.address);
      await expect(
        siliquaCoin.connect(addr1).transfer(owner.address, ethers.utils.parseEther('1'))
      ).to.be.revertedWith('Insufficient balance');

      expect(await siliquaCoin.balanceOf(owner.address)).to.equal(initialOwnerBalance);
    });

    it('Should update balances after transfers', async () => {
      const initialOwnerBalance = await siliquaCoin.balanceOf(owner.address);

      await siliquaCoin.transfer(addr1.address, ethers.utils.parseEther('100'));
      await siliquaCoin.transfer(addr2.address, ethers.utils.parseEther('50'));

      const finalOwnerBalance = await siliquaCoin.balanceOf(owner.address);
      expect(finalOwnerBalance).to.equal(initialOwnerBalance.sub(ethers.utils.parseEther('150')));

      const addr1Balance = await siliquaCoin.balanceOf(addr1.address);
      expect(addr1Balance).to.equal(ethers.utils.parseEther('100'));

      const addr2Balance = await siliquaCoin.balanceOf(addr2.address);
      expect(addr2Balance).to.equal(ethers.utils.parseEther('50'));
    });
  });
});
