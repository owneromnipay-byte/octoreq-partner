import { api } from "./api";
import { Wallet }  from "@/types/wallet";

class WalletService {

    async getWallet(): Promise<Wallet> {

        const response = await api.get<Wallet>(
            "/partner-wallet"
        );

        return response.data;

    }

}

export default new WalletService();