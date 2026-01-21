export function middleware(wa) {
  wa.use(async (ctx, next) => {
    if (ctx.messages.isSpam) {
      console.warn(`Spam detected from ${ctx.messages.senderName}`);
      return;
    }

    await next();
  });
}
