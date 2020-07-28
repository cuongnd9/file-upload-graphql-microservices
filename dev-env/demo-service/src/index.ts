import { ZBClient } from 'zeebe-node';

const main = (): void => {
  const zbc = new ZBClient({
    onReady: () => console.log(`Connected!`),
    onConnectionError: () => console.log(`Disconnected!`)
  })

  zbc.createWorker('log-task-1', (job: any, complete: any) => {
    console.log(job.variables, '---------variables 1');
    console.log(job.customHeaders, '----------customeHeaders 1');

    complete.success({
      id: 12457,
      name: 'Cuong Duy Nguyen'
    });
  });

  zbc.createWorker('log-task-2', (job: any, complete: any) => {
    console.log(job.variables, '---------variables 2');
    console.log(job.customHeaders, '----------customeHeaders 2');

    complete.success();
  });

};

main();
