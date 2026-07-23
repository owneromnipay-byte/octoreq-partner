import { api } from "./api";

class RewardService {

    async getRewards() {

        const response =
            await api.get(
                "/rewards"
            );

        return response.data;
    }
}

export default new RewardService();