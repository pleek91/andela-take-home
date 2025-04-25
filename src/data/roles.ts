import { createRole, type Role } from "@/types/role";
import { repeat } from "@/utilities/repeat";
import { faker } from "@faker-js/faker";  

const roles: Role[] = []
const rolesById = new Map<Role['id'], Role>();

function mockRole(): Role {
  const role = createRole({
    name: faker.person.jobTitle(),
    description: faker.person.jobDescriptor(),
  })

  roles.push(role)
  rolesById.set(role.id, role)

  return role
}

function getRole(roleId: string): Role {
  const role = rolesById.get(roleId);

  if (!role) {
    throw new Error(`Role with id ${roleId} not found`);
  }

  return role;
}

function seedRoles(): Role[] {
  roles.slice(0, 0)
  rolesById.clear()

  const count = 10

  return repeat(count, mockRole);
}

export {
  roles,
  seedRoles,
  getRole,
}