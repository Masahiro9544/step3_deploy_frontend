export default function OneWordInfoAccordion({
  id,
  text_en,
  text_ja,
  translation,
  example,
}) {
  return (
    <>
      <div className="collapse collapse-arrow bg-base-100 border border-base-300">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title font-semibold">{id}: {text_en}</div>
        <div className="collapse-content text-sm">
          <p>読み：{text_ja}</p>
          <p>意味：{translation}</p>
          <p>例文：{example}</p>
        </div>
      </div>
    </>
  );
}
