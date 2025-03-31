let arr=[4,3,2,5,6,2,100,1000]
function ReverseArray(arr)
{
    let temp
    let length=arr.length-1
    for(let i=0;i<parseInt(length/2);i++)
    {
       temp=arr[i]
       arr[i]=arr[length-i]
       arr[length-i]=temp
    }
return arr
}

let reverseArray=ReverseArray(arr)
console.log(reverseArray)