import { CollisionRact } from "../types/tyeps"

export function clone(val) {
    const type = typeof val
    if (val === null) {
      return null
    } else if (type === 'undefined' || type === 'number' ||
               type === 'string' || type === 'boolean') {
      return val
    } else if (type === 'object') {
      if (val instanceof Array) {
        return val.map(x => clone(x))
      } else if (val instanceof Uint8Array) {
        return new Uint8Array(val)
      } else {
        let o = {}
        for (const key in val) {
          o[key] = clone(val[key])
        }
        return o
      }
    }
    throw 'unknown'
  }

export const isCollision = (r1:CollisionRact,r2:CollisionRact) => {
    // collision detection
    return Math.abs(r1.x - r2.x) < r1.w/2 + r2.w/2 
      &&
      Math.abs(r1.y - r2.y) < r1.h/2 + r2.h/2;
  }