let arr=[4,3,2,5,6,2,100,1000]
function SmallestElement(arr){
let SmallestElement=arr[0]
let secondSmallestElement=arr[0]
let temp
for(let i=1;i<arr.length;i++)
{
    if(arr[i]<Element)
    {
        temp=SmallestElement
        SmallestElement=arr[i]
        secondSmallestElement=temp
        
    }
 }
return [SmallestElement,secondSmallestElement]
}
let smallelement=SmallestElement(arr)
console.log(smallelement)