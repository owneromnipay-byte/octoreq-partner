import { api } from "./api";

class MerchantService {

    async getMerchants() {

        const response =
            await api.get(
                "/referrals/merchants"
            );

        return response.data;
    }
}

export default new MerchantService();