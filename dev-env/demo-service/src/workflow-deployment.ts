import { ZBClient } from 'zeebe-node';
import { join } from 'path';

const main = async (): Promise<void> => {
    const zbc: ZBClient = new ZBClient();

    const path = join(__dirname, 'demo-workflow.bpmn');
    const res = await zbc.deployWorkflow(path);
    console.log(res, '-----------------res');
}

main();
