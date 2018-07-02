import { Resolvers } from "../../../types/resolvers";

const resolvers: Resolvers = {
  Query: {
    GetMyProfile: async (_, __, { req }) => {
      const { user } = req;
      return {
        ok: true,
        error: null,
        user
      };
    }
  }
};
export default resolvers;
