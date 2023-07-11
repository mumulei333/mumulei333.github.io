---

title: Foundry

date: 2023-07-11

isShowComments: true

tags:

- web3

- Solidity

- Foundry

- Hardhat

categories:

- 记录

---




## 介绍
### [Foundry](https://github.com/gakonst/foundry)描述
**Foundry是用 Rust 写成的以太坊智能合约开发工具，主要三个核心工具**：
- `forge`: 一套以太坊智能合约的测试框架
- `cast`: 一组与 EVM 生态相关的实用工具，包括编码、解码、与智能合约交互等功能
- `Anvil`: 本地以太坊节点
### 优势
- 可直接使用solidity编写测试用例，不像市面上其他框架如Truffle,Waffle,Hardhat等框架还需要具备一定的前端框架知识
- 能够进行fuzz testing测试，并且输出详细的测试信息
- 运行速度快
### 缺点
- foundry在部署项目时目前还没有像Hardhat便捷

## 安装环境
### 安装Foundryup
这里使用的是Foundryup安装方式，Foundryup是 Foundry 工具链安装程序。[您可以在这里](https://github.com/foundry-rs/foundry/blob/master/foundryup/README.md)找到更多相关信息，以下命令就是安装Foundryup的指令
```bash
curl -L https://foundry.paradigm.xyz | bash
```
### 使用Foundryup 安装 forge, cast, anvil, chisel
查看使用安装成功
```shell
foundryup -v
```
显示安装成功后直接执行`foundryup`命令就会自动安装最新工具包`forge`、`cast`、`anvil`和`chisel`
```Shell
foundryup
```
> ℹ️**注意**
> 如果您使用的是 Windows，则需要安装并使用[Git BASH](https://gitforwindows.org/)或[WSL](https://learn.microsoft.com/en-us/windows/wsl/install)作为终端，因为 Foundryup 目前不支持 Powershell 或 Cmd；
> 如果是mac环境的话可能还需要再使用`brew`安装一个依赖包
```shell
brew install libusb
```
工具包安装成功后执行`forge`查看工具包是否已经安装完成
```Shell
forge
```

## 使用forge
### forge 新建项目
```Shell
forge init mumu_project
```
> **注意**
> 该命令会为你创建一个初始项目，并且默认会为你上传到git。所有如果您只是想生成项目可以在指令后面加上`--no-git`如下
```Shell
forge init mumu_project --no-git
```
创建后进入项目
```Shell
➜  cd mumu_project 
➜  mumu_project git:(main) ✗ tree  -L 2 
.
├── foundry.toml
├── lib
│   └── forge-std
├── script
│   └── Counter.s.sol
├── src
│   └── Counter.sol
└── test
    └── Counter.t.sol
```
创建出来的项目由默认模板安装了一个依赖项：Forge 标准库。这是用于 Foundry 项目的首选测试库。此外，该模板还附带一个空的启动合约和一个简单的测试。
项目中：
- `foundry.toml` 是配置文件
    - `forge config --basic` 可查看当前的基础设置
    - `forge config` 可查看当前所有设置
- `src` 下面放你写的合约
- `test` 下面放合约对应的测试文件
- `script` 下面放自定义测试通用文件以及部署脚本
- `lib` 目录里放开发依赖的库
    - 新建项目安装了测试需要的 forge-std 库，将 ds-test 即成到其中
### VSCode 集成
Foundry 支持 VSCode 的集成开发，配置只需要进入项目目录然后执行：
```Shell
cd mumu_project
forge remappings > remappings.txt
```
### 编译合约
```Shell
➜  mumu_project git:(main) ✗ forge build
[⠔] Compiling...
[⠑] Compiling 22 files with 0.8.20
[⠆] Solc 0.8.20 finished in 8.40s
Compiler run successful!
```
编译后的合约会在 `out` 目录里
### 引用第三方库
安装第三方库 - OpenZeppelin：
```Shell
forge install openzeppelin/openzeppelin-contracts
```
引入后项目中合约就可以正常调用第三方库的合约了
### 测试合约
```Shell
➜  mumu_project git:(main) ✗ forge test 
[⠆] Compiling...
No files changed, compilation skipped

Running 2 tests for test/Counter.t.sol:CounterTest
[PASS] testIncrement() (gas: 28334)
[PASS] testSetNumber(uint256) (runs: 256, μ: 27476, ~: 28409)
```
通常测试文件一般都是按约定放置在`test/`并以`.t.sol`后缀的合约中。运行以上`forge test `指令会将整个项目中以`test` 开头的函数的合约作为测试合约运行
- `setUp()` 函数会用作基本设置，在每个测试用例前运行
- `test`: 前缀为 的函数`test`作为测试用例运行
- `testFail`：开头的函数同样被用作测试用例，但当其 revert 时才视为测试通过
这里大家可以注意到`[PASS] testSetNumber(uint256) (runs: 256, μ: 27476, ~: 28409)`在测试该函数时与单元测试相比，模糊测试的总结有点不同：
- `runs` 是指模糊器测试的场景数量。默认情况下，模糊器将生成 256 个场景，但用户可以通过在配置文件(`foundry.toml`)中的设置`[fuzz]`参数和其他测试执行参数
- `μ`（希腊字母 mu）是所有模糊运行中使用的平均气体
- `~`（波浪号）是所有模糊运行中使用的中位数气体
```toml
[profile.default]
src = "src"
out = "out"
libs = ["lib"]

[fuzz]
runs = 30
```

**当然你可以通过传递过滤器来运行特定测试**
```Shell
➜  mumu_project git:(main) ✗ forge test --match-contract CounterTest --match-test testSetNumber
[⠢] Compiling...
No files changed, compilation skipped

Running 1 test for test/Counter.t.sol:CounterTest
[PASS] testSetNumber(uint256) (runs: 256, μ: 28098, ~: 28409)
Test result: ok. 1 passed; 0 failed; 0 skipped; finished in 36.85ms
```
当然也可以排除过滤`--no-match-contract`和`--no-match-test`
```Shell
➜  mumu_project git:(main) ✗ forge test --no-match-test testSetNumber 
[⠆] Compiling...
No files changed, compilation skipped

Running 1 test for test/Counter.t.sol:CounterTest
[PASS] testIncrement() (gas: 28334)
Test result: ok. 1 passed; 0 failed; 0 skipped; finished in 1.04ms
```
还可以使用路径的方法去进行过滤测试
```Shell
➜  mumu_project git:(main) ✗ forge test --match-path test/Counter.t.sol
[⠒] Compiling...
[⠊] Compiling 1 files with 0.8.20
[⠒] Solc 0.8.20 finished in 1.83s
Compiler run successful!

Running 2 tests for test/CounterA.t.sol:ContractBTest
[PASS] testFail_Subtract43() (gas: 2402)
[PASS] test_NumberIs42() (gas: 2324)
Test result: ok. 2 passed; 0 failed; 0 skipped; finished in 880.27µs
```
也可以使用路径的排除参数`--no-match-path`
**使用`-v flag`**
默认行为`forge test`是仅显示通过和失败测试的摘要。您可以通过增加详细程度（使用标志`-v`）来控制此行为。每个详细级别都会添加更多信息：
- **级别 2 ( `-vv`)**：还显示测试期间发出的日志。这包括测试中的断言错误，显示预期与实际等信息。
- **级别 3 ( `-vvv`)**：还显示失败测试的堆栈跟踪。
- **级别 4 ( `-vvvv`)**：显示所有测试的堆栈跟踪，并显示失败测试的设置跟踪。
- **级别 5 ( `-vvvvv`)**：始终显示堆栈跟踪和设置跟踪。
```Shell
➜  mumu_project git:(main) ✗ forge test -vvvv                                                  
[⠒] Compiling...
No files changed, compilation skipped

Running 2 tests for test/CounterA.t.sol:ContractBTest
[PASS] testFail_Subtract43() (gas: 2402)
Traces:
  [2402] ContractBTest::testFail_Subtract43() 
    └─ ← "Arithmetic over/underflow"

[PASS] test_NumberIs42() (gas: 2324)
Traces:
  [2324] ContractBTest::test_NumberIs42() 
    └─ ← ()

Test result: ok. 2 passed; 0 failed; 0 skipped; finished in 41.91ms

Running 2 tests for test/Counter.t.sol:CounterTest
[PASS] testIncrement() (gas: 28334)
Traces:
  [28334] CounterTest::testIncrement() 
    ├─ [22340] Counter::increment() 
    │   └─ ← ()
    ├─ [283] Counter::number() [staticcall]
    │   └─ ← 1
    └─ ← ()

[PASS] testSetNumber(uint256) (runs: 256, μ: 27553, ~: 28409)
Traces:
  [28409] CounterTest::testSetNumber(263391885157007808593717 [2.633e23]) 
    ├─ [22290] Counter::setNumber(263391885157007808593717 [2.633e23]) 
    │   └─ ← ()
    ├─ [283] Counter::number() [staticcall]
    │   └─ ← 263391885157007808593717 [2.633e23]
    └─ ← ()

Test result: ok. 2 passed; 0 failed; 0 skipped; finished in 41.91ms
```
使用`forge test --gas-report`监测测试合约中合约的gas数据
```Shell
➜  mumu_project git:(main) ✗ forge test --gas-report
[⠒] Compiling...
No files changed, compilation skipped

Running 2 tests for test/CounterA.t.sol:ContractBTest
[PASS] testFail_Subtract43() (gas: 2402)
[PASS] test_NumberIs42() (gas: 2324)
Test result: ok. 2 passed; 0 failed; 0 skipped; finished in 356.47µs

Running 2 tests for test/Counter.t.sol:CounterTest
[PASS] testIncrement() (gas: 28334)
[PASS] testSetNumber(uint256) (runs: 256, μ: 27787, ~: 28409)
Test result: ok. 2 passed; 0 failed; 0 skipped; finished in 46.53ms
| src/Counter.sol:Counter contract |                 |       |        |       |         |
|----------------------------------|-----------------|-------|--------|-------|---------|
| Deployment Cost                  | Deployment Size |       |        |       |         |
| 49499                            | 278             |       |        |       |         |
| Function Name                    | min             | avg   | median | max   | # calls |
| increment                        | 22340           | 22340 | 22340  | 22340 | 1       |
| number                           | 283             | 283   | 283    | 283   | 2       |
| setNumber                        | 2390            | 9023  | 2390   | 22290 | 3       |
```
> **注意** 这里有两个测试合约文件用例，但是只有`Counter.t.sol`测试文件中有实际调用到了合约，所以只会打印有实际调用合约的

**forge 支持在 forked 以太环境上进行测试**
```Shell
forge test --fork-url <your_rpc_url>
```
以及指定某个环境上的某个模块测试
``` Shell
forge test --fork-url <your_rpc_url> --fork-block-number 1
```

### 部署并验证合约
#### solidity script
Solidity script是一种使用 Solidity 声明式部署合约的方法，而不是使用限制更多、用户友好性较差的`forge create`命令。他类似于Hardhat框架编写的部署脚本，只不过Hardhat使用的是JavaScript或TypeScript，而且他直接使用的是solidity，大大提高了开发人员对合约的专注程度。

**`forge script` 工作步骤主要分为四个阶段**
1. **本地模拟** - 合约脚本在本地evm中运行。如果提供了rpc/fork url，它将在该上下文中执行脚本。任何来自`vm.broadcast`或`vm.startBroadcast`的外部调用(不是静态的，也不是内部的)都将被追加到列表中。
2. **链上模拟** - 可选。如果提供了 rpc/fork url，那么它将在这里顺序执行上一阶段收集的所有事务。
3. **广播** - 可选。如果命令行添加了`--broadcast`指令，并且前面的阶段已经成功，那么它将广播在步骤1中收集的事务。并在步骤2中进行模拟。
4. **验证** - 可选。如果命令行添加了`--verify`指令，并提供了区块链浏览器的API密钥，和前面的阶段已经成功，它将尝试验证已经部署的合约(例如etherscan)。

#### 创建项目
接下来我们将创建一个示例项目，以下[源代码](https://github.com/mumulei333/foundry-nft)
```Shell
forge init foundry-nft
# Enter the project
cd foundry-nft
```
在项目根目录下添加项目`.env.example`文件
```env
ANVIL_RPC_URL=http://localhost:8545
MAINNET_RPC_URL=https://mainnet.infura.io/v3/xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
GOERLI_RPC_URL=https://goerli.infura.io/v3/xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
PRIVATE_KEY=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
ETHERSCAN_API_KEY=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```
添加项目需要使用到的第三方依赖库
```Shell
forge install transmissions11/solmate Openzeppelin/openzeppelin-contracts --no-git
```
Foundry 支持 VSCode 的集成开发
```Shell
forge remappings > remappings.txt
```
在项目`src`下添加`FoundryNFT.sol`合约
```solidity

// SPDX-License-Identifier: UNLICENSED

pragma solidity >=0.8.10;

  

import {ERC721} from "solmate/tokens/ERC721.sol";

import {Strings} from "openzeppelin-contracts/contracts/utils/Strings.sol";

import {Ownable} from "openzeppelin-contracts/contracts/access/Ownable.sol";

  

error MintPriceNotPaid();

error MaxSupply();

error NonExistentTokenURI();

error WithdrawTransfer();

  

contract FoundryNFT is ERC721, Ownable {

using Strings for uint256;

string public baseURI;

uint256 public currentTokenId;

uint256 public constant TOTAL_SUPPLY = 10_000;

uint256 public constant MINT_PRICE = 0.08 ether;

  

constructor(

string memory _name,

string memory _symbol,

string memory _baseURI

) ERC721(_name, _symbol) Ownable(msg.sender) {

baseURI = _baseURI;

}

  

function mintTo(address recipient) public payable returns (uint256) {

if (msg.value != MINT_PRICE) {

revert MintPriceNotPaid();

}

uint256 newTokenId = ++currentTokenId;

if (newTokenId > TOTAL_SUPPLY) {

revert MaxSupply();

}

_safeMint(recipient, newTokenId);

return newTokenId;

}

  

function tokenURI(uint256 tokenId)

public

view

virtual

override

returns (string memory)

{

if (ownerOf(tokenId) == address(0)) {

revert NonExistentTokenURI();

}

return

bytes(baseURI).length > 0

? string(abi.encodePacked(baseURI, tokenId.toString()))

: "";

}

  

function withdrawPayments(address payable payee) external onlyOwner {

uint256 balance = address(this).balance;

(bool transferTx, ) = payee.call{value: balance}("");

if (!transferTx) {

revert WithdrawTransfer();

}

}

}
```
在项目`srcipt`下添加`DeployFoundryNFT.s.sol`部署脚本
```solidity
//SPDX-License-Identifier: UNLICENSED

pragma solidity >=0.8.10;

  

import { Script, console } from "forge-std/Script.sol";

import { FoundryNFT } from "../src/FoundryNFT.sol";

  

contract DeployFoundryNFT is Script {

function run() external {

  

address deployer = vm.addr(vm.envUint("PRIVATE_KEY"));

console.log("The Deployer address:", deployer);

console.log("Balance is:", deployer.balance);

  

vm.startBroadcast(deployer);

FoundryNFT nft = new FoundryNFT("FoundryNFT", "FNFT", "ipfs://QmeSjSinHpPnmXmspMjwiXyN6zS4E9zccariGR3jxcaWtq/");

vm.stopBroadcast();

  

console.log("FoundryNFT deployed at:", address(nft));

}

}
```
在项目`test`下添加`FoundryNFTTest.t.sol`测试脚本
```solidity
// SPDX-License-Identifier: UNLICENSED

pragma solidity >=0.8.10;

  

import "forge-std/Test.sol";

import { FoundryNFT } from "../src/FoundryNFT.sol";

  

error SendEtherFailed();

  

contract FoundryNFTTest is Test {

FoundryNFT f_nft;

  

function setUp() public {

f_nft = new FoundryNFT("FoundryNFT", "FNFT", "ipfs://QmeSjSinHpPnmXmspMjwiXyN6zS4E9zccariGR3jxcaWtq/");

}

  

function testMintTo(address recipient) public {

vm.deal(recipient, 1 ether);

vm.prank(recipient);

f_nft.mintTo{value: 0.08 ether}(recipient);

assertEq("ipfs://QmeSjSinHpPnmXmspMjwiXyN6zS4E9zccariGR3jxcaWtq/1", f_nft.tokenURI(1));

}

  

function testWithdrawPayments() public {

address owner = f_nft.owner();

console.log("The Deployer address:", owner);

address recipient = address(3);

vm.deal(recipient, 1 ether);

vm.prank(recipient);

console.log("The recipient address:", recipient);

console.log("recipient Balance is:", recipient.balance);

  

f_nft.mintTo{value: 0.08 ether}(recipient);

console.log("The f_nft url:", f_nft.tokenURI(1));

  

vm.prank(owner);

f_nft.withdrawPayments(payable(recipient));

assertEq(1 ether, recipient.balance);

}

  

function testFailMintTo(address recipient) public {

uint256 balance = recipient.balance;

vm.assume(balance < 0.08 ether);

vm.prank(recipient);

f_nft.mintTo{value: 0.08 ether}(recipient);

}

  

function testFailWithdrawPayments(address recipient) public {

vm.assume(recipient != f_nft.owner());

vm.prank(recipient);

f_nft.withdrawPayments(payable(recipient));

}

}
```
编译项目确保项目一切正常
```Shell
forge build
```
#### 环境配置
生成环境文件，Foundry 会自动加载`.env`项目目录中的文件
```Shell
cp .env.example .env
```
在项目根目录下找到`foundry.toml`文件并在其添加一下配置
```toml
[rpc_endpoints]
goerli = "${GOERLI_RPC_URL}"

[etherscan]
goerli = { key = "${ETHERSCAN_API_KEY}" }
```
准备少量的测试费用，这里使用的是goerli测试网，没有的可以在这里领取一些[测试水龙头](https://faucet.paradigm.xyz/)
#### 部署验证开源合约
在项目根目录下执行以下命令
加载 .env 文件中的变量
```Shell
source .env
```
部署并验证我们的合约
```Shell
forge script DeployFoundryNFT --rpc-url $GOERLI_RPC_URL --broadcast --private-key $PRIVATE_KEY --verify -vvvv
```
其实该命令就是对应前面说过的`forge script` 的四个阶段
```Shell
# 本地模拟
forge script DeployFoundryNFT

# 链上部署模拟
forge script DeployFoundryNFT --rpc-url $GOERLI_RPC_URL

# 链上部署模拟并广播(打包上链)，如果需要广播那么必须提供私钥
forge script DeployFoundryNFT --rpc-url $GOERLI_RPC_URL --broadcast --private-key $PRIVATE_KEY

# 链上部署并广播并验证开源
forge script DeployFoundryNFT --rpc-url $GOERLI_RPC_URL --broadcast --private-key $PRIVATE_KEY --verify
```
到这一步就已经完成我们的合约部署并验证开源到区块链浏览器了！

#### 部署时可能会遇见的问题

**问题1**:
```Shell
Error: 
No associated wallet for addresses: {0xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx}. Unlocked wallets: []
```
原因是需要在部署命令中指定`--private-key` 

**问题2**:
```Shell
Error: 
error sending request for url (https://api-goerli.etherscan.io/api/?apikey=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx&module=contract&action=getabi&address=0x7Dd5E046B3acDfc20395F807eA04F8e403FbFCEE): error trying to connect: tcp connect error: Operation timed out (os error 60)

Context:
- Error #0: error trying to connect: tcp connect error: Operation timed out (os error 60)
- Error #1: tcp connect error: Operation timed out (os error 60)
- Error #2: Operation timed out (os error 60)
```
原因是请求验证合约时区块链浏览器API网络请求不通，需要配置代理并执行以下命令
```Shell
export https_proxy=http://127.0.0.1:7890 http_proxy=http://127.0.0.1:7890 all_proxy=socks5://127.0.0.1:7890
```
