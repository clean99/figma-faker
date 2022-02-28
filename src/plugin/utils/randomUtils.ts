export const getRandomString = (num:number) => {
    // return random string with length of num
    const str = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let result = '';
    for (var i = num; i > 0; --i) 
        result += str[Math.floor(Math.random() * str.length)];
    return result;
}
export const getRandomNumber = (num:number) => {
    // return random number with length of num
    return Math.floor((Math.random()+Math.floor(Math.random()*9+1))*Math.pow(10,num-1));
}
export const getRandomBoolean = () => {
    // return random boolean
    return Boolean(Math.round(Math.random()));
}
export const getRandomFloat = () => {
    // return random float number with length of num
    return Math.random();
}
export const getRandomColor = () => {
    // return random rgb
    return '#'+Math.floor(Math.random()*16777215).toString(16); 
}