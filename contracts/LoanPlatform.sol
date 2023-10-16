// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.1;

import "hardhat/console.sol";

interface ISiliquaCoin {
    function transfer(address to, uint256 amount) external returns (bool);

    function transferFrom(
        address from,
        address to,
        uint256 amount
    ) external returns (bool);

    function balanceOf(address account) external view returns (uint256);

    function approve(address spender, uint256 amount) external returns (bool);

    function allowance(
        address owner,
        address spender
    ) external view returns (uint256);

    event Approval(
        address indexed owner,
        address indexed spender,
        uint256 value
    );

    // Evento emitido cuando se transfieren tokens desde una dirección a otra
    event Transfer(address indexed from, address indexed to, uint256 value);
}

contract LoanPlatform {
    ISiliquaCoin public token; // La instancia del token ERC-20

    // Estructura para representar un préstamo
    struct Loan {
        address borrower;
        uint256 amount;
        uint256 interest;
        bool repaid;
    }

    // Lista de préstamos
    Loan[] public loans;

    // Eventos para notificar acciones importantes
    event LoanCreated(uint256 loanId, address borrower, uint256 amount);
    event LoanRepaid(uint256 loanId, address borrower, uint256 amount);

    // Constructor: se pasa la dirección del token ERC-20 durante la creación del contrato
    constructor(address _tokenAddress) {
        token = ISiliquaCoin(_tokenAddress);
    }

    // Función para solicitar un préstamo
    function requestLoan(uint256 _amount, uint256 _interest) external {
        // Transfiere tokens del usuario al contrato utilizando approve
        require(token.approve(address(this), _amount), "Approval failed");
        require(
            token.transferFrom(msg.sender, address(this), _amount),
            "Transfer failed"
        );

        // Almacena el préstamo en la lista
        loans.push(
            Loan({
                borrower: msg.sender,
                amount: _amount,
                interest: _interest,
                repaid: false
            })
        );

        // Emite el evento de creación de préstamo
        emit LoanCreated(loans.length - 1, msg.sender, _amount);
    }

    // Función para pagar un préstamo
    function repayLoan(uint256 _loanId) external {
        Loan storage loan = loans[_loanId];

        // Verifica que el préstamo no haya sido repagado aún
        require(!loan.repaid, "Loan already repaid");

        // Transfiere tokens del usuario al contrato
        require(
            token.transfer(loan.borrower, loan.amount + loan.interest),
            "Transfer failed"
        );

        // Marca el préstamo como repagado
        loan.repaid = true;

        // Emite el evento de préstamo repagado
        emit LoanRepaid(_loanId, loan.borrower, loan.amount);
    }
}
