import * as TYPES from '../action-types';

export default {
    increment1() {
        return { type: TYPES.INCREMENT1 };
    },
    asyncIncrement1() {
        return function (dispatch, getState) {
            setTimeout(() => {
                dispatch({ type: TYPES.INCREMENT1 });
            }, 1000);
        }
    },
    decrement1() {
        return { type: TYPES.DECREMENT1 };
    }

}