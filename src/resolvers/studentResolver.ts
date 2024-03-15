import { Resolver, Mutation, Query, Arg } from "type-graphql";
import { Student } from "../models/student";

@Resolver()
export class StudentResolver {
  @Query(() => [Student])
  async students() {
    return await Student.find();
  }

  @Mutation(() => Student)
  async createStudent(
    @Arg("name") name: string,
    @Arg("email") email: string,
    @Arg("last_name") last_name: string
  ) {
    try {
      await Student.insert({
        name,
        email,
        last_name,
      });
      console.log(name, email, last_name);
      return true;
    } catch (err) {
      console.error(err);
    }
  }
}
