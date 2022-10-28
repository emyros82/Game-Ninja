import { Element } from "./Element.js";


export class App
{
    getScene(){
        return this.scene;
    }
    setScene(scene){
        this.scene = scene;
        return this.scene;
    }

    constructor() {

        this.init();
        console.log("classe app");

    }

    init(){
        this.setScene(new Element(
            {
                'x' : '100vw',
                'y' : '100vh'
            },
            'forest',
            {
                'x' : '0',
                'y' : '0'
            },

        )).addEnfant(new Element(
            {
                'x' : '176px',
                'y' : '300px'
            },
            'player1',
            {
                'x' : '1500px',
                'y' : '500px'
            },
            
            
                ).addEnfant(new Element(
                    {
                        'x' : '176px',
                        'y' : '150px'
                    },
                    'player1-body',
                    {
                        'x' : '0px',
                        'y' : '150px'
                    },
                    [],
                    {
                        click:function(){alert('test')}
                    }
                )).addEnfant(new Element(
                    {
                        'x' : '150px',
                        'y' : '150px'
                    },
                    'player1-head',
                    {
                        'x' : '0px',
                        'y' : '18px'
                    },
                    [],
                    {
                        click:function(){alert('test')}
                    }
                )).addEnfant(new Element(
                    {
                        'x' : '40px',
                        'y' : '19px'
                    },
                    'shuriken',
                    {
                        'x' : '0px',
                        'y' : '205px'
                    },
                    [],
                    {
                        click:function(){this.classList.toggle('actionShurikenJouer1')}
                    }
                ))
                
                )
        .addEnfant(new Element(
            {
                'x' : '170px',
                'y' : '300px'
            },
            'player2',
            {
                'x' : '100px',
                'y' : '500px'
            },
            ).addEnfant(new Element(
                {
                    'x' : '170px',
                    'y' : '150px'
                },
                'player2-body',
                {
                    'x' : '0px',
                    'y' : '150px'
                },
                [],
                    {
                        click:function(){alert('test')}
                    }
            )).addEnfant(new Element(
                {
                    'x' : '150px',
                    'y' : '150px'
                },
                'player2-head',
                {
                    'x' : '0px',
                    'y' : '10px'
                },
                [],
                    {
                        click:function(){alert('test')}
                    }
            )).addEnfant(new Element(
                {
                    'x' : '40px',
                    'y' : '19px'
                },
                'shuriken',
                {
                    'x' : '140px',
                    'y' : '180px'
                },
                [],
                    {
                        click:function(){this.classList.toggle('actionShurikenJouer2'); console.log ('coucou')}
                    }
            ))
        );
    }
}