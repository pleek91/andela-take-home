export type Timestamps = {
  createdAt: Date;
  updatedAt: Date;
}

export function addTimestamps<const T extends Record<string, unknown>>(valueWithoutTimestamps: T): T & Timestamps {
  const now = new Date();

  return {
    ...valueWithoutTimestamps,
    createdAt: now,
    updatedAt: now,
  }
}

export function updateTimestamps<const T extends Timestamps>(valueWithTimestamps: T): T {
  const now = new Date();

  return {
    ...valueWithTimestamps,
    updatedAt: now,
  }
}

