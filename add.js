function add(input){
    if (input ===""){
        return 0;
    } 
    let delimiter = /,|\n/;
    if(input.startsWith("//")){
        const parts = input.split("\n");
        delimiter = new RegExp(parts[0].slice(2));
        input = parts[1];
    }
    const numbers = input.split(delimiter).map(Number);
    const negativeNumbers = numbers.filter(n=>n<0);
    if(negativeNumbers.length > 0){
        throw new Error(`negative numbers not allowed: ${negativeNumbers.join(',')}`);
    }
    return numbers.reduce((sum, no) => sum + no, 0);
}
module.exports = add;