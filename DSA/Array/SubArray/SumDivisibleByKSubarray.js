let arr=[1,2,3,4,5]
let num=6
function LargestSumSubArray(arr,num)
{
let sum=0
let Maxsum=0
let str=""
for(let i=0;i<arr.length;i++)
{
    for(let j=i;j<arr.length;j++)
    {
        sum=0
        str=""
        for(let k=i;k<=j;k++)
        {
            sum=sum+arr[k]
            str=str+arr[k]
        }
        if(sum%num===0)
        {
            console.log(str)
        }
    }
}
}
LargestSumSubArray(arr,num)