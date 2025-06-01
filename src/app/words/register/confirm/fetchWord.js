export default async function fetchWord(id) {
    const res = await fetch(process.env.NEXT_PUBLIC_API_ENDPOINT + `/words?id=${id}`, {
      cache: "no-cache",
    });
    if (!res.ok) {
      throw new Error("Failed to fetch customer");
    }
    return res.json();
  }