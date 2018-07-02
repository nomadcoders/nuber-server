import User from "../../../entities/User";
import {
  EmailSignInMutationArgs,
  EmailSignInResponse
} from "../../../types/graph";
import { Resolvers } from "../../../types/resolvers";

const resolvers: Resolvers = {
  Mutation: {
    EmailSignIn: async (
      _,
      args: EmailSignInMutationArgs
    ): Promise<EmailSignInResponse> => {
      const { email } = args;
      try {
        const user = await User.findOne({ email });
        if (!user) {
          return {
            ok: false,
            error: "No User found with that email",
            token: null
          };
        }
      } catch (error) {
        return {
          ok: false,
          error: error.message,
          token: null
        };
      }
    }
  }
};
export default resolvers;
