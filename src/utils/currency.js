// @flow

export function WeiToEth(wei: string) {
  const _wei = parseInt(wei, 10);
  if (!Number.isInteger(_wei)) return 0;
  return (_wei / (10 ** 18));
}

export default {};
