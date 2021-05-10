import defaultSaga from "./default";

export default (sagaMiddleware) => {
  sagaMiddleware.run(defaultSaga);
};
