import { api } from "./api";

class ReferralService {

    async getReferrals() {

        const response =
            await api.get(
                "/partner-referrals"
            );

        return response.data;
    }

    async getQRCode() {

        const response =
            await api.get(
                "/partner-referrals/qr"
            );

        return response.data;
    }
}

export default new ReferralService();