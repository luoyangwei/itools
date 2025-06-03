import { Footer } from "@/components/footer";
import { Topbar } from "@/components/topbar";
import React from "react";

export default function PageLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="w-screen h-screen flex flex-col">
            <Topbar />
            <main className="w-full flex-1 p-6">
                {children}
            </main>
            <Footer />
        </div>
    )
}