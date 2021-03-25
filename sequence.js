const list = (elements = []) => {
    if(elements.length === 0){
        return 0;
    }else{
        let flat = [].concat(...elements)
        let onlyNumber = flat.map(e => parseInt(e) )
        let number = onlyNumber.filter(e => Number(e) && e % 2 === 0)
        let sum = number.reduce((a,b) => a + b);
        return sum;
    }   
}

//list()
list([1, "Shrek", null, true, 4, 6, [10, 11]])