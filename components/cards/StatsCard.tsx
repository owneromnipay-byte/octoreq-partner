interface StatsCardProps {

    title: string;

    value: string | number;
}

export default function StatsCard({

    title,
    value

}: StatsCardProps) {

    return (

        <div
            className="
            bg-zinc-900
            border
            border-zinc-800
            rounded-2xl
            p-6
            "
        >

            <p
                className="
                text-zinc-400
                mb-2
                "
            >
                {title}
            </p>

            <h2
                className="
                text-2xl
                font-bold
                text-white
                "
            >
                {value}
            </h2>

        </div>
    );
}