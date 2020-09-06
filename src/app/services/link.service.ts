/** Angular */
import { Injectable } from '@angular/core';
/** Models */
import { Link } from '../models/Link';

@Injectable()
export class LinkService {
  get(): Promise<Link[]> {
    return Promise.resolve([{ id: 1, source: 1, target: 2, type: '0' }]);
  }
}
