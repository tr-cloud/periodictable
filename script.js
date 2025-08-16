// Utility: build element object
function E(p, g, n, s, name, type, summary, uses, goodArr, cautionArr) {
  return {
    period: p, group: g, number: n, symbol: s, name, type,
    summary,
    dailyUses: uses,
    prosCons: { good: goodArr, caution: cautionArr }
  };
}

// Main groups/transition metals in table positions (period rows 1–7, group columns 1–18)
// Lanthanides/Actinides go in separate ribbons below.
const mainElements = [
  // Period 1
  E(1,1,1,"H","Hydrogen","Nonmetal",
    "Light, colorless gas; part of water and stars; very flammable.",
    ["Fertilizer production (ammonia)","Fuel cells and rockets","Hydrogenation in food industry"],
    ["Abundant and lightweight","Potential clean energy carrier"],
    ["Highly flammable; needs careful storage"]),
  E(1,18,2,"He","Helium","Noble gas",
    "Very light and non‑reactive; doesn’t burn.",
    ["Balloons/weather balloons","Cooling in MRI machines","Shielding gas in welding"],
    ["Safe and non‑reactive","Great coolant"],
    ["Limited natural supply"]),

  // Period 2
  E(2,1,3,"Li","Lithium","Alkali metal",
    "Soft reactive metal; important for modern batteries.",
    ["Rechargeable batteries","EV batteries","Some medications (medical use)"],
    ["Lightweight, high energy density"],
    ["Reacts with water; mining has impacts"]),
  E(2,2,4,"Be","Beryllium","Alkaline earth metal",
    "Hard, strong, light; used in aerospace and X‑ray windows.",
    ["Aerospace parts","High‑end electronics","X‑ray equipment windows"],
    ["Strong and heat‑stable"],
    ["Dust is toxic; strict industrial safety"]),
  E(2,13,5,"B","Boron","Metalloid",
    "Useful in glass and detergents as compounds like borax.",
    ["Borosilicate glass (kitchenware)","Detergents","Plant micronutrient"],
    ["Improves glass strength","Helpful for plants in tiny amounts"],
    ["Too much exposure can irritate"]),
  E(2,14,6,"C","Carbon","Nonmetal",
    "Backbone of life; occurs as graphite, diamond, and in fuels.",
    ["Pencils (graphite)","Diamond tools/jewelry","Plastics and fuels"],
    ["Essential to life","Versatile forms"],
    ["CO2 build‑up affects climate"]),
  E(2,15,7,"N","Nitrogen","Nonmetal",
    "Makes up most of air; inert under normal conditions.",
    ["Food packaging","Fertilizers (ammonia)","Liquid nitrogen cooling"],
    ["Preserves food","Key for plant growth"],
    ["Liquid nitrogen can cause cold burns"]),
  E(2,16,8,"O","Oxygen","Nonmetal",
    "Needed for breathing; supports burning.",
    ["Medical oxygen","Steel making","Water treatment"],
    ["Essential for life","Useful in industries"],
    ["Pure oxygen increases fire risk"]),
  E(2,17,9,"F","Fluorine","Halogen",
    "Extremely reactive pale yellow gas; forms strong bonds.",
    ["Fluoride in toothpaste (safe amounts)","Teflon coating","Some refrigerants"],
    ["Helps prevent tooth decay","Creates non‑stick materials"],
    ["Elemental fluorine is highly toxic"]),
  E(2,18,10,"Ne","Neon","Noble gas",
    "Inert gas; glows bright red‑orange in discharge tubes.",
    ["Neon signs","High‑voltage indicators","Lasers"],
    ["Non‑reactive and stable","Bright glow for signage"],
    ["Needs special handling as compressed gas"]),

  // Period 3
  E(3,1,11,"Na","Sodium","Alkali metal",
    "Soft reactive metal; common as sodium compounds (not pure).",
    ["Table salt (NaCl)","Street lights (old)","Chemical manufacturing"],
    ["Important compounds in daily life"],
    ["Pure sodium is dangerous with water"]),
  E(3,2,12,"Mg","Magnesium","Alkaline earth metal",
    "Light metal; burns with bright white flame.",
    ["Alloys (light structures)","Fireworks/flares","Supplements (as compounds)"],
    ["Lightweight, useful alloys"],
    ["Powder burns intensely; handle safely"]),
  E(3,13,13,"Al","Aluminum","Post‑transition metal",
    "Light, corrosion‑resistant metal.",
    ["Cans/foil","Aircraft and cars","Window frames"],
    ["Recyclable and light"],
    ["Dust can be hazardous in factories"]),
  E(3,14,14,"Si","Silicon","Metalloid",
    "Key material for electronics; abundant in sand.",
    ["Computer chips","Solar cells","Glass and concrete"],
    ["Drives modern electronics","Abundant"],
    ["Requires pure processing for chips"]),
  E(3,15,15,"P","Phosphorus","Nonmetal",
    "Essential for DNA and energy in cells; reactive forms.",
    ["Fertilizers","Matches (red P)","Detergents (some types)"],
    ["Vital for life processes"],
    ["White P is very reactive and hazardous"]),
  E(3,16,16,"S","Sulfur","Nonmetal",
    "Yellow nonmetal; used in many chemicals.",
    ["Fertilizers","Rubber vulcanization","Sulfuric acid production"],
    ["Versatile industrial uses"],
    ["Some sulfur compounds smell and can irritate"]),
  E(3,17,17,"Cl","Chlorine","Halogen",
    "Greenish gas; strong disinfectant.",
    ["Water disinfection","PVC plastic (as compound)","Bleaches"],
    ["Kills harmful germs","Enables useful plastics"],
    ["Chlorine gas is toxic; use controlled"]),
  E(3,18,18,"Ar","Argon","Noble gas",
    "Inert gas used where reactions must be prevented.",
    ["Shielding gas in welding","Filling in bulbs","Protective atmospheres"],
    ["Non‑reactive and safe","Protects materials"],
    ["Compressed gas—use proper cylinders"]),

  // Period 4
  E(4,1,19,"K","Potassium","Alkali metal",
    "Very reactive soft metal; vital in body (as ions).",
    ["Fertilizers","Soaps (as compounds)","Nutrition (bananas have K compounds)"],
    ["Essential nutrient (as ions)"],
    ["Pure metal ignites with water"]),
  E(4,2,20,"Ca","Calcium","Alkaline earth metal",
    "Important for bones; abundant in minerals.",
    ["Cement and concrete","Dietary supplements","Lime for steel/glass"],
    ["Vital for health","Structural materials"],
    ["Dust can irritate; balance intake"]),
  E(4,3,21,"Sc","Scandium","Transition metal",
    "Light, rare; improves aluminum alloys.",
    ["Aerospace alloys","Sports equipment","Lighting"],
    ["Strengthens alloys"],
    ["Rare and expensive"]),
  E(4,4,22,"Ti","Titanium","Transition metal",
    "Strong, light, corrosion‑resistant.",
    ["Aircraft, implants","Sports gear","Paint pigment (TiO2)"],
    ["Biocompatible","High strength‑to‑weight"],
    ["Extraction is energy‑intensive"]),
  E(4,5,23,"V","Vanadium","Transition metal",
    "Hard metal; strengthens steel.",
    ["High‑strength steels","Tools","Batteries (flow type)"],
    ["Improves steel performance"],
    ["Dust can irritate; handle safely"]),
  E(4,6,24,"Cr","Chromium","Transition metal",
    "Shiny and corrosion‑resistant; adds hardness.",
    ["Stainless steel","Plating","Dyes and pigments"],
    ["Prevents rust","Hard, durable"],
    ["Some chromium compounds are toxic"]),
  E(4,7,25,"Mn","Manganese","Transition metal",
    "Important alloying element.",
    ["Steel production","Batteries","Pigments"],
    ["Improves steel properties"],
    ["Dust exposure can affect health"]),
  E(4,8,26,"Fe","Iron","Transition metal",
    "Common metal; backbone of construction.",
    ["Steel for buildings/cars","Tools","Hemoglobin in blood (as ion)"],
    ["Strong and abundant"],
    ["Rusts without protection"]),
  E(4,9,27,"Co","Cobalt","Transition metal",
    "Used in batteries and alloys; some compounds are blue pigments.",
    ["Rechargeable batteries","Superalloys","Pigments/medicine"],
    ["High performance in alloys/batteries"],
    ["Mining/ethics concerns; dust hazards"]),
  E(4,10,28,"Ni","Nickel","Transition metal",
    "Resists corrosion; used in alloys and plating.",
    ["Stainless steel","Plating","Batteries"],
    ["Corrosion‑resistant","Versatile"],
    ["Some are allergic to nickel"]),
  E(4,11,29,"Cu","Copper","Transition metal",
    "Excellent conductor of electricity.",
    ["Wires and electronics","Plumbing","Alloys (bronze, brass)"],
    ["Great electrical/thermal conductor"],
    ["Can tarnish; mining impacts"]),
  E(4,12,30,"Zn","Zinc","Transition metal",
    "Protects steel from rust (galvanizing).",
    ["Galvanized steel","Alloys (brass)","Supplements (as compounds)"],
    ["Prevents corrosion","Useful alloys"],
    ["Excess intake can upset balance"]),
  E(4,13,31,"Ga","Gallium","Post‑transition metal",
    "Melts in your hand; used in electronics.",
    ["LEDs (GaN)","Solar cells","Semiconductors"],
    ["Key for modern LEDs"],
    ["Brittle at low temps; scarce"]),
  E(4,14,32,"Ge","Germanium","Metalloid",
    "Semiconductor material.",
    ["Fiber optics","Infrared optics","Electronics"],
    ["High‑quality optics","Semiconductor uses"],
    ["Limited availability; cost"]),
  E(4,15,33,"As","Arsenic","Metalloid",
    "Toxic element used in small amounts in semiconductors and wood treatment (regulated).",
    ["Semiconductors (GaAs)","Wood preservatives (restricted)","Alloys"],
    ["Useful in tech"],
    ["Highly toxic; strict controls"]),
  E(4,16,34,"Se","Selenium","Nonmetal",
    "Photoconductive; used in electronics and nutrition (trace).",
    ["Electronics/photocopiers (historic)","Glass decolorizing","Dietary trace element"],
    ["Useful in glass and electronics"],
    ["Too much is toxic"]),
  E(4,17,35,"Br","Bromine","Halogen",
    "Reddish liquid; forms useful compounds.",
    ["Flame retardants (some types)","Photography (historical)","Water treatment"],
    ["Effective in some safety applications"],
    ["Many compounds are hazardous; regulations apply"]),
  E(4,18,36,"Kr","Krypton","Noble gas",
    "Inert gas used in lighting.",
    ["High‑performance lighting","Photography flashes","Insulating windows"],
    ["Stable and non‑reactive"],
    ["Special handling for gases"]),

  // Period 5
  E(5,1,37,"Rb","Rubidium","Alkali metal",
    "Very reactive soft metal.",
    ["Research","Specialty electronics","Vacuum tubes (getters)"],
    ["Useful in niche tech"],
    ["Reacts violently with water"]),
  E(5,2,38,"Sr","Strontium","Alkaline earth metal",
    "Gives red color in fireworks.",
    ["Fireworks (red)","Ceramics","Medical imaging (as compounds)"],
    ["Bright red fireworks"],
    ["Some isotopes are hazardous"]),
  E(5,3,39,"Y","Yttrium","Transition metal",
    "Used in LEDs and superconductors.",
    ["LEDs/phosphors","Alloys","Medical/ceramics"],
    ["Improves material properties"],
    ["Mining/availability constraints"]),
  E(5,4,40,"Zr","Zirconium","Transition metal",
    "Resists corrosion; used in nuclear reactors.",
    ["Nuclear fuel cladding","Ceramics","Alloys"],
    ["Corrosion‑resistant"],
    ["Powder can be flammable"]),
  E(5,5,41,"Nb","Niobium","Transition metal",
    "Used in superconducting magnets and alloys.",
    ["Superconductors","Alloying steel","Medical implants"],
    ["High‑tech uses"],
    ["Supply risk/cost"]),
  E(5,6,42,"Mo","Molybdenum","Transition metal",
    "Improves steel strength at high temperature.",
    ["Alloy steels","Catalysts","Electronics"],
    ["High‑temp strength"],
    ["Dust hazards in industry"]),
  E(5,7,43,"Tc","Technetium","Transition metal",
    "Radioactive; mainly used in medical imaging.",
    ["Medical imaging (Tc‑99m)"],
    ["Vital diagnostic tool"],
    ["Radioactive; controlled use"]),
  E(5,8,44,"Ru","Ruthenium","Transition metal",
    "Hard, rare; used in electronics and catalysts.",
    ["Electrical contacts","Catalysts","Alloys"],
    ["Durable and catalytic"],
    ["Rare; expensive"]),
  E(5,9,45,"Rh","Rhodium","Transition metal",
    "Very rare, reflective; key for catalytic converters.",
    ["Catalytic converters","Plating/mirrors","Alloys"],
    ["Excellent catalyst"],
    ["Extremely expensive"]),
  E(5,10,46,"Pd","Palladium","Transition metal",
    "Catalyst and electronics metal.",
    ["Catalytic converters","Electronics","Hydrogen storage"],
    ["Great catalyst"],
    ["High cost and supply risk"]),
  E(5,11,47,"Ag","Silver","Transition metal",
    "Very conductive and reflective.",
    ["Electronics","Jewelry","Antimicrobial coatings"],
    ["Best electrical conductor","Aesthetic"],
    ["Tarnishes; cost"]),
  E(5,12,48,"Cd","Cadmium","Transition metal",
    "Toxic heavy metal; limited uses.",
    ["Batteries (Ni‑Cd, older)","Pigments (restricted)","Electroplating (limited)"],
    ["Specific industrial uses"],
    ["Toxic; strict regulations"]),
  E(5,13,49,"In","Indium","Post‑transition metal",
    "Soft metal used in touchscreens (ITO).",
    ["Touchscreens/ITO","Solders","Semiconductors"],
    ["Enables modern displays"],
    ["Rare; supply constraints"]),
  E(5,14,50,"Sn","Tin","Post‑transition metal",
    "Used in solder and plating (tin cans).",
    ["Solder","Tin plating","Bronze (with copper)"],
    ["Prevents corrosion","Useful alloys"],
    ["Tin whiskers can cause electronics issues"]),
  E(5,15,51,"Sb","Antimony","Metalloid",
    "Used in flame retardants and alloys.",
    ["Flame retardants","Lead‑acid battery plates","Semiconductors"],
    ["Useful additive"],
    ["Some compounds are toxic"]),
  E(5,16,52,"Te","Tellurium","Metalloid",
    "Used in solar panels and alloys.",
    ["CdTe solar cells","Alloys","Thermoelectrics"],
    ["Improves high‑tech materials"],
    ["Scarce; some toxicity"]),
  E(5,17,53,"I","Iodine","Halogen",
    "Essential trace element; purple crystals.",
    ["Iodized salt","Antiseptics","Imaging (iodinated contrast)"],
    ["Prevents goiter","Useful disinfectant"],
    ["Excess can affect thyroid"]),
  E(5,18,54,"Xe","Xenon","Noble gas",
    "Inert gas with bright discharge.",
    ["Xenon headlights","Anesthesia (specialized)","Ion propulsion (space)"],
    ["Inert; unique lighting"],
    ["Expensive; specialized handling"]),

  // Period 6 (excluding Lanthanides in main grid)
  E(6,1,55,"Cs","Cesium","Alkali metal",
    "Very reactive soft metal; used in atomic clocks.",
    ["Atomic clocks","Oil well drilling fluids","Photoelectric cells"],
    ["Precise timekeeping"],
    ["Reacts violently with water"]),
  E(6,2,56,"Ba","Barium","Alkaline earth metal",
    "Heavy metal; compounds used in imaging and fireworks.",
    ["Barium meals (medical imaging)","Fireworks (green)","Drilling fluids"],
    ["Useful compounds for imaging"],
    ["Elemental Ba is toxic; compounds controlled"]),
  // Group 3 in period 6 is officially a topic; commonly shown as Hf after Ba with La in ribbon
  E(6,4,72,"Hf","Hafnium","Transition metal",
    "Resists corrosion; used in nuclear control rods.",
    ["Nuclear reactors","Alloys","Microelectronics gates (HfO2)"],
    ["High stability"],
    ["Scarce and costly"]),
  E(6,5,73,"Ta","Tantalum","Transition metal",
    "Resists corrosion; used in electronics.",
    ["Capacitors","Surgical tools","Alloys"],
    ["Great for electronics"],
    ["Mining/ethics concerns"]),
  E(6,6,74,"W","Tungsten","Transition metal",
    "Very high melting point; very hard.",
    ["Light bulb filaments (historic)","Cutting tools","Weights/balancing"],
    ["Extreme heat resistance"],
    ["Hard to machine; dense"]),
  E(6,7,75,"Re","Rhenium","Transition metal",
    "Rare; high‑temp superalloys.",
    ["Jet engines","Catalysts","Thermocouples"],
    ["High temp strength"],
    ["Very rare; expensive"]),
  E(6,8,76,"Os","Osmium","Transition metal",
    "Very dense, hard metal.",
    ["Fountain pen tips (historic)","Alloys","Catalysts"],
    ["Durable in alloys"],
    ["Osmium tetroxide is highly toxic"]),
  E(6,9,77,"Ir","Iridium","Transition metal",
    "Very dense, corrosion‑resistant.",
    ["Spark plugs","Alloys","Crucibles"],
    ["Excellent corrosion resistance"],
    ["Rare, expensive"]),
  E(6,10,78,"Pt","Platinum","Transition metal",
    "Precious catalyst metal.",
    ["Catalytic converters","Jewelry","Chemotherapy drugs"],
    ["Great catalyst","Biocompatible"],
    ["Very expensive"]),
  E(6,11,79,"Au","Gold","Transition metal",
    "Precious, non‑tarnishing metal.",
    ["Jewelry","Electronics connectors","Finance (stores of value)"],
    ["Doesn’t corrode","Reliable conductor"],
    ["High cost"]),
  E(6,12,80,"Hg","Mercury","Transition metal",
    "Liquid metal at room temperature.",
    ["Old thermometers (phased out)","Fluorescent lamps","Gold mining (restricted)"],
    ["Unique liquid metal"],
    ["Toxic; strict regulations"]),
  E(6,13,81,"Tl","Thallium","Post‑transition metal",
    "Very toxic; limited specialized uses.",
    ["Electronics","Optics","Research"],
    ["Useful in niche tech"],
    ["Highly toxic; carefully controlled"]),
  E(6,14,82,"Pb","Lead","Post‑transition metal",
    "Dense, soft metal; toxic.",
    ["Batteries","Radiation shielding","Weights"],
    ["Effective shielding","Recyclable"],
    ["Toxic; avoid exposure"]),
  E(6,15,83,"Bi","Bismuth","Post‑transition metal",
    "Dense but less toxic than lead; forms colorful crystals.",
    ["Medicines (bismuth subsalicylate)","Alloys","Cosmetics/pigments"],
    ["Lower toxicity than lead","Interesting properties"],
    ["Dust can irritate; moderate use"]),
  E(6,16,84,"Po","Polonium","Metalloid",
    "Highly radioactive element.",
    ["Static eliminators (historic)","Research"],
    ["Strong alpha emitter (niche)"],
    ["Extremely toxic and radioactive"]),
  E(6,17,85,"At","Astatine","Halogen",
    "Very rare and radioactive.",
    ["Research","Potential targeted therapies"],
    ["Unique radioisotopes"],
    ["Scarce; radioactive"]),
  E(6,18,86,"Rn","Radon","Noble gas",
    "Radioactive gas from uranium decay.",
    ["Research","Radiation therapy (historic)"],
    ["Useful in some studies"],
    ["Health hazard in homes; ventilation important"]),

  // Period 7 (excluding Actinides in main grid)
  E(7,1,87,"Fr","Francium","Alkali metal",
    "Extremely rare and radioactive.",
    ["Research"],
    ["Interesting for science"],
    ["Highly radioactive; impractical"]),
  E(7,2,88,"Ra","Radium","Alkaline earth metal",
    "Radioactive; glows in the dark (historic paints).",
    ["Research","Medical (historic)"],
    ["Strong radiation source (niche)"],
    ["Hazardous radioactivity; historical caution"]),
  // Group 4 onward in period 7 (after actinide insert)
  E(7,4,104,"Rf","Rutherfordium","Transition metal",
    "Synthetic, very short‑lived.",
    ["Research (nuclear chemistry)"],
    ["Advances scientific knowledge"],
    ["No practical uses; radioactive, short‑lived"]),
  E(7,5,105,"Db","Dubnium","Transition metal",
    "Synthetic, short‑lived.",
    ["Research"],
    ["Helps explore periodic trends"],
    ["No practical uses; radioactive"]),
  E(7,6,106,"Sg","Seaborgium","Transition metal",
    "Synthetic, short‑lived.",
    ["Research"],
    ["Scientific insight"],
    ["Radioactive; short half‑lives"]),
  E(7,7,107,"Bh","Bohrium","Transition metal",
    "Synthetic, short‑lived.",
    ["Research"],
    ["Expands nuclear data"],
    ["Radioactive; fleeting"]),
  E(7,8,108,"Hs","Hassium","Transition metal",
    "Synthetic, short‑lived.",
    ["Research"],
    ["Scientific interest"],
    ["No practical uses"]),
  E(7,9,109,"Mt","Meitnerium","Unknown",
    "Synthetic, short‑lived.",
    ["Research"],
    ["Honors physicist Lise Meitner"],
    ["No practical uses"]),
  E(7,10,110,"Ds","Darmstadtium","Unknown",
    "Synthetic, short‑lived.",
    ["Research"],
    ["Expands periodic table"],
    ["No practical uses"]),
  E(7,11,111,"Rg","Roentgenium","Unknown",
    "Synthetic, short‑lived.",
    ["Research"],
    ["Honors Wilhelm Röntgen"],
    ["No practical uses"]),
  E(7,12,112,"Cn","Copernicium","Transition metal (predicted)",
    "Synthetic, short‑lived.",
    ["Research"],
    ["Honors Copernicus"],
    ["No practical uses"]),
  E(7,13,113,"Nh","Nihonium","Post‑transition (predicted)",
    "Synthetic, short‑lived.",
    ["Research"],
    ["Modern discovery"],
    ["No practical uses"]),
  E(7,14,114,"Fl","Flerovium","Post‑transition (predicted)",
    "Synthetic, short‑lived.",
    ["Research"],
    ["Explores superheavy behavior"],
    ["No practical uses"]),
  E(7,15,115,"Mc","Moscovium","Post‑transition (predicted)",
    "Synthetic, short‑lived.",
    ["Research"],
    ["New element studies"],
    ["No practical uses"]),
  E(7,16,116,"Lv","Livermorium","Post‑transition (predicted)",
    "Synthetic, short‑lived.",
    ["Research"],
    ["Expands nuclear models"],
    ["No practical uses"]),
  E(7,17,117,"Ts","Tennessine","Halogen (predicted)",
    "Synthetic, short‑lived.",
    ["Research"],
    ["Completes halogen group trend"],
    ["No practical uses"]),
  E(7,18,118,"Og","Oganesson","Noble gas (predicted)",
    "Synthetic, very short‑lived; likely not gas‑like.",
    ["Research"],
    ["Tests periodic limits"],
    ["No practical uses"])
];

