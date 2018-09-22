interface Cycle {
  frameCount: number;
  startTime: number;
  sinceStart: number;
}

type ResetStates = 'new' | 'old';

interface Cycles {
  new: Cycle;
  old: Cycle;
}

export class Loop {
  private fpsInterval: number;
  private resetInterval: number;
  private before: number;
  private resetState: ResetStates;
  private cycles: Cycles = {} as Cycles;
  private stopLoop: number;

  constructor(
    private fps: number = 60,
    private windowRef = window
  ) {
    this.fpsInterval = 1000 / this.fps;
    this.resetInterval = 5;
    this.before = this.windowRef.performance.now();
    this.resetState = 'new';

    this.cycles = {
      new: {
        frameCount: 0,
        startTime: this.before,
        sinceStart: 0,
      },
      old: {
        frameCount: 0,
        startTime: this.before,
        sinceStart: 0,
      }
    };
  }

  public start(frameCallback: Function) {
    const loopFn = (tFrame?: number) => {
      this.stopLoop = this.windowRef.requestAnimationFrame(loopFn);

      const now = tFrame;
      const elapsed = now - this.before;

      let activeCycle;
      let targetResetInterval;

      if ( elapsed > this.fpsInterval) {
        this.before = now - (elapsed % this.fpsInterval);

        for (const c in this.cycles) {
          const cycle = (this.cycles as any)[c] as Cycle;

          cycle.frameCount += 1;
          cycle.sinceStart = now - cycle.startTime;
        }

        activeCycle = this.cycles[this.resetState];
        this.fps = Math.round(1000 / (activeCycle.sinceStart / activeCycle.frameCount) * 100) / 100;

        targetResetInterval = this.cycles.new.frameCount === this.cycles.old.frameCount
          ? this.resetInterval * this.fps
          : (this.resetInterval * 2) * this.fps;

        if (activeCycle.frameCount > targetResetInterval) {
          this.cycles[this.resetState].frameCount = 0;
          this.cycles[this.resetState].startTime = now;
          this.cycles[this.resetState].sinceStart = 0;

          this.resetState = this.resetState === 'new' ? 'old' : 'new';
        }

        frameCallback();
      }
    };

    loopFn();
  }

  public stop() {
    this.windowRef.cancelAnimationFrame(this.stopLoop);
  }

  getFps() {
    return this.fps;
  }
}
