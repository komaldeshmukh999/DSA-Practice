//Selection Sort=>Find minimum element  from unsorted array and place it at beginning of the array
//Time complexity:O(n2)
let arr=[5,3,2,10,23,4,9,2]
function SelectionSort(arr)
{
    let min
    let i=0
    let temp
    while(i<arr.length)
    {
        min=arr[i]
        for(let j=i+1;j<arr.length;j++)
        {
          if(arr[j]<min)
          {
            min=arr[j]
            let temp=arr[i]
           arr[i]=min
           arr[j]=temp
          }
           
        }
       
        i=i+1
    }
   return arr
}
let SortedArray=SelectionSort(arr)
console.log(SortedArray)