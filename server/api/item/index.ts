import itemModel from "~~/server/models/item.model";

export default defineEventHandler(async (event) => {
  // return all items
  return await itemModel.find().sort({ date: 1 });
});
