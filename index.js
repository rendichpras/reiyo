import { Client } from 'zaileys';
import { handler } from './events/handler.js';

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
    admin: async () => {
      return [6281284900651];
    },
  },
});

handler(wa);
