// @flow
import { store } from '~/store';
import client from './client';

const authorizationHeader = async (): Promise<string> => {
  const { accessToken } = await store.getState().tokens;
  return `Bearer ${accessToken}`;
};

type APIarg = {
  request?: any,
  variables?: {[string]: string},
}

/**
 * Server request
 * by argument selects the request method
 *
 * @param {gql} request - gql.
 * @param {Object} variables? - variables for query
 * @param {boolean} priv - if private method, default false.
 * @returns {Promise} - server response, or throw an exception (exception handling in ./client)
 */
const API = async (
  priv: boolean = false,
  request: any,
  variables = {}
  ,
): Promise<Object> => {
  const { operation } = request.definitions[0];
  const method = operation === 'query' ? 'query' : 'mutate';
  const authorization = priv ? await authorizationHeader() : {};

  const res = await client[method]({
    [operation]: request,
    variables,
    update: result => result,
    context: {
      headers: { authorization },
    },
  });
  return (res.data);
};

/**
 * export API private/public methods
 * passes authorization in headers
 * @param {APIarg} arg - arguments for the query
 */
// $FlowFixMe
export const PRIV = (...arg: APIarg) => API(true, ...arg);
// $FlowFixMe
export const PUB = (...arg: APIarg) => API(false, ...arg);
