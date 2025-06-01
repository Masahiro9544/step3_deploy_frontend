"use client";
import OneWordInfoAccordion from "@/app/components/one_word_info_accordion.jsx";
import fetchWord from "./fetchWord";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function ConfirmPage() {
  const router = useRouter();
  const id = useSearchParams().get("id");
  const [word, setWord] = useState(null);

  useEffect(() => {
    const fetchAndSetWord = async () => {
      const wordData = await fetchWord(id);
      setWord(wordData);
    };
    fetchAndSetWord();
  }, []);

  return (
    <>
      <div className="card bordered bg-white border-blue-200 border-2 w-auto m-4">
        <div className="alert alert-success p-4 text-center">
          正常に作成しました
        </div>
        <OneWordInfoAccordion {...word} />
        <button onClick={() => router.push("./../..")}>
          <div className="btn btn-primary m-4 text-2xl">戻る</div>
        </button>
      </div>
    </>
  );
}