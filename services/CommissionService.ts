import { api } from "./api";

class CommissionService {

    async getCommissions() {

        const response =
            await api.get(
                "/commissions"
            );

        return response.data;
    }
}

export default new CommissionService();