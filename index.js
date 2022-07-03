const sumSpecial = (a,b) => {
    if (a === b) return 3*(a+b);
    return a+b;
}
console.log(`exercises_1...`)
console.log(`exercises_1(5,10) = ${sumSpecial(10,5)}`)
console.log(`exercises_1(5,5) = ${sumSpecial(5,5)}`)

const betweenNineteen = (a) => {
    if (a > 19) return (a-19)*3;
    return 19-a;
}
console.log(`exercises_2...`)
console.log(`exercises_2(12) = ${betweenNineteen(12)}`)
console.log(`exercises_2(19) = ${betweenNineteen(19)}`)
console.log(`exercises_2(22) = ${betweenNineteen(22)}`)

const exercises3 = (str) => {
    const result = [];
    for (let i=0; i<10; i++)
    {
        const newNum = parseInt(str.replace('*', i));
        if (newNum % 3 ===0) result.push(newNum);
    }
    return result;
}
console.log(`exercises_3...`)
console.log(`exercises_3('1*9') = ${exercises3('1*9')}`)
console.log(`exercises_3('1234567890*') = ${exercises3('1234567890*')}`)

const exercises4 = (str) => {
    const result = [];
    for (let i=0; i<10; i++)
    {
        const newNum = parseInt(str.replace('*', i));
        if (newNum % 6 ===0) result.push(newNum);
    }
    return result;
}
console.log(`exercises_4...`)
console.log(`exercises_4('1*9') = ${exercises4('1*9')}`)
console.log(`exercises_4('1234567890*') = ${exercises4('1234567890*')}`)