"use client";

import { useEffect, useState } from "react";

import PayoutService from "@/services/PayoutService";

export default function PayoutsPage() {

    const [amount, setAmount] =
        useState("");

    const [payouts, setPayouts] =
        useState<any[]>([]);

    const fetchPayouts =
        async () => {

            try {

                const response =
                    await PayoutService
                        .getPayouts();

                setPayouts(
                    response.data || response
                );

            } catch (error) {

                console.error(
                    error
                );
            }
        };

    useEffect(() => {

        fetchPayouts();

    }, []);

    const handlePayout =
        async () => {

            try {

                await PayoutService
                    .requestPayout(
                        Number(
                            amount
                        )
                    );

                alert(
                    "Payout request submitted successfully."
                );

                setAmount("");

                fetchPayouts();

            } catch (error: any) {

                alert(
                    error?.response?.data
                        ?.message ||
                    "Unable to submit payout request."
                );
            }
        };

    return (

        <div>

            <h1 className="
                text-4xl
                font-bold
                text-white
                mb-8
            ">
                Payouts
            </h1>

            <div className="
                bg-zinc-900
                border
                border-zinc-800
                rounded-2xl
                p-6
                mb-6
            ">

                <h2 className="
                    text-white
                    text-2xl
                    mb-4
                ">
                    Request Payout
                </h2>

                <input
                    type="number"

                    placeholder=
                        "Enter amount"

                    value={
                        amount
                    }

                    onChange={
                        (
                            e
                        ) =>
                            setAmount(
                                e.target.value
                            )
                    }

                    className="
                        w-full
                        bg-zinc-800
                        text-white
                        rounded-xl
                        p-3
                        mb-4
                    "
                />

                <button

                    onClick={
                        handlePayout
                    }

                    className="
                        bg-yellow-500
                        text-black
                        px-6
                        py-3
                        rounded-xl
                        font-semibold
                    "
                >
                    Request Payout
                </button>

            </div>

            <div className="
                bg-zinc-900
                border
                border-zinc-800
                rounded-2xl
                p-6
            ">

                <h2 className="
                    text-white
                    text-2xl
                    mb-4
                ">
                    Payout History
                </h2>

                {
                    payouts.length === 0

                    ?

                    <p className="
                        text-zinc-400
                    ">
                        No payouts found.
                    </p>

                    :

                    payouts.map(
                        (
                            payout: any
                        ) => (

                            <div

                                key={
                                    payout.id
                                }

                                className="
                                    border-b
                                    border-zinc-800
                                    py-4
                                    text-white
                                "
                            >

                                <p>
                                    ₦
                                    {
                                        Number(
                                            payout.amount
                                        ).toLocaleString()
                                    }
                                </p>

                                <p className="
                                    text-zinc-400
                                ">
                                    {
                                        payout.status
                                    }
                                </p>

                            </div>
                        )
                    )
                }

            </div>

        </div>
    );
}