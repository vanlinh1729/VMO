export const getPath = (path: string, order: number) => {
  return "/" + path.split("/")[order];
};
