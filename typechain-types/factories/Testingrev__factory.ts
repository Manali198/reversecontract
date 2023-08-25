/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../common";
import type { Testingrev, TestingrevInterface } from "../Testingrev";

const _abi = [
  {
    inputs: [],
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
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Burn",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
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
    name: "Mint",
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
    inputs: [],
    name: "Pause",
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
    anonymous: false,
    inputs: [],
    name: "Unpause",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
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
        name: "_spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
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
        name: "_value",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
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
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
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
    name: "pause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "paused",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
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
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_from",
        type: "address",
      },
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
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
  {
    inputs: [],
    name: "unpause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60c0604052600b60808190526a2a32b9ba34b733902932bb60a91b60a09081526200002e9160009190620000c8565b50604080518082019091526002808252612a2960f11b60209092019182526200005a91600191620000c8565b506002805460ff1916601217908190556200007a9060ff16600a620001bb565b6200008990620f4240620002b0565b6003553480156200009957600080fd5b50600680546001600160a01b031916339081179091556003546000918252600460205260409091205562000325565b828054620000d690620002d2565b90600052602060002090601f016020900481019282620000fa576000855562000145565b82601f106200011557805160ff191683800117855562000145565b8280016001018555821562000145579182015b828111156200014557825182559160200191906001019062000128565b506200015392915062000157565b5090565b5b8082111562000153576000815560010162000158565b80825b6001808611620001825750620001b2565b8187048211156200019757620001976200030f565b80861615620001a557918102915b9490941c93800262000171565b94509492505050565b6000620001cc6000198484620001d3565b9392505050565b600082620001e457506001620001cc565b81620001f357506000620001cc565b81600181146200020c576002811462000217576200024b565b6001915050620001cc565b60ff8411156200022b576200022b6200030f565b6001841b9150848211156200024457620002446200030f565b50620001cc565b5060208310610133831016604e8410600b841016171562000283575081810a838111156200027d576200027d6200030f565b620001cc565b6200029284848460016200016e565b808604821115620002a757620002a76200030f565b02949350505050565b6000816000190483118215151615620002cd57620002cd6200030f565b500290565b600281046001821680620002e757607f821691505b602082108114156200030957634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b610cbf80620003356000396000f3fe608060405234801561001057600080fd5b50600436106101005760003560e01c80635c975abb1161009757806395d89b411161006657806395d89b41146101e8578063a9059cbb146101f0578063dd62ed3e14610203578063f2fde38b1461021657610100565b80635c975abb146101a357806370a08231146101b85780638456cb59146101cb5780638da5cb5b146101d357610100565b8063313ce567116100d3578063313ce567146101605780633f4ba83a1461017557806340c10f191461017d57806342966c681461019057610100565b806306fdde0314610105578063095ea7b31461012357806318160ddd1461013857806323b872dd1461014d575b600080fd5b61010d610229565b60405161011a9190610a8d565b60405180910390f35b610136610131366004610a2d565b6102b7565b005b610140610350565b60405161011a9190610bd2565b61013661015b3660046109f2565b610356565b6101686104cd565b60405161011a9190610bdb565b6101366104d6565b61013661018b366004610a2d565b610538565b61013661019e366004610a56565b610641565b6101ab61073f565b60405161011a9190610a82565b6101406101c636600461099f565b61074f565b610136610761565b6101db6107c9565b60405161011a9190610a6e565b61010d6107d8565b6101366101fe366004610a2d565b6107e5565b6101406102113660046109c0565b6108ba565b61013661022436600461099f565b6108d7565b6000805461023690610c18565b80601f016020809104026020016040519081016040528092919081815260200182805461026290610c18565b80156102af5780601f10610284576101008083540402835291602001916102af565b820191906000526020600020905b81548152906001019060200180831161029257829003601f168201915b505050505081565b600654600160a01b900460ff16156102ea5760405162461bcd60e51b81526004016102e190610b76565b60405180910390fd5b3360008181526005602090815260408083206001600160a01b03871680855292529182902084905590519091907f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92590610344908590610bd2565b60405180910390a35050565b60035481565b600654600160a01b900460ff16156103805760405162461bcd60e51b81526004016102e190610b76565b6001600160a01b0383166000908152600460205260409020548111156103b85760405162461bcd60e51b81526004016102e190610ba4565b6001600160a01b03831660009081526005602090815260408083203384529091529020548111156103fb5760405162461bcd60e51b81526004016102e190610ae0565b6001600160a01b03831660009081526004602052604081208054839290610423908490610c01565b90915550506001600160a01b03821660009081526004602052604081208054839290610450908490610be9565b90915550506001600160a01b038316600090815260056020908152604080832033845290915281208054839290610488908490610c01565b92505081905550816001600160a01b0316836001600160a01b0316600080516020610c6a833981519152836040516104c09190610bd2565b60405180910390a3505050565b60025460ff1681565b6006546001600160a01b031633146105005760405162461bcd60e51b81526004016102e190610b35565b6006805460ff60a01b191690556040517f7805862f689e2f13df9f062ff482ad3ad112aca9e0847911ed832e158c525b3390600090a1565b6006546001600160a01b031633146105625760405162461bcd60e51b81526004016102e190610b35565b6001600160a01b0382166105885760405162461bcd60e51b81526004016102e190610b0c565b806003600082825461059a9190610be9565b90915550506001600160a01b038216600090815260046020526040812080548392906105c7908490610be9565b92505081905550816001600160a01b03167f0f6798a560793a54c3bcfe86a93cde1e73087d944c0ea20544137d4121396885826040516106079190610bd2565b60405180910390a2816001600160a01b031660006001600160a01b0316600080516020610c6a833981519152836040516103449190610bd2565b600654600160a01b900460ff161561066b5760405162461bcd60e51b81526004016102e190610b76565b3360009081526004602052604090205481111561069a5760405162461bcd60e51b81526004016102e190610ba4565b33600090815260046020526040812080548392906106b9908490610c01565b9250508190555080600360008282546106d29190610c01565b909155505060405133907fcc16f5dbb4873280815c1ee09dbd06736cffcc184412cf7a71a0fdb75d397ca590610709908490610bd2565b60405180910390a26040516000903390600080516020610c6a83398151915290610734908590610bd2565b60405180910390a350565b600654600160a01b900460ff1681565b60046020526000908152604090205481565b6006546001600160a01b0316331461078b5760405162461bcd60e51b81526004016102e190610b35565b6006805460ff60a01b1916600160a01b1790556040517f6985a02210a168e66602d3235cb6db0e70f92b3ba4d376a33c0f3d9434bff62590600090a1565b6006546001600160a01b031681565b6001805461023690610c18565b600654600160a01b900460ff161561080f5760405162461bcd60e51b81526004016102e190610b76565b3360009081526004602052604090205481111561083e5760405162461bcd60e51b81526004016102e190610ba4565b336000908152600460205260408120805483929061085d908490610c01565b90915550506001600160a01b0382166000908152600460205260408120805483929061088a908490610be9565b90915550506040516001600160a01b038316903390600080516020610c6a83398151915290610344908590610bd2565b600560209081526000928352604080842090915290825290205481565b6006546001600160a01b031633146109015760405162461bcd60e51b81526004016102e190610b35565b6001600160a01b0381166109275760405162461bcd60e51b81526004016102e190610b0c565b6006546040516001600160a01b038084169216907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a3600680546001600160a01b0319166001600160a01b0392909216919091179055565b80356001600160a01b038116811461099a57600080fd5b919050565b6000602082840312156109b0578081fd5b6109b982610983565b9392505050565b600080604083850312156109d2578081fd5b6109db83610983565b91506109e960208401610983565b90509250929050565b600080600060608486031215610a06578081fd5b610a0f84610983565b9250610a1d60208501610983565b9150604084013590509250925092565b60008060408385031215610a3f578182fd5b610a4883610983565b946020939093013593505050565b600060208284031215610a67578081fd5b5035919050565b6001600160a01b0391909116815260200190565b901515815260200190565b6000602080835283518082850152825b81811015610ab957858101830151858201604001528201610a9d565b81811115610aca5783604083870101525b50601f01601f1916929092016040019392505050565b602080825260129082015271105b1b1bddd85b98d948195e18d95959195960721b604082015260600190565b6020808252600f908201526e496e76616c6964206164647265737360881b604082015260600190565b60208082526021908201527f4f6e6c79206f776e65722063616e2063616c6c20746869732066756e6374696f6040820152603760f91b606082015260800190565b602080825260149082015273151c985b9cd9995c9cc8185c99481c185d5cd95960621b604082015260600190565b602080825260149082015273496e73756666696369656e742062616c616e636560601b604082015260600190565b90815260200190565b60ff91909116815260200190565b60008219821115610bfc57610bfc610c53565b500190565b600082821015610c1357610c13610c53565b500390565b600281046001821680610c2c57607f821691505b60208210811415610c4d57634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fdfeddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3efa264697066735822122041e7b8e964897eafd76b799f8dcdbfae17119271d72a646463a7ff61f5ad270c64736f6c63430008000033";

type TestingrevConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TestingrevConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Testingrev__factory extends ContractFactory {
  constructor(...args: TestingrevConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
      Testingrev & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): Testingrev__factory {
    return super.connect(runner) as Testingrev__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TestingrevInterface {
    return new Interface(_abi) as TestingrevInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): Testingrev {
    return new Contract(address, _abi, runner) as unknown as Testingrev;
  }
}
