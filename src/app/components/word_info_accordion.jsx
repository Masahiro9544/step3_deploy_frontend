import Link from "next/link";

export default function WordInfoAccordion({
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
          <div>
          <div className="grid grid-cols-2 gap-4 mt-8">
            <div className="p-4">
              <Link href="./../" className="mt-4 pt-4" prefetch={false}>
                <button className="btn btn-neutral w-full border-0 bg-blue-300 text-black hover:text-white">
                  フレーズ情報を更新
                </button>
              </Link>
            </div>

            <div className="p-4">
              <Link href="./../" className="mt-4 pt-4" prefetch={false}>
                <button className="btn btn-neutral w-full border-0 bg-blue-300 text-black hover:text-white">
                  フレーズ情報を削除
                </button>
              </Link>
            </div>
          </div>
          </div>
        </div>
      </div>
    </>
  );
}
