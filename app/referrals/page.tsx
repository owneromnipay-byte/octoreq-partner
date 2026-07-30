"use client";

import { useEffect, useState } from "react";

import ReferralService from "@/services/ReferralService";
import { Referral } from "@/types/referral";

export default function ReferralsPage() {

    const [referrals, setReferrals] =
        useState<Referral | null>(null);

    const [loading, setLoading] =
        useState(true);

    const [error, setError] =
        useState("");

    const [copied, setCopied] =
        useState(false);

    useEffect(() => {

        const fetchReferrals = async () => {

            try {

                const data =
                    await ReferralService.getReferrals();

                setReferrals(data);

            } catch (err) {

                console.error(
                    "Failed to load referrals:",
                    err
                );

                setError(
                    "Unable to load referral information."
                );

            } finally {

                setLoading(false);

            }

        };

        fetchReferrals();

    }, []);

    const referralLink =
        referrals?.referral_code
            ? `https://portal.octoreq.com/register?ref=${referrals.referral_code}`
            : "";

    const copyCode = async () => {

        if (!referrals?.referral_code) return;

        try {

            await navigator.clipboard.writeText(
                referrals.referral_code
            );

            setCopied(true);

            setTimeout(() => {

                setCopied(false);

            }, 2000);

        } catch (err) {

            console.error(
                "Failed to copy referral code:",
                err
            );

        }

    };

    if (loading) {

        return (

            <div
                className="
                flex
                items-center
                justify-center
                py-24
                text-zinc-400
                "
            >
                Loading referrals...
            </div>

        );

    }

    if (error) {

        return (

            <div
                className="
                rounded-2xl
                border
                border-red-500/20
                bg-red-500/10
                p-6
                text-red-300
                "
            >
                {error}
            </div>

        );

    }

    return (

        <>

            <div className="mb-8">

                <h1
                    className="
                    text-3xl
                    sm:text-4xl
                    font-bold
                    text-white
                    "
                >
                    Referrals
                </h1>

                <p
                    className="
                    mt-2
                    text-zinc-400
                    "
                >
                    Share your referral code and invite new
                    partners to join OCTOREQ.
                </p>

            </div>

            <div
                className="
                grid
                grid-cols-1
                md:grid-cols-2
                gap-6
                "
            >

                <div
                    className="
                    rounded-2xl
                    border
                    border-zinc-800
                    bg-zinc-900
                    p-6
                    "
                >

                    <h2
                        className="
                        text-xl
                        font-semibold
                        text-white
                        mb-4
                        "
                    >
                        Referral Code
                    </h2>

                    <div
                        className="
                        flex
                        flex-col
                        sm:flex-row
                        sm:items-center
                        gap-4
                        "
                    >

                        <p
                            className="
                            text-2xl
                            font-bold
                            text-yellow-500
                            break-all
                            "
                        >
                            {referrals?.referral_code ??
                                "Not Available"}
                        </p>

                        <button

                            onClick={copyCode}

                            disabled={
                                !referrals?.referral_code
                            }

                            className="
                            rounded-lg
                            bg-yellow-500
                            px-4
                            py-2
                            font-semibold
                            text-black
                            transition
                            hover:opacity-90
                            disabled:cursor-not-allowed
                            disabled:opacity-50
                            "
                        >

                            {copied
                                ? "Copied ✓"
                                : "Copy"}

                        </button>

                    </div>

                </div>

                <div
                    className="
                    rounded-2xl
                    border
                    border-zinc-800
                    bg-zinc-900
                    p-6
                    "
                >

                    <h2
                        className="
                        text-xl
                        font-semibold
                        text-white
                        mb-4
                        "
                    >
                        Referral Link
                    </h2>

                    <p
                        className="
                        break-all
                        text-zinc-400
                        "
                    >
                        {referralLink ||
                            "Referral link unavailable."}
                    </p>

                </div>

            </div>

            <div
                className="
                mt-6
                rounded-2xl
                border
                border-zinc-800
                bg-zinc-900
                p-6
                "
            >

                <h2
                    className="
                    text-2xl
                    font-semibold
                    text-white
                    mb-4
                    "
                >
                    QR Code
                </h2>

                <div
                    className="
                    rounded-xl
                    border
                    border-dashed
                    border-zinc-700
                    p-8
                    text-center
                    "
                >

                    <p className="text-zinc-300 font-medium">
                        QR Code integration coming soon.
                    </p>

                    <p
                        className="
                        mt-2
                        text-sm
                        text-zinc-500
                        "
                    >
                        Your personal referral QR code will
                        appear here once the feature is
                        enabled.
                    </p>

                </div>

            </div>

        </>

    );

}