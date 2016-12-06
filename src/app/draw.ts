import Canvas from './Canvas';

class Draw {
    private canvas: any;
    private ctx: CanvasRenderingContext2D;
    constructor(canvas) {
        if (canvas) this.canvas = canvas;
        this.ctx = this.canvas.getContext('2d');
    }

    public fill(): void {
        this.ctx.fillStyle = 'rgb(0,0,0)';
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
		this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }

    public rect(x: number, y: number, width: number, height: number, color: string): void {
        this.ctx.fillStyle = color;
        this.ctx.fillRect(x, y, width, height);
    }
    
}

export default Draw;