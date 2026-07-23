"use client";

import { useEffect, useState } from "react";

import WalletService from "@/services/WalletService";
import StatsCard from "@/components/cards/StatsCard";

export default function WalletPage() {

    const [wallet, setWallet] =
        useState<any>(null);

    const [loading, setLoading] =
        useState(true);

    useEffect(() => {

        const fetchWallet =
            async () => {

                try {

                    const response =
                        await WalletService
                            .getWallet();

                    setWallet(
                        response.data
                    );

                } catch (error) {

                    console.error(
                        error
                    );

                } finally {

                    setLoading(
                        false
                    );
                }
            };

        fetchWallet();

    }, []);

    if (loading) {

        return (
            <h1 className="text-white">
                Loading Wallet...
            </h1>
        );
    }

    return (

        <div>

            <h1 className="text-4xl font-bold text-white mb-8">
                Wallet
            </h1>

            <div className="grid md:grid-cols-3 gap-6 mb-8">

                <StatsCard
                    title="Available Balance"
                    value={`₦${wallet?.available_balance || 0}`}
                />

                <StatsCard
                    title="Pending Balance"
                    value={`₦${wallet?.pending_balance || 0}`}
                />

                <StatsCard
                    title="Lifetime Earnings"
                    value={`₦${wallet?.total_earned || 0}`}
                />

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

                <h2 className="text-2xl text-white mb-4">
                    Recent Transactions
                </h2>

                <p className="text-zinc-400">
                    No transactions found.
                </p>

            </div>

        </div>
    );
}