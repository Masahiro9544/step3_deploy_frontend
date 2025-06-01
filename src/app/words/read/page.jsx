// "use client";
export const dynamic = 'force-dynamic'
import WordInfoAccordion from "@/app/components/word_info_accordion.jsx";
import Link from "next/link";
// import { useEffect, useState } from "react";
import fetchWord from "./fetchWord";

export default async function Page() {
  /* const [wordInfos, setWordInfos] = useState([]);

  useEffect(() => {
    const fetchAndSetWord = async () => {
      const wordData = await fetchWord();
      setWordInfos(wordData);
    };
    fetchAndSetWord();
  }, []); */

  const wordInfos = await fetchWord();

  return (
    <>
      <div className="fixed top-0 left-0 w-full bg-white z-50">
        <div className="text-center p-4">
          <h1 className="text-[32px] text-neutral-700 font-bold font-[ヒラギノ角ゴ ProN W6]">フレーズリスト</h1>
        </div>
        <div className="flex justify-center">
          <Link href="./../" className="mb-4" prefetch={false}>
            <button className="btn btn-neutral w-md border-0 bg-blue-300 text-black hover:text-white">
              ホームに戻る
            </button>
          </Link>
        </div>
      </div>
      
      {wordInfos.length > 0  ? (
        <div className="pt-[120pt]">
          {wordInfos.map((wordInfo, index) => (
            <div
              key={index}
              className="card bordered bg-white border-blue-200 border-2 flex flex-row w-auto m-4"
            >
              <WordInfoAccordion {...wordInfo} />
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center p-4">
          <p>例文情報がありません。</p>
        </div>
      )}
    </>
  );
}
