
export const EnlaceCard = ({ href, Icon, title }) => {
    return (
        <a
            href={href}
            target="_blank"
            className="group block rounded-lg bg-white p-6 text-center shadow-md transition-all duration-300 ease-in-out
            hover:shadow-xl hover:-translate-y-1"
        >
            <div className="flex flex-col items-center justify-center">
                <span className="inline-block rounded-full bg-blue-100 text-blue-600 transition-all duration-300 
                group-hover:bg-blue-600 group-hover:text-white">
                    <Icon className="h-8 w-8" aria-hidden="true" />
                </span>

                <h4 className="mt-4 text-lg font-semibold text-gray-800">
                    {title}
                </h4>
            </div>
        </a>
    );
};