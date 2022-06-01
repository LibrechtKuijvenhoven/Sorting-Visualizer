export const generateArray = (length: Number) => {
    let tmpArr = [];
    for(let i = 0; i<length; i++)
        tmpArr.push(Math.floor(Math.random() * 200))        
    return tmpArr;
}