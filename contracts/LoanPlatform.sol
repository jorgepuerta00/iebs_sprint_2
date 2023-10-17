// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.1;

import "./SiliquaCoin.sol";

contract LoanPlatform {
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

  mapping(uint256 => Loan) public loans;

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

  function setInterestRate(uint256 _newInterestRate) external {
    require(msg.sender == owner, "Only the owner can change the interest rate");
    interestRate = _newInterestRate;
  }

  function requestLoan(uint256 _amount) external {
    require(!loans[_amount].active, "Active loan exists");

    uint256 interest = (_amount * interestRate) / 100;
    uint256 totalAmount = _amount + interest;

    require(token.transferFrom(owner, msg.sender, _amount), "Transfer failed");

    uint256 loanId = uint256(
      keccak256(abi.encodePacked(msg.sender, block.timestamp, _amount))
    );

    loans[totalLoans] = Loan({
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

  function repayLoan(uint256 _loanId, uint256 _amount) external {
    require(loans[_loanId].active, "No active loan");
    require(
      _amount <= loans[_loanId].totalAmount - loans[_loanId].repaidAmount,
      "Invalid repayment amount"
    );

    require(token.transfer(msg.sender, _amount), "Transfer failed");

    loans[_loanId].repaidAmount += _amount;

    if (loans[_loanId].repaidAmount >= loans[_loanId].totalAmount) {
      loans[_loanId].active = false;
      emit LoanRepaid(
        loans[_loanId].borrower,
        _loanId,
        loans[_loanId].repaidAmount
      );
    }
  }
}
