class Canvas {
    element: HTMLCanvasElement;
    constructor(
        public width: number = 150,
        public height: number = 100,
        public id: string = 'canvas'
    ) { }

    public create(): HTMLCanvasElement {
        if (!this.element) {
            this.createCanvas();
            this.applyOptions();
        }
        return this.element;
    }
    
    public get(): HTMLCanvasElement {
        return this.element;
    }

    private createCanvas(): void {
        this.element = document.createElement('canvas');
    }

    private applyOptions(): void {
        this.element.width = this.width;
        this.element.height = this.height;
        this.element.id = this.id;
    }
}

export default Canvas;