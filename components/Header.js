export default function Header() {
  return (
    <header className="site-header">
      {/* لوگو - سمت راست */}
      <div className="header-logo">
        <div className="logo-icon">🎧</div>
        <div className="logo-text">راسم</div>
      </div>

      {/* منوی ناوبری - وسط */}
      <nav className="header-nav">
        <a href="#">خانه</a>
        <a href="#">مسابقه</a>
        <a href="#">جایزه</a>
        <a href="#">گواهی</a>
        <a href="#">ارتباط با ما</a>
        <a href="#">درباره ما</a>
      </nav>

      {/* آیکون‌ها - سمت چپ */}
      <div className="header-icons">
        <a href="#" className="header-icon-btn" title="اشتراک‌گذاری">↗</a>
        <a href="#" className="header-icon-btn" title="اطلاعات">i</a>
        <a href="#" className="header-icon-btn" title="سوالات متداول">?</a>
      </div>
    </header>
  );
}