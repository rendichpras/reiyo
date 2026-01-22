import { Client } from 'zaileys';
import { handler } from './events/handler.js';
import { middleware } from './middleware.js';

const wa = new Client({
  session: 'reiyo',
  authType: 'qr',
  showLogs: true,
  fancyLogs: true,
  ignoreMe: true,
  syncFullHistory: true,
  autoRead: true,
  autoOnline: true,
  autoPresence: true,
  autoMentions: true,
  autoRejectCall: true,
  autoMarkAI: true,

  citation: {
    owner: async () => {
      return [Number(process.env.OWNER_NUMBER)];
    },
  },
});

middleware(wa);
handler(wa);
