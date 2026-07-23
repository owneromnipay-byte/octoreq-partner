import { api } from "./api";

class NotificationService {

    async getNotifications() {

        const response =
            await api.get(
                "/notifications"
            );

        return response.data;
    }
}

export default new NotificationService();