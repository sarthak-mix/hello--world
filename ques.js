function product(nums) {
  const n = nums.length;
  const result = new Array(n).fill(1);
  
 
  let productleft = 1;
  for (let i = 0; i < n; i++) {
      result[i] = productleft;
      productleft*= nums[i];
  }
  

  let productright = 1;
  for (let i = n - 1; i >= 0; i--) {
      result[i] *= productright;
      productright *= nums[i];
  }
  
  return result;
}


const nums = [1, 7, 4, 5];
console.log(product(nums)); 