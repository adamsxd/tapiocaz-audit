# TapiocaWrapper









## Methods

### createTOFT

```solidity
function createTOFT(address _erc20, bytes _bytecode) external nonpayable
```

Deploy a new TOFT contract. Callable only by the owner.



#### Parameters

| Name | Type | Description |
|---|---|---|
| _erc20 | address | The ERC20 to wrap. |
| _bytecode | bytes | The executable bytecode of the TOFT contract. |

### executeTOFT

```solidity
function executeTOFT(address _toft, bytes _bytecode, bool _revertOnFailure) external payable returns (bool success, bytes result)
```

Execute the `_bytecode` against the `_toft`. Callable only by the owner.



#### Parameters

| Name | Type | Description |
|---|---|---|
| _toft | address | The TOFT contract to execute against. |
| _bytecode | bytes | The executable bytecode of the TOFT contract. |
| _revertOnFailure | bool | Whether to revert on failure. |

#### Returns

| Name | Type | Description |
|---|---|---|
| success | bool | If the execution was successful. |
| result | bytes | The error message if the execution failed. |

### lastTOFT

```solidity
function lastTOFT() external view returns (contract TapiocaOFT)
```

Return the latest TOFT contract deployed on the current chain.




#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | contract TapiocaOFT | undefined |

### mngmtFee

```solidity
function mngmtFee() external view returns (uint256)
```

Management fee for a wrap operation. In BPS.




#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### mngmtFeeFraction

```solidity
function mngmtFeeFraction() external view returns (uint256)
```

Denominator for `mngmtFee`.




#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### owner

```solidity
function owner() external view returns (address)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

### setMngmtFee

```solidity
function setMngmtFee(uint256 _mngmtFee) external nonpayable
```

Set the management fee for a wrap operation.



#### Parameters

| Name | Type | Description |
|---|---|---|
| _mngmtFee | uint256 | The new management fee for a wrap operation. In BPS. |

### setOwner

```solidity
function setOwner(address newOwner) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| newOwner | address | undefined |

### tapiocaOFTLength

```solidity
function tapiocaOFTLength() external view returns (uint256)
```

Return the number of TOFT contracts deployed on the current chain.




#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### tapiocaOFTs

```solidity
function tapiocaOFTs(uint256) external view returns (contract TapiocaOFT)
```

Array of deployed TOFT contracts.



#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | contract TapiocaOFT | undefined |

### tapiocaOFTsByErc20

```solidity
function tapiocaOFTsByErc20(address) external view returns (contract TapiocaOFT)
```

Map of deployed TOFT contracts by ERC20.



#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | contract TapiocaOFT | undefined |



## Events

### OwnerUpdated

```solidity
event OwnerUpdated(address indexed user, address indexed newOwner)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| user `indexed` | address | undefined |
| newOwner `indexed` | address | undefined |



## Errors

### TapiocaWrapper__FailedDeploy

```solidity
error TapiocaWrapper__FailedDeploy()
```

Failed to deploy the TapiocaWrapper contract.




### TapiocaWrapper__MngmtFeeTooHigh

```solidity
error TapiocaWrapper__MngmtFeeTooHigh()
```

The management fee is too high. Currently set to a max of 50 BPS or 0.5%.




### TapiocaWrapper__TOFTExecutionFailed

```solidity
error TapiocaWrapper__TOFTExecutionFailed(bytes message)
```

The TapiocaOFT execution failed.



#### Parameters

| Name | Type | Description |
|---|---|---|
| message | bytes | undefined |

