function aritGeo(arr) { 

var d = arr[1] - arr[0];
var r = arr[1] / arr[0];

var arith = true;
var geo = true;
var nullArr = true;

if (arr.length > 2){

for(var i = 0; i < arr.length - 1; i++)
{
    if( arr[i + 1] - arr[i] !== d )
      arith = false;
    if(arr[i + 1] / arr[i] !== r)
      geo = false;
    
}

if(arith === true)
    return "Arithmetic";
else if(geo === true)
    return "Geometric";
else
    return -1;

}

else if(arr.length === 0){
    return 0;
}

}
aritGeo([-1, 2, -4]);
