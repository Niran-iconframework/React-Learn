//3.สร้าวตัวที่เป็น reducer
export default (state = 0, action) => {
    switch (action.type){
        case 'ADD':
            return state + action
        case 'DEC':
            return state - action
        default:
            return state
    }
}