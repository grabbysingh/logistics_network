pragma solidity ^0.5.8;
import "./Transport.sol";

contract Driver is Transport {
    
    function drive(address _produceraddr, address _distaddr, uint _quantity, uint _prodID, uint no,uint hrs) public  {
        
        //this should return tracking no.
        uint _trackingNo = createOrderByDistributor(_produceraddr,_distaddr,_quantity, _prodID);
        
        sendOrderByDistributor(_produceraddr,_distaddr,_trackingNo,_quantity);
        
        //this return calculated amount 
        uint _amount = acceptOrderByProducer(_produceraddr,_trackingNo);
        emit Message("Order is being sent");
        randomtemperature(no,  hrs);
        randomaccelerometer(no,hrs);
        randomluminosity(no,hrs);
        acceptOrderByDistributor(_trackingNo,_distaddr,_produceraddr,_amount);
        
    }
}



    //0xCA35b7d915458EF540aDe6068dFe2F44E8fa733c   -dist
    //0x583031D1113aD414F02576BD6afaBfb302140225   -prod