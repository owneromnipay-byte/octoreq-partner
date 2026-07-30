"use client";

import { useRouter } from "next/navigation";
import PartnerService from "@/services/PartnerService";

const TOKEN_KEY = "octoreq_partner_token";
const PARTNER_KEY = "octoreq_partner";

export function useAuth() {

    const router = useRouter();

    const login = async (
        email: string,
        password: string
    ) => {

        const response =
            await PartnerService.login(
                email,
                password
            );

        const {
            token,
            partner
        } = response.data;

        localStorage.setItem(
            TOKEN_KEY,
            token
        );

        localStorage.setItem(
            PARTNER_KEY,
            JSON.stringify(partner)
        );

        router.replace("/dashboard");
    };

    const logout = () => {

        localStorage.removeItem(
            TOKEN_KEY
        );

        localStorage.removeItem(
            PARTNER_KEY
        );

        router.replace("/login");
    };

    const getToken = () => {

        return localStorage.getItem(
            TOKEN_KEY
        );
    };

    const getPartner = () => {

        const partner =
            localStorage.getItem(
                PARTNER_KEY
            );

        if (!partner) {
            return null;
        }

        try {

            return JSON.parse(
                partner
            );

        } catch {

            return null;
        }
    };

    const refreshPartner =
        async () => {

            const response =
                await PartnerService.getMe();

            localStorage.setItem(
                PARTNER_KEY,
                JSON.stringify(
                    response.data
                )
            );

            return response.data;
        };

    const isAuthenticated =
        async () => {

            if (!getToken()) {
                return false;
            }

            try {

                await PartnerService.getMe();

                return true;

            } catch {

                return false;
            }
        };

    return {

        login,

        logout,

        getToken,

        getPartner,

        refreshPartner,

        isAuthenticated
    };
}