// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.21;

import "./SiliquaCoin.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract LoanPlatform {
  using SafeERC20 for IERC20;

  SiliquaCoin public token;
  address public owner;
  uint256 public interestRate;
  uint256 public totalLoans;

  struct Loan {
    uint256 loanId;
    address borrower;
    uint256 amount;
    uint256 interest;
    uint256 totalAmount;
    uint256 repaidAmount;
    bool active;
  }

  mapping(address => Loan) public loans;

  event LoanCreated(
    address indexed borrower,
    uint256 indexed loanId,
    uint256 amount,
    uint256 totalAmount
  );
  event LoanRepaid(
    address indexed borrower,
    uint256 indexed loanId,
    uint256 repaidAmount
  );

  constructor(address _tokenAddress, uint256 _interestRate) {
    token = SiliquaCoin(_tokenAddress);
    owner = msg.sender;
    interestRate = _interestRate;
    totalLoans = 0;
  }

  modifier onlyOwner() {
    require(msg.sender == owner, "Only the owner can call this function");
    _;
  }

  function setInterestRate(uint256 _newInterestRate) external onlyOwner {
    interestRate = _newInterestRate;
  }

  function requestLoan(uint256 _amount) external {
    require(!loans[msg.sender].active, "Active loan exists");

    uint256 interest = (_amount * interestRate) / 100;
    uint256 totalAmount = _amount + interest;

    IERC20(token).safeTransferFrom(owner, msg.sender, _amount);

    uint256 loanId = uint256(
      keccak256(abi.encodePacked(msg.sender, block.timestamp, _amount))
    );

    loans[msg.sender] = Loan({
      loanId: loanId,
      borrower: msg.sender,
      amount: _amount,
      interest: interest,
      totalAmount: totalAmount,
      repaidAmount: 0,
      active: true
    });

    totalLoans += 1;

    emit LoanCreated(msg.sender, loanId, _amount, totalAmount);
  }

  function repayLoan(uint256 _amount) external {
    require(loans[msg.sender].active, "No active loan");
    require(
      _amount <= loans[msg.sender].totalAmount,
      "Invalid repayment amount"
    );

    IERC20(token).safeTransferFrom(msg.sender, owner, _amount);

    if (loans[msg.sender].amount != 0) {
      loans[msg.sender].amount -= _amount;
    }
    loans[msg.sender].repaidAmount += _amount;
    loans[msg.sender].totalAmount -= _amount;

    if (loans[msg.sender].totalAmount == 0) {
      loans[msg.sender].active = false;
      emit LoanRepaid(
        loans[msg.sender].borrower,
        loans[msg.sender].loanId,
        loans[msg.sender].repaidAmount
      );
    }
  }
}