// Lanthanides ribbon (La–Lu, atomic numbers 57–71)
const lanthanides = [
  E(0,1,57,"La","Lanthanum","Lanthanide",
    "Soft metal; starts lanthanide series.",
    ["Camera lenses (glass)","Hydrogen storage","Alloys"],
    ["Improves glass and alloys"],
    ["Mining/processing impacts"]),
  E(0,2,58,"Ce","Cerium","Lanthanide",
    "Common lanthanide; good for polishing.",
    ["Glass polishing","Catalytic converters","Lighter flints (mischmetal)"],
    ["Useful catalyst/polisher"],
    ["Dust can irritate; mining impacts"]),
  E(0,3,59,"Pr","Praseodymium","Lanthanide",
    "Used in magnets and glass coloring.",
    ["Strong magnets","Welder’s goggles","Alloys"],
    ["Enhances magnet strength"],
    ["Limited supply; dust caution"]),
  E(0,4,60,"Nd","Neodymium","Lanthanide",
    "Key for powerful permanent magnets.",
    ["Headphones/speakers","Wind turbines","Hard drives"],
    ["Very strong magnets"],
    ["Mining/processing impacts"]),
  E(0,5,61,"Pm","Promethium","Lanthanide",
    "Radioactive, rare.",
    ["Glow‑in‑the‑dark paint (historic)","Nuclear batteries (niche)"],
    ["Useful light source (niche)"],
    ["Radioactive; scarce"]),
  E(0,6,62,"Sm","Samarium","Lanthanide",
    "Used in magnets and reactors.",
    ["SmCo magnets","Control rods","Optics"],
    ["High‑temp magnets"],
    ["Supply constraints"]),
  E(0,7,63,"Eu","Europium","Lanthanide",
    "Phosphor for red in screens.",
    ["TV/LED red phosphor","Banknote anti‑counterfeit","Phosphors"],
    ["Bright red emission"],
    ["Scarce; mining impacts"]),
  E(0,8,64,"Gd","Gadolinium","Lanthanide",
    "High neutron capture; MRI contrast agent (as complex).",
    ["MRI contrast (chelates)","Control rods","Magnets"],
    ["Useful in medicine (complexes)"],
    ["Free ion is toxic; use chelated"]),
  E(0,9,65,"Tb","Terbium","Lanthanide",
    "Phosphors and magnets.",
    ["Green phosphors","Magnets","Sensors"],
    ["Improves color/magnetism"],
    ["Scarcity and cost"]),
  E(0,10,66,"Dy","Dysprosium","Lanthanide",
    "Key for high‑temp magnets.",
    ["Magnets (wind/EV)","Lighting","Lasers"],
    ["Stabilizes magnets at heat"],
    ["Supply risk"]),
  E(0,11,67,"Ho","Holmium","Lanthanide",
    "Strong magnetic properties.",
    ["Magnets","Lasers","Nuclear control"],
    ["Unique magnetism"],
    ["Rare; niche uses"]),
  E(0,12,68,"Er","Erbium","Lanthanide",
    "Pink glass color; fiber optics dopant.",
    ["Fiber amplifiers","Lasers","Glass tinting"],
    ["Boosts optical signals"],
    ["Limited supply"]),
  E(0,13,69,"Tm","Thulium","Lanthanide",
    "Very rare; lasers.",
    ["Portable X‑ray (historic)","Lasers","Research"],
    ["Useful emissions"],
    ["Very rare and costly"]),
  E(0,14,70,"Yb","Ytterbium","Lanthanide",
    "Dopant and alloys.",
    ["Fiber lasers","Alloys","Sensors"],
    ["Enhances laser performance"],
    ["Scarcity"]),
  E(0,15,71,"Lu","Lutetium","Lanthanide",
    "Heaviest lanthanide; catalysts and PET scans.",
    ["PET detectors (LuAP/LuAG)","Catalysts","Research"],
    ["Advanced detectors"],
    ["Very expensive"])
];

