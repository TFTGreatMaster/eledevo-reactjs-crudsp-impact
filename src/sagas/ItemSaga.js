import { put, takeEvery, select } from '@redux-saga/core/effects'
import * as types from '../constants'
import pagiApi from '../fetchAPIs/pagiApi'
import searchPagiApi from '../fetchAPIs/searchPagiApi'
import delApi from '../fetchAPIs/delApi'
import updateApi from '../fetchAPIs/updateApi'
import addApi from '../fetchAPIs/addApi'
import uploadImageApi from '../fetchAPIs/uploadImageApi'
import searchIdApi from '../fetchAPIs/searchIdApi'
import searchNameApi from '../fetchAPIs/searchNameApi'
import searchIdNameApi from '../fetchAPIs/searchIdNameApi'

function* pagiItem(action) {
    try {
        const res = yield pagiApi(action.payload)
        yield put({
            type: types.PAGI_SUCCESS,
            payload: {
                listItem: res.data,
                totalPage: res.totalPage,
                activePage: action.payload
            }
        })
    } catch (err) {
        yield put({
            type: types.PAGI_FAILURE,
            payload: {
                message: err
            }
        })
    }
}
function * searchIdNameItem(action) {
    try {
        const res = yield searchIdNameApi(action.payload)
        yield put({
            type: types.SEARCH_ID_NAME_SUCCESS,
            payload: {
                listItem: res.data,
                totalPage: res.totalPage,
                page: 1
            }
        })
    } catch (err) {
        yield put({
            type: types.SEARCH_ID_NAME_FAILURE,
            payload: {
                message: err
            }
        })
    }
   
}
function * searchIdItem(action) {
    try {
        const res = yield searchIdApi(action.payload)
        yield put({
            type: types.SEARCH_ID_SUCCESS,
            payload: {
                listItem: res.data,
                totalPage: res.totalPage,
                page: 1
            }
        })
    } catch (err) {
        yield put({
            type: types.SEARCH_ID_FAILURE,
            payload: {
                message: err
            }
        })
    }
   
}
function* searchItem(action) {
    try {
        const res = yield searchPagiApi(action.payload)
        yield put({
            type: types.SEARCH_SUCCESS,
            payload: {
                listItem: res.data,
                totalPage: res.totalPage,
                page: action.payload.page,
                search: action.payload.search
            }
        })
    } catch (err) {
        yield put({
            type: types.SEARCH_FAILURE,
            payload: {
                message: err
            }
        })
    }
}
function* delItem(action) {
    try {
        yield delApi(action.payload)
        yield put({
            type: types.DEL_SUCCESS,

        })
        const selects = yield select(state => {
            return {
                activePage: state.items.activePage,
                textSearch: state.items.textSearch
            }
        })
        const res = yield pagiApi(selects.activePage)
        if (selects.textSearch) {
            const res = yield searchPagiApi({
                search: selects.textSearch,
                page: selects.activePage
            })
            if (res.data.length > 0) {
                yield put({
                    type: types.SEARCH_REQUEST,
                    payload: {
                        search: selects.textSearch,
                        page: selects.activePage
                    }
                })
            } else {
                yield put({
                    type: types.SEARCH_REQUEST,
                    payload: {
                        search: selects.textSearch,
                        page: (+selects.activePage - 1)
                    }
                })
            }
        } else {
            if (res.data.length > 0) {
                yield put({
                    type: types.PAGI_REQUEST,
                    payload: selects.activePage
                })
            } else {
                yield put({
                    type: types.PAGI_REQUEST,
                    payload: (selects.activePage - 1)
                })
            }
        }

    } catch (err) {
        yield put({
            type: types.DEL_FAILURE,
            payload: {
                message: err
            }
        })
    }
}
function* updateItems(action) {
    try {
        yield updateApi(action.payload)
        yield put({
            type: types.UPDATE_SUCCESS,
        })
        const selects = yield select(state => {
            return {
                activePage: state.items.activePage,
                textSearch: state.items.textSearch
            }
        })
        if (action.payload.name.search(selects.textSearch) === -1) {

            yield put({
                type: types.SEARCH_ID_NAME_REQUEST,
                payload: {
                    id: action.payload.id,
                    name: action.payload.name
                }
            })
        }
        else {

            yield searchPagiApi({
                search: action.payload.name,
                page: selects.activePage
            })
            yield put({
                type: types.SEARCH_REQUEST,
                payload: {
                    search: selects.textSearch,
                    page: selects.activePage
                }
            })
        }
    } catch (err) {
        yield put({
            type: types.UPDATE_FAILURE,
            payload: {
                message: err
            }
        })
    }
}
function* addItem(action) {
    try {
        const status = yield addApi(action.payload)
        console.log('status', status);
        yield put({
            type: types.ADD_SUCCESS,

        })
        const selects = yield select(state => {
            return {
                textSearch: state.items.textSearch
            }
        })
        if (action.payload.search(selects.textSearch) !== -1) {
            const res = yield searchPagiApi({
                search: selects.textSearch,
            })
            yield put({
                type: types.SEARCH_REQUEST,
                payload: {
                    listItem: res.data,
                    search: selects.textSearch,
                    page: res.totalPage
                }
            })
        } else {
            
            const res = yield searchNameApi({
                search: action.payload
            })
            yield put({
                type: types.SEARCH_ID_NAME_REQUEST,
                payload: {
                    id: res.idName,
                    name: action.payload
                }
            })
        }
    } catch (err) {
        yield put({
            type: types.ADD_FAILURE,
            payload: {
                message: err
            }
        })
    }
}
function* uploadImage(action) {
    try {
        const res = yield uploadImageApi(action.payload);
        console.log('res', res);
        yield put({
            type: types.UPLOAD_IMAGE_SUCCESS,
            payload: res
        })
    } catch (error) {
        yield put({
            type: types.UPLOAD_IMAGE_FAILURE,
            payload: error
        })
    }
}
export const ItemSaga = [
    takeEvery(types.PAGI_REQUEST, pagiItem),
    takeEvery(types.SEARCH_REQUEST, searchItem),
    takeEvery(types.SEARCH_ID_REQUEST, searchIdItem),
    takeEvery(types.SEARCH_ID_NAME_REQUEST, searchIdNameItem),
    takeEvery(types.DEL_REQUEST, delItem),
    takeEvery(types.UPDATE_REQUEST, updateItems),
    takeEvery(types.ADD_REQUEST, addItem),
    takeEvery(types.UPLOAD_IMAGE_RESQUET, uploadImage)

]