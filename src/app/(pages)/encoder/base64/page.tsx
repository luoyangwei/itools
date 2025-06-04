'use client'

import { useEffect, useState } from "react"
import Base64 from "base-64";

export default function EncoderBase64Page() {
    const [originalContent, setOriginalContent] = useState<string>("");
    const [encodedContent, setEncodedContent] = useState<string>("");

    const encoder = (str: string) => {
        return Base64.encode(str);
    }

    useEffect(() => {
        setEncodedContent(originalContent)
    }, [originalContent])

    return (
        <>
            <aside className="w-full py-4 flex flex-col gap-2 pb-12">
                <h1 className="text-3xl font-bold">Base64 编码/解码</h1>
                <p className="text-base">工具可以对字符串进行Base64编码和解码</p>
            </aside>

            <div className="flex items-start justify-between gap-6">
                <div className="flex-1 h-full bg-accent rounded-2xl min-h-56 p-4">
                    <textarea
                        value={originalContent}
                        onChange={(e) => setOriginalContent(e.target.value)}
                        placeholder="字符串"
                        className="outline-hidden w-full h-full min-h-52"
                    />
                </div>
                <div className="flex-1 h-full bg-accent rounded-2xl min-h-56 p-4">
                    <textarea
                        value={encoder(encodedContent)}
                        onChange={(e) => setEncodedContent(e.target.value)}
                        placeholder="结果"
                        className="outline-hidden w-full h-full min-h-52" />
                </div>
            </div>
        </>
    )
}