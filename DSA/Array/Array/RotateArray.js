//Time Complexity=>O(n)
let arr= [1,2,3,4,5,6,7]
let k=9

function RotateArray(arr,k){
k=k%arr.length
reverse(arr,0,arr.length-1)
reverse(arr,0,k-1)
reverse(arr,k,arr.length-1)
return arr
}

function reverse(arr,start,end)
{
    while(start<end)
    {
    [arr[start],arr[end]]=[arr[end],arr[start]]
    start++
    end--
    }
}


console.log(RotateArray(arr,k))