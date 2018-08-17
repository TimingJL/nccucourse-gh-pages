// import 'whatwg-fetch'; // isomorphic fetch
// import { Observable } from 'rxjs';

// // import {
// //   API_URI,
// //   ADMIN_API_URI,
// // } from '../config';

// export const APP_LOGIN_FAIL = 'APP_LOGIN_FAIL';
// export const APP_ERROR_CODE = 'APP_ERROR_CODE';
// export const APP_API_STATUS = 'APP_API_STATUS';

// // const JSON_HEADER = new Headers({
// //   'Content-Type': 'application/json',
// // });

// const actionAppStatus = (payload) => ({
//   type: APP_API_STATUS,
//   payload,
// });

// export function ActionException(action) {
//   this.action = action;
//   this.name = 'ActionException';
// }

// export function authError() {
//   localStorage.clear();
//   sessionStorage.clear();
//   return APP_API_STATUS;
// }

// export const fetchErrorEpic = (err) => Observable.of(err.action);

// const isDataUploadForm = (data) => data instanceof FormData;
// // const handleRequestError = (err) => {
// //   if (err instanceof ActionException) {
// //     throw err;
// //   }
// //   if (navigator.onLine) {
// //     throw new ActionException(actionAppStatus(503));
// //   } else {
// //     throw new ActionException(actionAppStatus(420)); // net::ERR_INTERNET_DISCONNECTED
// //   }
// // };

// // export const authLogin = (data) => (
// //   Observable.from(
// //     fetch(`${API_URI}login`, {
// //       body: JSON.stringify(data),
// //       method: 'POST',
// //       headers: JSON_HEADER,
// //     }).then((response) => {
// //       if (response.status >= 400) {
// //         throw new ActionException({ type: APP_LOGIN_FAIL });
// //       }
// //       return response;
// //     })
// //   )
// //     .catch(handleRequestError)
// //     .mergeMap((res) => Observable.from(
// //       res.json()
// //     ))
// //     .map((res) => {
// //       if (res.code) {
// //         throw new ActionException({
// //           type: APP_ERROR_CODE,
// //           payload: res.code,
// //         });
// //       }
// //       setAuthToken(res.data.token);
// //       setUserEmail(data.email);
// //       return res.token;
// //     })
// // );

// const getFetchOption = (method, headers, data) => {
//   const defaultOption = {
//     method,
//     headers: new Headers(headers),
//   };
//   if (method.toLowerCase() === 'get') {
//     return defaultOption;
//   }

//   // upload file
//   if (isDataUploadForm(data)) {
//     return {
//       ...defaultOption,
//       body: data,
//     };
//   }

//   // POST json object
//   return {
//     method,
//     headers: new Headers(headers),
//     body: JSON.stringify(data),
//   };
// };

// // const getAPIURL = (method, url, data, options) => {
// //   let res = `${getURIByOption(options)}${url}`;
// //   if (data && method.toLowerCase() === 'get') {
// //     res = `${res}${getParamsString(data)}`;
// //   }
// //   return res;
// // };

// const getHeaders = (data, options) => {
//   let res = {
//     Authorization: getAuthToken(),
//   };
//   if (!isDataUploadForm(data)) {
//     res = {
//       ...res,
//       'Content-Type': 'application/json',
//     };
//   }
//   if (typeof options !== 'undefined' && options) {
//     res = { ...res, ...options.headers };
//   }
//   return res;
// };

// // export const request = (action) => privateRequest(action);

// // export const privateRequest = ({ method, url, data, options, download = false }) => {
// //   // let allRes = null;
// //   const headers = getHeaders(data, options);
// //   const fetchOption = getFetchOption(method, headers, data);
// //   const apiURL = getAPIURL(method, url, data, options);

// //   return Observable.from(
// //     fetch(apiURL, fetchOption).then((response) => {
// //       if (response.status === 400) {
// //         // show not found
// //       } else if (response.status === 401) {
// //         throw new ActionException({
// //           type: authError(),
// //           payload: 401,
// //         });
// //       } else if (response.status >= 500) {
// //         throw new ActionException(actionAppStatus(response.status));
// //       }

// //       return response;
// //     })
// //   )
// //     .catch(handleRequestError)
// //     .mergeMap((res) => {
// //       if (download) {
// //         return Observable.from(res.blob());
// //       }
// //       return Observable.from(res.json());
// //     })
// //     .map((res) => {
// //       if (download) {
// //         return res;
// //       }
// //       if (res.code) {
// //         throw new ActionException({
// //           type: APP_ERROR_CODE,
// //           payload: res,
// //         });
// //       }
// //       return res.data;
// //     });
// // };

// // const getParamsString = (params) => {
// //   if (typeof params === 'undefined' || !params) {
// //     return '';
// //   }
// //   const query = Object.keys(params)
// //     .map((k) => `${encodeURIComponent(k)}=${encodeURIComponent(params[k])}`)
// //     .join('&');
// //   return query ? `?${query}` : '';
// // };

// // const getURIByOption = (options) => {
// //   if (typeof options === 'undefined' || !options) {
// //     return API_URI;
// //   }
// //   const { isAdmin } = options;
// //   if (isAdmin) {
// //     return ADMIN_API_URI;
// //   }
// //   return API_URI;
// // };

// const TOKEN = 'token';
// const setAuthToken = (token) => {
//   if (typeof localStorage === 'undefined') {
//     return;
//   }
//   localStorage.setItem(TOKEN, token);
// };

// const setUserEmail = (email) => {
//   if (typeof localStorage === 'undefined') {
//     return;
//   }
//   localStorage.setItem('user', email);
// };

// export const getAuthToken = () => {
//   if (typeof localStorage === 'undefined') {
//     return '';
//   }
//   return localStorage.getItem(TOKEN);
// };

// export const isLoggedIn = () => {
//   if (typeof window.localStorage === 'undefined') {
//     return false;
//   }
//   const token = getAuthToken();
//   return token !== null && token !== '';
// };
