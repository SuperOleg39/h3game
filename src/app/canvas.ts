class Canvas {
    element: HTMLCanvasElement;
    constructor(
        public width: number = 150,
        public height: number = 100,
        public id: string = 'canvas'
    ) { }
    
    public create(): HTMLCanvasElement {
        this.createCanvas();
        this.applyOptionsToCanvas();
        return this.element;
    }

    private createCanvas(): void {
        this.element = document.createElement('canvas');
    }

    private applyOptionsToCanvas(): void {
        this.element.width = this.width;
        this.element.height = this.height;
        this.element.id = this.id;
    }
}

export default Canvas;