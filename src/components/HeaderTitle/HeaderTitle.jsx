const HeaderTitle = ({ title, subtitle, description }) => {
    const hasDescription = description && description.trim() !== "";

    return (
        <div className="text-center space-y-4 max-w-2xl mx-auto mb-2">
            {subtitle && (
                <p className="text-base font-semibold text-blue-500 uppercase tracking-wider">
                    {subtitle}
                </p>
            )}

            <h4 className="text-4xl md:text-4xl font-extrabold tracking-tight bg-clip-text 
                text-transparent bg-gradient-to-r from-[#00B0F5] to-[#044fa9]">
                {title}
            </h4>

            <div className="w-24 h-1 bg-gradient-to-r from-[#00B0F5] to-[#044fa9] mx-auto rounded-full"></div>

            {hasDescription && (
                <p className="text-base md:text-sm text-slate-600 leading-relaxed">
                    {description}
                </p>
            )}
        </div>
    );
};

export default HeaderTitle;