import itemModel from "~~/server/models/item.model";

export default defineEventHandler(async (event) => {
  // Get data form body
  const body = await useBody(event);
  //   create the item
  try {
    await itemModel.create(body);
    return { message: "Author created" };
  } catch (e) {
    throw createError({
      message: e.message,
    });
  }
});
