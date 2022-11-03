export const requestMiddleware = (client) => {
    return ({ dispatch }) => {
        return (next) => {
            return (action) => {
                if (isRequestAction(action)) {
                    dispatch(createReqStartAction(action))
                    return client
                        .request(action.payload)
                        .then((res) => {
                            return dispatch(createSuccessAction(action, res))
                        })
                        .catch((err) => {
                            return dispatch(
                                createFailedAction(
                                    action,
                                    err,
                                    action.meta.omitError
                                )
                            )
                        })
                }
                return next(action)
            }
        }
    }
}
