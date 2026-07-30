"use client";

import {
    Bell,
    Shield,
    User,
    Settings as SettingsIcon
} from "lucide-react";

export default function SettingsPage() {

    return (

        <div className="space-y-8">

            <div>

                <h1 className="text-4xl font-bold text-white">

                    Settings

                </h1>

                <p className="mt-2 text-zinc-400">

                    Manage your account preferences and security settings.

                </p>

            </div>

            {/* Account */}

            <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">

                <div className="flex items-center gap-3">

                    <User
                        className="text-yellow-500"
                        size={22}
                    />

                    <h2 className="text-xl font-semibold text-white">

                        Profile

                    </h2>

                </div>

                <p className="mt-3 text-zinc-400">

                    Update your company information, contact details,
                    and business profile.

                </p>

                <div className="mt-6 rounded-xl border border-dashed border-zinc-700 bg-zinc-950 p-5">

                    <p className="text-sm text-zinc-500">

                        Profile management will be available in a future
                        platform update.

                    </p>

                </div>

            </div>

            {/* Notifications */}

            <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">

                <div className="flex items-center gap-3">

                    <Bell
                        className="text-blue-400"
                        size={22}
                    />

                    <h2 className="text-xl font-semibold text-white">

                        Notifications

                    </h2>

                </div>

                <p className="mt-3 text-zinc-400">

                    Control how you receive important updates from
                    OCTOREQ.

                </p>

                <div className="mt-6 space-y-4">

                    <div className="flex items-center justify-between rounded-xl bg-zinc-950 p-4">

                        <div>

                            <p className="font-medium text-white">

                                Email Notifications

                            </p>

                            <p className="text-sm text-zinc-500">

                                Receive payout, commission and account updates.

                            </p>

                        </div>

                        <span className="rounded-full bg-yellow-500/10 px-3 py-1 text-xs font-semibold text-yellow-500">

                            Coming Soon

                        </span>

                    </div>

                </div>

            </div>

            {/* Security */}

            <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">

                <div className="flex items-center gap-3">

                    <Shield
                        className="text-green-500"
                        size={22}
                    />

                    <h2 className="text-xl font-semibold text-white">

                        Security

                    </h2>

                </div>

                <p className="mt-3 text-zinc-400">

                    Password management, two-factor authentication,
                    and login security will be available here.

                </p>

                <div className="mt-6 rounded-xl border border-dashed border-zinc-700 bg-zinc-950 p-5">

                    <p className="text-sm text-zinc-500">

                        Additional security features are currently being
                        rolled out.

                    </p>

                </div>

            </div>

            {/* Platform */}

            <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">

                <div className="flex items-center gap-3">

                    <SettingsIcon
                        className="text-zinc-400"
                        size={22}
                    />

                    <h2 className="text-xl font-semibold text-white">

                        Platform

                    </h2>

                </div>

                <div className="mt-6 grid gap-4 md:grid-cols-2">

                    <div className="rounded-xl bg-zinc-950 p-5">

                        <p className="text-sm text-zinc-500">

                            Partner Portal Version

                        </p>

                        <p className="mt-2 text-lg font-semibold text-white">

                            v1.0.0

                        </p>

                    </div>

                    <div className="rounded-xl bg-zinc-950 p-5">

                        <p className="text-sm text-zinc-500">

                            Status

                        </p>

                        <p className="mt-2 font-semibold text-green-400">

                            Operational

                        </p>

                    </div>

                </div>

            </div>

        </div>

    );

}