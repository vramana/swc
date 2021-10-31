import * as ReadonlyArray from 'fp-ts/ReadonlyArray';
import { flow, pipe } from 'fp-ts/function';

export namespace DomainEvents {
  export const appendEvent = <T extends string>(event: DomainEvent<T>) => (
    events: DomainEvents<T>,
  ) => pipe(events, ReadonlyArray.append(event));
  export const appendEventFromType = flow(DomainEvent.fromType, appendEvent);
}
