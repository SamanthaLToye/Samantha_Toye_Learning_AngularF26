import { inject } from '@angular/core';
import { LoadingServ } from './loading-serv';
import { finalize } from 'rxjs';
import { HttpInterceptorFn } from '@angular/common/http';
export const LoadingInter: HttpInterceptorFn = (req, next) => {
const loadingServ = inject(LoadingServ);

//increase count
  loadingServ.increase();
  return next(req).pipe(
    //decrease count when request succeeds or fails
    finalize(() => {
      loadingServ.decrease();
    })
  )
}
