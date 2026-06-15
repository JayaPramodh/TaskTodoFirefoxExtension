export function taskReducer(state, {type, payload}) {
    switch (type) {
        case 'NAME':
            return {
                ...state,
                name: payload
            }
        case 'TIME':
            return {
                ...state,
                time: payload
            }
        case 'TASK':
            return {
                ...state,
                task: payload
            }
        default:
            return state;
    }
}