import{takeLatest, call} from 'redux-saga/effects';

import * as actions from './homeAction'
import * as workers from './homeWorkers'

// watch for every purchase completion, and start the purchaseFlow
export  function* watchGetUser() {
    yield takeLatest(actions.GET_USER, function* (loadAction){
        console.log("### watcher called" , loadAction);

        yield call(workers.fetchDataWorker, loadAction.payload)
    });
}
