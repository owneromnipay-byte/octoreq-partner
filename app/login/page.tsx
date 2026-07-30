"use client";

import { useState } from "react";
import Link from "next/link";

import { useAuth } from "@/hooks/useAuth";

export default function LoginPage() {

    const { login } = useAuth();

    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");

    const [loading, setLoading] = useState(false);

    const handleSubmit = async (
        e: React.FormEvent
    ) => {

        e.preventDefault();

        try {

            setLoading(true);

            await login(
                email.trim(),
                password
            );

        } catch (error: any) {

            alert(
                error.response?.data?.message ??
                "Unable to sign in."
            );

        } finally {

            setLoading(false);

        }

    };

    return (

        <main
            className="
            min-h-screen
            flex
            items-center
            justify-center
            bg-black
            px-6
            "
        >

            <div
                className="
                w-full
                max-w-md
                bg-zinc-900
                border
                border-zinc-800
                rounded-2xl
                p-10
                "
            >

                <h1
                    className="
                    text-4xl
                    font-bold
                    text-white
                    mb-2
                    "
                >
                    OCTOREQ
                </h1>

                <p
                    className="
                    text-zinc-400
                    mb-8
                    "
                >
                    Merchant Partner Portal
                </p>

                <form
                    onSubmit={handleSubmit}
                    className="space-y-4"
                >

                    <input
                        required
                        disabled={loading}
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) =>
                            setEmail(
                                e.target.value
                            )
                        }
                        className="
                        w-full
                        rounded-xl
                        p-4
                        bg-zinc-950
                        border
                        border-zinc-800
                        text-white
                        disabled:opacity-60
                        "
                    />

                    <input
                        required
                        disabled={loading}
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) =>
                            setPassword(
                                e.target.value
                            )
                        }
                        className="
                        w-full
                        rounded-xl
                        p-4
                        bg-zinc-950
                        border
                        border-zinc-800
                        text-white
                        disabled:opacity-60
                        "
                    />

                    <button
                        type="submit"
                        disabled={loading}
                        className="
                        w-full
                        rounded-xl
                        p-4
                        bg-yellow-500
                        text-black
                        font-semibold
                        disabled:opacity-70
                        "
                    >
                        {loading
                            ? "Signing In..."
                            : "Sign In"}
                    </button>

                    <div className="mt-6 text-center">

                        <p className="text-sm text-zinc-400">

                            Don't have a Partner account?{" "}

                            <Link
                                href="/apply"
                                className="
                                text-yellow-500
                                hover:underline
                                font-medium
                                "
                            >
                                Apply to become a partner
                            </Link>

                        </p>

                    </div>

                </form>

            </div>

        </main>

    );

}