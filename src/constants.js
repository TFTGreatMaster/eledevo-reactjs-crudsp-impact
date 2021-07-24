// domain
export const DOMAIN = "https://c43658a3a90b.ngrok.io";
// export const DOMAIN = "https://f32531d8ff9a.ngrok.io";
export const LIMIT = 3;

// HTTP method 
export const HTTP_READ = "GET"
export const HTTP_CREATE = "POST"
export const HTTP_UPDATE = "PUT"
export const HTTP_DELETE = "DELETE"

// HTTP headers
export const HTTP_HEADER_JSON = { "Content-Type": "Application/json" }

// types of actions

export const GET_REQUEST = 'GET_REQUEST'
export const GET_SUCCESS = 'GET_SUCCESS'
export const GET_FAILURE = 'GET_FAILURE'

export const DEL_REQUEST = 'DEL_REQUEST'
export const DEL_SUCCESS = 'DEL_SUCCESS'
export const DEL_FAILURE = 'DEL_FAILURE'

export const UPDATE_REQUEST = 'UPDATE_REQUEST'
export const UPDATE_SUCCESS = 'UPDATE_SUCCESS'
export const UPDATE_FAILURE = 'UPDATE_FAILURE'

export const ADD_REQUEST = 'ADD_REQUEST'
export const ADD_SUCCESS = 'ADD_SUCCESS'
export const ADD_FAILURE = 'ADD_FAILURE'

export const PAGI_REQUEST = 'PAGI_REQUEST'
export const PAGI_SUCCESS = 'PAGI_SUCCESS'
export const PAGI_FAILURE = 'PAGI_FAILURE'

export const SEARCH_REQUEST = 'SEARCH_REQUEST'
export const SEARCH_SUCCESS = 'SEARCH_SUCCESS'
export const SEARCH_FAILURE = 'SEARCH_FAILURE'

export const SEARCH_ID_REQUEST = 'SEARCH_ID_REQUEST'
export const SEARCH_ID_SUCCESS = 'SEARCH_ID_SUCCESS'
export const SEARCH_ID_FAILURE = 'SEARCH_ID_FAILURE'

export const SEARCH_ID_NAME_REQUEST = 'SEARCH_ID_NAME_REQUEST'
export const SEARCH_ID_NAME_SUCCESS = 'SEARCH_ID_NAME_SUCCESS'
export const SEARCH_ID_NAME_FAILURE = 'SEARCH_ID_NAME_FAILURE'

export const UPLOAD_IMAGE_SUCCESS="UPLOAD_IMAGE_SUCCESS"
export const UPLOAD_IMAGE_FAILURE="UPLOAD_IMAGE_FAILURE"
export const UPLOAD_IMAGE_RESQUET="UPLOAD_IMAGE_RESQUET"
