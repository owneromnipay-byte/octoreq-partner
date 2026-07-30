"use client";

import { useEffect, useState } from "react";

import PayoutService from "@/services/PayoutService";
import { Payout } from "@/types/payout";

export default function PayoutsPage() {

    const [amount, setAmount] =
        useState("");

    const [payouts, setPayouts] =
        useState<Payout[]>([]);

    const [loading, setLoading] =
        useState(true);

    const [requesting, setRequesting] =
        useState(false);

    const [error, setError] =
        useState("");

    const [success, setSuccess] =
        useState("");

    const fetchPayouts =
        async () => {

            try {

                const data =
                    await PayoutService
                        .getPayouts();

                setPayouts(data);

            } catch (err) {

                console.error(err);

                setError(
                    "Unable to load payout history."
                );

            } finally {

                setLoading(false);

            }

        };

    useEffect(() => {

        fetchPayouts();

    }, []);

    const handlePayout =
        async () => {

            setError("");
            setSuccess("");

            const payoutAmount =
                Number(amount);

            if (
                !payoutAmount ||
                payoutAmount < 25000
            ) {

                setError(
                    "Minimum withdrawal amount is ₦25,000."
                );

                return;

            }

            try {

                setRequesting(true);

                const response =
                    await PayoutService
                        .requestPayout(
                            payoutAmount
                        );

                if (response.success) {

                    setSuccess(
                        "Your payout request has been submitted successfully."
                    );

                    setAmount("");

                    fetchPayouts();

                }

            } catch (err: any) {

                const message =

                    err?.response?.data?.message ||

                    err?.message ||

                    "Unable to submit payout request.";

                setError(message);

            } finally {

                setRequesting(false);

            }

        };

    if (loading) {

        return (

            <div className="flex justify-center py-20">

                <p className="text-zinc-400">
                    Loading payouts...
                </p>

            </div>

        );

    }

    return (

        <div className="space-y-8">

            <div>

                <h1 className="text-4xl font-bold text-white">

                    Payouts

                </h1>

                <p className="mt-2 text-zinc-400">

                    Request withdrawals and track your payout history.

                </p>

            </div>

            {error && (

                <div className="rounded-2xl border border-red-900 bg-red-950/30 p-4">

                    <p className="text-red-400">

                        {error}

                    </p>

                </div>

            )}

            {success && (

                <div className="rounded-2xl border border-green-900 bg-green-950/30 p-4">

                    <p className="text-green-400">

                        {success}

                    </p>

                </div>

            )}

            <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">

                <h2 className="text-2xl font-semibold text-white">

                    Request Payout

                </h2>

                <p className="mt-2 text-sm text-zinc-400">

                    Partner payouts are processed on the 30th of every month.
                    Minimum withdrawal amount is ₦25,000.

                </p>

                <div className="mt-6">

                    <input

                        type="number"

                        min="25000"

                        placeholder="Enter payout amount"

                        value={amount}

                        onChange={(e) =>
                            setAmount(
                                e.target.value
                            )
                        }

                        className="
                            w-full
                            rounded-xl
                            border
                            border-zinc-700
                            bg-zinc-800
                            p-3
                            text-white
                            outline-none
                            focus:border-yellow-500
                        "

                    />

                </div>

                <button

                    onClick={handlePayout}

                    disabled={
                        requesting ||
                        amount === ""
                    }

                    className="
                        mt-6
                        rounded-xl
                        bg-yellow-500
                        px-6
                        py-3
                        font-semibold
                        text-black
                        transition
                        hover:bg-yellow-400
                        disabled:cursor-not-allowed
                        disabled:opacity-50
                    "

                >

                    {requesting

                        ? "Submitting..."

                        : "Request Payout"}

                </button>

            </div>

            <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">

                <h2 className="text-2xl font-semibold text-white">

                    Payout History

                </h2>

                {payouts.length === 0 ? (

                    <div className="py-10 text-center">

                        <p className="text-zinc-400">

                            No payout requests yet.

                        </p>

                    </div>

                ) : (

                    <div className="mt-6 space-y-4">

                        {payouts.map((payout) => (

                            <div

                                key={payout.id}

                                className="rounded-xl border border-zinc-800 bg-zinc-950 p-5"

                            >

                                <div className="flex items-start justify-between">

                                    <div>

                                        <p className="text-2xl font-bold text-white">

                                            ₦
                                            {Number(
                                                payout.amount
                                            ).toLocaleString()}

                                        </p>

                                        <p className="mt-2 text-sm text-zinc-500">

                                            {payout.processed_at

                                                ? new Date(
                                                      payout.processed_at
                                                  ).toLocaleDateString()

                                                : "Awaiting processing"}

                                        </p>

                                    </div>

                                    <span

                                        className={`rounded-full px-3 py-1 text-xs font-semibold ${
                                            payout.status === "PAID"

                                                ? "bg-green-500/10 text-green-400"

                                                : payout.status === "APPROVED"

                                                ? "bg-blue-500/10 text-blue-400"

                                                : "bg-yellow-500/10 text-yellow-400"
                                        }`}

                                    >

                                        {payout.status}

                                    </span>

                                </div>

                            </div>

                        ))}

                    </div>

                )}

            </div>

        </div>

    );

}