export const INCREMENT = 'increment';
export const DECREMENT = 'decrement';
export const RESET = 'reset'

export const increment = ( captionName ='1') => {
    return(
        {type: INCREMENT,
        caption: captionName}
    );

}
export const decrement = ( captionName='1' ) => {
    return(
        {type: INCREMENT,
        caption: captionName}
    );
}

export const reset = (captionName='1') => {
    return(
        {type: RESET,
        caption: captionName
    }
    );
}
