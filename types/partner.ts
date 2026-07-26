export interface PartnerApplication {
  full_name: string;
  email: string;
  phone: string;

  company_name: string;
  website?: string;

  country: string;
  business_type: string;

  expected_referrals?: number;

  application_reason: string;
}

export interface Partner {
  id: string;
  full_name: string;
  email: string;
  phone: string;

  company_name?: string;
  website?: string;
  country?: string;

  business_type?: string;

  tier?: string;

  referral_code?: string;

  status?: string;

  account_activated?: boolean;

  created_at?: string;
}