/*
An EventEmitter is a small object that lets one piece of code emit named events and any number of other places listen for them. It is the core of the publish-subscribe (pub/sub) pattern and one of the most common ways to decouple producers from consumers in JavaScript.

Where you'll see this pattern in real code
The EventEmitter API shows up across the JavaScript ecosystem:

Node.js streams and core modules. stream.on('data', chunk => ...), process.on('exit', ...), and httpServer.on('request', ...) all use Node's built-in EventEmitter.
Browser EventTarget. Every DOM node is an EventTarget, and addEventListener, removeEventListener, and dispatchEvent follow the same shape. Modern Node and browsers expose EventTarget directly, so most apps no longer need a custom class.
Library hooks. Express middleware events, Socket.io rooms, Redis pub/sub clients, MongoDB change streams, and most CLI tools expose pub/sub on top of an emitter.
In-app decoupling. A small emitter can act as a backbone for cross-component events (for example, a global toast bus, an analytics dispatcher, or a feature-flag refresh signal) when adding global state would be heavy.
When to roll your own emitter vs use a built-in
Option	When to reach for it
EventTarget (DOM/Node)	Default for most apps. Built into the platform, supports AbortSignal for cleanup, no dependencies.
Node EventEmitter	Server-side code that needs Node-specific extras like setMaxListeners, error events, or once.
Custom emitter (this question)	When you need something the built-ins do not expose, such as listing all listeners, wildcard events, priority ordering, namespaces, or interview practice.
Observer pattern (RxJS, MobX)	One-to-many sync of state rather than discrete named events.
Store-based state (Redux, Zustand)	Global state with subscriptions and time-travel debugging. Do not use an emitter as your state store; you will lose causality.
Implement an EventEmitter class similar to the one in Node.js. The exercise tests how you design a small public API, pick the right data structure, and handle the subtle bugs that most basic implementations get wrong.

Example usage of the EventEmitter class:


const emitter = new EventEmitter();

function addTwoNumbers(a, b) {
  console.log(`The sum is ${a + b}`);
}
emitter.on('foo', addTwoNumbers);
emitter.emit('foo', 2, 5);
// > "The sum is 7"

emitter.on('foo', (a, b) => console.log(`The product is ${a * b}`));
emitter.emit('foo', 4, 5);
// > "The sum is 9"
// > "The product is 20"

emitter.off('foo', addTwoNumbers);
emitter.emit('foo', -3, 9);
// > "The product is -27"
EventEmitter API
Implement the following class and APIs:

new EventEmitter()
Creates an instance of the EventEmitter class. Events and listeners are isolated within the EventEmitter instances they're added to; that is, listeners should not react to events emitted by other EventEmitter instances.

emitter.on(eventName, listener)
Adds a callback function (listener) that will be invoked when an event with the name eventName is emitted.

Parameter	Type	Description
eventName	string	The name of the event.
listener	Function	The callback function to be invoked when the event occurs.
Returns the EventEmitter instance so that calls can be chained.

emitter.off(eventName, listener)
Removes the specified listener from the list of listeners for the event with the name eventName.

Parameter	Type	Description
eventName	string	The name of the event.
listener	Function	The callback function to remove from the list of listeners for the event.
Returns the EventEmitter instance so that calls can be chained.

emitter.emit(eventName[, ...args])
Invokes each listener registered for eventName with the supplied arguments in order.

Parameter	Type	Description
eventName	string	The name of the event.
...args	any	Arguments to pass to the listener functions.
Returns true if the event had listeners, false otherwise.

Notes
Invoke listeners in registration order.
Registering the same listener more than once creates separate subscriptions, so it is invoked once per registration. One off() call removes only one matching registration.
Calling off() for a missing event or listener is a no-op.
Event names are arbitrary strings and can match inherited object property names such as toString.
Hints
New
Hint 1: How should listeners be grouped?
Each emitter instance needs an ordered collection per event name. Choose storage where arbitrary names such as toString cannot collide with inherited properties.

Hint 2: What does one `off()` remove?
Register the same function twice and remove it once. The two registrations occupy separate positions, so find only one matching entry while preserving the order of those left behind.

Hint 3: What if a listener changes subscriptions during `emit()`?
Compare iterating the live collection with iterating the listeners that existed when emission began. Which behavior keeps the current pass stable while allowing changes to affect the next one?
*/


// You are free to use alternative approaches of
// instantiating the EventEmitter as long as the
// default export has the same interface.

export default class EventEmitter {
  constructor() {
    this.events = new Map();
  }

  /**
   * @param {string} eventName
   * @param {Function} listener
   * @returns {EventEmitter}
   */
  on(eventName, listener) {
    if(this.events.has(eventName)){//create seperate subcription for same listener by pushing with old listener list
    this.events.get(eventName).push(listener) //update listener
      this.events.set(eventName, this.events.get(eventName));
      return this;
    }
    //subscribe new listener
    this.events.set(eventName, [listener])
    return this;
  }

  /**
   * @param {string} eventName
   * @param {Function} listener
   * @returns {EventEmitter}
   */
  off(eventName, listener) {
    if(this.events.has(eventName)){
      if(this.events.get(eventName).length === 1){ //if event has single listener
        this.events.delete(eventName);
        return this;
      }
      const listeners = this.events.get(eventName);
      const firstListenerIndex = listeners.findIndex(
        (item)=>item === listener
        )
        if(firstListenerIndex < 0){
          return this;
        }
        
      listeners.splice(firstListenerIndex, 1);
      this.events.set(eventName, listeners);
      return this;
    }
    return this;
  }

  /**
   * @param {string} eventName
   * @param  {...any} args
   * @returns {boolean}
   */
  emit(eventName, ...args) {
    if(this.events.has(eventName)){
      const listenerCollection = [...this.events.get(eventName)]//copy it so that it does not affect later on/off during emit
      for(let listener of listenerCollection){
        listener(...args);
      }
      return true;
    }else{
      return false;
    }
  }
}
