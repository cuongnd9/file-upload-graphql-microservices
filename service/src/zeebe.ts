import { ZBClient, ZBWorkerTaskHandler } from 'zeebe-node';

import workers from './workers';

const zbc = new ZBClient();

const main = () => {
  workers.forEach(({ type, handler }: { type: string; handler: ZBWorkerTaskHandler }) => {
    const zbWorker = zbc.createWorker({
      taskType: type,
      taskHandler: handler,
    });
    zbWorker.on('ready', () => console.log(`${type} Worker connected!`));
    zbWorker.on('connectionError', () => console.log(`${type} Worker disconnected!`));
  });
};

export default main;
