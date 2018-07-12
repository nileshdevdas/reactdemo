import events from 'events';
class EventBus {
  static eventEmitter = new events.EventEmitter();
  static getEventEmmiter(){
      return this.eventEmitter;
  }
}
export default EventBus;
