import Sidebar from "@/components/layout/Sidebar";
import Navbar from "@/components/layout/Navbar";

export default function ProtectedLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex min-h-screen bg-black">

            <Sidebar />

            <div className="flex-1">

                <Navbar />

                <main className="p-8">
                    {children}
                </main>

            </div>

        </div>
    );
}