// Actinides ribbon (Ac–Lr, atomic numbers 89–103)
const actinides = [
  E(0,1,89,"Ac","Actinium","Actinide",
    "Radioactive metal; glows faintly.",
    ["Research","Potential therapies"],
    ["Useful isotopes in medicine"],
    ["Highly radioactive"]),
  E(0,2,90,"Th","Thorium","Actinide",
    "Weakly radioactive; potential nuclear fuel.",
    ["Alloys","Gas mantles (historic)","Nuclear fuel research"],
    ["Abundant fuel potential"],
    ["Radioactive; handling limits"]),
  E(0,3,91,"Pa","Protactinium","Actinide",
    "Very rare and radioactive.",
    ["Research"],
    ["Scientific value"],
    ["Toxic and radioactive"]),
  E(0,4,92,"U","Uranium","Actinide",
    "Heavy radioactive; nuclear fuel.",
    ["Nuclear power fuel","Armor/weights (depleted)","Glass coloring (historic)"],
    ["Energy‑dense fuel"],
    ["Radioactivity; waste handling"]),
  E(0,5,93,"Np","Neptunium","Actinide",
    "Synthetic radioactive element.",
    ["Research","Potential reactor fuel"],
    ["Expands nuclear science"],
    ["Radioactive hazards"]),
  E(0,6,94,"Pu","Plutonium","Actinide",
    "Radioactive; nuclear fuel/weapons.",
    ["Nuclear fuel","Space power (RTGs)"],
    ["Powers deep‑space probes"],
    ["Highly toxic; proliferation risks"]),
  E(0,7,95,"Am","Americium","Actinide",
    "Radioactive; used in smoke detectors (Am‑241).",
    ["Smoke detectors","Scientific sources"],
    ["Reliable alpha source"],
    ["Radioactive; regulated"]),
  E(0,8,96,"Cm","Curium","Actinide",
    "Synthetic radioactive.",
    ["Research","Space power (isotopes)"],
    ["Strong alpha source"],
    ["High radioactivity"]),
  E(0,9,97,"Bk","Berkelium","Actinide",
    "Very rare synthetic.",
    ["Research"],
    ["Scientific insight"],
    ["Radioactive; scarce"]),
  E(0,10,98,"Cf","Californium","Actinide",
    "Strong neutron emitter.",
    ["Neutron sources (oil exploration)","Cancer therapy (historic)","Research"],
    ["Useful neutron source"],
    ["Highly radioactive; expensive"]),
  E(0,11,99,"Es","Einsteinium","Actinide",
    "Synthetic; glows from radioactivity.",
    ["Research"],
    ["Scientific interest"],
    ["Short half‑life; hazardous"]),
  E(0,12,100,"Fm","Fermium","Actinide",
    "Synthetic, short‑lived.",
    ["Research"],
    ["Expands nuclear knowledge"],
    ["No practical uses"]),
  E(0,13,101,"Md","Mendelevium","Actinide",
    "Synthetic, short‑lived.",
    ["Research"],
    ["Honors Mendeleev"],
    ["No practical uses"]),
  E(0,14,102,"No","Nobelium","Actinide",
    "Synthetic, short‑lived.",
    ["Research"],
    ["Honors Nobel"],
    ["No practical uses"]),
  E(0,15,103,"Lr","Lawrencium","Actinide",
    "Synthetic, short‑lived.",
    ["Research"],
    ["Completes actinide series"],
    ["No practical uses"])
];

