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
    const numbers = input.split(delimiter);
    return numbers.reduce((sum, no) => sum + parseInt(no), 0);
}
module.exports = add;