export default async function useFetch<R=any,T=any>({
  url,
  method,
  body,
}: {
  url: string;
  method: string;
  body?: T;
}) {
  const data = await (
    await fetch(url, {
      method: method,
      headers: new Headers({
        "Content-Type": "application/json",
      }),
      body: JSON.stringify(body),
    })
  ).json();

  if (data.status === 200) {
    return (data.data as R);
  } else {
    throw new Error(data.msg);
  }
}
