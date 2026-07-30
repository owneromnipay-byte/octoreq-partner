"use client";

import { useEffect, useState } from "react";

import StatsCard from "@/components/cards/StatsCard";
import WalletService from "@/services/WalletService";

import { Wallet } from "@/types/wallet";

export default function WalletPage() {

    const [wallet, setWallet] =
        useState<Wallet | null>(null);

    const [loading, setLoading] =
        useState(true);

    useEffect(() => {

        const fetchWallet = async () => {

            try {

                const wallet =
                    await WalletService.getWallet();

                setWallet(wallet);

            } catch (error) {

                console.error(
                    "Failed to load wallet:",
                    error
                );

            } finally {

                setLoading(false);

            }

        };

        fetchWallet();

    }, []);

    const formatCurrency = (
        amount?: number
    ) => {

        return new Intl.NumberFormat(
            "en-NG",
            {
                minimumFractionDigits: 0,
                maximumFractionDigits: 0,
            }
        ).format(amount ?? 0);

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
                Loading wallet...
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
                    Wallet
                </h1>

                <p
                    className="
                    mt-2
                    text-zinc-400
                    "
                >
                    View your earnings and wallet balances.
                </p>

            </div>

            <div
                className="
                grid
                grid-cols-1
                md:grid-cols-3
                gap-6
                mb-8
                "
            >

                <StatsCard
                    title="Available Balance"
                    value={`₦${formatCurrency(
                        wallet?.available_balance
                    )}`}
                />

                <StatsCard
                    title="Pending Balance"
                    value={`₦${formatCurrency(
                        wallet?.pending_balance
                    )}`}
                />

                <StatsCard
                    title="Lifetime Earnings"
                    value={`₦${formatCurrency(
                        wallet?.total_earned
                    )}`}
                />

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
                    text-2xl
                    font-semibold
                    text-white
                    mb-4
                    "
                >
                    Recent Transactions
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
                        No transactions yet
                    </p>

                    <p
                        className="
                        mt-2
                        text-sm
                        text-zinc-500
                        "
                    >
                        Your commissions, rewards and payouts
                        will appear here once available.
                    </p>

                </div>

            </div>

        </>

    );

}