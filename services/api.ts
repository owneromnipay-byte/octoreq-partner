import axios from "axios";

export const api = axios.create({
    baseURL:
        process.env.NEXT_PUBLIC_API_URL,

    timeout: 30000,

    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    },
});

api.interceptors.request.use(

    (config) => {

        if (typeof window !== "undefined") {

            const token = localStorage.getItem(
                "octoreq_partner_token"
            );

            if (token) {

                config.headers.Authorization =
                    `Bearer ${token}`;

            }

        }

        return config;

    },

    (error) => Promise.reject(error)

);

api.interceptors.response.use(

    (response) => response,

    (error) => {

        if (
            error.response?.status === 401 &&
            typeof window !== "undefined"
        ) {

            localStorage.removeItem(
                "octoreq_partner_token"
            );

            localStorage.removeItem(
                "octoreq_partner"
            );

            window.location.href = "/login";

        }

        return Promise.reject(error);

    }

);