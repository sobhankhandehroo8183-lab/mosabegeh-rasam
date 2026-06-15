import { useRef, useState } from 'react';

export default function VideoPlayer() {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

  const toggleSound = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      if (isMuted) videoRef.current.play();
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="tv-outer">
      {/* آنتن‌ها */}
      <div className="tv-antennas">
        <div className="antenna antenna-left">
          <div className="antenna-ball" />
        </div>
        <div className="antenna antenna-right">
          <div className="antenna-ball" />
        </div>
      </div>

      {/* بدنه تلویزیون */}
      <div className="tv-body">
        {/* صفحه */}
        <div className="tv-screen-wrap">
          <video
            ref={videoRef}
            className="video-element"
            src="/video.mp4"
            autoPlay
            loop
            muted={isMuted}
            playsInline
          />
          <button
            className="volume-button"
            onClick={toggleSound}
            title="اگه صدا نداری اینجا کلیک کن"
          >
            {isMuted ? '🔇' : '🔊'}
          </button>
        </div>

        {/* نوار راهنما */}
        <div className="video-hint-bar">
          💡 اگه صدا نداری روی دکمه نارنجی پایین ویدیو کلیک کن
        </div>

        {/* دکمه وسط پایین تلویزیون */}
        <div className="tv-chin-button" />
      </div>

      {/* پایه */}
      <div className="tv-stand-neck" />
      <div className="tv-stand-base" />
    </div>
  );
}