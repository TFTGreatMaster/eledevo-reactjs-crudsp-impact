import * as types from '../constants'
const STATE = {
    listItem: [],
    errMessage: null,
    totalPage: 0,
    activePage: 1,
    isloading: false,
    err: false,
    textSearch: ''
}
export default (state = STATE, action) => {
    switch (action.type) {
        case types.PAGI_REQUEST:
        case types.SEARCH_REQUEST:
        case types.DEL_REQUEST:
        case types.UPDATE_REQUEST:
        case types.ADD_REQUEST:
        case types.UPLOAD_IMAGE_RESQUET:
        case types.SEARCH_ID_REQUEST:
            return {
                ...state,
                isloading: true
            }
        case types.DEL_SUCCESS:
        case types.UPDATE_SUCCESS:
        case types.ADD_SUCCESS:
        case types.UPLOAD_IMAGE_SUCCESS:

            return {
                ...state,
                errMessage: null,
                isloading: false,
                err: false
            }
        case types.PAGI_FAILURE:
        case types.SEARCH_FAILURE:
        case types.DEL_FAILURE:
        case types.UPDATE_FAILURE:
        case types.ADD_FAILURE:
        case types.UPLOAD_IMAGE_FAILURE:
        case types.SEARCH_ID_FAILURE:

            return {
                ...state,
                errMessage: action.payload.message,
                isloading: false,
                err: true
            }
        case types.PAGI_SUCCESS:
            return {
                ...state,
                totalPage: action.payload.totalPage,
                activePage: action.payload.activePage,
                listItem: action.payload.listItem,
                // errMessage: null,
                isloading: false,
                // textSearch: ''
                // err: false


            }
        case types.SEARCH_SUCCESS:
            return {
                ...state,
                totalPage: action.payload.totalPage,
                activePage: action.payload.page,
                listItem: action.payload.listItem,
                textSearch: action.payload.search,
                errMessage: null,
                isloading: false,
                err: false
            }
        case types.SEARCH_ID_SUCCESS:
            return {
                ...state,
                totalPage: action.payload.totalPage,
                listItem: action.payload.listItem,
                activePage: action.payload.page,
                errMessage: null,
                isloading: false,
                err: false,
            }
        case types.SEARCH_ID_NAME_SUCCESS:
            return {
                ...state,
                totalPage: action.payload.totalPage,
                listItem: action.payload.listItem,
                activePage: action.payload.page,
                errMessage: null,
                isloading: false,
                err: false,
            }

        default: return state
    }
}