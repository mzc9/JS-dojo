function getSecondLargest(nums){

let max = nums[0];
let count = 0;

for(var i = 0; i < nums.length; i++){
  if(nums[i] > max){
    max = nums[i];
    }
   }
   
   nums.sort(function(x,y){
   
    return y - x;
    
    });
    
   for(var i = 0; i < nums.length; i++)
    {
      if(nums[i] == max){
      
        count++;
        }
        }
       nums.splice(0, count);
       
       return nums[0];
       
       }
    
