import itemModel from "~~/server/models/item.model";

export default defineEventHandler(async (event) => {
  // Get data form body
  const id = event.context.params.id;
  console.log(id);
  //   delete the item
  try {
    await itemModel.findByIdAndDelete(id);
    return { message: id + " removed" };
  } catch (e) {
    throw createError({
      message: e.message,
    });
  }
});
