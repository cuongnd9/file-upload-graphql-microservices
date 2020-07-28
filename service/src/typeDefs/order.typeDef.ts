const typeDef = `
  extend type Query {
    orders(id: String): [Order],
    order(id: String): Order,
    createOrder(total: Int, finalTotal: Int): Order
  }

  enum Status {
    IN_PROCESS
    DONE
  }

  type Order {
    id: String
    total: Int
    finalTotal: Int
    status: Status
    createdAt: DateTime
    updatedAt: DateTime
  }
`;

export default typeDef;
