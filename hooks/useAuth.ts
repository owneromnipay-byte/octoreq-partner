"use client";

import { useRouter }
from "next/navigation";

import PartnerService
from "../services/PartnerService";

export function useAuth() {

    const router =
        useRouter();

    const login =
        async (
            email: string,
            password: string
        ) => {

            try {

                const response =
                    await PartnerService
                        .login(
                            email,
                            password
                        );

                localStorage
                    .setItem(

                        "token",

                        response
                            .data
                            .token
                    );

                router.push(
                    "/dashboard"
                );

            } catch (
                error
            ) {

                console.error(
                    error
                );

                throw error;
            }
        };

    const logout =
        () => {

            localStorage
                .removeItem(
                    "token"
                );

            router.push(
                "/login"
            );
        };

    const isAuthenticated =
        () => {

            return !!localStorage
                .getItem(
                    "token"
                );
        };

    return {

        login,

        logout,

        isAuthenticated
    };
}
