function isArray(value: unknown): value is [] {
  return Array.isArray(value);
}

function isPlainObject(value: unknown): value is PlainObject {
  return (
    typeof value === "object" &&
    value !== null &&
    value.constructor === Object &&
    Object.prototype.toString.call(value) === "[object Object]"
  );
}

function isArrayOrObject(value: unknown): value is [] | PlainObject {
  return isPlainObject(value) || isArray(value);
}

export default function isEqual(lhs: PlainObject, rhs: PlainObject): boolean {
  if (Object.keys(lhs).length !== Object.keys(rhs).length) {
    return false;
  }
  for (const [key, value] of Object.entries(lhs)) {
    const rightValue = rhs[key];
    if (isArrayOrObject(value) && isArrayOrObject(rightValue)) {
      if (isEqual(value, rightValue)) {
        continue;
      }
      return false;
    }

    if (value !== rightValue) {
      return false;
    }
  }
  return true;
}
/*function isEqual2(a, b) {
  if (a == null || b == null) return false;
  if (typeof a !== "object" || typeof b !== "object")
    throw "Support only aguments type of object";
  const aKeys = Object.keys(a);
  const bKeys = Object.keys(b);
  let isEqual = true;
  aKeys.forEach((key) => {
    if (!bKeys.includes(key)) {
      console.log("0");
      isEqual = false;
      return;
    }
    if (typeof a[key] === "object" && typeof b[key] === "object") {
      isEqual = isEqual(a[key], b[key]);
    } else if (a[key] !== b[key]) {
      isEqual = false;
      return;
    }
    if (!isEqual) return;
  });

  return isEqual;
}*/
