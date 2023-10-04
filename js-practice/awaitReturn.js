async function resolveOrReject() {
  await new Promise((_) => setTimeout(_, 1000));
  const randomResult = Boolean(Math.round(Math.random()));

  if (randomResult) return "good";
  else throw Error("bad");
}
async function a() {
  try {
    resolveOrReject();
  } catch (e) {
    return "caught!";
  }
}
a();
