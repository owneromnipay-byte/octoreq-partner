export interface PartnerDashboard {
    welcome: string;

    partner_tier: string;

    partner_score: number;

    wallet_balance: number;

    lifetime_earnings: number;

    revenue_generated: number;

    active_merchants: number;

    referral_code: string;

    next_reward: string;

    pending_payout?: number;
}