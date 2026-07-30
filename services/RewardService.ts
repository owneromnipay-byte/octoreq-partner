import { api } from "./api";
import { Reward } from "@/types/reward";

class RewardService {

    async getRewards(): Promise<Reward[]> {

        const response = await api.get<Reward[]>(
            "/partner-rewards"
        );

        return response.data;

    }

}

export default new RewardService();