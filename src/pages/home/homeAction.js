export const GET_USER = 'GET_USER';
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS';
export const GET_USER_ERROR = 'GET_USER_ERROR';

export const getUserAction = (payload) => ({
    type : GET_USER,
    payload
});