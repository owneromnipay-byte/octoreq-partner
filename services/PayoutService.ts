import { api } from "./api";
import {
    Payout,
    PayoutRequestResponse
} from "@/types/payout";

class PayoutService {

    async getPayouts(): Promise<Payout[]> {

        const response =
            await api.get<Payout[]>(
                "/partner-payouts"
            );

        return response.data;

    }

    async requestPayout(
        amount: number
    ): Promise<PayoutRequestResponse> {

        const response =
            await api.post<PayoutRequestResponse>(
                "/partner-payouts/request",
                {
                    amount
                }
            );

        return response.data;

    }

}

export default new PayoutService();