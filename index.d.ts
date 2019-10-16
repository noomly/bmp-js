export interface BmpData {
    width: number,
    height: number,
    data: Buffer,
}

export function decode(buffer: Buffer, is_with_alpha: boolean): BmpData;
export function encode(data: BmpData): Buffer;
