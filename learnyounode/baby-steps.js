const numbers = process.argv.slice(2);
const sum = numbers.reduce((a,b)=> {
    return Number(a)+Number(b);
});
console.log(sum);