// DOM nodes
const grid = document.getElementById("pt-grid");
const lanthGrid = document.getElementById("lanth-grid");
const actGrid = document.getElementById("act-grid");
const details = document.getElementById("element-details");
const searchBox = document.getElementById("searchBox");

// Render helpers
function renderMain(filter = "") {
  grid.innerHTML = "";
  const q = filter.trim().toLowerCase();
  const frag = document.createDocumentFragment();

  mainElements.forEach(el => {
    const matches =
      q === "" ||
      el.name.toLowerCase().includes(q) ||
      el.symbol.toLowerCase().includes(q) ||
      el.number.toString() === q;

    if (!matches) return;

    const cell = document.createElement("div");
    cell.className = "element-cell";
    cell.style.gridColumn = el.group;
    cell.style.gridRow = el.period;
    cell.dataset.number = String(el.number);
    cell.innerHTML = `<strong>${el.symbol}</strong><small>${el.number}</small>`;
    cell.addEventListener("click", () => showDetails(el.number));
    frag.appendChild(cell);
  });

  grid.appendChild(frag);

  if (grid.children.length === 0) {
    const msg = document.createElement("div");
    msg.textContent = "No matching element in main table.";
    msg.style.gridColumn = "1 / -1";
    msg.style.textAlign = "center";
    msg.style.color = "#6f5cc7";
    msg.style.padding = "10px 0";
    grid.appendChild(msg);
  }
}

