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
    "loans(uint256)": FunctionFragment;
    "repayLoan(uint256)": FunctionFragment;
    "requestLoan(uint256,uint256)": FunctionFragment;
    "token()": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "loans", values: [BigNumberish]): string;
  encodeFunctionData(
    functionFragment: "repayLoan",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "requestLoan",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "token", values?: undefined): string;

  decodeFunctionResult(functionFragment: "loans", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "repayLoan", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "requestLoan",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "token", data: BytesLike): Result;

  events: {
    "LoanCreated(uint256,address,uint256)": EventFragment;
    "LoanRepaid(uint256,address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "LoanCreated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "LoanRepaid"): EventFragment;
}

export type LoanCreatedEvent = TypedEvent<
  [BigNumber, string, BigNumber] & {
    loanId: BigNumber;
    borrower: string;
    amount: BigNumber;
  }
>;

export type LoanRepaidEvent = TypedEvent<
  [BigNumber, string, BigNumber] & {
    loanId: BigNumber;
    borrower: string;
    amount: BigNumber;
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
    loans(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [string, BigNumber, BigNumber, boolean] & {
        borrower: string;
        amount: BigNumber;
        interest: BigNumber;
        repaid: boolean;
      }
    >;

    repayLoan(
      _loanId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    requestLoan(
      _amount: BigNumberish,
      _interest: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    token(overrides?: CallOverrides): Promise<[string]>;
  };

  loans(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [string, BigNumber, BigNumber, boolean] & {
      borrower: string;
      amount: BigNumber;
      interest: BigNumber;
      repaid: boolean;
    }
  >;

  repayLoan(
    _loanId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  requestLoan(
    _amount: BigNumberish,
    _interest: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  token(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    loans(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [string, BigNumber, BigNumber, boolean] & {
        borrower: string;
        amount: BigNumber;
        interest: BigNumber;
        repaid: boolean;
      }
    >;

    repayLoan(_loanId: BigNumberish, overrides?: CallOverrides): Promise<void>;

    requestLoan(
      _amount: BigNumberish,
      _interest: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    token(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    "LoanCreated(uint256,address,uint256)"(
      loanId?: null,
      borrower?: null,
      amount?: null
    ): TypedEventFilter<
      [BigNumber, string, BigNumber],
      { loanId: BigNumber; borrower: string; amount: BigNumber }
    >;

    LoanCreated(
      loanId?: null,
      borrower?: null,
      amount?: null
    ): TypedEventFilter<
      [BigNumber, string, BigNumber],
      { loanId: BigNumber; borrower: string; amount: BigNumber }
    >;

    "LoanRepaid(uint256,address,uint256)"(
      loanId?: null,
      borrower?: null,
      amount?: null
    ): TypedEventFilter<
      [BigNumber, string, BigNumber],
      { loanId: BigNumber; borrower: string; amount: BigNumber }
    >;

    LoanRepaid(
      loanId?: null,
      borrower?: null,
      amount?: null
    ): TypedEventFilter<
      [BigNumber, string, BigNumber],
      { loanId: BigNumber; borrower: string; amount: BigNumber }
    >;
  };

  estimateGas: {
    loans(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    repayLoan(
      _loanId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    requestLoan(
      _amount: BigNumberish,
      _interest: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    token(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    loans(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    repayLoan(
      _loanId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    requestLoan(
      _amount: BigNumberish,
      _interest: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    token(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}