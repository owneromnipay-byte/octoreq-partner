"use client";

import { useEffect, useState } from "react";

import StatsCard from "@/components/cards/StatsCard";
import PartnerService from "@/services/PartnerService";
import { PartnerDashboard } from "@/types/dashboard";

export default function DashboardPage() {

    const [dashboard, setDashboard] =
        useState<PartnerDashboard | null>(null);

    const [loading, setLoading] =
        useState(true);

    useEffect(() => {

        const fetchDashboard =
            async () => {

                try {

                    const response =
                        await PartnerService.getDashboard();

                    setDashboard(
                        response.data
                    );

                } catch (error) {

                    console.error(
                        "Failed to load dashboard:",
                        error
                    );

                } finally {

                    setLoading(false);

                }

            };

        fetchDashboard();

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
                Loading dashboard...
            </div>

        );

    }

    return (

        <>

            <div className="mb-10">

                <h1
                    className="
                    text-4xl
                    font-bold
                    text-white
                    "
                >
                    Dashboard
                </h1>

                <p
                    className="
                    text-zinc-400
                    mt-2
                    "
                >
                    {dashboard?.welcome}
                </p>

            </div>

            <div
                className="
                grid
                grid-cols-1
                md:grid-cols-2
                xl:grid-cols-3
                gap-6
                "
            >

                <StatsCard
                    title="Partner Tier"
                    value={
                        dashboard?.partner_tier ??
                        "-"
                    }
                />

                <StatsCard
                    title="Partner Score"
                    value={
                        dashboard?.partner_score ??
                        0
                    }
                />

                <StatsCard
                    title="Wallet Balance"
                    value={`₦${formatCurrency(
                        dashboard?.wallet_balance
                    )}`}
                />

                <StatsCard
                    title="Lifetime Earnings"
                    value={`₦${formatCurrency(
                        dashboard?.lifetime_earnings
                    )}`}
                />

                <StatsCard
                    title="Revenue Generated"
                    value={`₦${formatCurrency(
                        dashboard?.revenue_generated
                    )}`}
                />

                <StatsCard
                    title="Active Merchants"
                    value={
                        dashboard?.active_merchants ??
                        0
                    }
                />

                <StatsCard
                    title="Referral Code"
                    value={
                        dashboard?.referral_code ??
                        "-"
                    }
                />

                <StatsCard
                    title="Next Reward"
                    value={
                        dashboard?.next_reward ??
                        "No reward available"
                    }
                />

                <StatsCard
                    title="Pending Payout"
                    value={`₦${formatCurrency(
                        dashboard?.pending_payout
                    )}`}
                />

            </div>

        </>

    );

}