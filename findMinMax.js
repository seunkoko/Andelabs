function findMinMax(arr){
    var max = arr[0];
    var min = arr[0];
    
  for(var i=1;i<arr.length;i++){
      if(max < arr[i]){
          max = arr[i];
      }
      else if(min > arr[i]){
          min = arr[i];
      }
  } 
  
  if(max === min){
          return [min];
      }
      else{
          return [min,max];
      }
}