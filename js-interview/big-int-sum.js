function bigIntSum(a, b) {
    const aArray = a.split('').reverse();
    const bArray = b.split('').reverse();
    let result = [];
    let residual = 0;
    aArray.forEach((abit, index) => {
        const bbit = index < bArray.length ? Number(bArray[index]) : 0;
        residual = intSum(Number(abit) + bbit + residual, result);            
    });
    if (residual) {
        result.push(residual);
    }
    return result.reverse().join('');
}
function intSum(sum, result) {
    if (sum > 9) {
        residual = 1;
        result.push(sum -10);
    } else {
        result.push(sum);
        residual = 0;
    }
    return residual;
}
console.log(
bigIntSum('99', "1"))