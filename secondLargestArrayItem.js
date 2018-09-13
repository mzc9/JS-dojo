//hmmm! works in Chrome, but not on hackerrank -- to investigate

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
   
  //someone else's code  -- TODO figure out what is Set function
  return Array.from(new Set(nums.sort((a, b) => {return a - b}).reverse()))[1]; 
    
