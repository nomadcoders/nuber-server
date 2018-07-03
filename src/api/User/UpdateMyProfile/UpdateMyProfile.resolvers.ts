import User from "../../../entities/User";
import { UpdateMyProfileMutationArgs } from "../../../types/graph";
import { Resolvers } from "../../../types/resolvers";
import privateResolver from "../../../utils/privateResolver";

const resolvers: Resolvers = {
  Mutation: {
    UpdateMyProfile: privateResolver(
      async (_, args: UpdateMyProfileMutationArgs, { req }) => {
        const user: User = req.user;
        await User.update({ id: user.id }, { ...args });
      }
    )
  }
};

export default resolvers;
