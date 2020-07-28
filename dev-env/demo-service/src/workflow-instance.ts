import { ZBClient } from 'zeebe-node';

const main = async (): Promise<void> => {
  const zbc = new ZBClient();

  const result = await zbc.createWorkflowInstanceWithResult({
    bpmnProcessId: 'demo-workflow',
    variables: {
      userId: 69
    },
    version: 1
  });

  console.log(result, '---------result');
}

main();
