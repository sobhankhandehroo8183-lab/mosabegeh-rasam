import VideoPlayer from '../components/VideoPlayer';
import Header from '../components/Header';

export default function Home() {
  return (
    <div className="page-wrapper">
      {/* هدر */}
      <Header />

      {/* بخش اصلی */}
      <div className="hero-section">
        {/* ستون چپ: تلویزیون */}
        <div className="tv-column">
          <VideoPlayer />
        </div>

        {/* ستون راست: محتوا */}
        <div className="content-column">
          {/* بج مسابقه نقاشی - اصلاح شده با مدال سمت راست و پرچم داخل کلمه کشوری */}
          <div className="contest-badge">
            <div className="badge-medal">🥇</div>
            <div className="badge-text-section">
              <div className="badge-line1">مسابقه نقاشی</div>
              <div className="badge-line2">
                ک<span className="iran-flag-inline">
                  <span className="flag-green"></span>
                  <span className="flag-white"></span>
                  <span className="flag-red"></span>
                </span>شوری
              </div>
            </div>
          </div>

          {/* متن اگه صدا نداری */}
          <div className="sound-hint">
            <div>اگه صدا نداری</div>
            <div>
              <span className="red-text">اینجا</span> کلیک کن
            </div>
          </div>

          {/* ریموت + متن - جابه‌جا شد: ریموت سمت راست، متن سمت چپ */}
          <div className="remote-row">
            {/* متن سمت چپ ریموت */}
            <div className="remote-labels">
              <div className="remote-label-top">اگه ویدئو</div>
              <div className="remote-label-top">دیده نمیشه</div>
              <div className="remote-label-top">
                <span className="remote-label-red">اینجا</span> کلیک کن
              </div>
            </div>

            {/* ریموت کنترل - سمت راست */}
            <div
              className="remote-ctrl"
              onClick={() => {
                const vid = document.querySelector('video');
                if (vid) {
                  vid.muted = false;
                  vid.play();
                }
              }}
            >
              <div className="remote-body">
                <div className="remote-btn-up">▲</div>
                <div className="remote-btn-up" style={{ marginTop: '-6px' }}>▼</div>
                <div className="remote-btn-play">▶</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* دکمه‌های پایین صفحه */}
      <div className="action-buttons">
        <a href="#" className="btn-certificate">
          <span className="btn-certificate-icon">📜</span> اطلاعات گواهی
        </a>
        <a href="#" className="btn-contest">
          <span className="btn-contest-icon">✏️</span> شرکت در مسابقه
        </a>
      </div>
    </div>
  );
}