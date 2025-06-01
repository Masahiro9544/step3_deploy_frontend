"use client"
import { useRef } from 'react';
import { useRouter } from 'next/navigation';

import registWord from './registWord';

export default function Page() {
    const formRef = useRef();
    const router = useRouter();

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(formRef.current);
        const wordData = await registWord(formData);
        router.push(`./register/confirm?id=${wordData.id}`);
    };

    return (
        <>
            <div className="card bordered bg-white border-blue-200 border-2 w-auto">
                <div className="m-4 card bordered bg-blue-100 duration-200 hover:border-r-red">
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <div className="card-body">
                            <p>テキスト（英語）：<input type="text" name="text_en" placeholder="Hello." className="input input-bordered" required/></p>
                            <p>テキスト（読み）：<input type="text" name="text_ja" placeholder="ハロー" className="input input-bordered" /></p>
                            <p>テキスト（和訳）：<input type="text" name="translation" placeholder="こんにちは" className="input input-bordered" /></p>
                            <p>例文：<input type="text" name="example" placeholder="Hello world!" className="input input-bordered" /></p>
                            <p>カテゴリー：
                                <select name="category" className="select select-bordered w-full max-w-xs">
                                    <option value="daily">日常会話</option>
                                    <option value="business">ビジネス</option>
                                    <option value="travel">旅行</option>
                                </select>
                            </p>
                            <p>レベル：
                            <select name="level" className="select select-bordered w-full max-w-xs">
                                <option value="easy">簡単</option>
                                <option value="normal">普通</option>
                                <option value="difficult">難しい</option>
                            </select>
                            </p>
                        </div>
                        <div className="flex justify-center">
                            <button type="submit" className="btn btn-outline btn-success m-4 text-xl">
                                登録
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}