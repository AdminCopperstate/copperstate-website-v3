const LOCATIONS = [
  'GOLD CANYON, AZ',
  'GILBERTSVILLE, PA',
  'SAN MARCOS, TX',
  'FLAGSTAFF, AZ',
  'HAINES CITY, FL',
  'OCOEE, FL',
  'SAFFORD, AZ',
  'WINTER GARDEN, FL',
  'NORTH OLMSTED, OH',
  'GOODYEAR, AZ',
  'FRANKFORT, IL',
  'FORT LYON, CO',
  'ARTESIA, NM',
  'FORT WAYNE, IN',
  'TOOELE, UT',
  'PRESCOTT VALLEY, AZ',
  'VERO BEACH, FL',
  'BROOKSVILLE, FL',
  'ST. CLAIR, MO',
  'TURKEY CREEK, AL',
  'HORSHAM, PA',
  'EPHRATA, PA',
  'GREEN VALLEY, AZ',
  'BOULDER, MT',
  'MESQUITE, TX',
  'MASCOUTAH, IL',
  'SHENANDOAH, VA',
  'CAMP LEJEUNE, NC',
  'HERLONG, CA',
  'EL DORADO, AR',
  'LEHIGHTON, PA',
  'TUCSON, AZ',
  'TRAFALGAR, IN',
  'MANHEIM, PA',
  'BURLINGTON, NJ',
  'BONNER SPRINGS, KS',
  'DANBURY, OH',
  'ELDORADO SPRINGS, MO',
  'TRUSSVILLE, AL',
  'PAYSON, AZ',
  'BRUNSWICK COUNTY, NC',
  'CALERA, OK',
  'MIDDLETOWN, PA',
  'NASHVILLE, TN',
  'FORT MCDOWELL, AZ',
  'BOXELDER, CO',
  'PONTE VEDRA BEACH, FL',
  'MINNEOLA, FL',
  'BUCKEYE, AZ',
  'FLORENCE, AZ',
  'SOUTH HILL, VA',
  'SANTA CLAUS, IN',
  'CARLISLE, PA',
  'HIGHSPIRE, PA',
  'GREEN RIVER, WY',
  'WILDWOOD, FL',
  'OZARK, MO',
];

export default function LocationTicker() {
  const items = [...LOCATIONS, ...LOCATIONS];

  return (
    <div className="bg-copper-grad overflow-hidden py-2.5" aria-hidden="true">
      <div className="flex whitespace-nowrap marquee-track">
        {items.map((city, i) => (
          <span key={i} className="flex items-center text-[12px] font-bold tracking-[0.12em] text-ink/90 mx-4">
            {city}
            <span className="mx-4 text-ink/50">&bull;</span>
          </span>
        ))}
      </div>
    </div>
  );
}
