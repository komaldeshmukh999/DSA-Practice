//Binary Search is applied on Sorted Array
//Time complexity =>O(logn)
let arr=[1,2,5,6,10,34,54,67]
let target=67
 
function BinarySearch(arr,target)
{
let left=0
let right=arr.length

while(left<right)
{
    let mid=parseInt((left+right)/2)
    if(target===arr[mid])
    {
        return mid
    }
    else if(target<arr[mid])
   {
    right=mid-1
   }
   else if(target>arr[mid])
   {
    left=mid+1
   }
}
return -1
}

let result=BinarySearch(arr,target)
console.log(result)
