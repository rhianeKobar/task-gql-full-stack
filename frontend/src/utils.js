/**
 * copyObject is a pure function that expects an object that contains only variables and returns a copy of it.
 */

export const copyObject = (obj) => {
  const copyObj = {...obj};
  return copyObj;
}