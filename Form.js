class Form {
    constructor() {
        this.title = createElement("H1");
        this.input = createInput("Enter Name:");
        this.button = createButton("Start");
        this.greeting = createElement("H3");
    }
    hide() {
        this.title.hide()
        this.input.hide()
        this.greeting.hide()
        this.button.hide()
    }
    display() {

        this.title.html("Car Racing Game");
        this.title.position(130,10);
 
        this.input.position(130,120);

        this.button.position(200,200);
        this.button.mousePressed(()=> {
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            playerCount += 1;
            player.index=playerCount
            player.update(name);
            player.updateCount(playerCount);

            this.greeting.html("Hello"+player.name);
            this.greeting.position(130,150);
        })
    }
}