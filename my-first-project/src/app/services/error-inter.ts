import { HttpInterceptorFn, HttpErrorResponse } from '@angular/common/http';
import { inject } from '@angular/core';
import { ErrorServ } from './error-serv';
import { catchError, throwError } from 'rxjs';

export const ErrorInter: HttpInterceptorFn = (req, next) => {
const errorServ = inject(ErrorServ);

return next(req).pipe(
  catchError((error: HttpErrorResponse) =>{
    let message = 'An unexpected error occurred.';

    if (error.status === 0) {
      message = 'Network Error: The request was blocked.';
    } else if (error.status === 404) {
      message = 'Not Found: The request could not be found (404 error).'
    } else if (error.status === 500) {
      message = 'Server Error: Something went wrong on the server side.'
    }
    errorServ.setError(message);
    return throwError(() => error);
  }));
}


// ------------------ Tested the Banners below and saved for reference ------------ //
//  const errorServ = inject(ErrorServ);     // added after the inject();

//   const testError: number | null = 0; //change from null = 0, 404, 500 to test
//   if (testError !== null) {
//     let message = 'An unexpected error occurred.';
//     if (testError === 0) {
//       message = 'Network Error: The request was blocked (Error 0).';
//     } else if (testError === 404) {
//       message = 'Not Found: The request could not be found (Error 404).';
//     } else if (testError === 500) {
//       message = 'Server Error: Something went wrong on the server side (Error 500).';
//     }
//     errorServ.setError(message);
//     return throwError(() => new HttpErrorResponse({ status: testError}));
//   }
