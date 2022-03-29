function sumTotal(...num:number[]):number {
    let total:number = 0
    num.forEach(number => {total+=number})
    return total
}

console.log(sumTotal(10,2,3,4,5));
 