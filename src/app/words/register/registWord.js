"use server";
import { revalidatePath } from "next/cache";

const registWord = async (formData) => {
  const creating_text_en = formData.get("text_en");
  const creating_text_ja = formData.get("text_ja");
  const creating_translation = formData.get("translation");
  const creating_example = formData.get("example");
  const creating_category = formData.get("category");
  const creating_level = formData.get("level");

  const body_msg = JSON.stringify({
    text_en: creating_text_en,
    text_ja: creating_text_ja,
    translation: creating_translation,
    example: creating_example,
    category: creating_category,
    level: creating_level,
  });

  const res = await fetch(`http://localhost:8000/registword`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: body_msg,
  });

  if (!res.ok) {
    throw new Error("Failed to register word");
  }

  revalidatePath(`/words`);

  const data = await res.json();
  return data;

};

export default registWord;