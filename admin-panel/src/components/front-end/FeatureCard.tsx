interface propsType {
    icon: React.ReactNode;
    title: string;
    desc: string;
}

const FeatureCard = ({ icon, title, desc }: propsType) => {
    return (
        <div className="flex gap-4 bg-[#f2e6d9] p-6 rounded-lg shadow-lg border-2 border-[#b49b6b] max-w-xs">
            <div className="text-4xl text-[#5A3A1B]">{icon}</div>

            <div className="text-[#5A3A1B]">
                <h2 className="font-serif text-2xl font-semibold text-[#4b3f25]">{title}</h2>
                <p className="text-[#3c2f1f] font-medium">{desc}</p>
            </div>
        </div>
    );
};

export default FeatureCard;
