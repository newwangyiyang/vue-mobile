import request from '../request';

export const getUser = userId => request.get(`/user/${userId}`);

export const getUserByToken = userId => request.get(`/user/getByToken/${userId}`);