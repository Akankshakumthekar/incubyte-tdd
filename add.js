function add(input){
    if (input ===""){
        return 0;
    } 
    const numbers = input.replace(/\n/g,',').split(",");
    return numbers.reduce((sum, no) => sum + parseInt(no), 0);
}
module.exports = add;