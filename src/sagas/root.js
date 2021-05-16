import { saga as UISaga } from "../reducers/ui";

export default (sagaMiddleware) => {
  // sagaMiddleware.run(defaultSaga);
  sagaMiddleware.run(UISaga);
};
