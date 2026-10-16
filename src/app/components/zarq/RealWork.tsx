import { founder } from './content';

// "Real people, real work": the founder, ZARQ's own site as a work sample, and
// supporting photography (see public/media/stock/CREDITS.txt).

const stock = [
  { src: '/media/stock/drakensberg.jpg', alt: 'Green valleys below the Drakensberg mountains', caption: 'Drakensberg country' },
  { src: '/media/stock/planning.jpg', alt: 'Hands planning in a notebook beside a laptop and phone', caption: 'Every project starts with a plan' },
  { src: '/media/stock/kids-robotics-class.jpg', alt: 'Young learners building and wiring robot cars', caption: 'Build it. Code it. Test it.' },
];

function Caption({ children }: { children: string }) {
  return (
    <span className="absolute left-3 bottom-3 bg-white/95 rounded-full px-3.5 py-1.5 text-xs sm:text-sm font-medium text-gray-950">
      {children}
    </span>
  );
}

export default function RealWork() {
  return (
    <div className="space-y-4">
      <div className="grid md:grid-cols-[1.05fr_1.5fr_0.9fr] gap-4 md:h-[430px]">
        <figure className="relative rounded-2xl overflow-hidden bg-gray-100 h-[360px] md:h-auto">
          <img src="/founder-lesedi-smile.jpg" alt={founder.photoAlt} loading="lazy" className="w-full h-full object-cover object-[50%_25%]" />
          <Caption>{`${founder.name}, founder`}</Caption>
        </figure>
        <figure className="relative rounded-2xl overflow-hidden bg-[#fff1f6] flex items-center justify-center p-6 sm:p-9 h-[300px] md:h-auto">
          <div className="w-full max-w-[520px]">
            <div className="bg-gray-950 rounded-t-xl rounded-b p-2 shadow-[0_30px_60px_-20px_rgba(3,7,18,0.35)]">
              <img src="/media/work/zarq-site-desktop.jpg" alt="The ZARQ website on a laptop" loading="lazy" className="rounded w-full" />
            </div>
            <div className="h-3 bg-gray-300 rounded-b-xl -mx-5" />
          </div>
          <Caption>Our work: zarq.co.za</Caption>
        </figure>
        <figure className="relative rounded-2xl overflow-hidden bg-gray-950 flex items-center justify-center p-7 h-[420px] md:h-auto">
          <div className="w-[190px] border-8 border-gray-800 rounded-[30px] overflow-hidden bg-white">
            <img src="/media/work/zarq-site-mobile.jpg" alt="The ZARQ website on a phone" loading="lazy" className="w-full" />
          </div>
          <Caption>Fast on every phone</Caption>
        </figure>
      </div>
      <div className="grid sm:grid-cols-3 gap-4">
        {stock.map(({ src, alt, caption }) => (
          <figure key={src} className="relative rounded-2xl overflow-hidden bg-gray-100 h-[220px] sm:h-[240px]">
            <img src={src} alt={alt} loading="lazy" className="w-full h-full object-cover" />
            <Caption>{caption}</Caption>
          </figure>
        ))}
      </div>
    </div>
  );
}
