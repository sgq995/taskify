import { type ClassList, type Signal } from '@builder.io/qwik';

export function isClassSignal(classes: unknown): classes is Signal<ClassList> {
  return typeof classes === 'object' && classes !== null && 'value' in classes;
}
