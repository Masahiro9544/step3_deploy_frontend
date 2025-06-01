export default async function fetchWords() {
    const res = await fetch(process.env.NEXT_PUBLIC_API_ENDPOINT + "/allwords", {
      cache: "no-cache",
    });
    if (!res.ok) {
      throw new Error("Failed to fetch words");
    }
    return res.json();
  }
  