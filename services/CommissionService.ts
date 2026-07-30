import { api } from "./api";
import { Commission } from "@/types/commission";

class CommissionService {

    async getCommissions(): Promise<Commission[]> {

        const response = await api.get<Commission[]>(
            "/partner-commissions"
        );

        return response.data;

    }

    async getPendingCommissions(): Promise<Commission[]> {

        const response = await api.get<Commission[]>(
            "/partner-commissions/pending"
        );

        return response.data;

    }

    async getPaidCommissions(): Promise<Commission[]> {

        const response = await api.get<Commission[]>(
            "/partner-commissions/paid"
        );

        return response.data;

    }

}

export default new CommissionService();