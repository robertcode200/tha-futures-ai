// ## common ##
export type DateString = `${string & { __brand: "\\d{4}-\\d{2}-\\d{2}" }}`;
export type UnixTimestampSeconds = number;

// ## market_info ##
export type ResponseLatestTradeDates = undefined | { date: DateString }[];
export type TransformedLatestTradeDates = { dateString: DateString, unixTimestampSeconds: UnixTimestampSeconds }[];

// ## chip ##
export type NetOiVolume = number;
export type OiDiff = number;

export type VolumeValue = number;
export type ValueDiff = number;

export type TradingValueDiff = number;

export type ChipData = {
  net_oi_volume: NetOiVolume[];
  oi_diff: OiDiff[];
};

export type ChipDataOptions = {
  net_oi_volume: NetOiVolume[];

  net_oi_value: VolumeValue[];
  base_net_oi_volume: VolumeValue[];
  base_net_oi_value: VolumeValue[];
  oi_volume_diff: VolumeValue[];
  oi_value_diff: VolumeValue[];
  base_oi_volume_diff: VolumeValue[];
  base_oi_value_diff: VolumeValue[];
  call_long_oi_value: VolumeValue[];
  put_long_oi_value: VolumeValue[];
  call_short_oi_value: VolumeValue[];
  put_short_oi_value: VolumeValue[];
};

export type TradingValueData = {
  trading_value_diff: TradingValueDiff[];
};

export type ChipUnifyTable = {
  t: UnixTimestampSeconds[];
  date: DateString[];
  foreigner_txf: ChipData;
  foreigner_mxf: ChipData;
  foreigner_tmf: ChipData;
  foreigner_opt: ChipDataOptions;
  dealer_txf: ChipData;
  dealer_mxf: ChipData;
  dealer_tmf: ChipData;
  dealer_opt: ChipDataOptions;
  trust_txf: ChipData;
  trust_mxf: ChipData;
  trust_tmf: ChipData;
  trust_opt: ChipDataOptions;
  foreigner_twse: TradingValueData;
  foreigner_tpex: TradingValueData;
  dealer_twse: TradingValueData;
  dealer_tpex: TradingValueData;
  trust_twse: TradingValueData;
  trust_tpex: TradingValueData;
  retail_tmf: ChipData;
  retail_mxf: ChipData;
  large_trader_futures_top5: ChipData;
  large_trader_futures_top10: ChipData;
  large_trader_futures_last5: ChipData;
  large_trader_options_top5: ChipData;
  large_trader_options_top10: ChipData;
  large_trader_options_last5: ChipData;
};

export type ResponseChipUnifyTable = undefined | ChipUnifyTable;

export type TransformedChipUnifyTable = Record<string, { date: DateString, oiDiff: number }[]>;
