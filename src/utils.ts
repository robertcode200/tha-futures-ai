const upColorHex = '#F11F1F';
const downColorHex = '#009900';

export const getValueUpDownColor = (value: number): string => {
  return value > 0 ? upColorHex : downColorHex;
};
