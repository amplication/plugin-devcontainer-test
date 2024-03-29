/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Empty } from "./Empty";
import { EmptyCountArgs } from "./EmptyCountArgs";
import { EmptyFindManyArgs } from "./EmptyFindManyArgs";
import { EmptyFindUniqueArgs } from "./EmptyFindUniqueArgs";
import { DeleteEmptyArgs } from "./DeleteEmptyArgs";
import { EmptyService } from "../empty.service";
@graphql.Resolver(() => Empty)
export class EmptyResolverBase {
  constructor(protected readonly service: EmptyService) {}

  async _emptiesMeta(
    @graphql.Args() args: EmptyCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Empty])
  async empties(@graphql.Args() args: EmptyFindManyArgs): Promise<Empty[]> {
    return this.service.empties(args);
  }

  @graphql.Query(() => Empty, { nullable: true })
  async empty(
    @graphql.Args() args: EmptyFindUniqueArgs
  ): Promise<Empty | null> {
    const result = await this.service.empty(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Empty)
  async deleteEmpty(
    @graphql.Args() args: DeleteEmptyArgs
  ): Promise<Empty | null> {
    try {
      return await this.service.deleteEmpty(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
