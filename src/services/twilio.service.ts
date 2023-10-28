import { Injectable } from '@nestjs/common';

const accountSid = 'ACddf408b4322c676505edb096a8a0ed20';
const authToken = 'ca0bbbeba0dbd17bc620f40c26dc25fe';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const client = require('twilio')(accountSid, authToken);

@Injectable()
export class TwilioService {
  createMensagem() {
    console.log(`Cel Param: `);

    const createMessage = client.messages.create({
      body: `Olá , este é apenas um teste. Seu cadastro funcionou`,
      from: 'whatsapp:+14155238886',
      to: `whatsapp:+5577999100208`,
    });
  }
}
