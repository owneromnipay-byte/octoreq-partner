"use client";

import { useEffect, useState } from "react";

import MerchantService from "@/services/MerchantService";

export default function MerchantsPage() {

    const [merchants, setMerchants] =
        useState([]);

    useEffect(() => {

        const fetchData =
            async () => {

                try {

                    const response =
                        await MerchantService
                            .getMerchants();

                    setMerchants(
                        response || []
                    );

                } catch (error) {

                    console.error(
                        error
                    );
                }
            };

        fetchData();

    }, []);

    return (

        <div>

            <h1 className="text-4xl font-bold text-white mb-8">
                Merchants
            </h1>

            <div
                className="
                bg-zinc-900
                rounded-2xl
                border
                border-zinc-800
                p-6
                "
            >

                {
                    merchants.length === 0

                    ?

                    <p className="text-zinc-400">
                        No merchants found.
                    </p>

                    :

                    merchants.map(
                        (
                            merchant: any
                        ) => (

                            <div
                                key={
                                    merchant.merchant_id
                                }

                                className="
                                border-b
                                border-zinc-800
                                py-4
                                text-white
                                "
                            >

                                <h2
                                    className="
                                    font-semibold
                                    "
                                >
                                    {
                                        merchant
                                            .merchants
                                            .company_name
                                    }
                                </h2>

                                <p
                                    className="
                                    text-zinc-400
                                    text-sm
                                    "
                                >
                                    {
                                        merchant
                                            .merchants
                                            .email
                                    }
                                </p>

                                <p
                                    className="
                                    text-zinc-500
                                    text-xs
                                    "
                                >
                                    {
                                        merchant
                                            .merchants
                                            .country_code
                                    }
                                    {" • "}
                                    {
                                        new Date(
                                            merchant
                                                .merchants
                                                .created_at
                                        )
                                        .toLocaleDateString()
                                    }
                                </p>

                                <p
                                    className="
                                    text-green-500
                                    text-xs
                                    mt-1
                                    "
                                >
                                    {
                                        merchant
                                            .is_active

                                            ?

                                            "ACTIVE"

                                            :

                                            "INACTIVE"
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