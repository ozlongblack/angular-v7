import {
  animate,
  animation,
  style,
} from '@angular/animations';

const fadeAnimation = animation([
  style({ opacity: '{{from}}' }),
  animate(
    '{{time}}',
    style({ opacity: '{{to}}' }),
  ),
]);

export default fadeAnimation;
