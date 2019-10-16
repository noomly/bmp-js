export interface BmpData {
    fileSize: number,
    reserved: number,
    offset: number,
    headerSize: number,
    width: number,
    height: number,
    planes: number,
    bitPP: number,
    compress: number,
    rawSize: number,
    hr: number,
    vr: number,
    colors: number,
    importantColors: number,
    data: Buffer,
}

export function decode(buffer: Buffer, is_with_alpha: boolean): BmpData;
export function encode(BmpData): Buffer;
