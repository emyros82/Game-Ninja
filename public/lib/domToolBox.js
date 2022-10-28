Object.prototype.setAtr = function(nom, valeur){
    this.setAttribute(nom, valeur);
    return this;
}

Object.prototype.attachEvents= function(events)
{
    for (const event in events) {
        if(events.hasOwnProperty(event)){
            this.addEventListener(event,events[event]);
            console.log(this);
        }
      }
      return this;
}