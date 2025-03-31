//Linear Serach
let arr=[4,3,2,5,6,2]
let target=10
function LinearSearch(arr,target)
{
  if(arr.length>0)
  {
    for(let i=0;i<arr.length;i++)
    {
        if(arr[i]===target)
        {
            return i
        }
    }
  }
  return -1
}
let result =LinearSearch(arr,target)
console.log(result)

//Time complexity
// O(n)