function renderRibbon(container, list, filter = "") {
  container.innerHTML = "";
  const q = filter.trim().toLowerCase();
  const frag = document.createDocumentFragment();

  list.forEach((el, idx) => {
    const matches =
      q === "" ||
      el.name.toLowerCase().includes(q) ||
      el.symbol.toLowerCase().includes(q) ||
      el.number.toString() === q;

    if (!matches) return;

    const cell = document.createElement("div");
    cell.className = "element-cell";
    cell.style.gridColumn = (idx + 1); // 1..15 across the ribbon
    cell.style.gridRow = 1;
    cell.dataset.number = String(el.number);
    cell.innerHTML = `<strong>${el.symbol}</strong><small>${el.number}</small>`;
    cell.addEventListener("click", () => showDetails(el.number));
    frag.appendChild(cell);
  });

  container.appendChild(frag);

  if (container.children.length === 0) {
    const msg = document.createElement("div");
    msg.textContent = "No matches here.";
    msg.style.gridColumn = "1 / -1";
    msg.style.textAlign = "center";
    msg.style.color = "#6f5cc7";
    msg.style.padding = "8px 0";
    container.appendChild(msg);
  }
}

function clearSelection() {
  document.querySelectorAll(".element-cell.selected").forEach(c => c.classList.remove("selected"));
}

