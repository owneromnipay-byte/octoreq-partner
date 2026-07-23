"use client";
import StatsCard
from "@/components/cards/StatsCard";
import { useEffect, useState } from "react";

import PartnerService from "@/services/PartnerService";

export default function DashboardPage() {

    const [dashboard, setDashboard] =
        useState<any>(null);

    const [loading, setLoading] =
        useState(true);

    useEffect(() => {

        const fetchDashboard =
            async () => {

                try {

                    const response =
                        await PartnerService
                            .getDashboard();

                    setDashboard(
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

        fetchDashboard();

    }, []);

    if (loading) {

        return (

            <div
                className="
                min-h-screen
                bg-black
                text-white
                flex
                items-center
                justify-center
                "
            >
                Loading...
            </div>
        );
    }

    return (

        <main
            className="
            min-h-screen
            bg-black
            text-white
            p-10
            "
        >

            <h1
                className="
                text-4xl
                font-bold
                mb-2
                "
            >
                Welcome Back
            </h1>

            <p
                className="
                text-zinc-400
                mb-10
                "
            >
                {
                    dashboard?.welcome
                }
            </p>

            <div
                className="
                grid
                grid-cols-1
                md:grid-cols-2
                lg:grid-cols-3
                gap-6
                "
            >

                <StatsCard
                    title="Partner Tier"
                    value={
                        dashboard?.partner_tier
                    }
                />

                <StatsCard
                    title="Partner Score"
                    value={
                        dashboard?.partner_score
                    }
                />

                <StatsCard
                    title="Wallet Balance"
                    value={`₦${dashboard?.wallet_balance}`}
                />

                <StatsCard
                    title="Lifetime Earnings"
                    value={`₦${dashboard?.lifetime_earnings}`}
                />

                <StatsCard
                    title="Active Merchants"
                    value={
                        dashboard?.active_merchants
                    }
                />

                <StatsCard
                    title="Revenue Generated"
                    value={`₦${dashboard?.revenue_generated}`}
                />

                <StatsCard
                    title="Referral Code"
                    value={
                        dashboard?.referral_code
                    }
                />

                <StatsCard
    title="Next Reward"
    value={
        dashboard?.next_reward
    }
/>

<StatsCard
    title="Pending Payout"
    value="₦0"
/>
                

            </div>

        </main>
    );
}

function Card({

    title,
    value

}: {

    title: string;
    value: any;

}) {

    return (

        <div
            className="
            bg-zinc-900
            border
            border-zinc-800
            rounded-2xl
            p-6
            "
        >

            <p
                className="
                text-zinc-400
                mb-2
                "
            >
                {title}
            </p>

            <h2
                className="
                text-2xl
                font-bold
                "
            >
                {value}
            </h2>

        </div>
    );
}