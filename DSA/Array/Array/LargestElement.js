let arr=[4,3,2,5,6,2,100,1000]
function LargestElement(arr){
let LargestElement=arr[0]
let secondLargestElement=arr[0]
let temp
for(let i=1;i<arr.length;i++)
{
    if(arr[i]>LargestElement)
    {
        temp=LargestElement
        LargestElement=arr[i]
        secondLargestElement=temp
        
    }
 }
return [LargestElement,secondLargestElement]
}
let largestelement=LargestElement(arr)
console.log(largestelement)