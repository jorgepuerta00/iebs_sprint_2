import { expect } from 'chai';
import { ContractFactory, Signer } from "ethers";
import { ethers } from 'hardhat';
import { SiliquaCoin } from '../typechain';

describe('SiliquaCoin', () => {
  let SiliquaCoin: ContractFactory;
  let siliquaCoin: SiliquaCoin;
  let owner: Signer;
  let addr1: Signer;
  let addr2: Signer;

  beforeEach(async () => {
    [owner, addr1, addr2] = await ethers.getSigners();
    SiliquaCoin = await ethers.getContractFactory('SiliquaCoin');
    siliquaCoin = (await SiliquaCoin.deploy('SiliquaCoin', 'SILQ', 18, ethers.utils.parseEther('1000000'))) as SiliquaCoin;
    await siliquaCoin.deployed();
  });

  describe('Deployment', () => {
    it('Should set the correct name, symbol, and decimals', async () => {
      expect(await siliquaCoin.name()).to.equal('SiliquaCoin');
      expect(await siliquaCoin.symbol()).to.equal('SILQ');
      expect(await siliquaCoin.decimals()).to.equal(18);
    });

    it('Should assign the total supply of tokens to the owner', async () => {
      const ownerBalance = await siliquaCoin.balanceOf(await owner.getAddress());
      expect(await siliquaCoin.totalSupply()).to.equal(ownerBalance);
    });
  });

  describe('Transactions', () => {
    it('Should transfer tokens between accounts', async () => {
      await siliquaCoin.transfer(await addr1.getAddress(), ethers.utils.parseEther('100'));
      const addr1Balance = await siliquaCoin.balanceOf(await addr1.getAddress());
      expect(addr1Balance).to.equal(ethers.utils.parseEther('100'));

      await siliquaCoin.connect(addr1).transfer(await addr2.getAddress(), ethers.utils.parseEther('50'));
      const addr2Balance = await siliquaCoin.balanceOf(await addr2.getAddress());
      expect(addr2Balance).to.equal(ethers.utils.parseEther('50'));
    });

    it('Should fail if sender doesn’t have enough tokens', async () => {
      const initialOwnerBalance = await siliquaCoin.balanceOf(await owner.getAddress());
      await expect(
        siliquaCoin.connect(addr1).transfer(await owner.getAddress(), ethers.utils.parseEther('1'))
      ).to.be.revertedWith('Insufficient balance');

      expect(await siliquaCoin.balanceOf(await owner.getAddress())).to.equal(initialOwnerBalance);
    });

    it('Should update balances after transfers', async () => {
      const initialOwnerBalance = await siliquaCoin.balanceOf(await owner.getAddress());

      await siliquaCoin.transfer(await addr1.getAddress(), ethers.utils.parseEther('100'));
      await siliquaCoin.transfer(await addr2.getAddress(), ethers.utils.parseEther('50'));

      const finalOwnerBalance = await siliquaCoin.balanceOf(await owner.getAddress());
      expect(finalOwnerBalance).to.equal(initialOwnerBalance.sub(ethers.utils.parseEther('150')));

      const addr1Balance = await siliquaCoin.balanceOf(await addr1.getAddress());
      expect(addr1Balance).to.equal(ethers.utils.parseEther('100'));

      const addr2Balance = await siliquaCoin.balanceOf(await addr2.getAddress());
      expect(addr2Balance).to.equal(ethers.utils.parseEther('50'));
    });
  });
});
