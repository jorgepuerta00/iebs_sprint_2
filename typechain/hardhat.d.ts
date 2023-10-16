/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { ethers } from "ethers";
import {
  FactoryOptions,
  HardhatEthersHelpers as HardhatEthersHelpersBase,
} from "@nomiclabs/hardhat-ethers/types";

import * as Contracts from ".";

declare module "hardhat/types/runtime" {
  interface HardhatEthersHelpers extends HardhatEthersHelpersBase {
    getContractFactory(
      name: "ISiliquaCoin",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ISiliquaCoin__factory>;
    getContractFactory(
      name: "LoanPlatform",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.LoanPlatform__factory>;
    getContractFactory(
      name: "IERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20__factory>;
    getContractFactory(
      name: "SiliquaCoin",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.SiliquaCoin__factory>;

    getContractAt(
      name: "ISiliquaCoin",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ISiliquaCoin>;
    getContractAt(
      name: "LoanPlatform",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.LoanPlatform>;
    getContractAt(
      name: "IERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20>;
    getContractAt(
      name: "SiliquaCoin",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.SiliquaCoin>;

    // default types
    getContractFactory(
      name: string,
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<ethers.ContractFactory>;
    getContractFactory(
      abi: any[],
      bytecode: ethers.utils.BytesLike,
      signer?: ethers.Signer
    ): Promise<ethers.ContractFactory>;
    getContractAt(
      nameOrAbi: string | any[],
      address: string,
      signer?: ethers.Signer
    ): Promise<ethers.Contract>;
  }
}