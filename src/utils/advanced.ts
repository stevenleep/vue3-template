export const flat = <ArrayItem = any>(arr: any[]): ArrayItem[] => {
  return arr.reduce<ArrayItem[]>((prev, next) => {
    return prev.concat(Array.isArray(next) ? flat(next) : next);
  }, []);
};
