import { atom } from 'recoil';

export const counterState = atom({
  key: 'counterState',
  default: 0,
});

export const todoListState = atom<number[]>({
  key: 'todoListState',
  default: [],
});
