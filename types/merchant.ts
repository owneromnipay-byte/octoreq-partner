export interface MerchantInfo {
    id: string;
    company_name: string;
    email: string;
    wallet_balance: number;
    country_code: string;
    currency: string;
    created_at: string;
}

export interface PartnerMerchant {
    merchant_id: string;
    is_active: boolean;
    linked_at: string;
    merchants: MerchantInfo;
}

export interface ActiveMerchantResponse {
    active_merchants: number;
}