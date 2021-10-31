import * as ReadonlyArray from 'fp-ts/ReadonlyArray';
import { flow, pipe } from 'fp-ts/function';
var DomainEvents1;
export { DomainEvents1 as DomainEvents };
(function(DomainEvents) {
    DomainEvents.appendEvent = function(event) {
        return function(events) {
            return pipe(events, ReadonlyArray.append(event));
        };
    };
    DomainEvents.appendEventFromType = flow(DomainEvent.fromType, DomainEvents.appendEvent);
})(DomainEvents1 || (DomainEvents1 = {
}));
