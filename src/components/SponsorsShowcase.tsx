import SectionTitle from './SectionTitle';

interface Sponsor {
    name: string;
    logoUrl: string;
    tier: string;
    url: string;
}

interface SponsorsShowcaseProps {
    sponsors: Sponsor[];
    showStripes?: boolean;
}

export default function SponsorsShowcase({ sponsors, showStripes = true }: SponsorsShowcaseProps) {
    if (sponsors.length === 0) return null;

    const gold = sponsors.filter(s => s.tier === 'Gold');
    const silver = sponsors.filter(s => s.tier === 'Silver');
    const bronze = sponsors.filter(s => s.tier === 'Bronze');

    // Logic for the URHacks Page (Stripes)
    const LogoGrid = ({ list, height }: { list: Sponsor[], height: string }) => (
        <div className="flex justify-center items-center flex-wrap gap-12">
            {list.map((s, i) => (
                <a key={i} href={s.url} target="_blank" rel="noreferrer" className="hover:scale-105 transition-transform flex items-center justify-center">
                    <img src={s.logoUrl} alt={s.name} className={`${height} w-auto max-w-[200px] object-contain`} />
                </a>
            ))}
        </div>
    );

    return (
        <div className="text-center">
            <SectionTitle>Our Valued Partners</SectionTitle>

            {showStripes ? (
                // --- LAYOUT FOR URHACKS PAGE (Striped Backgrounds) ---
                <div className="space-y-6">
                    {gold.length > 0 && <div className="bg-[#fdb927]/20 py-12 rounded-lg"><LogoGrid list={gold} height="h-32" /></div>}
                    {silver.length > 0 && <div className="bg-gray-200 py-10 rounded-lg"><LogoGrid list={silver} height="h-20" /></div>}
                    {bronze.length > 0 && <div className="bg-amber-800/10 py-8 rounded-lg"><LogoGrid list={bronze} height="h-16" /></div>}
                </div>
            ) : (
                // --- LAYOUT FOR HOMEPAGE (Grid) ---
                // 1. Used 'gap-8' and 'flex-wrap' to create a neat row/grid
                <div className="flex justify-center items-center flex-wrap gap-12">
                    {sponsors.map((s, i) => (
                        <a
                            key={i}
                            href={s.url}
                            target="_blank"
                            rel="noreferrer"
                            // 2. THE BOX FIX:
                            // 'w-64 h-32' creates an invisible box.
                            // 'p-2' gives the logo some breathing room inside the box.
                            // 'hover:scale-105' adds the nice interaction.
                            className="w-64 h-32 flex items-center justify-center p-2 hover:scale-110 transition-transform duration-300"
                        >
                            <img
                                src={s.logoUrl}
                                alt={s.name}
                                // 3. FULL COLOUR & FIT:
                                // 'max-h-full max-w-full' ensures the logo scales DOWN to fit the box,
                                // stopping wide logos from taking over.
                                // 'object-contain' prevents stretching.
                                className="max-h-full max-w-full object-contain"
                            />
                        </a>
                    ))}
                </div>
            )}
        </div>
    );
}