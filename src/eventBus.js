export const eventBus = {
    events: [],

    $on(eventType, callback){
        const index = this.events.findIndex(x => x.eventType == eventType);

        if(index === -1) {
            this.events.push({ eventType: eventType, callbacks: [ callback ] });
            return;
        }

        this.events[index].callbacks.push(callback);
    },
    $emit(eventType){
        const index = this.events.findIndex(x => x.eventType == eventType);
        this.events[index].callbacks.forEach(fn => fn());
    }
};