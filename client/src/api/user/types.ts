import { User } from 'polario-common';

import { ApiResponseBase } from '../types';
export interface GetUsersResponseType extends ApiResponseBase {
  result: User[];
}

export interface GetUserResponseType extends ApiResponseBase {
  result: User;
}
