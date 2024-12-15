'use client';

import { NavMap } from '../icons/nav-map';
import { NavProfile } from '../icons/nav-profile';
import { usePathname, useRouter } from 'next/navigation';
import { MatchIcon } from '@/icons/match';
import { CommunityIcon } from '@/icons/community';

export const PlayerNavigationBar = () => {
  const pathname = usePathname();
  const router = useRouter();

  const isDashboard = pathname?.startsWith('/match-now') || pathname?.startsWith('/fields');
  const isMap = pathname?.startsWith('/map');
  const isRevenue = pathname?.startsWith('/revenue');
  const isProfile = pathname?.startsWith('/profile');

  return (
    <footer className="bg-white shadow-lg fixed bottom-0 left-0 w-full z-50 rounded-t-[24px]">
      <div
        className="h-[100px] w-full rounded-t-[24px] grid grid-cols-4 grid-rows-1"
        style={{
          gridTemplateColumns: '1fr 1fr 1fr 1fr',
          gridTemplateRows: '1fr',
        }}
      >
        <div className="flex flex-col justify-center items-center" onClick={() => router.push('/match-now')}>
          <MatchIcon isActive={isDashboard} />
          <p className={`text-sm pt-1 ${isDashboard ? 'text-black font-[600]' : 'text-neutral-700 font-[400]'}`}>
            Match now
          </p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <NavMap isActive={isMap} />
          <p className="text-sm pt-1 font-normal text-neutral-700">Explore</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <CommunityIcon isActive={isRevenue} />
          <p className="text-sm pt-1 font-normal text-neutral-700">Community</p>
        </div>
        <div className="flex flex-col justify-center items-center" onClick={() => router.push('/profile')}>
          <NavProfile isActive={isProfile} />
          <p className={`text-sm pt-1 ${isProfile ? 'text-black font-[600]' : 'text-neutral-700 font-[400]'}`}>
            Profile
          </p>
        </div>
      </div>
    </footer>
  );
};
