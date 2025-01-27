/* 
  Enum from to mimic Sway Enum 
  Requires at least one Key-Value but does not raise error on multiple pairs
  This is done in the abi-coder
*/
export type Enum<T, U = {[K in keyof T]: Pick<T, K> }> = Partial<T> & U[keyof U];

export type Option<T> = T | undefined;