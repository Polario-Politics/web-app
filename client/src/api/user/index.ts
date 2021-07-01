import { AxiosResponse } from 'axios';
import { User } from 'polario-common';

import { ErrorWrapper } from '../types';
import { get, put } from '../builders';

import * as Types from './types';

const USER_ENDPOINT = '/users';

// Returns all of the users in the database
const getUsers = async (): Promise<
  AxiosResponse<Types.GetUsersResponseType> | ErrorWrapper
> => await get(USER_ENDPOINT, 'GET_USERS_FAIL');

// Returns a single user from the user's id
const getUser = async (
  userId: string,
): Promise<AxiosResponse<Types.GetUserResponseType> | ErrorWrapper> =>
  await get(`${USER_ENDPOINT}/${userId}`, 'GET_USER_FAIL');

// Update a user's data
const updateUser = async (
  user: User,
  userId: string,
): Promise<AxiosResponse<Types.GetUserResponseType> | ErrorWrapper> =>
  await put(`${USER_ENDPOINT}/${userId}`, user, 'UPDATE_USER_FAIL');

export { getUsers, getUser, updateUser };
