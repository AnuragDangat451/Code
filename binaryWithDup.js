//SAME AS BINARY SEARCH
function binary() {
    let arr = [7,5,6,2,3,9,1,2,3,8,6];
    let target = 3;
    let temp;
    let value=Array.from(new Set(arr));
    console.log(value);//except duplicate value
    for(let i=1;i<value.length;i++)
    {
        for(let j=0;j<value.length-1;j++)
        {
            if(value[j]>value[j+1])
            {
            temp=value[j];
            value[j]=value[j+1];
            value[j+1]=temp;
            }
        }
    }
    console.log(value);//sorted values
    let left = 0;
    let right = value.length - 1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) {
            console.log("element found at index " + mid);
            return;
        } else if (arr[mid] > target) {
                right = mid - 1;
        } else {
                left = mid + 1;
        }
    }
    
        console.log("element not found");
    }
    
binary();