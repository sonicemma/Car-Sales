export const remove = item => {
    return {
        type: 'REMOVE_ITEM',
        payload: item
    };
}