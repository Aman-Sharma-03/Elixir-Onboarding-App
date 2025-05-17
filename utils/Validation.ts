
export async function validate(schema: any, objToBeVerified: any, setError: any) {
  try{
    setError({})
    await schema.validate(objToBeVerified, { abortEarly: false });
    return true;
  } catch(err) {
    const newErrors: Record<string, string> = {}
    if (typeof err === 'object' && err !== null && 'inner' in err && Array.isArray((err as any).inner) && (err as any).inner.length > 0) {
      (err as any).inner.forEach((validationError: any) => {
        newErrors[validationError.path] = validationError.message;
      });
    } else if (typeof err === 'object' && err !== null && 'path' in err) {
      newErrors[(err as any).path] = (err as any).message;
    }
    setError(newErrors);
    return false;
  }
}