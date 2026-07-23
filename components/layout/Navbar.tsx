export default function Navbar() {

    return (

        <div
            className="
            h-20
            border-b
            border-zinc-800
            flex
            items-center
            justify-between
            px-8
            "
        >

            <div>

                <h2
                    className="
                    text-2xl
                    font-bold
                    text-white
                    "
                >
                    Merchant Partner Portal
                </h2>

            </div>

            <div
    className="
    flex
    items-center
    gap-3
    "
>

    <div
        className="
        h-10
        w-10
        rounded-full
        bg-yellow-500
        text-black
        font-bold
        flex
        items-center
        justify-center
        "
    >
        F
    </div>

    <span
        className="
        text-white
        font-semibold
        "
    >
        FADEX001
    </span>

</div>

        </div>
    );
}