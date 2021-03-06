type RgbColor = { r: number; g: number; b: number };

//TODO: Implement hexToRgb
export function hexToRgb(hex: string): RgbColor {
  //F00 = FF0000
  if (hex.length === 3) {
    let hr = hex[0];
    let hg = hex[1];
    let hb = hex[2];
    return hexToRgb(`${hr}${hr}${hg}${hg}${hb}${hb}`);
  }
  //FF0000
  const [r, g, b] = [0, 2, 4]
    .map(item => hex.substring(item, item + 2)) //['ff', '00', '00']
    .map(hexCh => parseInt(hexCh, 16)); //[255,0,0]

  // const r1 = parseInt(hex[0] + hex[1], 16); //FF
  // const g1 = parseInt(hex[2] + hex[3], 16);
  // const b1 = parseInt(hex[4] + hex[5], 16);

  return { r, g, b }; //{r:255,g:0,b:0}
}

//TODO: Implement rgbToHex
export function rgbToHex({ r, g, b }: RgbColor): string {
  return [r, g, b]
    .map(rgbCh => Math.max(0, Math.min(255, rgbCh)).toString(16)) //f
    .map(hexCh => (hexCh.length === 1 ? `0${hexCh}` : hexCh)) //0f0f0f
    .join("");
}
