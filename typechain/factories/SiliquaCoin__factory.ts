/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Signer,
  utils,
  BigNumberish,
  Contract,
  ContractFactory,
  Overrides,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { SiliquaCoin, SiliquaCoinInterface } from "../SiliquaCoin";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "string",
        name: "_symbol",
        type: "string",
      },
      {
        internalType: "uint8",
        name: "_decimals",
        type: "uint8",
      },
      {
        internalType: "uint256",
        name: "initialSupply",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "tokenOwner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162000c9a38038062000c9a8339810160408190526200003491620001fe565b835162000049906001906020870190620000a5565b5082516200005f906002906020860190620000a5565b506003805460ff191660ff939093169290921790915560048190553360008181526005602052604081209290925581546001600160a01b03191617905550620002d89050565b828054620000b39062000285565b90600052602060002090601f016020900481019282620000d7576000855562000122565b82601f10620000f257805160ff191683800117855562000122565b8280016001018555821562000122579182015b828111156200012257825182559160200191906001019062000105565b506200013092915062000134565b5090565b5b8082111562000130576000815560010162000135565b600082601f8301126200015c578081fd5b81516001600160401b0380821115620001795762000179620002c2565b604051601f8301601f19908116603f01168101908282118183101715620001a457620001a4620002c2565b81604052838152602092508683858801011115620001c0578485fd5b8491505b83821015620001e35785820183015181830184015290820190620001c4565b83821115620001f457848385830101525b9695505050505050565b6000806000806080858703121562000214578384fd5b84516001600160401b03808211156200022b578586fd5b62000239888389016200014b565b955060208701519150808211156200024f578485fd5b506200025e878288016200014b565b935050604085015160ff8116811462000275578283fd5b6060959095015193969295505050565b6002810460018216806200029a57607f821691505b60208210811415620002bc57634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052604160045260246000fd5b6109b280620002e86000396000f3fe608060405234801561001057600080fd5b50600436106100b45760003560e01c806342966c681161007157806342966c681461014757806370a082311461015a5780638da5cb5b1461016d57806395d89b4114610182578063a9059cbb1461018a578063dd62ed3e1461019d576100b4565b806306fdde03146100b9578063095ea7b3146100d757806318160ddd146100f757806323b872dd1461010c578063313ce5671461011f57806340c10f1914610134575b600080fd5b6100c16101b0565b6040516100ce91906107aa565b60405180910390f35b6100ea6100e536600461074a565b61023e565b6040516100ce919061079f565b6100ff6102a8565b6040516100ce91906108c5565b6100ea61011a36600461070f565b6102ae565b610127610409565b6040516100ce91906108ce565b6100ea61014236600461074a565b610412565b6100ea610155366004610773565b6104ad565b6100ff6101683660046106bc565b610598565b6101756105b3565b6040516100ce919061078b565b6100c16105c2565b6100ea61019836600461074a565b6105cf565b6100ff6101ab3660046106dd565b61067a565b600180546101bd9061090b565b80601f01602080910402602001604051908101604052809291908181526020018280546101e99061090b565b80156102365780601f1061020b57610100808354040283529160200191610236565b820191906000526020600020905b81548152906001019060200180831161021957829003601f168201915b505050505081565b3360008181526006602090815260408083206001600160a01b038716808552925280832085905551919290917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925906102979086906108c5565b60405180910390a350600192915050565b60045481565b6001600160a01b0383166000908152600560205260408120548211156102ef5760405162461bcd60e51b81526004016102e690610855565b60405180910390fd5b6001600160a01b03841660009081526006602090815260408083203384529091529020548211156103325760405162461bcd60e51b81526004016102e690610825565b6001600160a01b0384166000908152600560205260408120805484929061035a9084906108f4565b90915550506001600160a01b038316600090815260056020526040812080548492906103879084906108dc565b90915550506001600160a01b0384166000908152600660209081526040808320338452909152812080548492906103bf9084906108f4565b92505081905550826001600160a01b0316846001600160a01b031660008051602061095d833981519152846040516103f791906108c5565b60405180910390a35060019392505050565b60035460ff1681565b600080546001600160a01b0316331461043d5760405162461bcd60e51b81526004016102e690610883565b816004600082825461044f91906108dc565b90915550506001600160a01b0383166000908152600560205260408120805484929061047c9084906108dc565b90915550506040516001600160a01b0384169060009060008051602061095d833981519152906102979086906108c5565b600080546001600160a01b031633146104d85760405162461bcd60e51b81526004016102e690610883565b600082116104f85760405162461bcd60e51b81526004016102e6906107fd565b336000908152600560205260409020548211156105275760405162461bcd60e51b81526004016102e690610855565b33600090815260056020526040812080548492906105469084906108f4565b92505081905550816004600082825461055f91906108f4565b9091555050604051600090339060008051602061095d833981519152906105879086906108c5565b60405180910390a35060015b919050565b6001600160a01b031660009081526005602052604090205490565b6000546001600160a01b031681565b600280546101bd9061090b565b336000908152600560205260408120548211156105fe5760405162461bcd60e51b81526004016102e690610855565b336000908152600560205260408120805484929061061d9084906108f4565b90915550506001600160a01b0383166000908152600560205260408120805484929061064a9084906108dc565b90915550506040516001600160a01b03841690339060008051602061095d833981519152906102979086906108c5565b6001600160a01b03918216600090815260066020908152604080832093909416825291909152205490565b80356001600160a01b038116811461059357600080fd5b6000602082840312156106cd578081fd5b6106d6826106a5565b9392505050565b600080604083850312156106ef578081fd5b6106f8836106a5565b9150610706602084016106a5565b90509250929050565b600080600060608486031215610723578081fd5b61072c846106a5565b925061073a602085016106a5565b9150604084013590509250925092565b6000806040838503121561075c578182fd5b610765836106a5565b946020939093013593505050565b600060208284031215610784578081fd5b5035919050565b6001600160a01b0391909116815260200190565b901515815260200190565b6000602080835283518082850152825b818110156107d6578581018301518582016040015282016107ba565b818111156107e75783604083870101525b50601f01601f1916929092016040019392505050565b6020808252600e908201526d125b9d985b1a5908185b5bdd5b9d60921b604082015260600190565b602080825260169082015275496e73756666696369656e7420616c6c6f77616e636560501b604082015260600190565b602080825260149082015273496e73756666696369656e742062616c616e636560601b604082015260600190565b60208082526022908201527f4f6e6c7920746865206f776e65722063616e206d696e74206e657720746f6b656040820152616e7360f01b606082015260800190565b90815260200190565b60ff91909116815260200190565b600082198211156108ef576108ef610946565b500190565b60008282101561090657610906610946565b500390565b60028104600182168061091f57607f821691505b6020821081141561094057634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fdfeddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3efa264697066735822122000e20d66bd902d718c1c7a47db990167babac62557d1250481feaaac81c1de9564736f6c63430008010033";

export class SiliquaCoin__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    _name: string,
    _symbol: string,
    _decimals: BigNumberish,
    initialSupply: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<SiliquaCoin> {
    return super.deploy(
      _name,
      _symbol,
      _decimals,
      initialSupply,
      overrides || {}
    ) as Promise<SiliquaCoin>;
  }
  getDeployTransaction(
    _name: string,
    _symbol: string,
    _decimals: BigNumberish,
    initialSupply: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _name,
      _symbol,
      _decimals,
      initialSupply,
      overrides || {}
    );
  }
  attach(address: string): SiliquaCoin {
    return super.attach(address) as SiliquaCoin;
  }
  connect(signer: Signer): SiliquaCoin__factory {
    return super.connect(signer) as SiliquaCoin__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SiliquaCoinInterface {
    return new utils.Interface(_abi) as SiliquaCoinInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SiliquaCoin {
    return new Contract(address, _abi, signerOrProvider) as SiliquaCoin;
  }
}
