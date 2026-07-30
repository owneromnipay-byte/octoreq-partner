export interface Commission {
    id: string;
    partner_id: string;
    merchant_id: string;
    transaction_id: string;
    commission_rate: number;
    amount: number;
    status: "PENDING" | "PAID";
    created_at: string;
}