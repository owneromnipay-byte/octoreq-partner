"use client";

import { useEffect, useState } from "react";
import ReferralService from "@/services/ReferralService";

export default function ReferralsPage() {

    const [referrals, setReferrals] =
        useState<any>(null);

    const copyCode = () => {

        navigator
            .clipboard
            .writeText(
                referrals?.referral_code ||
                ""
            );
    };

    useEffect(() => {

        const fetchReferrals =
            async () => {

                try {

                    const response =
                        await ReferralService
                            .getReferrals();

                    setReferrals(
                        response.data
                    );

                } catch (error) {

                    console.error(
                        error
                    );
                }
            };

        fetchReferrals();

    }, []);

    return (

        <div>

            <h1 className="text-4xl font-bold text-white mb-8">
                Referrals
            </h1>

            <div className="grid md:grid-cols-2 gap-6">

                <div
                    className="
                    bg-zinc-900
                    rounded-2xl
                    border
                    border-zinc-800
                    p-6
                    "
                >

                    <h2 className="text-white text-xl mb-3">
                        Referral Code
                    </h2>

                    <div
                        className="
                        flex
                        items-center
                        gap-4
                        "
                    >

                        <p
                            className="
                            text-yellow-500
                            text-2xl
                            font-bold
                            "
                        >
                            {
                                referrals?.referral_code ||
                                "NOT AVAILABLE"
                            }
                        </p>

                        <button

                            onClick={
                                copyCode
                            }

                            className="
                            bg-yellow-500
                            text-black
                            px-4
                            py-2
                            rounded-lg
                            font-semibold
                            "
                        >

                            COPY

                        </button>

                    </div>

                </div>

                <div
                    className="
                    bg-zinc-900
                    rounded-2xl
                    border
                    border-zinc-800
                    p-6
                    "
                >

                    <h2 className="text-white text-xl mb-3">
                        Referral Link
                    </h2>

                    <p className="text-zinc-400 break-all">

                        {
                            `https://partners.octoreq.com/register?ref=${referrals?.referral_code || ""}`
                        }

                    </p>

                </div>

            </div>

            <div
                className="
                bg-zinc-900
                rounded-2xl
                border
                border-zinc-800
                p-6
                mt-6
                "
            >

                <h2 className="text-white text-xl mb-4">
                    QR Code
                </h2>

                <p className="text-zinc-400">
                    QR Code integration coming next.
                </p>

            </div>

        </div>
    );
}