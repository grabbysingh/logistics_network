pragma solidity ^0.5.8;

contract Payment {
      mapping(address => uint) accbalance;
        event Message(string message);
        event Info(string message, uint amount);
        
        function makePayment(address _from, address _to, uint _amount )public returns(bool, uint){
        emit Info('amount is:',_amount);
            if(_amount<=0 && accbalance[_from]<_amount) {
                emit Message('insufficient funds');
                return (false, 0);
        }
            accbalance[_from] -= _amount;
            accbalance[_to] += _amount;
            emit Message('Successful payment');
            return (true, _amount);
        }
        
}
