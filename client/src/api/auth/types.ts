import { User } from 'polario-common';

import { ApiResponseBase } from '../types';

export interface GetCurrentUserResponseType extends ApiResponseBase {
  result: User;
}
