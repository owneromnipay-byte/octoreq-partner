import { api } from "./api";
import { Commission } from "@/types/commission";

class CommissionService {

    async getCommissions(): Promise<Commission[]> {

        const response =
            await api.get<Commission[]>(
                "/commissions"
            );

        return response.data;

    }

}

export default new CommissionService();