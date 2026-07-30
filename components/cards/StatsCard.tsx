import { ReactNode } from "react";

interface StatsCardProps {
    title: string;
    value: string | number;
    icon?: ReactNode;
    subtitle?: string;
}

export default function StatsCard({
    title,
    value,
    icon,
    subtitle
}: StatsCardProps) {

    return (

        <div
            className="
                rounded-2xl
                border
                border-zinc-800
                bg-zinc-900
                p-6
                transition
                hover:border-yellow-500/40
            "
        >

            <div className="flex items-start justify-between">

                <div>

                    <p className="text-sm text-zinc-400">
                        {title}
                    </p>

                    <h2 className="mt-2 text-3xl font-bold text-white">
                        {value}
                    </h2>

                    {subtitle && (

                        <p className="mt-2 text-sm text-zinc-500">
                            {subtitle}
                        </p>

                    )}

                </div>

                {icon && (

                    <div
                        className="
                            rounded-xl
                            bg-yellow-500/10
                            p-3
                            text-yellow-500
                        "
                    >
                        {icon}
                    </div>

                )}

            </div>

        </div>

    );

}