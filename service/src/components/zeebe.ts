import { ZBClient, WorkflowVariables } from 'zeebe-node';

import { ZeebeError } from './errors';

const zbc = new ZBClient();

interface Parameter {
  bpmnProcessId: string;
  variables: WorkflowVariables;
}

export const startJob = async (paramter: Parameter) => {
  try {
    const result = await zbc.createWorkflowInstanceWithResult({
      ...paramter,
    });
    return result;
  } catch (error) {
    throw new ZeebeError(error.message);
  }
};
