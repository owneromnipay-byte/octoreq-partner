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
                        response.data || []
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
                                    merchant.id
                                }

                                className="
                                border-b
                                border-zinc-800
                                py-4
                                text-white
                                "
                            >

                                <h2>
                                    {
                                        merchant.company_name
                                    }
                                </h2>

                            </div>
                        )
                    )
                }

            </div>

        </div>
    );
}