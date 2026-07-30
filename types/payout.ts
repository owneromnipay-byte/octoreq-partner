export interface Payout {
    id: string;
    partner_id: string;
    amount: number;
    status: "PENDING" | "APPROVED" | "PAID";
    processed_by: string | null;
    processed_at: string | null;
}

export interface PayoutRequestResponse {
    success: boolean;
    data: Payout;
}