"use client";

import { useState }
from "react";
import Link from "next/link";

import { useAuth } from "@/hooks/useAuth";


export default function LoginPage() {

    const {
        login
    } = useAuth();

    const [
        email,
        setEmail
    ] = useState("");

    const [
        password,
        setPassword
    ] = useState("");

    const [
        loading,
        setLoading
    ] = useState(false);

    const handleSubmit =
        async (
            e: React.FormEvent
        ) => {

            e.preventDefault();

            try {

                setLoading(
                    true
                );

                await login(
                    email,
                    password
                );

            } catch {

                alert(
                    "Invalid credentials."
                );

            } finally {

                setLoading(
                    false
                );
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
            "
        >

            <div
                className="
                w-full
                max-w-md
                bg-zinc-900
                p-10
                rounded-2xl
                border
                border-zinc-800
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
                    onSubmit={
                        handleSubmit
                    }
                    className="
                    space-y-4
                    "
                >

                    <input
                        type="email"
                        placeholder="Email"

                        value={
                            email
                        }

                        onChange={
                            (
                                e
                            ) =>
                                setEmail(
                                    e
                                        .target
                                        .value
                                )
                        }

                        className="
                        w-full
                        p-4
                        rounded-xl
                        bg-zinc-950
                        border
                        border-zinc-800
                        text-white
                        "
                    />

                    <input
                        type="password"
                        placeholder="Password"

                        value={
                            password
                        }

                        onChange={
                            (
                                e
                            ) =>
                                setPassword(
                                    e
                                        .target
                                        .value
                                )
                        }

                        className="
                        w-full
                        p-4
                        rounded-xl
                        bg-zinc-950
                        border
                        border-zinc-800
                        text-white
                        "
                    />

                    <button
                        type="submit"

                        disabled={
                            loading
                        }

                        className="
                        w-full
                        p-4
                        rounded-xl
                        bg-yellow-500
                        text-black
                        font-semibold
                        "
                    >

                        {
                            loading
                                ? "Signing In..."
                                : "Sign In"
                        }

                    </button>
                  <div className="mt-6 text-center">
  <p className="text-sm text-zinc-400">
    Don't have a Partner account?{" "}
    <Link
      href="/apply"
      className="text-yellow-500 hover:underline font-medium"
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