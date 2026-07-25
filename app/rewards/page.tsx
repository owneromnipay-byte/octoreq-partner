"use client";

import { useEffect, useState } from "react";
import RewardService from "@/services/RewardService";

export default function RewardsPage() {

    const [rewards, setRewards] =
        useState<any[]>([]);

    useEffect(() => {

        const fetchRewards =
            async () => {

                try {

                    const response =
                        await RewardService
                            .getRewards();

                    setRewards(
                        response.data || response
                    );

                } catch (error) {

                    console.error(
                        error
                    );
                }
            };

        fetchRewards();

    }, []);

    return (

        <div>

            <h1
                className="
                text-4xl
                font-bold
                text-white
                mb-8
                "
            >
                Rewards
            </h1>

            <div
                className="
                space-y-6
                "
            >

                {
                    rewards.map(
                        (
                            reward: any
                        ) => (

                            <div
                                key={
                                    reward.id
                                }

                                className="
                                bg-zinc-900
                                border
                                border-zinc-800
                                rounded-2xl
                                p-6
                                "
                            >

                                <h2
                                    className="
                                    text-2xl
                                    font-bold
                                    text-yellow-500
                                    "
                                >
                                    {
                                        reward.name
                                    }
                                </h2>

                                <div
                                    className="
                                    mt-4
                                    space-y-2
                                    text-zinc-300
                                    "
                                >

                                    <p>
                                        Merchants Required:
                                        {" "}
                                        {
                                            reward.merchant_requirement
                                        }
                                    </p>

                                    <p>
                                        Revenue Required:
                                        {" "}
                                        ₦
                                        {
                                            Number(
                                                reward.revenue_requirement
                                            ).toLocaleString()
                                        }
                                    </p>

                                    <p>
                                        Retention Required:
                                        {" "}
                                        {
                                            reward.retention_requirement
                                        }
                                        %
                                    </p>

                                    <p>
                                        Reward:
                                        {" "}
                                        {
                                            reward.reward_type
                                        }
                                    </p>

                                </div>

                            </div>
                        )
                    )
                }

            </div>

        </div>
    );
}