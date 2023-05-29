import { SetMetadata } from '@nestjs/common';

export type TRoles = string[];

export const Roles = (...roles: TRoles) => SetMetadata('roles', roles);
