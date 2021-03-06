import * as jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const expiresIn = "1min";

export function generateToken(input: AuthenticationData): string {

    const token = jwt.sign(
      {
        id: input.id,
      },
      process.env.JWT_KEY as string,
      {
        expiresIn
      }
    );
    return token

}

type AuthenticationData = {
  id: string;
}