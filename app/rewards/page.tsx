"use client";

import { useEffect, useState } from "react";
import RewardService from "@/services/RewardService";
import { Reward } from "@/types/reward";

export default function RewardsPage() {
    const [rewards, setRewards] = useState<Reward[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchRewards = async () => {
            try {
                const data = await RewardService.getRewards();
                setRewards(data);
            } catch (err) {
                console.error(err);
                setError("Unable to load rewards.");
            } finally {
                setLoading(false);
            }
        };

        fetchRewards();
    }, []);

    if (loading) {
        return (
            <div className="flex items-center justify-center py-20">
                <p className="text-zinc-400">Loading rewards...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="rounded-2xl border border-red-900 bg-red-950/30 p-6">
                <p className="text-red-400">{error}</p>
            </div>
        );
    }

    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-4xl font-bold text-white">
                    Rewards
                </h1>

                <p className="mt-2 text-zinc-400">
                    Unlock exclusive OCTOREQ partner rewards as you grow
                    your merchant portfolio and revenue.
                </p>
            </div>

            {rewards.length === 0 ? (
                <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-8 text-center">
                    <p className="text-zinc-400">
                        No rewards available yet.
                    </p>
                </div>
            ) : (
                <div className="grid gap-6 lg:grid-cols-2">
                    {rewards.map((reward) => (
                        <div
                            key={reward.id}
                            className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 transition-colors hover:border-yellow-500/40"
                        >
                            <div className="flex items-center justify-between">
                                <h2 className="text-2xl font-bold text-yellow-500">
                                    {reward.name}
                                </h2>

                                <span className="rounded-full bg-yellow-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-yellow-400">
                                    Reward
                                </span>
                            </div>

                            <div className="mt-6 space-y-3 text-sm text-zinc-300">
                                <div className="flex justify-between">
                                    <span>Merchants Required</span>
                                    <span className="font-semibold text-white">
                                        {reward.merchant_requirement}
                                    </span>
                                </div>

                                <div className="flex justify-between">
                                    <span>Revenue Required</span>
                                    <span className="font-semibold text-white">
                                        ₦
                                        {Number(
                                            reward.revenue_requirement
                                        ).toLocaleString()}
                                    </span>
                                </div>

                                <div className="flex justify-between">
                                    <span>Retention Required</span>
                                    <span className="font-semibold text-white">
                                        {reward.retention_requirement}%
                                    </span>
                                </div>

                                <div className="border-t border-zinc-800 pt-4">
                                    <p className="text-xs uppercase tracking-wide text-zinc-500">
                                        Reward
                                    </p>

                                    <p className="mt-1 text-base font-semibold text-white">
                                        {reward.reward_type}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}