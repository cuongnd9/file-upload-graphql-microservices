import { ZBClient } from 'zeebe-node';
import { join } from 'path';

const deploy = async (): Promise<void> => {
    const zbc: ZBClient = new ZBClient();

    const path = join(__dirname, '/workflows/order_creation_workflow.bpmn');
    await zbc.deployWorkflow(path);
}

deploy();
