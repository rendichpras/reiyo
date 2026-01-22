export function handler(wa) {
  wa.on('connection', (ctx) => {
    console.log(ctx);
  });

  wa.on('messages', async (ctx) => {
    const isOwner = ctx.citation ? await ctx.citation.owner() : false;

    console.log(ctx);

    if (ctx.text === 'ping') {
      if (isOwner) {
        await wa.send(ctx.roomId, 'Owner');
      } else {
        await wa.send(ctx.roomId, 'Pong!');
      }
    }
  });

  wa.on('calls', (ctx) => {
    console.log(ctx);
  });
}
