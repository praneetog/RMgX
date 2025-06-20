const apps = [
  {
    name: "Gmail",
    icon: "https://img.icons8.com/fluency/240/gmail-new.png",
    link: "https://mail.google.com/",
  },
  {
    name: "Drive",
    icon: "https://img.icons8.com/color/480/google-drive--v2.png",
    link: "https://drive.google.com/",
  },
  {
    name: "Docs",
    icon: "https://img.icons8.com/fluency/48/google-docs--v2.png",
    link: "https://docs.google.com/",
  },
  {
    name: "Sheets",
    icon: "https://img.icons8.com/fluency/240/google-sheets--v1.png",
    link: "https://sheets.google.com/",
  },
  {
    name: "YouTube",
    icon: "https://img.icons8.com/color/96/youtube-play.png",
    link: "https://youtube.com/",
  },
  {
    name: "Maps",
    icon: "https://img.icons8.com/color/480/google-maps-new.png",
    link: "https://maps.google.com/",
  },
  {
    name: "Calendar",
    icon: "https://img.icons8.com/color/480/google-calendar--v2.png",
    link: "https://calendar.google.com/",
  },
  {
    name: "Photos",
    icon: "https://ssl.gstatic.com/images/branding/product/2x/photos_96dp.png",
    link: "https://photos.google.com/",
  },
  {
    name: "Meet",
    icon: "https://img.icons8.com/fluency/240/google-meet.png",
    link: "https://meet.google.com/",
  },
  {
    name: "News",
    icon: "https://img.icons8.com/fluency/240/google-news.png",
    link: "https://news.google.com/",
  },
  {
    name: "Gemini",
    icon: "https://img.icons8.com/color/480/gemini-ai.png",
    link: "https://gemini.google.com/",
  },
  {
    name: "Translate",
    icon: "https://ssl.gstatic.com/translate/favicon.ico",
    link: "https://translate.google.com/",
  },
];

const GoogleApps = () => {
    return (
    <div className="w-80 bg-white dark:bg-[#202124] border-8 border-gray-200 dark:border-[#5f6368] rounded-3xl shadow-xl p-4 grid grid-cols-3 gap-4 z-50">
      {apps.map((app) => (
        <a
          key={app.name}
          href={app.link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center text-sm text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-[#3c4043] p-2 rounded-md"
        >
          <img src={app.icon} alt={app.name} className="w-10 h-10 mb-1" />
          <span>{app.name}</span>
        </a>
      ))}
    </div>
  );      
};

export default GoogleApps;
