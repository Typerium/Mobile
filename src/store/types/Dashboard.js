// @flow

export type Screen = {
  screen: string,
  titleSmall: string,
  title: string,
  titleColor: string,
  subscription: string,
  background: ?string,
}

export type DataScroll = Array<{
    key: string;
    src: string;
    vertical: boolean;
    horizontal: boolean;
  }>
