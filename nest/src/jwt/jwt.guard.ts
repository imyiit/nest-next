import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

import constants from './constants';

@Injectable()
export class JwtAuthGuard extends AuthGuard(constants.authGuardName) {}
