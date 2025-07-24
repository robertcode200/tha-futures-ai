// ## futuresOp ##
export type UnixTimestamp = number;
export type Price = number;
export type Volume = number;

export type SymbolBar = {
  time: UnixTimestamp;
  open: Price;
  high: Price;
  low: Price;
  close: Price;
  volume: Volume;
};

export type SymbolMetaData = {
  noData: boolean;
};

export type ResponseSymbolHistory = {
  bars: SymbolBar[];
  metaData: SymbolMetaData;
}; 