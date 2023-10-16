// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.1;

import "hardhat/console.sol";

// Interfaz del estándar ERC-20
interface IERC20 {
    // Función para transferir tokens a otra dirección
    function transfer(address to, uint256 amount) external returns (bool);

    // Función para transferir tokens desde una dirección a otra con el permiso del propietario
    function transferFrom(
        address from,
        address to,
        uint256 amount
    ) external returns (bool);

    // Función para consultar el saldo de tokens en una dirección específica
    function balanceOf(address account) external view returns (uint256);

    // Función para permitir a una dirección gastar una cantidad específica de tokens desde el propietario
    function approve(address spender, uint256 amount) external returns (bool);

    // Función para consultar la asignación permitida de un propietario a un gastador
    function allowance(
        address owner,
        address spender
    ) external view returns (uint256);

    // Evento emitido cuando se aprueba el gasto de tokens desde una dirección
    event Approval(
        address indexed owner,
        address indexed spender,
        uint256 value
    );

    // Evento emitido cuando se transfieren tokens desde una dirección a otra
    event Transfer(address indexed from, address indexed to, uint256 value);
}

// Implementación del contrato ERC-20
contract SiliquaCoin is IERC20 {
    // Mapeo de saldos de tokens por dirección
    mapping(address => uint256) private balances;

    // Mapeo de asignaciones de gastos permitidos por dirección del propietario
    mapping(address => mapping(address => uint256)) private allowances;

    // Suministro total de tokens
    uint256 public totalSupply;

    // Nombre, símbolo y decimales del token
    string public name;
    string public symbol;
    uint8 public decimals;

    // Constructor del contrato ERC-20
    constructor(
        string memory _name,
        string memory _symbol,
        uint8 _decimals,
        uint256 initialSupply
    ) {
        name = _name;
        symbol = _symbol;
        decimals = _decimals;
        totalSupply = initialSupply;
        // Asigna todo el suministro inicial al creador del contrato
        balances[msg.sender] = initialSupply;
    }

    // Función para consultar el saldo de tokens en una dirección específica
    function balanceOf(
        address account
    ) external view override returns (uint256) {
        return balances[account];
    }

    // Función para transferir tokens a otra dirección
    function transfer(
        address to,
        uint256 amount
    ) external override returns (bool) {
        // Verifica si el remitente tiene suficientes tokens para la transferencia
        require(amount <= balances[msg.sender], "Insufficient balance");
        // Actualiza los saldos del remitente y el destinatario
        balances[msg.sender] -= amount;
        balances[to] += amount;
        // Emite un evento Transfer para registrar la transferencia de tokens
        emit Transfer(msg.sender, to, amount);
        return true;
    }

    // Función para transferir tokens desde una dirección a otra con el permiso del propietario
    function transferFrom(
        address from,
        address to,
        uint256 amount
    ) external override returns (bool) {
        // Verifica si el remitente tiene suficientes tokens para la transferencia
        require(amount <= balances[from], "Insufficient balance");
        // Verifica si el remitente tiene suficiente asignación permitida para gastar los tokens
        require(
            amount <= allowances[from][msg.sender],
            "Insufficient allowance"
        );
        // Actualiza los saldos del remitente y el destinatario, y reduce la asignación permitida
        balances[from] -= amount;
        balances[to] += amount;
        allowances[from][msg.sender] -= amount;
        // Emite un evento Transfer para registrar la transferencia de tokens
        emit Transfer(from, to, amount);
        return true;
    }

    // Función para permitir a una dirección gastar una cantidad específica de tokens desde el propietario
    function approve(
        address spender,
        uint256 amount
    ) external override returns (bool) {
        // Establece la asignación permitida para el gastador
        allowances[msg.sender][spender] = amount;
        // Emite un evento Approval para registrar la aprobación de asignación
        emit Approval(msg.sender, spender, amount);
        return true;
    }

    // Función para consultar la asignación permitida de un propietario a un gastador
    function allowance(
        address owner,
        address spender
    ) external view override returns (uint256) {
        return allowances[owner][spender];
    }
}
