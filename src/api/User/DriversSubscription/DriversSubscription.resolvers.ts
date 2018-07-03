const resolvers = {
  Subscription: {
    DriversSubscription: {
      subscribe: (_, __, { pubSub }) => {
        return pubSub.asyncIterator("driverUpdate");
      }
    }
  }
};
export default resolvers;
