import '../lib/domToolBox.js'

//class element 
export class Element
{   
    getConteneur(){
        return this.conteneur;
    }
    setConteneur(conteneur){
        this.conteneur = conteneur;
        return this;
    }

    getLimites(){
        return this.limites;
    }
    setLimites(limites){
        this.limites = limites;
        return this;
    }

    getFond(){
        return this.fond;
    }
    setFond(fond){
        this.fond = fond;
        return this;
    }

    getPosition(){
        return this.position;
    }
    setPosition(position){
        this.position = position;
        return this;
    }

    getEnfants(){
        return this.enfants;
    }
    setEnfants(enfants){
        this.enfants = enfants;
        return this;
    }

    getEvents(){
        return this.events;
    }
    setEvents(events){
        this.events = events;
        return this;
    }
    
    
    constructor(limites, fond, position,enfants,events){

        this.init(limites, fond, position,enfants,events);
        console.log(this.buildLimites());
        this.build();

    }

    init(limites, fond, position, enfant,events){

        this.setConteneur(this.buildConteneur())
        .setLimites(limites ? limites : this.buildLimites())
        .setFond(fond ? fond : this.buildFond())
        .setPosition(position ? position : this.buildPosition())
        .setEvents(events ? events : [])
        .setEnfants([]);
        
    }

    build(){
        this.getConteneur().setAtr('class', this.getFond())
        .setAtr('style', this.buildLimitsCss() + this.buildPositionCss()).attachEvents(this.getEvents())
        .parentNode.setAtr('style', ' position:relative;');
    }

    buildConteneur(){
        return document.body.appendChild(document.createElement("div"));
    }

    buildLimites(){
        return {
            'x' : '100vw',
            'y' : '100vh'
        }
    }

    buildFond(){
        return 'forest';
    }

    buildLimitsCss(){
        return 'width:'+ this.getLimites().x + '; height:'+this.getLimites().y +' ;';
    }

    buildPosition(){
        return {
            'x' : '0',
            'y' : '0'
        }
    }

    buildPositionCss(){
        return ' position: absolute; left:'+ this.getPosition().x + '; top:'+this.getPosition().y;
    }

    addEnfant(enfant){
        this.getEnfants().push(enfant);
        this.getConteneur().appendChild(enfant.getConteneur());
        return this;
    }
}