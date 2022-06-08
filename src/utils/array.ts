export const generateArray = (length: Number) => {
    let tmpArr: number[] = [];
    while(tmpArr.length < length){
        let i = Math.floor((Math.random() * 200) + 50);
        if(!tmpArr.includes(i)) tmpArr.push(i);
    }    
    return tmpArr;
}