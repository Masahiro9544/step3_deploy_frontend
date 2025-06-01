"use client";
import OneWordInfoAccordion from "@/app/components/one_word_info_accordion.jsx";
import Link from "next/link";
import { useRef, useState } from 'react';

import selectWord from './selectWord';

export default function Page() {
  const formRef = useRef();
  const [wordInfos, setWordInfos] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!formRef.current) return;

    const formData = new FormData(formRef.current);
    const wordData = await selectWord(formData);
    setWordInfos(wordData);
  };
  
  return (
    <>
      <div className="text-center p-4">
        <h1 className="text-[32px] text-neutral-700 font-bold font-[ヒラギノ角ゴ ProN W6]">まいにち英フレ</h1>
        <p>1日5分で3つのフレーズを学びましょう！！</p>
      </div>
      <div>
        <form ref={formRef} onSubmit={handleSubmit}>
          <div className="flex items-center m-4">
            <div className="w-32 flex-none">カテゴリー：</div>
            <div className="flex-1">
              <select name="category" className="select select-bordered w-full max-w-xs">
                <option value="daily">日常会話</option>
                <option value="business">ビジネス</option>
                <option value="travel">旅行</option>
              </select>
            </div>
          </div>
          <div className="flex items-center m-4">
            <div className="w-32 flex-none">レベル：</div>
            <div className="flex-1">
              <select name="level" className="select select-bordered w-full max-w-xs">
                <option value="easy">簡単</option>
                <option value="normal">普通</option>
                <option value="difficult">難しい</option>
              </select>
            </div>
          </div>
          <div className="flex justify-center">
            <button type="submit" className="btn btn-outline btn-success mt-4 text-2xl">
              Let's start!
            </button>
          </div>
        </form>
      </div>

      {wordInfos.length > 0 ? (
        <div>
        {wordInfos.map((wordInfo, index) => (
          <div
            key={index}
            className="card bordered bg-white border-blue-200 border-2 flex flex-row w-auto m-4"
          >
            <OneWordInfoAccordion {...wordInfo} />
          </div>
        ))}
      </div>
      ) : (
        <div className="text-center mb-4">
          <p>ボタンを押してね</p>
        </div>
      )}

      <div className="grid grid-cols-2 gap-4 my-8">
        <div className="p-4">
          <Link href="/words/register" className="mt-4 pt-4" prefetch={false}>
            <button className="btn btn-neutral w-full border-0 bg-blue-300 text-black hover:text-white">
              フレーズを登録する
            </button>
          </Link>
        </div>

        <div className="p-4">
          <Link href="/words/read" className="mt-4 pt-4" prefetch={false}>
            <button className="btn btn-neutral w-full border-0 bg-blue-300 text-black hover:text-white">
              フレーズ一覧を見る
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
