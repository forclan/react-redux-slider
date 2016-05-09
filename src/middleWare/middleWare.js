var thunkMiddleware = function ({ dispatch, getState }) {
    return function(next) {
        return function (action) {
            return typeof action === 'function' ?
                action(dispatch, getState) :
                next(action)
        }
    }
}

export default thunkMiddleware;