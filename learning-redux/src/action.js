export const INCREMENT = 'INCREMENT';
export const INPUT = 'INPUT';
export const RESET = 'RESET';
export const increment = () => {
    return {
        type: INCREMENT
    };
};
export const input = (inputValue) => {
    return {
        type: INPUT,
        value: inputValue,
    };
}
export const reset = () =>{
    return {
        type: RESET,
    };
}