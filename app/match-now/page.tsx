import { Background } from '../../components/Background';
import { PlayerNavigationBar } from '../../components/PlayerNavigationBar';

export default function MatchNow() {
  return (
    <Background>
      <div className="text-[#A6E818] text-[36px] font-[500] text-center">You got a match</div>
      <PlayerNavigationBar />
    </Background>
  );
}
