import { ExtractJwt, Strategy } from "passport-jwt";
import { PassportStrategy } from "@nestjs/passport";
import { Injectable } from "@nestjs/common";
import { jwtConstants } from "../constants";
import constants from "./constants";
@Injectable()
export class JwtStrategy extends PassportStrategy(
  Strategy,
  constants.authGuardName
) {
  constructor() {
    console.log(jwtConstants.secret);
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: jwtConstants.secret,
    });
  }

  async validate(payload) {
    return { userId: payload.sub, username: payload.username };
  }
}
