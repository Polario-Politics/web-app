import axios, { AxiosResponse } from 'axios';

import { BACKEND_BASE_URL } from './urls';
import { ErrorWrapper, ApiResponse } from './types';

// Generalized axios configuration
axios.defaults.headers.common['Content-Type'] = 'application/json';
axios.defaults.withCredentials = true;
const instance = axios.create({
  baseURL: BACKEND_BASE_URL,
});

/**
 * General GET request
 *
 * @param url the endpoint url to GET request to
 * @param type the type of error that is thrown
 * @returns API endpoint response object
 */
const get = async <T>(
  url: string,
  type: string,
): Promise<AxiosResponse<T> | ErrorWrapper> =>
  await instance.get(url).catch((error) => ({
    type: type,
    error,
  }));

/**
 * General POST request
 *
 * @param url the endpoint url to POST request to
 * @param body the body of data to pass to the endpoint
 * @param type the type of error that is thrown
 * @returns API endpoint response object
 */
const post = async <T1, T2>(
  url: string,
  body: T1,
  type: string,
): Promise<AxiosResponse<T2> | ErrorWrapper> =>
  await instance.post(url, { ...body }).catch((error) => ({
    type: type,
    error,
  }));

/**
 * General PUT request
 *
 * @param url the endpoint url to PUT request to
 * @param body the body of data to pass to the endpoint
 * @param type the type of error that is thrown
 * @returns API endopint response object
 */
const put = async <T1, T2>(
  url: string,
  body: T1,
  type: string,
): Promise<AxiosResponse<T2> | ErrorWrapper> =>
  await instance.put(url, { ...body }).catch((error) => ({
    type: type,
    error,
  }));

/**
 * General DELETE request
 *
 * @param url the endpoint url to DELETE request to
 * @param type the type of error that is thrown
 * @returns API endpoint response object
 */
const del = async <T>(
  url: string,
  type: string,
): Promise<AxiosResponse<T> | ErrorWrapper> =>
  await instance.delete(url).catch((error) => ({
    type: type,
    error,
  }));

/**
 * Determines if the axios response resulted in an error
 *
 * @param res the response to check if errored
 * @returns true if response errored, else false
 */
const isError = <T>(res: ApiResponse<T>): res is ErrorWrapper =>
  (res as ErrorWrapper).error !== undefined;

/**
 * Constructs an URI with url parameters based on endpoint
 *
 * @param endpoint the endpoint to construct the URI for
 * @param successRedirect the success url query parameter to redirct to
 * @param failureRedirect the failure url query parameter to redirect to
 * @returns returns the uri href string
 */
const buildURI = (
  endpoint: string,
  successRedirect: string,
  failureRedirect = '/login',
): string => {
  const uri = new URL(`${BACKEND_BASE_URL}/${endpoint}`);

  switch (endpoint) {
    case 'auth/login':
      uri.searchParams.append('successRedirect', successRedirect);
      uri.searchParams.append('failureRedirect', failureRedirect);
      break;
    default:
      break;
  }

  return uri.href;
};

export { buildURI, get, post, put, del, isError };
