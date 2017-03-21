const initialState = {
    testVal: 'foo',
}

//action types
const LOAD_FOO_SUCCESS = 'LOAD_FOO_SUCCESS';

//action creators
export function loadFooValue(value) {
    return (dispatch, getState) => {
        console.log('loadFooValue...');
        dispatch({
            type: LOAD_FOO_SUCCESS,
            payload: value,
        });
    };
}

//reducers
function foo(state = initialState, action) {
    switch(action.type) {
        
        case LOAD_FOO_SUCCESS: {
            return {
                ...state,
                testVal: action.payload
            }
        }

        default:
            return state;
    }
}

export default foo;