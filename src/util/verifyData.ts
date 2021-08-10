export default function verifyData(data = {}, requiredAttrs?: string[]) {
  const objToArr = Object.entries(data);

  if (!objToArr.length) return false;

  try {
    requiredAttrs?.forEach((attr) => {
      const hasAttr = objToArr.findIndex(([key]) => key == attr) >= 0;

      if (!hasAttr) throw new Error(`Missing ${attr} attribute.`);
    });

    objToArr.forEach(([key, value]) => {
      if (!value) {
        console.log({ key });

        throw new Error(`Missing ${key} attribute.`);
      }
    });

    return true;
  } catch (error) {
    console.log({ error });
    return false;
  }
}
