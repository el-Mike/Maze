import { GameObject } from '@engine/GameObject';
import { Body } from './Body';

import { Collision } from './Collision';

export class Collider {
  public collide(subject: Body<GameObject>, target: Body<GameObject>) {
    return !(
      subject.x > (target.x + target.width)
      || target.x > (subject.x + subject.width)
      || subject.y > (target.y + target.height)
      || target.y > (subject.y + subject.height)
    );
  }
}
