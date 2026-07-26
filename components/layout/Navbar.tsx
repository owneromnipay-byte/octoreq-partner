"use client";

import { useEffect, useState } from "react";

import PartnerService from "@/services/PartnerService";

import { Partner } from "@/types/partner";

export default function Navbar() {

    const [partner, setPartner] =
        useState<Partner | null>(null);

    useEffect(() => {

        const loadPartner = async () => {

            try {

                const response =
                    await PartnerService.getMe();

                setPartner(
                    response.data
                );

            } catch (error) {

                console.error(
                    "Failed to load partner:",
                    error
                );

            }

        };

        loadPartner();

    }, []);

    return (

        <div
            className="
            h-20
            border-b
            border-zinc-800
            flex
            items-center
            justify-between
            px-8
            "
        >

            <div>

                <h2
                    className="
                    text-2xl
                    font-bold
                    text-white
                    "
                >
                    Merchant Partner Portal
                </h2>

                <p
                    className="
                    text-sm
                    text-zinc-400
                    mt-1
                    "
                >
                    Welcome back
                    {partner?.full_name
                        ? `, ${partner.full_name}`
                        : "..."}
                </p>

            </div>

            <div
                className="
                flex
                items-center
                gap-3
                "
            >

                <div
                    className="
                    h-10
                    w-10
                    rounded-full
                    bg-yellow-500
                    text-black
                    font-bold
                    flex
                    items-center
                    justify-center
                    "
                >
                    {
                        partner?.full_name
                            ?.charAt(0)
                            .toUpperCase() || "?"
                    }
                </div>

                <div
                    className="
                    flex
                    flex-col
                    "
                >

                    <span
                        className="
                        text-white
                        font-semibold
                        "
                    >
                        {
                            partner?.full_name ||
                            "Loading..."
                        }
                    </span>

                    <span
                        className="
                        text-xs
                        text-zinc-400
                        "
                    >
                        {
                            partner?.referral_code ||
                            partner?.email ||
                            ""
                        }
                    </span>

                </div>

            </div>

        </div>

    );

}