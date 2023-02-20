import { Injectable } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
@Injectable()
export class LocalAuthGuard extends AuthGuard("auth-local-guard") {}
