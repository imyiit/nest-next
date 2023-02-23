import { Injectable } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";

import constants from "./constants";

@Injectable()
export class LocalAuthGuard extends AuthGuard(constants.authGuardName) {}
