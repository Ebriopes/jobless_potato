import {
  animate,
  animateChild,
  group,
  query,
  style,
  transition,
  trigger,
} from '@angular/animations';

export const slideInAnimation = trigger('routeAnimations', [
  transition('HomePage => *', [
    style({ position: 'relative' }),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        right: 0,
        width: '100%',
      }),
    ]),
    query(':enter', [style({ right: '-100%' })], { optional: true }),
    query(':leave', animateChild()),
    group([
      query(':leave', [animate('600ms ease-out', style({ right: '100%' }))]),
      query(':enter', [animate('600ms ease-out', style({ right: '0%' }))], {
        optional: true,
      }),
    ]),
  ]),
  transition('* => HomePage', [
    style({ position: 'relative' }),
    query(
      ':enter, :leave',
      [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
        }),
      ],
      { optional: true },
    ),
    query(':enter', [style({ left: '-100%' })], { optional: true }),
    query(':leave', animateChild(), { optional: true }),
    group([
      query(
        ':leave',
        [animate('500ms ease-out', style({ left: '100%', opacity: 0 }))],
        { optional: true },
      ),
      query(':enter', [animate('600ms ease-out', style({ left: '0%' }))], {
        optional: true,
      }),
    ]),
  ]),
  transition('* <=> *', [
    style({ position: 'relative', overflowY: 'hidden' }),
    query(
      ':enter, :leave',
      [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '100%',
        }),
      ],
      { optional: true },
    ),
    query(':enter', [style({ top: '-100%' })], { optional: true }),
    query(':leave', animateChild(), { optional: true }),
    group([
      query(
        ':leave',
        [animate('800ms ease-out', style({ top: '100%', opacity: 0 }))],
        { optional: true },
      ),
      query(':enter', [animate('800ms ease-out', style({ top: '0%' }))], {
        optional: true,
      }),
      query('@*', animateChild(), { optional: true }),
    ]),
  ]),
]);
