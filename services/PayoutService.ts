import { api } from "./api";

class PayoutService {

    async getPayouts() {

        const response =
            await api.get(
                "/partner-payouts"
            );

        return response.data;
    }

    async requestPayout() {

        const response =
            await api.post(
                "/partner-payouts/request"
            );

        return response.data;
    }
}

export default new PayoutService();