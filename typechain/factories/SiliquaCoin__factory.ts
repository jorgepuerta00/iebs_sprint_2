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
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
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
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162000de638038062000de6833981016040819052620000349162000189565b6001620000428582620002a3565b506002620000518482620002a3565b506003805460ff191660ff8416179055600481905533600081815260056020908152604080832085905582546001600160a01b03191684178355518481527fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef910160405180910390a3505050506200036f565b634e487b7160e01b600052604160045260246000fd5b600082601f830112620000ec57600080fd5b81516001600160401b0380821115620001095762000109620000c4565b604051601f8301601f19908116603f01168101908282118183101715620001345762000134620000c4565b816040528381526020925086838588010111156200015157600080fd5b600091505b8382101562000175578582018301518183018401529082019062000156565b600093810190920192909252949350505050565b60008060008060808587031215620001a057600080fd5b84516001600160401b0380821115620001b857600080fd5b620001c688838901620000da565b95506020870151915080821115620001dd57600080fd5b50620001ec87828801620000da565b935050604085015160ff811681146200020457600080fd5b6060959095015193969295505050565b600181811c908216806200022957607f821691505b6020821081036200024a57634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156200029e57600081815260208120601f850160051c81016020861015620002795750805b601f850160051c820191505b818110156200029a5782815560010162000285565b5050505b505050565b81516001600160401b03811115620002bf57620002bf620000c4565b620002d781620002d0845462000214565b8462000250565b602080601f8311600181146200030f5760008415620002f65750858301515b600019600386901b1c1916600185901b1785556200029a565b600085815260208120601f198616915b8281101562000340578886015182559484019460019091019084016200031f565b50858210156200035f5787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b610a67806200037f6000396000f3fe608060405234801561001057600080fd5b50600436106100cf5760003560e01c806342966c681161008c57806395d89b411161006657806395d89b41146101d8578063a9059cbb146101e0578063dd62ed3e146101f3578063f2fde38b1461022c57600080fd5b806342966c681461017157806370a08231146101845780638da5cb5b146101ad57600080fd5b806306fdde03146100d4578063095ea7b3146100f257806318160ddd1461011557806323b872dd1461012c578063313ce5671461013f57806340c10f191461015e575b600080fd5b6100dc610241565b6040516100e991906107ef565b60405180910390f35b610105610100366004610854565b6102cf565b60405190151581526020016100e9565b61011e60045481565b6040519081526020016100e9565b61010561013a36600461087e565b61033c565b60035461014c9060ff1681565b60405160ff90911681526020016100e9565b61010561016c366004610854565b6104c2565b61010561017f3660046108ba565b61055d565b61011e6101923660046108d3565b6001600160a01b031660009081526005602052604090205490565b6000546101c0906001600160a01b031681565b6040516001600160a01b0390911681526020016100e9565b6100dc610664565b6101056101ee366004610854565b610671565b61011e6102013660046108f5565b6001600160a01b03918216600090815260066020908152604080832093909416825291909152205490565b61023f61023a3660046108d3565b61071c565b005b6001805461024e90610928565b80601f016020809104026020016040519081016040528092919081815260200182805461027a90610928565b80156102c75780601f1061029c576101008083540402835291602001916102c7565b820191906000526020600020905b8154815290600101906020018083116102aa57829003601f168201915b505050505081565b3360008181526006602090815260408083206001600160a01b038716808552925280832085905551919290917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259061032a9086815260200190565b60405180910390a35060015b92915050565b6001600160a01b03831660009081526005602052604081205482111561037d5760405162461bcd60e51b815260040161037490610962565b60405180910390fd5b6001600160a01b03841660009081526006602090815260408083203384529091529020548211156103e95760405162461bcd60e51b8152602060048201526016602482015275496e73756666696369656e7420616c6c6f77616e636560501b6044820152606401610374565b6001600160a01b038416600090815260056020526040812080548492906104119084906109a6565b90915550506001600160a01b0383166000908152600560205260408120805484929061043e9084906109b9565b90915550506001600160a01b0384166000908152600660209081526040808320338452909152812080548492906104769084906109a6565b92505081905550826001600160a01b0316846001600160a01b0316600080516020610a12833981519152846040516104b091815260200190565b60405180910390a35060019392505050565b600080546001600160a01b031633146104ed5760405162461bcd60e51b8152600401610374906109cc565b81600460008282546104ff91906109b9565b90915550506001600160a01b0383166000908152600560205260408120805484929061052c9084906109b9565b90915550506040518281526001600160a01b03841690600090600080516020610a128339815191529060200161032a565b600080546001600160a01b031633146105885760405162461bcd60e51b8152600401610374906109cc565b600082116105c95760405162461bcd60e51b815260206004820152600e60248201526d125b9d985b1a5908185b5bdd5b9d60921b6044820152606401610374565b336000908152600560205260409020548211156105f85760405162461bcd60e51b815260040161037490610962565b33600090815260056020526040812080548492906106179084906109a6565b92505081905550816004600082825461063091906109a6565b90915550506040518281526000903390600080516020610a128339815191529060200160405180910390a35060015b919050565b6002805461024e90610928565b336000908152600560205260408120548211156106a05760405162461bcd60e51b815260040161037490610962565b33600090815260056020526040812080548492906106bf9084906109a6565b90915550506001600160a01b038316600090815260056020526040812080548492906106ec9084906109b9565b90915550506040518281526001600160a01b038416903390600080516020610a128339815191529060200161032a565b6000546001600160a01b031633146107465760405162461bcd60e51b8152600401610374906109cc565b6001600160a01b0381166107945760405162461bcd60e51b8152602060048201526015602482015274496e76616c6964206f776e6572206164647265737360581b6044820152606401610374565b600080546040516001600160a01b03808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600080546001600160a01b0319166001600160a01b0392909216919091179055565b600060208083528351808285015260005b8181101561081c57858101830151858201604001528201610800565b506000604082860101526040601f19601f8301168501019250505092915050565b80356001600160a01b038116811461065f57600080fd5b6000806040838503121561086757600080fd5b6108708361083d565b946020939093013593505050565b60008060006060848603121561089357600080fd5b61089c8461083d565b92506108aa6020850161083d565b9150604084013590509250925092565b6000602082840312156108cc57600080fd5b5035919050565b6000602082840312156108e557600080fd5b6108ee8261083d565b9392505050565b6000806040838503121561090857600080fd5b6109118361083d565b915061091f6020840161083d565b90509250929050565b600181811c9082168061093c57607f821691505b60208210810361095c57634e487b7160e01b600052602260045260246000fd5b50919050565b602080825260149082015273496e73756666696369656e742062616c616e636560601b604082015260600190565b634e487b7160e01b600052601160045260246000fd5b8181038181111561033657610336610990565b8082018082111561033657610336610990565b60208082526025908201527f4f6e6c7920746865206f776e65722063616e2063616c6c20746869732066756e60408201526431ba34b7b760d91b60608201526080019056feddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3efa264697066735822122018b0f8ca07d76e351f1bc08b10f15b1873521b841cbafd787fcb19814d3c694f64736f6c63430008150033";

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
