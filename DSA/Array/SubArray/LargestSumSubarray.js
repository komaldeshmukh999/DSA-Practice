let arr=[1,2,3,4,5]
function LargestSumSubArray()
{
let sum=0
let Maxsum=0
for(let i=0;i<arr.length;i++)
{
    for(let j=i;j<arr.length;j++)
    {
        sum=0
        for(let k=i;k<=j;k++)
        {
            sum=sum+arr[k]
        }
        Maxsum=Math.max(sum,Maxsum)
    }
}
return Maxsum
}
console.log(LargestSumSubArray(arr))