import { Topbar } from "@/components/topbar";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
    return (
        <div className="w-screen h-screen">
            <Topbar />

            <div className="w-full h-full flex items-center justify-center">
                <Button>Click me</Button>
            </div>
        </div>
    );
}
