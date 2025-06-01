"use server";
import { revalidatePath } from "next/cache";

const selectWord = async (formData) => {
  const select_category = formData.get("category");
  const select_level = formData.get("level");

  const body_msg = JSON.stringify({
    category: select_category,
    level: select_level,
  });

  const res = await fetch(`http://localhost:8000/words`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: body_msg,
  });
  if (!res.ok) {
    throw new Error("Failed to select word");
  }

  revalidatePath(`/words`);
  
  const data = await res.json();
  return data
};

export default selectWord;