export const remove = item => {
    return {
        type: 'REMOVE',
        payload: item
    };
}