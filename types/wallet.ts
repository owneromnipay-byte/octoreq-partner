export interface Wallet { 
    available_balance: number;
    pending_balance: number;
    total_earned: number;
}

export interface WalletTransaction {
    id: string;
    amount: number;
    type: string;
    status: string;
    created_at: string;
}