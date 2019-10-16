export interface BmpData {
    width: number,
    height: number,
    data: Buffer,
}

export interface ImgData {
    data: Buffer,
    width: number,
    height: number,
}

export function decode(buffer: Buffer, is_with_alpha: boolean): BmpData;
export function encode(data: ImgData): Buffer;
