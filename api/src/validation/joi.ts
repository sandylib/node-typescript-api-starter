import { ObjectSchema } from "@hapi/joi";
import { BadRequest } from "../errors";

export const validate = async (schema: ObjectSchema, payload: any) => {
  try {
    await schema.validateAsync(payload, {abortEarly: false})
  } catch (error) {
    throw new BadRequest(error)
  }

}