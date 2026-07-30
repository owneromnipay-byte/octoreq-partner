import { api } from "./api";
import {
    PartnerMerchant,
    ActiveMerchantResponse
} from "@/types/merchant";

class MerchantService {

    async getMerchants(): Promise<PartnerMerchant[]> {

        const response =
            await api.get<PartnerMerchant[]>(
                "/partner-merchants"
            );

        return response.data;
    }

    async getActiveMerchants(): Promise<ActiveMerchantResponse> {

        const response =
            await api.get<ActiveMerchantResponse>(
                "/partner-merchants/active"
            );

        return response.data;
    }

    async getMerchant(
        id: string
    ): Promise<PartnerMerchant> {

        const response =
            await api.get<PartnerMerchant>(
                `/partner-merchants/${id}`
            );

        return response.data;
    }

    async exportMerchants(): Promise<PartnerMerchant[]> {

        const response =
            await api.get<PartnerMerchant[]>(
                "/partner-merchants/export"
            );

        return response.data;
    }

}

export default new MerchantService();