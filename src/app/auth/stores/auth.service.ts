import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CollectionConfig, FireAuthService } from 'akita-ng-fire';
import { User, UserCredential } from 'firebase/auth';
import { from } from 'rxjs';
import { AuthState, AuthStore, Profile } from './auth.store';

@Injectable({ providedIn: 'root' })
@CollectionConfig({ path: 'users' })
export class AuthService extends FireAuthService<AuthState> {
  private readonly accessTokenKey = 'accessToken';
  private readonly refreshTokenKey = 'refreshToken';

  constructor(protected store: AuthStore, private router: Router) {
    super(store);
  }

  // onCreate() {
  //   console.log('onCreate');
  // }

  // onSignup() {
  //   console.log('onSignup');
  // }

  onSignin(credentials: UserCredential): void {
    // console.log(credentials);
    // this.store.update({
    //   profile: {
    //     displayName: user.displayName,
    //     photoURL: user.photoURL,
    //   },
    // });
  }

  // onUpdate() {
  //   console.log('log');
  // }

  onSignout(): void {
    this.router.navigateByUrl('/login');
  }

  createProfile(user: User): Partial<Profile> {
    console.log(user);
    return { photoURL: user.photoURL, displayName: user.displayName };
  }
}
