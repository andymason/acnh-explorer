export interface IResponse {
  items: {
    uid: string;
    title: string;
  }[];
}

export async function getData(): Promise<IResponse> {
  const res = await fetch("./sample.json");
  if (res.ok === false) {
    throw new Error("Data fetch failed");
  }

  return await res.json();
}
