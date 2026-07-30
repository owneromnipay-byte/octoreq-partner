"use client";

import { useEffect, useState } from "react";

import MerchantService from "@/services/MerchantService";
import { PartnerMerchant } from "@/types/merchant";

export default function MerchantsPage() {

    const [merchants, setMerchants] =
        useState<PartnerMerchant[]>([]);

    const [loading, setLoading] =
        useState(true);

    const [error, setError] =
        useState("");

    useEffect(() => {

        const fetchMerchants =
            async () => {

                try {

                    const data =
                        await MerchantService
                            .getMerchants();

                    setMerchants(data);

                } catch (err) {

                    console.error(err);

                    setError(
                        "Unable to load merchants."
                    );

                } finally {

                    setLoading(false);

                }

            };

        fetchMerchants();

    }, []);

    if (loading) {

        return (

            <div className="flex justify-center py-20">

                <p className="text-zinc-400">
                    Loading merchants...
                </p>

            </div>

        );

    }

    if (error) {

        return (

            <div className="rounded-2xl border border-red-900 bg-red-950/30 p-6">

                <p className="text-red-400">
                    {error}
                </p>

            </div>

        );

    }

    return (

        <div className="space-y-8">

            <div>

                <h1 className="text-4xl font-bold text-white">
                    Merchants
                </h1>

                <p className="mt-2 text-zinc-400">
                    Businesses linked to your OCTOREQ Partner account.
                </p>

            </div>

            {merchants.length === 0 ? (

                <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-8 text-center">

                    <p className="text-zinc-400">
                        No merchants found.
                    </p>

                </div>

            ) : (

                <div className="space-y-4">

                    {merchants.map((merchant) => (

                        <div
                            key={merchant.merchant_id}
                            className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 transition-colors hover:border-yellow-500/40"
                        >

                            <div className="flex items-start justify-between">

                                <div>

                                    <h2 className="text-xl font-semibold text-white">
                                        {merchant.merchants.company_name}
                                    </h2>

                                    <p className="mt-1 text-sm text-zinc-400">
                                        {merchant.merchants.email}
                                    </p>

                                </div>

                                <span
                                    className={`rounded-full px-3 py-1 text-xs font-semibold ${
                                        merchant.is_active
                                            ? "bg-green-500/10 text-green-400"
                                            : "bg-red-500/10 text-red-400"
                                    }`}
                                >
                                    {merchant.is_active
                                        ? "ACTIVE"
                                        : "INACTIVE"}
                                </span>

                            </div>

                            <div className="mt-6 grid gap-4 sm:grid-cols-3">

                                <div>

                                    <p className="text-xs uppercase tracking-wide text-zinc-500">
                                        Wallet Balance
                                    </p>

                                    <p className="mt-1 font-semibold text-white">
                                        {merchant.merchants.currency}{" "}
                                        {Number(
                                            merchant.merchants.wallet_balance
                                        ).toLocaleString()}
                                    </p>

                                </div>

                                <div>

                                    <p className="text-xs uppercase tracking-wide text-zinc-500">
                                        Country
                                    </p>

                                    <p className="mt-1 font-semibold text-white">
                                        {merchant.merchants.country_code}
                                    </p>

                                </div>

                                <div>

                                    <p className="text-xs uppercase tracking-wide text-zinc-500">
                                        Joined
                                    </p>

                                    <p className="mt-1 font-semibold text-white">
                                        {new Date(
                                            merchant.merchants.created_at
                                        ).toLocaleDateString()}
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