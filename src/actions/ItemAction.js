import * as types from '../constants'

export function pagiItem(payload) {
    return {
        type: types.PAGI_REQUEST,
        payload
    }
}
export function searchItem(payload) {
    return {
        type: types.SEARCH_REQUEST,
        payload
    }
}

export function delItem(payload) {
    return {
        type: types.DEL_REQUEST,
        payload
    }
}
export function updateItems(payload) {
    return {
        type: types.UPDATE_REQUEST,
        payload
    }
}
export function addItem(payload) {
    return {
        type: types.ADD_REQUEST,
        payload
    }
}
export const uploadFile = (payload) => {
    return {
        type: types.UPLOAD_IMAGE_RESQUET,
        payload
    }
}