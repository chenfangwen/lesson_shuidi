var mySqrt = function(x) {
    var re = 0;
    while(!(re*re<=x&&(re+1)*(re+1)>x)){
        re++;
    }
    return re
};

