function getRandomArbitrary(min, max) {
    value= Math.random() * (max - min) + min;
    return(value);	
}

function calling(time){
	var fvalue = 0;
	while(time <= 18){
		fvalue= fvalue + getRandomArbitrary(4,25);
	    time++;
	}
	return fvalue/6
}
