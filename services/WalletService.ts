import { api } from "./api";

class WalletService {

    async getWallet() {

        const response =
            await api.get(
                "/partner-wallet"
            );

        return response.data;
    }
}

export default new WalletService();