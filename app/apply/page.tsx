"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import Link from "next/link";

import {
    ArrowRight,
    Building2,
    Globe,
    Phone,
    Mail,
    User,
    Briefcase,
    FileText,
    CheckCircle2
} from "lucide-react";

import PartnerService from "@/services/PartnerService";

import {
    PartnerApplication
} from "@/types/partner";

export default function PartnerApplyPage() {

    const router =
        useRouter();

    const [loading, setLoading] =
        useState(false);

    const [error, setError] =
        useState("");

    const [success, setSuccess] =
        useState("");

    const [form, setForm] =
        useState<PartnerApplication>({

            full_name: "",

            email: "",

            phone: "",

            company_name: "",

            website: "",

            country: "",

            business_type: "",

            expected_referrals: undefined,

            application_reason: ""

        });

    const handleChange = (

        e: React.ChangeEvent<

            HTMLInputElement |

            HTMLTextAreaElement |

            HTMLSelectElement

        >

    ) => {

        const {

            name,

            value

        } = e.target;

        setForm(

            previous => ({

                ...previous,

                [name]:

                    name ===
                    "expected_referrals"

                        ? value === ""
                            ? undefined
                            : Number(value)

                        : value

            })

        );

    };
        const validateForm = () => {

        if (!form.full_name.trim()) {
            setError("Full name is required.");
            return false;
        }

        if (!form.email.trim()) {
            setError("Email address is required.");
            return false;
        }

        const emailRegex =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(form.email)) {
            setError("Please enter a valid email address.");
            return false;
        }

        if (!form.phone.trim()) {
            setError("Phone number is required.");
            return false;
        }

        if (!form.company_name.trim()) {
            setError("Company name is required.");
            return false;
        }

        if (!form.country.trim()) {
            setError("Country is required.");
            return false;
        }

        if (!form.business_type.trim()) {
            setError("Please select your business type.");
            return false;
        }

        if (!form.application_reason.trim()) {
            setError(
                "Please tell us why you want to become an OCTOREQ Partner."
            );
            return false;
        }

        return true;
    };



    const handleSubmit = async (
        e: React.FormEvent<HTMLFormElement>
    ) => {

        e.preventDefault();

        setError("");
        setSuccess("");

        if (!validateForm()) {
            return;
        }

        try {

            setLoading(true);

            await PartnerService.apply(form);

            setSuccess(
                "Your application has been submitted successfully."
            );

            setTimeout(() => {

                router.push("/apply/success");

            }, 1200);

        } catch (err: any) {

            const message =

                err?.response?.data?.message ||

                err?.message ||

                "Unable to submit your application. Please try again.";

            setError(message);

        } finally {

            setLoading(false);

        }

    };
        return (

        <main className="min-h-screen bg-gray-50">

            <div className="mx-auto max-w-5xl px-6 py-16">

                <div className="mb-10 text-center">

                    <div className="inline-flex items-center rounded-full bg-black px-4 py-2 text-sm font-medium text-white">

                        <Building2 className="mr-2 h-4 w-4" />

                        OCTOREQ Partner Program

                    </div>

                    <h1 className="mt-6 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">

                        Become an OCTOREQ Partner

                    </h1>

                    <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-gray-600">

                        Join our growing network of partners and earn recurring
                        commissions by referring businesses to OCTOREQ.
                        Complete the application below and our partnerships team
                        will review your submission.

                    </p>

                </div>

                {error && (

                    <div className="mb-6 rounded-xl border border-red-200 bg-red-50 px-5 py-4 text-red-700">

                        {error}

                    </div>

                )}

                {success && (

                    <div className="mb-6 flex items-center rounded-xl border border-green-200 bg-green-50 px-5 py-4 text-green-700">

                        <CheckCircle2 className="mr-3 h-5 w-5" />

                        {success}

                    </div>

                )}

                <form
                    onSubmit={handleSubmit}
                    className="space-y-10 rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-200"
                >

                    <section>

                        <h2 className="mb-6 text-2xl font-semibold text-gray-900">

                            Personal Information

                        </h2>

                        <div className="grid gap-6 md:grid-cols-2">

                            <div>

                                <label className="mb-2 block text-sm font-medium text-gray-700">

                                    Full Name *

                                </label>

                                <div className="relative">

                                    <User className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />

                                    <input
                                        type="text"
                                        name="full_name"
                                        value={form.full_name}
                                        onChange={handleChange}
                                        placeholder="John Doe"
                                        className="w-full rounded-lg border border-gray-300 py-3 pl-11 pr-4 outline-none transition focus:border-black"
                                    />

                                </div>

                            </div>

                            <div>

                                <label className="mb-2 block text-sm font-medium text-gray-700">

                                    Email Address *

                                </label>

                                <div className="relative">

                                    <Mail className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />

                                    <input
                                        type="email"
                                        name="email"
                                        value={form.email}
                                        onChange={handleChange}
                                        placeholder="you@example.com"
                                        className="w-full rounded-lg border border-gray-300 py-3 pl-11 pr-4 outline-none transition focus:border-black"
                                    />

                                </div>

                            </div>

                            <div>

                                <label className="mb-2 block text-sm font-medium text-gray-700">

                                    Phone Number *

                                </label>

                                <div className="relative">

                                    <Phone className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />

                                    <input
                                        type="tel"
                                        name="phone"
                                        value={form.phone}
                                        onChange={handleChange}
                                        placeholder="+234..."
                                        className="w-full rounded-lg border border-gray-300 py-3 pl-11 pr-4 outline-none transition focus:border-black"
                                    />

                                </div>

                            </div>
                                                        <div>

                                <label className="mb-2 block text-sm font-medium text-gray-700">

                                    Company Name *

                                </label>

                                <div className="relative">

                                    <Building2 className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />

                                    <input
                                        type="text"
                                        name="company_name"
                                        value={form.company_name}
                                        onChange={handleChange}
                                        placeholder="Your Company Ltd."
                                        className="w-full rounded-lg border border-gray-300 py-3 pl-11 pr-4 outline-none transition focus:border-black"
                                    />

                                </div>

                            </div>

                        </div>

                    </section>

                    <section>

                        <h2 className="mb-6 text-2xl font-semibold text-gray-900">

                            Company Information

                        </h2>

                        <div className="grid gap-6 md:grid-cols-2">

                            <div>

                                <label className="mb-2 block text-sm font-medium text-gray-700">

                                    Website

                                </label>

                                <div className="relative">

                                    <Globe className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />

                                    <input
                                        type="url"
                                        name="website"
                                        value={form.website}
                                        onChange={handleChange}
                                        placeholder="https://yourcompany.com"
                                        className="w-full rounded-lg border border-gray-300 py-3 pl-11 pr-4 outline-none transition focus:border-black"
                                    />

                                </div>

                            </div>

                            <div>

                                <label className="mb-2 block text-sm font-medium text-gray-700">

                                    Country *

                                </label>

                                <input
                                    type="text"
                                    name="country"
                                    value={form.country}
                                    onChange={handleChange}
                                    placeholder="Nigeria"
                                    className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-black"
                                />

                            </div>

                            <div>

                                <label className="mb-2 block text-sm font-medium text-gray-700">

                                    Business Type *

                                </label>

                                <div className="relative">

                                    <Briefcase className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />

                                    <select
                                        name="business_type"
                                        value={form.business_type}
                                        onChange={handleChange}
                                        className="w-full rounded-lg border border-gray-300 bg-white py-3 pl-11 pr-4 outline-none transition focus:border-black"
                                    >

                                        <option value="">

                                            Select business type

                                        </option>

                                        <option value="Individual">

                                            Individual

                                        </option>

                                        <option value="Agency">

                                            Agency

                                        </option>

                                        <option value="Consultant">

                                            Consultant

                                        </option>

                                        <option value="Software Company">

                                            Software Company

                                        </option>

                                        <option value="Marketing Company">

                                            Marketing Company

                                        </option>

                                        <option value="Payment Provider">

                                            Payment Provider

                                        </option>

                                        <option value="Technology Company">

                                            Technology Company

                                        </option>

                                        <option value="Financial Institution">

                                            Financial Institution

                                        </option>

                                        <option value="Other">

                                            Other

                                        </option>

                                    </select>

                                </div>

                            </div>

                        </div>

                    </section>
                                        <section>

                        <h2 className="mb-6 text-2xl font-semibold text-gray-900">

                            Partnership Information

                        </h2>

                        <div className="grid gap-6">

                            <div>

                                <label className="mb-2 block text-sm font-medium text-gray-700">

                                    Expected Merchant Referrals (Optional)

                                </label>

                                <input
                                    type="number"
                                    min="0"
                                    name="expected_referrals"
                                    value={form.expected_referrals ?? ""}
                                    onChange={handleChange}
                                    placeholder="e.g. 20"
                                    className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-black"
                                />

                                <p className="mt-2 text-sm text-gray-500">

                                    Estimate the number of businesses you believe
                                    you can refer to OCTOREQ within your first
                                    12 months.

                                </p>

                            </div>

                            <div>

                                <label className="mb-2 block text-sm font-medium text-gray-700">

                                    Why do you want to become an OCTOREQ Partner? *

                                </label>

                                <div className="relative">

                                    <FileText className="absolute left-3 top-4 h-5 w-5 text-gray-400" />

                                    <textarea
                                        name="application_reason"
                                        value={form.application_reason}
                                        onChange={handleChange}
                                        rows={7}
                                        placeholder="Tell us about your business, audience, experience, and why you believe you'd be a great partner..."
                                        className="w-full rounded-lg border border-gray-300 py-3 pl-11 pr-4 outline-none transition focus:border-black resize-none"
                                    />

                                </div>

                            </div>

                        </div>

                    </section>

                    <section className="rounded-2xl border border-gray-200 bg-gray-50 p-6">

                        <h3 className="text-lg font-semibold text-gray-900">

                            What happens after you apply?

                        </h3>

                        <div className="mt-5 space-y-4">

                            <div className="flex items-start gap-3">

                                <CheckCircle2 className="mt-0.5 h-5 w-5 text-green-600" />

                                <div>

                                    <p className="font-medium text-gray-900">

                                        Application Review

                                    </p>

                                    <p className="text-sm text-gray-600">

                                        Our Partnerships team carefully reviews every application to ensure it aligns with the OCTOREQ Partner Program.

                                    </p>

                                </div>

                            </div>

                            <div className="flex items-start gap-3">

                                <CheckCircle2 className="mt-0.5 h-5 w-5 text-green-600" />

                                <div>

                                    <p className="font-medium text-gray-900">

                                        Approval Notification

                                    </p>

                                    <p className="text-sm text-gray-600">

                                        If approved, you'll receive an email with instructions to activate your partner account securely.

                                    </p>

                                </div>

                            </div>

                            <div className="flex items-start gap-3">

                                <CheckCircle2 className="mt-0.5 h-5 w-5 text-green-600" />

                                <div>

                                    <p className="font-medium text-gray-900">

                                        Start Referring

                                    </p>

                                    <p className="text-sm text-gray-600">

                                        Once activated, you'll gain access to your dashboard, referral links, commission tracking, payouts, and partner resources.

                                    </p>

                                </div>

                            </div>

                        </div>

                    </section>
                                        <section className="rounded-2xl border border-gray-200 bg-white p-6">

                        <p className="text-sm leading-7 text-gray-600">

                            By submitting this application, you confirm that the
                            information provided is accurate and complete. You
                            understand that submission of an application does
                            not guarantee acceptance into the OCTOREQ Partner
                            Program. Approved applicants will receive an email
                            containing instructions to activate their partner
                            account.

                        </p>

                    </section>

                    <div className="flex flex-col gap-4 border-t border-gray-200 pt-8 md:flex-row md:items-center md:justify-between">

                        <div className="space-y-2 text-sm text-gray-600">

                            <p>

                                Already have an approved partner account?{" "}

                                <Link
                                    href="/login"
                                    className="font-medium text-black hover:underline"
                                >

                                    Sign in

                                </Link>

                            </p>

                            <p>

                                Need more information?{" "}

                                <Link
                                    href="https://octoreq.com/partners"
                                    className="font-medium text-black hover:underline"
                                >

                                    Learn about the Partner Program

                                </Link>

                            </p>

                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="inline-flex items-center justify-center rounded-xl bg-black px-8 py-4 text-white transition hover:bg-gray-900 disabled:cursor-not-allowed disabled:opacity-60"
                        >

                            {loading ? (

                                "Submitting Application..."

                            ) : (

                                <>

                                    Submit Application

                                    <ArrowRight className="ml-2 h-5 w-5" />

                                </>

                            )}

                        </button>

                    </div>

                </form>

            </div>

        </main>

    );

}