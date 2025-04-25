import { v4 as uuidv4 } from 'uuid';
import type { Timestamps } from './timestamps';
import { addTimestamps, updateTimestamps } from './timestamps';

export type Role = {
  id: string;
  name: string;
  description: string;
} & Timestamps;

export type RoleCreate = Omit<Role, 'id' | keyof Timestamps>; 

export function createRole(role: RoleCreate): Role {
  return addTimestamps({
    ...role,
    id: uuidv4(),
  });
}

export type RoleUpdate = Partial<RoleCreate>;

export function updateRole(role: Role, update: RoleUpdate): Role {
  return updateTimestamps({
    ...role,
    ...update,
  });
}
