import { all, fork } from "@redux-saga/core/effects";
import { userSaga } from "./commit";

export default function * rootSaga() {
    yield all([
        fork(userSaga)
    ])
}