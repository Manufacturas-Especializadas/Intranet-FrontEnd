
const HeaderTitle = ({ title, subtitle, description }) => {
    return (
        <>
            <div className="text-center mb-20 max-w-[400px] mx-auto">
                <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                    { subtitle }
                </p>
                <h1 className="text-3xl font-bold">
                    { title }
                </h1>
                <p
                    className="text-xs text-gray-400"
                >
                    { description }
                </p>
            </div>
        </>
    )
}

export default HeaderTitle