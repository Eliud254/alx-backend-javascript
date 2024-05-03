/**
 * The weak map of a endpoints and numbers of calls made.
 */
export const weakMap = new WeakMap();

/**
 * Maximum number of the calls for the endpoint.
 */
const MAX_ENDPOINT_CALLS = 5;

/**
 * Track numbers of the calls made to an API's endpoint.
 * @param {{
 *   protocol: String,
 *   name: String,
 * }} endpoint - the endpoint to make the request to.
 */
export function queryAPI(endpoint) {
  if (!weakMap.has(endpoint)) {
    weakMap.set(endpoint, 0);
  }
  weakMap.set(endpoint, weakMap.get(endpoint) + 1);
  if (weakMap.get(endpoint) >= MAX_ENDPOINT_CALLS) {
    throw new Error('Endpoint load is high');
  }
}
