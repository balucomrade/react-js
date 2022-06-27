export default function StudentReducer(state = [],action){
    switch(action.type){
        case 'StudentsAction':
            return action.payload;break;

            default:
             return state
    }
}