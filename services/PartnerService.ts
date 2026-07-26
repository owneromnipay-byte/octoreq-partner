import { api } from "./api";
import { PartnerApplication } from "@/types/partner";
class PartnerService {

    async login(
        email: string,
        password: string
    ) {

        const response =
            await api.post(

                "/partners/login",

                {
                    email,
                    password
                }
            );

        return response.data;
    }

    async activateAccount(
        email: string,
        password: string
    ) {

        const response =
            await api.post(

                "/partners/activate-account",

                {
                    email,
                    password
                }
            );

        return response.data;
    }

    async getMe() {

        const response =
            await api.get(
                "/partners/me"
            );

        return response.data;
    }

    async getDashboard() {

        const response =
            await api.get(
                "/partners/dashboard"
            );

        return response.data;
    }
    async apply(
        data: PartnerApplication
    
) {

    const response =
        await api.post(
            "/partners/apply",
            data
        );

    return response.data;
}
}

export default
new PartnerService();