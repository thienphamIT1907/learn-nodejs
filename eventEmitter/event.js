import { EventEmitter } from "events";

const event = new EventEmitter();

// Don't use anonymous function if you want to delete it after trigger or you can use once
const event01Listener = () => {
  console.log("handle event 01");
};

const event02Listener = () => {
  console.log("handle event 02");
};

event.on("event-01", event01Listener);
event.emit("event-01");

// if event-02 is trigger, it will be removed
event.once("event-02", event02Listener);
event.emit("event-02");

console.log(event.eventNames()); // show array of event name

event.off("event-01", event01Listener);

console.log({ event }); // Show event instance
