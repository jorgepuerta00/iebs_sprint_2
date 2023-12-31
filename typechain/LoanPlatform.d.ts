/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface LoanPlatformInterface extends ethers.utils.Interface {
  functions: {
    "interestRate()": FunctionFragment;
    "loans(address)": FunctionFragment;
    "owner()": FunctionFragment;
    "repayLoan(uint256)": FunctionFragment;
    "requestLoan(uint256)": FunctionFragment;
    "setInterestRate(uint256)": FunctionFragment;
    "token()": FunctionFragment;
    "totalLoans()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "interestRate",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "loans", values: [string]): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "repayLoan",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "requestLoan",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setInterestRate",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "token", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "totalLoans",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "interestRate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "loans", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "repayLoan", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "requestLoan",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setInterestRate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "token", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "totalLoans", data: BytesLike): Result;

  events: {
    "LoanCreated(address,uint256,uint256,uint256)": EventFragment;
    "LoanRepaid(address,uint256,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "LoanCreated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "LoanRepaid"): EventFragment;
}

export type LoanCreatedEvent = TypedEvent<
  [string, BigNumber, BigNumber, BigNumber] & {
    borrower: string;
    loanId: BigNumber;
    amount: BigNumber;
    totalAmount: BigNumber;
  }
>;

export type LoanRepaidEvent = TypedEvent<
  [string, BigNumber, BigNumber] & {
    borrower: string;
    loanId: BigNumber;
    repaidAmount: BigNumber;
  }
>;

export class LoanPlatform extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: LoanPlatformInterface;

  functions: {
    interestRate(overrides?: CallOverrides): Promise<[BigNumber]>;

    loans(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<
      [
        BigNumber,
        string,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        boolean
      ] & {
        loanId: BigNumber;
        borrower: string;
        amount: BigNumber;
        interest: BigNumber;
        totalAmount: BigNumber;
        repaidAmount: BigNumber;
        active: boolean;
      }
    >;

    owner(overrides?: CallOverrides): Promise<[string]>;

    repayLoan(
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    requestLoan(
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setInterestRate(
      _newInterestRate: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    token(overrides?: CallOverrides): Promise<[string]>;

    totalLoans(overrides?: CallOverrides): Promise<[BigNumber]>;
  };

  interestRate(overrides?: CallOverrides): Promise<BigNumber>;

  loans(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, string, BigNumber, BigNumber, BigNumber, BigNumber, boolean] & {
      loanId: BigNumber;
      borrower: string;
      amount: BigNumber;
      interest: BigNumber;
      totalAmount: BigNumber;
      repaidAmount: BigNumber;
      active: boolean;
    }
  >;

  owner(overrides?: CallOverrides): Promise<string>;

  repayLoan(
    _amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  requestLoan(
    _amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setInterestRate(
    _newInterestRate: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  token(overrides?: CallOverrides): Promise<string>;

  totalLoans(overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    interestRate(overrides?: CallOverrides): Promise<BigNumber>;

    loans(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<
      [
        BigNumber,
        string,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        boolean
      ] & {
        loanId: BigNumber;
        borrower: string;
        amount: BigNumber;
        interest: BigNumber;
        totalAmount: BigNumber;
        repaidAmount: BigNumber;
        active: boolean;
      }
    >;

    owner(overrides?: CallOverrides): Promise<string>;

    repayLoan(_amount: BigNumberish, overrides?: CallOverrides): Promise<void>;

    requestLoan(
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setInterestRate(
      _newInterestRate: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    token(overrides?: CallOverrides): Promise<string>;

    totalLoans(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {
    "LoanCreated(address,uint256,uint256,uint256)"(
      borrower?: string | null,
      loanId?: BigNumberish | null,
      amount?: null,
      totalAmount?: null
    ): TypedEventFilter<
      [string, BigNumber, BigNumber, BigNumber],
      {
        borrower: string;
        loanId: BigNumber;
        amount: BigNumber;
        totalAmount: BigNumber;
      }
    >;

    LoanCreated(
      borrower?: string | null,
      loanId?: BigNumberish | null,
      amount?: null,
      totalAmount?: null
    ): TypedEventFilter<
      [string, BigNumber, BigNumber, BigNumber],
      {
        borrower: string;
        loanId: BigNumber;
        amount: BigNumber;
        totalAmount: BigNumber;
      }
    >;

    "LoanRepaid(address,uint256,uint256)"(
      borrower?: string | null,
      loanId?: BigNumberish | null,
      repaidAmount?: null
    ): TypedEventFilter<
      [string, BigNumber, BigNumber],
      { borrower: string; loanId: BigNumber; repaidAmount: BigNumber }
    >;

    LoanRepaid(
      borrower?: string | null,
      loanId?: BigNumberish | null,
      repaidAmount?: null
    ): TypedEventFilter<
      [string, BigNumber, BigNumber],
      { borrower: string; loanId: BigNumber; repaidAmount: BigNumber }
    >;
  };

  estimateGas: {
    interestRate(overrides?: CallOverrides): Promise<BigNumber>;

    loans(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    repayLoan(
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    requestLoan(
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setInterestRate(
      _newInterestRate: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    token(overrides?: CallOverrides): Promise<BigNumber>;

    totalLoans(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    interestRate(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    loans(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    repayLoan(
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    requestLoan(
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setInterestRate(
      _newInterestRate: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    token(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    totalLoans(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
