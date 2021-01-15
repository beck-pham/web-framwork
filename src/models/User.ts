interface UserProps {
  name?: string;
  age?: number;
}

// function alias
type Callback = () => void;

export class User {
  
  events: { [key: string]: Callback[] } = {};
  
  constructor(private data: UserProps) {}

  get(propName: string): (number | string) {
    return this.data[propName];
  }

  set(update: UserProps): void {
    Object.assign(this.data, update) // built in function that copy every props from 'update obj'(source) to 'this.data' obj (target)
  }

  on(eventName: string, callback: Callback): void {
    const handlers = this.events[eventName] || []; // callback or undefined
    handlers.push(callback);
    this.events[eventName] = handlers;
  }

  trigger(eventName: string):void {
    const handlers = this.events[eventName];

    if(!handlers || handlers.length === 0) {
      return;
    }

    handlers.forEach(callback => { // for each callback function in the callback array, run each callback
      callback();
    })
  }
}