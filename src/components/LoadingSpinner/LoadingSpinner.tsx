

export const LoadingSpinner = ({ message = "Cargando..." }) => {
    return (
        <div className="flex flex-col justify-center items-center py-20 text-center">
            <div
                className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-indigo-600"
                role="status"
                aria-label={message}
            >
                {
                    message && (
                        <p className="mt-4 text-lg font-medium text-gray-700">
                            {message}
                        </p>
                    )
                }
            </div>
        </div>
    );
};
