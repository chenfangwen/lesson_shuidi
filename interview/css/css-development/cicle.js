registerPaint('circle', class {
    // canvas ctx
    static get inputProperties() { return ['--circle-color']; }
    paint(ctx, geom, properties) {
      // Change the fill color.
      const color = properties.get('--circle-color');
      ctx.fillStyle = color;
      ctx.beginPath();
      ctx.arc(150, 150, 20, 0, 2 * Math.PI, false);
      ctx.fill();
    }
  })