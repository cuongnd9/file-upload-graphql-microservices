import { ZBWorkerTaskHandler } from 'zeebe-node';

const initiatePayment: ZBWorkerTaskHandler = (job, complete) => {
  const { cartValue } = job.variables;
  const discount = 0.05;
  complete.success({
    orderValue: cartValue * (1 - discount),
  });
};

const shipWithInsurance: ZBWorkerTaskHandler = (_, complete) => {
  complete.success();
};

const shipWithoutInsurance: ZBWorkerTaskHandler = (_, complete) => {
  complete.success();
};

const workflow = [
  {
    type: 'initiate_payment',
    handler: initiatePayment,
  },
  {
    type: 'ship_with_insurance',
    handler: shipWithInsurance,
  },
  {
    type: 'ship_without_insurance',
    handler: shipWithoutInsurance,
  },
];

export default workflow;
