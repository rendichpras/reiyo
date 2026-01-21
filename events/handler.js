export function handler(wa) {
  wa.on('connection', (ctx) => {
    console.log(ctx);
  });

  wa.on('messages', async (ctx) => {
    const isAdmin = ctx.citation ? await ctx.citation.admin() : false;

    console.log(ctx);

    if (ctx.text?.trim() === 'ping') {
      if (isAdmin) {
        await wa.send(ctx.roomId, 'Admin');
      } else {
        await wa.send(ctx.roomId, 'Pong!');
      }
    }
  });
}
