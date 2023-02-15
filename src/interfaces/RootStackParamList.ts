/**
 * 스크린 리스트라고 생각하면 됩니다.
 * props가 존재하는 스크린의 경우에는,
 * undefined 자리에 props를 타입으로 구성해주면 돼요.
 * e.g. Profile: {name: string};
 */
export type RootStackParamList = {
  Home: undefined;
};
