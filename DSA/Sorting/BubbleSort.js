//Time complexity=O(n2)
let arr=[5,3,2,10,23,4,9]
function BubbleSort(arr)
{
let temp
for(let i=0;i<arr.length-1;i++)
{
    for(let j=0;j<arr.length-1-i;j++)
    {
        if(arr[j]>arr[j+1]) 
        {
          temp=arr[j]
          arr[j]=arr[j+1]
          arr[j+1]=temp
        }
    }
}
}

let SortedArray=BubbleSort(arr)
console.log(SortedArray)