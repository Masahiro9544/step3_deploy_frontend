export default async function fetchWord(id) {
    const res = await fetch(`http://localhost:8000/words?id=${id}`, {
      cache: "no-cache",
    });
    if (!res.ok) {
      throw new Error("Failed to fetch customer");
    }
    return res.json();
  }