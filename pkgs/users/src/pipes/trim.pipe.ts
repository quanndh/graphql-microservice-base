import { Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class TrimPipe<T> implements PipeTransform {
  transform(value: T) {
    return this.loopObjectKey(value);
  }

  loopObjectKey(obj: { [K: string]: any }) {
    return Object.assign(
      {},
      ...Object.keys(obj).map((k) => ({
        [k]:
          typeof obj[k] === 'string'
            ? obj[k].trim()
            : typeof obj[k] === 'object' && !Array.isArray(obj[k])
            ? this.loopObjectKey(obj[k])
            : obj[k],
      })),
    );
  }
}
