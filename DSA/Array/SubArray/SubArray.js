let arr=[1,2,3,4,5]
function SubArray(arr){
let subArray=""
for(let i=0;i<arr.length;i++)
{
    for(let j=i;j<arr.length;j++)
    {
        subArray=""
        for(let k=i;k<=j;k++)
        {
          subArray=subArray+" "+arr[k]
        }
        console.log(subArray)
    }
}

}
SubArray(arr)