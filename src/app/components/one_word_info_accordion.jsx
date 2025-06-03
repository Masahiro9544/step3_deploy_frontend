"use client";
import { useState } from 'react';

export default function OneWordInfoAccordion({
  id,
  text_en,
  text_ja,
  translation,
  example,
  is_completed,
}) {
  const [completed, setCompleted] = useState(Boolean(is_completed))

  const handleToggle = async () => {
    const newStatus = !completed
    setCompleted(newStatus)

    await fetch(process.env.NEXT_PUBLIC_API_ENDPOINT + "/completeword", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        word_id: id,
        is_completed: newStatus
      }),
    })
  }

  return (
    <>
      <div className="collapse collapse-arrow bg-base-100 border border-base-300">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title font-semibold">{id}: {text_en}</div>
        <div className="collapse-content text-sm relative">
          <p>読み：{text_ja}</p>
          <p>意味：{translation}</p>
          <p>例文：{example}</p>

          {/* チェックボックス右下に配置 */}
          <div className="absolute bottom-2 right-4">
            <input
              type="checkbox"
              className="checkbox checkbox-success"
              checked={completed}
              onChange={handleToggle}
            />
          </div>
        </div>
      </div>
    </>
  );
}