function showDetails(number) {
  const n = Number(number);
  const el = mainElements.find(e => e.number === n)
         || lanthanides.find(e => e.number === n)
         || actinides.find(e => e.number === n);
  if (!el) return;

  clearSelection();
  const selectedCell = document.querySelector(`.element-cell[data-number="${n}"]`);
  if (selectedCell) selectedCell.classList.add("selected");

  details.innerHTML = `
    <div class="card p-3">
      <div class="d-flex align-items-center justify-content-between">
        <h5 class="card-title mb-0">${el.name} (${el.symbol})</h5>
        <span class="badge">${el.type}</span>
      </div>
      <hr class="my-3" />
      <ul class="list-unstyled mb-3">
        <li><strong>Atomic Number:</strong> ${el.number}</li>
        <li><strong>Group:</strong> ${el.group === 0 ? "—" : el.group}</li>
        <li><strong>Period:</strong> ${el.period > 0 ? el.period : "— (ribbon)"}</li>
      </ul>
      <p class="mb-2"><strong>In simple words:</strong> ${el.summary}</p>
      <p class="mb-1"><strong>Daily uses:</strong></p>
      <ul class="mb-3">
        ${el.dailyUses.map(u => `<li>${u}</li>`).join("")}
      </ul>
      <div class="d-flex gap-2 flex-wrap">
        ${el.prosCons.good.map(g => `<span class="pro">Good: ${g}</span>`).join("")}
        ${el.prosCons.caution.map(c => `<span class="con">Note: ${c}</span>`).join("")}
      </div>
    </div>
  `;
}

function renderAll(filter = "") {
  renderMain(filter);
  renderRibbon(lanthGrid, lanthanides, filter);
  renderRibbon(actGrid, actinides, filter);
}

// Search
searchBox.addEventListener("input", e => {
  renderAll(e.target.value);
  // keep last details card; selecting another cell replaces it
});

// Initial render
renderAll();
