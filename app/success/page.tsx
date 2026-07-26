"use client";

import Link from "next/link";

import {
    CheckCircle,
    Clock,
    Mail,
    ArrowRight
} from "lucide-react";

export default function ApplicationSuccessPage() {

    return (

        <main
            className="
            min-h-screen
            bg-black
            flex
            items-center
            justify-center
            px-6
            py-16
            "
        >

            <div
                className="
                w-full
                max-w-3xl
                "
            >

                <div
                    className="
                    bg-zinc-950
                    border
                    border-zinc-800
                    rounded-3xl
                    p-10
                    shadow-2xl
                    "
                >

                    {/* Success Icon */}

                    <div
                        className="
                        flex
                        justify-center
                        mb-8
                        "
                    >

                        <div
                            className="
                            h-24
                            w-24
                            rounded-full
                            bg-green-500/10
                            flex
                            items-center
                            justify-center
                            "
                        >

                            <CheckCircle
                                size={58}
                                className="text-green-500"
                            />

                        </div>

                    </div>

                    {/* Heading */}

                    <div
                        className="
                        text-center
                        "
                    >

                        <h1
                            className="
                            text-4xl
                            font-bold
                            text-white
                            "
                        >
                            Application Submitted Successfully
                        </h1>

                        <p
                            className="
                            mt-5
                            text-zinc-400
                            leading-7
                            max-w-2xl
                            mx-auto
                            "
                        >
                            Thank you for applying to become an
                            <span className="text-yellow-500 font-semibold">
                                {" "}OCTOREQ Merchant Partner
                            </span>.
                            <br />
                            We've successfully received your application and it
                            is now awaiting review by our Partnerships Team.
                        </p>

                    </div>

                    {/* Timeline */}

                    <div
                        className="
                        mt-12
                        grid
                        gap-4
                        "
                    >

                        <div
                            className="
                            bg-zinc-900
                            rounded-xl
                            p-5
                            flex
                            items-center
                            gap-4
                            "
                        >

                            <CheckCircle
                                className="text-green-500"
                                size={24}
                            />

                            <div>

                                <p className="text-white font-semibold">
                                    Application Received
                                </p>

                                <p className="text-zinc-400 text-sm">
                                    Your application has been successfully submitted.
                                </p>

                            </div>

                        </div>

                        <div
                            className="
                            bg-zinc-900
                            rounded-xl
                            p-5
                            flex
                            items-center
                            gap-4
                            "
                        >

                            <Clock
                                className="text-yellow-500"
                                size={24}
                            />

                            <div>

                                <p className="text-white font-semibold">
                                    Application Review
                                </p>

                                <p className="text-zinc-400 text-sm">
                                    Our Partnerships Team will carefully review your application.
                                </p>

                            </div>

                        </div>

                        <div
                            className="
                            bg-zinc-900
                            rounded-xl
                            p-5
                            flex
                            items-center
                            gap-4
                            "
                        >

                            <Mail
                                className="text-blue-400"
                                size={24}
                            />

                            <div>

                                <p className="text-white font-semibold">
                                    Approval & Account Activation
                                </p>

                                <p className="text-zinc-400 text-sm">
                                    If approved, you'll receive an email with instructions to activate your Partner account.
                                </p>

                            </div>

                        </div>

                    </div>

                    {/* Review Time */}

                    <div
                        className="
                        mt-10
                        bg-yellow-500/10
                        border
                        border-yellow-500/30
                        rounded-2xl
                        p-6
                        "
                    >

                        <div
                            className="
                            flex
                            justify-between
                            items-center
                            "
                        >

                            <div>

                                <p className="text-yellow-500 font-semibold">
                                    Expected Review Time
                                </p>

                                <p className="text-zinc-300 mt-1">
                                    Most applications are reviewed within
                                    <span className="text-white font-semibold">
                                        {" "}24–72 Hours
                                    </span>.
                                </p>

                            </div>

                            <Clock
                                className="text-yellow-500"
                                size={34}
                            />

                        </div>

                    </div>

                    {/* Notice */}

                    <div
                        className="
                        mt-8
                        text-center
                        "
                    >

                        <p
                            className="
                            text-zinc-500
                            text-sm
                            leading-6
                            "
                        >
                            Please keep an eye on your inbox, including your spam
                            folder, for updates regarding your application.
                            You'll receive an email once a decision has been made.
                        </p>

                    </div>

                    {/* Buttons */}

                    <div
                        className="
                        mt-10
                        flex
                        flex-col
                        sm:flex-row
                        gap-4
                        justify-center
                        "
                    >

                        <Link
                            href="https://octoreq.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
                            px-6
                            py-3
                            rounded-xl
                            bg-yellow-500
                            text-black
                            font-semibold
                            hover:bg-yellow-400
                            transition
                            text-center
                            "
                        >
                            Visit OCTOREQ Website
                        </Link>

                        <Link
                            href="/login"
                            className="
                            px-6
                            py-3
                            rounded-xl
                            border
                            border-zinc-700
                            text-white
                            hover:bg-zinc-900
                            transition
                            text-center
                            flex
                            items-center
                            justify-center
                            gap-2
                            "
                        >
                            Partner Login

                            <ArrowRight
                                size={18}
                            />

                        </Link>

                    </div>

                </div>

            </div>

        </main>

    );

}