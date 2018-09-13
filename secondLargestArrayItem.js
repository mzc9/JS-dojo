function getSecondLargest(nums){

let max = nums[0];
let sndmax = nums[0];


for(var i = 0; i < nums.length; i++){
  if(nums[i] > max){
    sndmax = max;
    max = nums[i];
    
    }else if (nums[i] > sndmax){
      sndmax = nums[i];
    }
 }
 return sndmax;
 }
   
   
    
