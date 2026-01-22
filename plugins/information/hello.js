import { definePlugins } from 'zaileys';

export default definePlugins(
    async (wa, ctx) => {
        await wa.send(ctx.messages.roomId, `Hello ${ctx.messages.senderName}! This is a plugin 🚀`);
    },
    {
        matcher: ['/hello', '.hello'],
        metadata: {
            description: 'Test plugin',
        },
    }
);
