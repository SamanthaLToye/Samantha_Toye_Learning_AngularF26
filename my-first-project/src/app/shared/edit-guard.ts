import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { LockServ } from '../services/lock-serv';

export const verifyGuard: CanActivateFn = () => {
  const router = inject(Router);
  const lockServ = inject(LockServ);

  const isLocked = lockServ.guardLock();
  return isLocked ? router.createUrlTree(['/items']) : true;
}
