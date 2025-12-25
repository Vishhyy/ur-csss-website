import SectionTitle from './SectionTitle';

const PrizeCard = ({ title, amount, tier }: { title: string, amount: string, tier: 'gold' | 'silver' | 'bronze' }) => {
    const styles = {
        gold: 'border-4 border-[#fdb927] shadow-2xl',
        silver: 'border-4 border-slate-300',
        bronze: 'border-4 border-[#a16207]',
    };
    return (
        <div className={`bg-[#00643f] text-white p-8 rounded-lg text-center h-full ${styles[tier]}`}>
            <p className="text-2xl font-bold mb-4">{title}</p>
            <p className="font-black text-5xl my-4">{amount}</p>
        </div>
    );
};

export default function PrizePool() {
    return (
        <section className="py-20 bg-slate-100">
            <div className="container mx-auto px-4">
                <SectionTitle>Prize Pool</SectionTitle>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                    <PrizeCard amount="$500" title="Runner-up" tier="silver" />
                    <PrizeCard amount="$1,000" title="Winner" tier="gold" />
                    <PrizeCard amount="$200" title="Best Business" tier="bronze" />
                </div>
            </div>
        </section>
    );
}