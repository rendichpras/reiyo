import { definePlugins } from 'zaileys';
import { getUser } from '../../db/index.js';

export default definePlugins(
  async (wa, ctx) => {
    const user = await getUser(ctx.messages.senderId);
    const isPremium = user?.premium;
    if (!isPremium) {
      return await wa.send(
        ctx.messages.roomId,
        `Hello ${ctx.messages.senderName}! You are not premium 🚀`,
      );
    }
    await wa.send(
      ctx.messages.roomId,
      `Hello ${ctx.messages.senderName}! You are premium 🚀`,
    );
  },
  {
    matcher: ['.premium'],
    metadata: {
      description: 'Premium',
    },
  },
);
