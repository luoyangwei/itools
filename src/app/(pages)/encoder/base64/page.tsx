export default function EncoderBase64Page() {
    return (
        <>
            <aside className="w-full py-4 flex flex-col gap-2 pb-12">
                <h1 className="text-3xl font-bold">Base64 编码/解码</h1>
                <p className="text-base">工具可以对字符串进行Base64编码和解码</p>
            </aside>

            <div className="flex items-center justify-between gap-6">
                <div className="flex-1 h-full bg-accent rounded-2xl min-h-56 p-4">
                    <input placeholder="字符串" />
                </div>
                <div className="flex-1 h-full bg-accent rounded-2xl min-h-56 p-4">
                    <input placeholder="结果" />
                </div>
            </div>
        </>
    )
}