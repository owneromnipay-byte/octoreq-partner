"use client";

import { useEffect, useState } from "react";

import CommissionService from "@/services/CommissionService";
import { Commission } from "@/types/commission";

export default function CommissionsPage() {

    const [commissions, setCommissions] =
        useState<Commission[]>([]);

    const [loading, setLoading] =
        useState(true);

    const [error, setError] =
        useState("");

    useEffect(() => {

        const fetchCommissions = async () => {

            try {

                const data =
                    await CommissionService.getCommissions();

                setCommissions(data);

            } catch (err) {

                console.error(
                    "Failed to load commissions:",
                    err
                );

                setError(
                    "Unable to load commissions."
                );

            } finally {

                setLoading(false);

            }

        };

        fetchCommissions();

    }, []);

    const formatCurrency = (
        amount: number
    ) => {

        return new Intl.NumberFormat(
            "en-NG",
            {
                minimumFractionDigits: 0,
                maximumFractionDigits: 0,
            }
        ).format(amount);

    };

    const formatDate = (
        date: string
    ) => {

        return new Date(date).toLocaleDateString(
            "en-NG",
            {
                year: "numeric",
                month: "short",
                day: "numeric",
            }
        );

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
                Loading commissions...
            </div>

        );

    }

    if (error) {

        return (

            <div
                className="
                rounded-2xl
                border
                border-red-500/20
                bg-red-500/10
                p-6
                text-red-300
                "
            >
                {error}
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
                    Commissions
                </h1>

                <p
                    className="
                    mt-2
                    text-zinc-400
                    "
                >
                    View all commissions earned from your
                    referred merchants.
                </p>

            </div>

            <div
                className="
                overflow-hidden
                rounded-2xl
                border
                border-zinc-800
                bg-zinc-900
                "
            >

                {commissions.length === 0 ? (

                    <div
                        className="
                        p-12
                        text-center
                        "
                    >

                        <p
                            className="
                            text-lg
                            font-medium
                            text-zinc-300
                            "
                        >
                            No commissions yet
                        </p>

                        <p
                            className="
                            mt-2
                            text-sm
                            text-zinc-500
                            "
                        >
                            Your commissions will appear here
                            after your referred merchants
                            complete eligible transactions.
                        </p>

                    </div>

                ) : (

                    <div className="overflow-x-auto">

                        <table className="min-w-full">

                            <thead
                                className="
                                border-b
                                border-zinc-800
                                bg-zinc-950
                                "
                            >

                                <tr>

                                    <th
                                        className="
                                        px-6
                                        py-4
                                        text-left
                                        text-sm
                                        font-semibold
                                        text-zinc-300
                                        "
                                    >
                                        Date
                                    </th>

                                    <th
                                        className="
                                        px-6
                                        py-4
                                        text-left
                                        text-sm
                                        font-semibold
                                        text-zinc-300
                                        "
                                    >
                                        Transaction
                                    </th>

                                    <th
                                        className="
                                        px-6
                                        py-4
                                        text-left
                                        text-sm
                                        font-semibold
                                        text-zinc-300
                                        "
                                    >
                                        Rate
                                    </th>

                                    <th
                                        className="
                                        px-6
                                        py-4
                                        text-left
                                        text-sm
                                        font-semibold
                                        text-zinc-300
                                        "
                                    >
                                        Amount
                                    </th>

                                    <th
                                        className="
                                        px-6
                                        py-4
                                        text-left
                                        text-sm
                                        font-semibold
                                        text-zinc-300
                                        "
                                    >
                                        Status
                                    </th>

                                </tr>

                            </thead>

                            <tbody>

                                {commissions.map(
                                    (commission) => (

                                        <tr
                                            key={
                                                commission.id
                                            }
                                            className="
                                            border-b
                                            border-zinc-800
                                            "
                                        >

                                            <td
                                                className="
                                                px-6
                                                py-4
                                                text-zinc-300
                                                "
                                            >
                                                {formatDate(
                                                    commission.created_at
                                                )}
                                            </td>

                                            <td
                                                className="
                                                px-6
                                                py-4
                                                font-mono
                                                text-sm
                                                text-zinc-400
                                                "
                                            >
                                                {
                                                    commission.transaction_id
                                                }
                                            </td>

                                            <td
                                                className="
                                                px-6
                                                py-4
                                                text-zinc-300
                                                "
                                            >
                                                {
                                                    commission.commission_rate
                                                }
                                                %
                                            </td>

                                            <td
                                                className="
                                                px-6
                                                py-4
                                                font-semibold
                                                text-yellow-500
                                                "
                                            >
                                                ₦
                                                {formatCurrency(
                                                    commission.amount
                                                )}
                                            </td>

                                            <td
                                                className="
                                                px-6
                                                py-4
                                                "
                                            >

                                                <span
                                                    className={
                                                        commission.status ===
                                                        "PAID"
                                                            ? "rounded-full bg-green-500/10 px-3 py-1 text-xs font-semibold text-green-400"
                                                            : "rounded-full bg-yellow-500/10 px-3 py-1 text-xs font-semibold text-yellow-400"
                                                    }
                                                >
                                                    {
                                                        commission.status
                                                    }
                                                </span>

                                            </td>

                                        </tr>

                                    )
                                )}

                            </tbody>

                        </table>

                    </div>

                )}

            </div>

        </>

    );

}