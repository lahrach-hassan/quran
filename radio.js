class RadioPlayer {
  constructor() {
    this.currentStream = null;
    this.audioElement = null;
    this.favorites = this.loadFavorites();
    this.history = this.loadHistory();
    this.streams = [
{name:"إذاعة  وحيد الشرقاوي",logo:"https://zeno.fm/_ipx/q_85&fit_cover&s_144x144/https://images.zeno.fm/CxhLfdbGiv5IWzRC8QjmcRvVp82xWcWCzSZPm5QtPDY/rs:fill:288:288/g:ce:0:0/aHR0cHM6Ly9wcm94eS56ZW5vLmZtL2NvbnRlbnQvc3RhdGlvbnMvYWd4emZucGxibTh0YzNSaGRITnlNZ3NTQ2tGMWRHaERiR2xsYm5RWWdJRFFuZkhXamdnTUN4SU9VM1JoZEdsdmJsQnliMlpwYkdVWWdJRFF3X1R6cWdrTW9nRUVlbVZ1YncvaW1hZ2UvP3U9MTY2MTU0MDU2MTAwMA.webp",url:"https://stream-175.zeno.fm/wf4y5crpdg8uv?",country:"مصر",genre:"إبتهالات"},
{name:"إذاعة الشيخ محمد الهلباوي",logo:"https://zeno.fm/_ipx/q_85&fit_cover&s_144x144/https://images.zeno.fm/PgURRkVxZ1lw6eU_Q0Mbc6n8e17SSjelt8nafgZsTGA/rs:fill:288:288/g:ce:0:0/aHR0cHM6Ly9wcm94eS56ZW5vLmZtL2NvbnRlbnQvc3RhdGlvbnMvYWd4emZucGxibTh0YzNSaGRITnlNZ3NTQ2tGMWRHaERiR2xsYm5RWWdJRFFuZkhXamdnTUN4SU9VM1JoZEdsdmJsQnliMlpwYkdVWWdJRFFuWl9qd2dzTW9nRUVlbVZ1YncvaW1hZ2UvP3U9MTY2MTM2MTIyMzAwMA.webp",url:"https://stream-176.zeno.fm/30vy54qpdg8uv?",country:"مصر",genre:"إبتهالات"},
{name:"إذاعة سيد النقشبندي",logo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7ovMnWPcHjZaURmsQhqFWJkpPRo2ZLSFqnQ&s",url:"https://stream-161.zeno.fm/s0vc98c0pnhvv?",country:"مصر",genre:"إبتهالات"},
{name:"إذاعة عبد الرحيم دويدار",logo:"https://zeno.fm/_ipx/q_85&fit_cover&s_144x144/https://images.zeno.fm/a74yqVnSSxqRnlpIEL4aV0l43OD_payP8c7HRDMVcCw/rs:fill:288:288/g:ce:0:0/aHR0cHM6Ly9wcm94eS56ZW5vLmZtL2NvbnRlbnQvc3RhdGlvbnMvYWd4emZucGxibTh0YzNSaGRITnlNZ3NTQ2tGMWRHaERiR2xsYm5RWWdJRFFuZkhXamdnTUN4SU9VM1JoZEdsdmJsQnliMlpwYkdVWWdJRFFnOVg4OUFrTW9nRUVlbVZ1YncvaW1hZ2UvP3U9MTY2MTM0NDY2MDAwMA.webp",url:"https://stream-176.zeno.fm/guy5bxnpdg8uv?",country:"مصر",genre:"إبتهالات"},
{name:"إذاعة علي محمود",logo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwJmUgovs8o8exYWmKlU9wYAUW53MAGmx9og&s",url:"https://stream-160.zeno.fm/9c6q4nk0pnhvv?",country:"مصر",genre:"إبتهالات"},
{name:"إذاعة محمد الطوخي",logo:"https://watanimg.elwatannews.com/image_archive/original_lower_quality/11589748881678107303.jpg",url:"https://stream-176.zeno.fm/5xr8rqk0pnhvv?",country:"مصر",genre:"إبتهالات"},
{name:"إذاعة محمد عمران",logo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL3pHD_htNrby4uH_seNcwQjK8_KFXQvWs3Q&s",url:"https://stream-164.zeno.fm/rvfk49k0pnhvv?",country:"مصر",genre:"إبتهالات"},
{name:"إذاعة ممدوح عبد الجليل",logo:"https://zeno.fm/_ipx/q_85&fit_cover&s_144x144/https://images.zeno.fm/a0vxJkHnJOlT8OMNxkmsZ_HEhc7vg5r9qt_kVcgaJBo/rs:fill:288:288/g:ce:0:0/aHR0cHM6Ly9wcm94eS56ZW5vLmZtL2NvbnRlbnQvc3RhdGlvbnMvYWd4emZucGxibTh0YzNSaGRITnlNZ3NTQ2tGMWRHaERiR2xsYm5RWWdJRFFuZkhXamdnTUN4SU9VM1JoZEdsdmJsQnliMlpwYkdVWWdJRFF2ZENINUFnTW9nRUVlbVZ1YncvaW1hZ2UvP3U9MTY2MTU0MDUzNjAwMA.webp",url:"https://stream-154.zeno.fm/8p8as0npdg8uv?",country:"مصر",genre:"إبتهالات"},
{name:"إذاعة نصرالدين طوبار",logo:"https://i1.sndcdn.com/artworks-ayh8OzFNsW1dbwWr-D0SJ2g-t500x500.jpg",url:"https://stream-154.zeno.fm/e15ed2m0pnhvv?",country:"مصر",genre:"إبتهالات"},
{name:"إذاعة الإبتهالات",logo:"https://zeno.fm/_ipx/q_85&fit_cover&s_144x144/https://images.zeno.fm/V5ljjGiDqxhislImVJI83QGdy-_j0apWns_vo_WwCMo/rs:fill:288:288/g:ce:0:0/aHR0cHM6Ly9wcm94eS56ZW5vLmZtL2NvbnRlbnQvc3RhdGlvbnMvYWJhZDk2MDQtNDhlMS00OTE0LWFiOTItM2E2ZWRhYTYyZDEyL2ltYWdlLz91PTE2NzY4NDUyMzcwMDA.webp",url:"https://stream-154.zeno.fm/hntmdjmxhihtv?",country:"مصر",genre:"إبتهالات"},
{name:"إذاعة أذكار الصباح",logo:"https://www.arabtime.news/wp-content/uploads/2025/01/%D8%A7%D8%B0%D8%A7%D8%B9%D8%A9-%D8%A7%D8%B0%D9%83%D8%A7%D8%B1-%D8%A7%D9%84%D8%B5%D8%A8%D8%A7%D8%AD-mp3-%D9%85%D8%AA%D9%83%D8%B1%D8%B1%D8%A9-%D8%A8%D8%AB-%D9%85%D8%A8%D8%A7%D8%B4%D8%B1.jpg",url:"https://backup.qurango.net/radio/athkar_sabah",country:"السعودية",genre:"الأذكار"},
{name:"إذاعة أذكار المساء",logo:"https://www.arabtime.news/wp-content/uploads/2025/01/%D8%A7%D8%B0%D8%A7%D8%B9%D8%A9-%D8%A7%D8%B0%D9%83%D8%A7%D8%B1-%D8%A7%D9%84%D8%B5%D8%A8%D8%A7%D8%AD-mp3-%D9%85%D8%AA%D9%83%D8%B1%D8%B1%D8%A9-%D8%A8%D8%AB-%D9%85%D8%A8%D8%A7%D8%B4%D8%B1.jpg",url:"https://backup.qurango.net/radio/athkar_masa",country:"السعودية",genre:"الأذكار"},
{name:"إذاعة تكبيرات العيد",logo:"https://i1.sndcdn.com/artworks-000180721399-5t4uzw-t500x500.jpg",url:"https://backup.qurango.net/radio/eid",country:"السعودية",genre:"الأذكار"},
{name:"إذاعة الألوكة  الأدعية والأذكار اليومية",logo:"https://guidetodawah.com/media/326155791-1207628506549020-3292065372911974208-n1797_showWebsiteThumb.png",url:"https://radio.alukah.net/adiyyaha",country:"السعودية",genre:"الأذكار"},
{name:"إذاعة اذكار وأدعية بالصيغة المغربية",logo:"https://zeno.fm/_ipx/q_85&fit_cover&s_64x64/https://images.zeno.fm/ySR8sx9a4KMqyvaZ-x3knD-g4fE3glU4yZXimuBmI5U/rs:fill:288:288/g:ce:0:0/aHR0cHM6Ly9wcm94eS56ZW5vLmZtL2NvbnRlbnQvc3RhdGlvbnMvYmE2Y2E4M2MtOTFhYi00MTQ4LWE5YjAtMmY1YjI0N2Y2ODJlL2ltYWdlLz91PTE2OTIxOTQzOTQwMDA.webp",url:"https://stream-153.zeno.fm/rb361kymjhnuv?",country:"المغرب",genre:"الأذكار"},
{name:"إذاعة سماع",logo:"https://static.mytuner.mobi/media/tvos_radios/796/samaa-radio-sm.a54e46c4.png",url:"https://stream-161.zeno.fm/nezfuswpyjfuv?",country:"المغرب",genre:"الأذكار"},
{name:"إذاعة الألوكة العقيدة والتوحيد",logo:"https://guidetodawah.com/media/326155791-1207628506549020-3292065372911974208-n1797_showWebsiteThumb.png",url:"https://radio.alukah.net/aqidah",country:"السعودية",genre:"التوحيد و العقيدة"},
{name:" إذاعة المجد للحديث الشريف",logo:"https://www.guidetosunnah.com/media/ethaaa-almjd-llhdyth-alshryf634_showWebsiteThumb.png",url:"http://r7.tarat.com:8006/stream?type=http&nocache=25",country:"السعودية",genre:"الحديث وعلومه"},
{name:"إذاعة الألوكة الحديث وعلومه",logo:"https://guidetodawah.com/media/326155791-1207628506549020-3292065372911974208-n1797_showWebsiteThumb.png",url:"https://radio.alukah.net/hadith",country:"السعودية",genre:"الحديث وعلومه"},
{name:"إذاعة الارتقاء للحديث النبوي",logo:"https://zeno.fm/_ipx/q_85&fit_cover&s_144x144/https://images.zeno.fm/c_KE3nJXlLhS5hdkPPZqXrDr3GITF6seQQbQoHn0oHY/rs:fill:288:288/g:ce:0:0/aHR0cHM6Ly9wcm94eS56ZW5vLmZtL2NvbnRlbnQvc3RhdGlvbnMvYWd4emZucGxibTh0YzNSaGRITnlNZ3NTQ2tGMWRHaERiR2xsYm5RWWdJQ0k0c1BDN2dnTUN4SU9VM1JoZEdsdmJsQnliMlpwYkdVWWdJQ0ktX2JiclFvTW9nRUVlbVZ1YncvaW1hZ2UvP3U9MTczNDUxMDk0NzAwMA.webp",url:"https://s5.radio.co/scfafe52c4/listen?",country:"لبنان",genre:"الحديث وعلومه"},
{name:"إذاعة الرقية الشرعية",logo:"https://guidetodawah.com/media/31391d84908e4c14cafee9b5344e65841759_showWebsiteThumb.jpg",url:"https://backup.qurango.net/radio/roqiah",country:"السعودية",genre:"الرقية الشرعية"},
{name:"إذاعة السنة النبوية",logo:"https://zeno.fm/_ipx/q_85&fit_cover&s_144x144/https://images.zeno.fm/7J8XJvKfBt4CWfPU-gi-jqIjB7kMJsWUVlHZITggseY/rs:fill:288:288/g:ce:0:0/aHR0cHM6Ly9wcm94eS56ZW5vLmZtL2NvbnRlbnQvc3RhdGlvbnMvOTY0NGVmYTktMDYwMS0xMWU4LWFlOTctNTI1NDNiZTA0YzgxL2ltYWdlLz91PTE3MDE2OTU2NTIwMDA.webp",url:"http://andromeda.shoutca.st:8189/stream",country:"السعودية",genre:"السنة"},
{name:"إذاعة قناة السنة",logo:"https://cdn.raddio.net/storage/photos/242400/543db4d3c7dcda2a3512882f27ffa53c_100x100.webp",url:"http://mediaserver2.islamicity.com:8000/SaudiTVEnglish",country:"السعودية",genre:"السنة"},
{name:"إذاعة السنة",logo:"https://www.radiosunna.com/uploads/6/6/1/7/6617650/published/400x267.jpg?1629787079",url:"https://radiosunna.radioca.st/stream?1737404218410",country:"السعودية",genre:"السنة"},
{name:"إذاعة صور من حياة الصحابة والتابعين رضوان الله عليهم",logo:"https://play-lh.googleusercontent.com/8N7052xQ1tSJKSCW4Ag6VHf4mwglX9GAtDXs-cNmYorNDw5PQbYWxmKIxNVpONwkD9M=w240-h480-rw",url:"https://backup.qurango.net/radio/sahabah",country:"السعودية",genre:"السير و التاريخ"},
{name:"إذاعة الألوكة السيرة النبوية وقصص القرآن والأنبياء والصحابة",logo:"https://guidetodawah.com/media/326155791-1207628506549020-3292065372911974208-n1797_showWebsiteThumb.png",url:"https://radio.alukah.net/sirah",country:"السعودية",genre:"السير و التاريخ"},
{name:"إذاعة الألوكة  التراجم والتاريخ والسير",logo:"https://guidetodawah.com/media/326155791-1207628506549020-3292065372911974208-n1797_showWebsiteThumb.png",url:"https://radio.alukah.net/tarajim",country:"السعودية",genre:"السير و التاريخ"},
{name:"إذاعة قصص الأنبياء",logo:"https://zeno.fm/_ipx/q_85&fit_cover&s_144x144/https://images.zeno.fm/LkKSAtxFLPqb6wkqs6ypRZ6YAuzohM0MyVRRShAmDYA/rs:fill:288:288/g:ce:0:0/aHR0cHM6Ly9wcm94eS56ZW5vLmZtL2NvbnRlbnQvc3RhdGlvbnMvYWd4emZucGxibTh0YzNSaGRITnlNZ3NTQ2tGMWRHaERiR2xsYm5RWWdJQ0lqTmE4bXdrTUN4SU9VM1JoZEdsdmJsQnliMlpwYkdVWWdJQ0k3S3FDd1FrTW9nRUVlbVZ1YncvaW1hZ2UvP3U9MTY2MTkxMjI5NDAwMA.webp",url:"https://stream-175.zeno.fm/vn5zfymzbfhvv?",country:"مصر",genre:"السير و التاريخ"},
{name:"اذاعة  صور من حياة الصحابة (الدكتور عبد الرحمن رأفت الباشا)",logo:"https://zeno.fm/_ipx/q_85&fit_cover&s_144x144/https://images.zeno.fm/31KdmOydx6mDv8Ufo6yERws-eqMkswzP6PhS0rRUNMc/rs:fill:288:288/g:ce:0:0/aHR0cHM6Ly9wcm94eS56ZW5vLmZtL2NvbnRlbnQvc3RhdGlvbnMvMjJjNDU5ZmUtMWY0Yy00YzAwLTg4ZTEtZmY0NmFkMmNjODNiL2ltYWdlLz91PTE3MjczOTQ3MzYwMDA.webp",url:"https://stream-172.zeno.fm/gq1qehjhzovuv?",country:"مصر",genre:"السير و التاريخ"},
{name:"في ظلال السيرة النبوية 400 حلقة عن سيرة نبينا محمد صلى الله عليه وسلم",logo:"https://www.arrabita.ma/wp-content/uploads/2020/12/999.jpg",url:"https://backup.qurango.net/radio/fi_zilal_alsiyra",country:"السعودية",genre:"السيرة النبوية"},
{name:"كتاب الاختيارات الفقهية في مسائل العبادات والمعاملات",logo:"https://upload.wikimedia.org/wikipedia/commons/0/03/ALFiqh.png",url:"https://backup.qurango.net/radio/alaikhtiarat_alfiqhayh_bin_baz",country:"السعودية",genre:"الفقه"},
{name:"إذاعة الألوكة الفقهية",logo:"https://guidetodawah.com/media/326155791-1207628506549020-3292065372911974208-n1797_showWebsiteThumb.png",url:"https://radio.alukah.net/fiqhiyyah",country:"السعودية",genre:"الفقه"},
{name:"إذاعة القرآن الكريم من سيدني",logo:"https://static2.mytuner.mobi/media/tvos_radios/qcpxq3nfadhq.jpeg",url:"http://listen.qkradio.com.au:8382/listen.mp3",country:"أستراليا",genre:"القرآن الكريم"},
{name:"إذاعة القران الكريم الأردن",logo:"https://static2.mytuner.mobi/media/tvos_radios/103/quran-radio-dh-lqrn-lkrym.3566d54a.png",url:"https://jrtv-live.ercdn.net/jrradio/quranradio.m3u8",country:"الأردن",genre:"القرآن الكريم"},
{name:"اذاعة القران الكريم من عمان",logo:"https://zeno.fm/_ipx/q_85&fit_cover&s_144x144/https://images.zeno.fm/Ztizomu4b7dfrr3DMn3_9Fduu6iw34xKxb8emoeA1kM/rs:fill:288:288/g:ce:0:0/aHR0cHM6Ly9wcm94eS56ZW5vLmZtL2NvbnRlbnQvc3RhdGlvbnMvMWRjNGE5NTktNmQwNi00NTRjLWE1YzEtZTk2ZDVmOTFkYWUyL2ltYWdlLz91PTE3MzM5MjcxMzQwMDA.webp",url:"https://jrtv-live.ercdn.net/jrradio/quranradiovideo.m3u8?",country:"الأردن",genre:"القرآن الكريم"},
{name:"إذاعة وحي للقرآن الكريم",logo:"https://zeno.fm/_ipx/q_85&fit_cover&s_144x144/https://images.zeno.fm/mBbq6WQtEbPID_5wM5LQ2CdG6Y4h1AwNGW-t_ZUN89E/rs:fill:288:288/g:ce:0:0/aHR0cHM6Ly9wcm94eS56ZW5vLmZtL2NvbnRlbnQvc3RhdGlvbnMvODRiNmJiMGUtYWJkZC00MmQzLThmM2EtOWNlODQ2ZDQzNDRhL2ltYWdlLz91PTE3MDc4NTUxMzMwMDA.webp",url:"https://stream-153.zeno.fm/m41w1xy7pldtv?",country:"الأردن",genre:"القرآن الكريم"},
{name:"قرآن اف ام",logo:"https://zeno.fm/_ipx/q_85&fit_cover&s_144x144/https://images.zeno.fm/KJzw9ypm3m2Q24gA0W50oQZjrlQvkACFyrEO18dBTOE/rs:fill:288:288/g:ce:0:0/aHR0cHM6Ly9wcm94eS56ZW5vLmZtL2NvbnRlbnQvc3RhdGlvbnMvNmI5MzcwMjctZmU3OC00ZDk4LTkwYjQtOTljMzY2NTY5NDExL2ltYWdlLz91PTE2NzcyNzU1OTYwMDA.webp",url:"https://stream-172.zeno.fm/zsdrrroxrvutv?",country:"الأردن",genre:"القرآن الكريم"},
{name:" إذاعة دبي للقرآن الكريم",logo:"https://hhc.gov.ae/wp-content/uploads/2023/03/Dubai-Holy-Quran-FM-Logo-Jpeg.jpg",url:"http://uk5.internet-radio.com:8079/stream",country:"الإمارات العربية",genre:"القرآن الكريم"},
{name:"إذاعة الشارقة للقرآن الكريم",logo:"https://cdn.raddio.net/storage/photos/371569/26c4bb0b386ba4b1abe570c2f5975787_100x100.webp",url:"https://svs.itworkscdn.net/smcquranlive/quranradiolive/icecast.audio",country:"الإمارات العربية",genre:"القرآن الكريم"},
{name:"إذاعة القرآن الكريم أبو ظبي",logo:"https://cdn.raddio.net/storage/photos/134137/jkhb5c258a50445be087066856_100x100.webp",url:"https://vo-live-media.cdb.cdn.orange.com/Content/Channel/quran_kareem/HLS/stream_02/index.m3u8",country:"الإمارات العربية",genre:"القرآن الكريم"},
{name:"إذاعة زايد للقرآن الكريم",logo:"https://th.bing.com/th/id/OIP.VrpJ6KKA7U9JIew_oTMnmQHaHa?rs=1&pid=ImgDetMain",url:"https://zayedquran.gov.ae/stream.php",country:"الإمارات العربية",genre:"القرآن الكريم"},
{name:" إذاعة البحرين للقرآن الكريم",logo:"https://radio.qassimy.com/wp-content/uploads/2023/03/%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D9%85%D8%A7%D8%B9-%D8%A7%D9%84%D9%89-%D9%85%D8%AD%D8%B7%D8%A9-%D8%B1%D8%A7%D8%AF%D9%8A%D9%88-%D8%A5%D8%B0%D8%A7%D8%B9%D8%A9-%D8%A7%D9%84%D9%82%D8%B1%D8%A7%D9%86-%D8%A7%D9%84%D9%83%D8%B1%D9%8A%D9%85-%D9%85%D9%86-%D8%A7%D9%84%D8%A8%D8%AD%D8%B1%D9%8A%D9%86-%D8%A8%D8%AB-%D9%85%D8%A8%D8%A7%D8%B4%D8%B1.jpg",url:"https://5c7b683162943.streamlock.net/live/ngrp:radio-106-1_all/chunklist_w2034140633_b981072.m3u8",country:"البحرين",genre:"القرآن الكريم"},
{name:"إذاعة القرآن الكريم البحرين 1",logo:"https://radio.qassimy.com/wp-content/uploads/2023/03/%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D9%85%D8%A7%D8%B9-%D8%A7%D9%84%D9%89-%D9%85%D8%AD%D8%B7%D8%A9-%D8%B1%D8%A7%D8%AF%D9%8A%D9%88-%D8%A5%D8%B0%D8%A7%D8%B9%D8%A9-%D8%A7%D9%84%D9%82%D8%B1%D8%A7%D9%86-%D8%A7%D9%84%D9%83%D8%B1%D9%8A%D9%85-%D9%85%D9%86-%D8%A7%D9%84%D8%A8%D8%AD%D8%B1%D9%8A%D9%86-%D8%A8%D8%AB-%D9%85%D8%A8%D8%A7%D8%B4%D8%B1.jpg",url:"https://5c7b683162943.streamlock.net/live/ngrp:radio-106-1_all/playlist.m3u8",country:"البحرين",genre:"القرآن الكريم"},
{name:"إذاعة القرآن الكريم البحرين 2",logo:"https://radio.qassimy.com/wp-content/uploads/2023/03/%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D9%85%D8%A7%D8%B9-%D8%A7%D9%84%D9%89-%D9%85%D8%AD%D8%B7%D8%A9-%D8%B1%D8%A7%D8%AF%D9%8A%D9%88-%D8%A5%D8%B0%D8%A7%D8%B9%D8%A9-%D8%A7%D9%84%D9%82%D8%B1%D8%A7%D9%86-%D8%A7%D9%84%D9%83%D8%B1%D9%8A%D9%85-%D9%85%D9%86-%D8%A7%D9%84%D8%A8%D8%AD%D8%B1%D9%8A%D9%86-%D8%A8%D8%AB-%D9%85%D8%A8%D8%A7%D8%B4%D8%B1.jpg",url:"https://5c7b683162943.streamlock.net/live/ngrp:radio-106-1_all/chunklist_w834832562_b981072.m3u8",country:"البحرين",genre:"القرآن الكريم"},
{name:" إذاعة أعزام نتمجيدا",logo:"https://zeno.fm/_ipx/q_85&fit_cover&s_144x144/https://images.zeno.fm/XNext2TrjkRCr4p8Pe1Neaq4AccG2gSzqd7zYXs4aao/rs:fill:288:288/g:ce:0:0/aHR0cHM6Ly9wcm94eS56ZW5vLmZtL2NvbnRlbnQvc3RhdGlvbnMvNThlNjQzNmEtNDQxNC00MGRmLWJkNmMtODkxNzRkMzU4YTFlL2ltYWdlLz91PTE3MTY3Nzg2ODkwMDA.webp",url:"https://stream-154.zeno.fm/ikufqvyc5ynuv?",country:"الجزائر",genre:"القرآن الكريم"},
{name:"إذاعة إستقم كما أمرت القرآن الكريم",logo:"https://zeno.fm/_ipx/q_85&fit_cover&s_144x144/https://images.zeno.fm/zxUTelo-5jfINpKAmeYStQIKDwtGYttcmLRuwgrsrX0/rs:fill:288:288/g:ce:0:0/aHR0cHM6Ly9wcm94eS56ZW5vLmZtL2NvbnRlbnQvc3RhdGlvbnMvYWd4emZucGxibTh0YzNSaGRITnlNZ3NTQ2tGMWRHaERiR2xsYm5RWWdJRFE2LXpPelFvTUN4SU9VM1JoZEdsdmJsQnliMlpwYkdVWWdJRFFpLUtZbndrTW9nRUVlbVZ1YncvaW1hZ2UvP3U9MTY2MTU0ODkyMzAwMA.webp",url:"https://stream-172.zeno.fm/n0ndh8n5sk8uv?",country:"الجزائر",genre:"القرآن الكريم"},
{name:"إذاعة القرآن الكريم الجزائر",logo:"https://zeno.fm/_ipx/q_85&fit_cover&s_144x144/https://images.zeno.fm/7uX0XvD0oCULSog0QmadybVxdw2fUnzPFlAnZZKT2XA/rs:fill:288:288/g:ce:0:0/aHR0cHM6Ly9wcm94eS56ZW5vLmZtL2NvbnRlbnQvc3RhdGlvbnMvYWd4emZucGxibTh0YzNSaGRITnlNZ3NTQ2tGMWRHaERiR2xsYm5RWWdJQ0lqTWkzNUFzTUN4SU9VM1JoZEdsdmJsQnliMlpwYkdVWWdJQ0k5TVh3ekFvTW9nRUVlbVZ1YncvaW1hZ2UvP3U9MTY2MDkzOTA0MTAwMA.webp",url:"https://stream-175.zeno.fm/qn2sz1v67ehvv?",country:"الجزائر",genre:"القرآن الكريم"},
{name:" إذاعة القرآن من السعودية",logo:"https://th.bing.com/th/id/R.1136e3c775f4d3ce1c3ed05db5556105?rik=mfeG2e2v%2fZOpgg&pid=ImgRaw&r=0",url:"http://n10.radiojar.com/0tpy1h0kxtzuv?rj-ttl=5&rj-tok=AAABlInAFxEAyulr4LRfR6CZpw",country:"السعودية",genre:"القرآن الكريم"},
{name:"إذاعة الألوكة  القرآن الكريم",logo:"https://guidetodawah.com/media/326155791-1207628506549020-3292065372911974208-n1797_showWebsiteThumb.png",url:"https://radio.alukah.net/quran",country:"السعودية",genre:"القرآن الكريم"},
{name:"إذاعة القرآن الكريم السعودية",logo:"https://cdn.raddio.net/storage/photos/22812/30e3799ea830e9dc665423a74b87a64f_100x100.webp",url:"https://n0a.radiojar.com/0tpy1h0kxtzuv?rj-ttl=5&rj-tok=AAABlIUT7SoABh3fInviJYsZ4Q",country:"السعودية",genre:"القرآن الكريم"},
{name:"إذاعة المجد للقرآن الكريم",logo:"https://yt3.ggpht.com/a-/AAuE7mBiBWv1qaRIR2VNm4FKRfTu6h2_Vu9mPV0idQ=s900-mo-c-c0xffffffff-rj-k-no",url:"http://r1.tarat.com:8196/stream?type=http&nocache=31",country:"السعودية",genre:"القرآن الكريم"},
{name:"إذاعة تراتيل قصيرة متميزة",logo:"https://dvw7f7sqjk3ag.cloudfront.net/images/radio/63243.jpg",url:"https://backup.qurango.net/radio/tarateel",country:"السعودية",genre:"القرآن الكريم"},
{name:"الإذاعة العامة  اذاعة متنوعة لمختلف القراء",logo:"https://r4bia-browser.weebly.com/uploads/2/5/0/9/25098898/_7618604.png",url:"https://backup.qurango.net/radio/mix",country:"السعودية",genre:"القرآن الكريم"},
{name:"النهج الواضح: الإذاعة الثانية",logo:"https://alqol.com/wp-content/uploads/2017/07/%D8%A5%D8%B0%D8%A7%D8%B9%D8%A9-%D8%A7%D9%84%D9%86%D9%87%D8%AC-%D8%A7%D9%84%D9%88%D8%A7%D8%B6%D8%AD.jpg",url:"https://node33.obviousapproach.com:9001/stream",country:"السعودية",genre:"القرآن الكريم"},
{name:"إذاعة القرآن إفريقيا 1",logo:"https://zeno.fm/_ipx/q_85&fit_cover&s_144x144/https://images.zeno.fm/T7c9br4BStfIt4uT97iJnBLWK2D2YXpYJBqNQieFg5U/rs:fill:288:288/g:ce:0:0/aHR0cHM6Ly9wcm94eS56ZW5vLmZtL2NvbnRlbnQvc3RhdGlvbnMvYWd4emZucGxibTh0YzNSaGRITnlNZ3NTQ2tGMWRHaERiR2xsYm5RWWdJRGdtYktVNXdrTUN4SU9VM1JoZEdsdmJsQnliMlpwYkdVWWdJRFF4YTZUeGdnTW9nRUVlbVZ1YncvaW1hZ2UvP3U9MTY4MTA5MjM3MzAwMA.webp",url:"https://stream-157.zeno.fm/hnp45knerm0uv?",country:"السنغال",genre:"القرآن الكريم"},
{name:"إذاعة القرآن إفريقيا 2",logo:"https://static-media.streema.com/media/cache/bd/90/bd907d17f7374c54a0569476546d647d.jpg",url:"https://stream-158.zeno.fm/s4t0zknerm0uv?",country:"السينغال",genre:"القرآن الكريم"},
{name:"إذاعة القرآن الكريم الكويت",logo:"https://cdn.raddio.net/storage/photos/380269/ba77dcfec14362330aa27ed747ba9bf1_100x100.webp",url:"https://radio.mp3islam.com/listen/quran_radio/radio.mp3",country:"الكويت",genre:"القرآن الكريم"},
{name:"إذاعة سلام إف إم",logo:"https://zeno.fm/_ipx/q_85&fit_cover&s_144x144/https://images.zeno.fm/5e00UQdxUy-PhLJCcwb-UaqaSPzE3Lhu4GMQJG6Dwd0/rs:fill:288:288/g:ce:0:0/aHR0cHM6Ly9wcm94eS56ZW5vLmZtL2NvbnRlbnQvc3RhdGlvbnMvYWd4emZucGxibTh0YzNSaGRITnlNZ3NTQ2tGMWRHaERiR2xsYm5RWWdJRFE1ZWV3bUFnTUN4SU9VM1JoZEdsdmJsQnliMlpwYkdVWWdJREl0TTJZcVFrTW9nRUVlbVZ1YncvaW1hZ2UvP3U9MTY4MzgwNzY1NzAwMA.webp",url:"https://stream-161.zeno.fm/hv3uuw9avuhvv?",country:"الكويت",genre:"القرآن الكريم"},
{name:"إذاعة مشاري العفاسي",logo:"https://misharialafasy.net/wp-content/uploads/2014/09/Untitled-3-01.jpg",url:"https://stream-176.zeno.fm/grefmg97xnhvv?",country:"الكويت",genre:"القرآن الكريم"},
{name:"إذاعة القرآن الكريم الدار البيضاء",logo:"https://zeno.fm/_ipx/q_85&fit_cover&s_144x144/https://images.zeno.fm/VP2zY6_Koun8lXCM9RsCDdgrqGEgpU3lVVYSj_pKEUc/rs:fill:288:288/g:ce:0:0/aHR0cHM6Ly9wcm94eS56ZW5vLmZtL2NvbnRlbnQvc3RhdGlvbnMvYWJhMWFiNDUtMWRhMC00NWRhLWI2OWYtMzU4MjZmYTEzOTVmL2ltYWdlLz91PTE2Njc4NDgyODQwMDA.webp",url:"https://stream-154.zeno.fm/oobq2gpmaqmuv?",country:"المغرب",genre:"القرآن الكريم"},
{name:"إذاعة القرآن الكريم المغرب",logo:"https://zeno.fm/_ipx/q_85&fit_cover&s_144x144/https://images.zeno.fm/z1qZ5rMQ5j0r9HuLLXrm9vm53WbjHnAmkJvFz0xwCxw/rs:fill:288:288/g:ce:0:0/aHR0cHM6Ly9wcm94eS56ZW5vLmZtL2NvbnRlbnQvc3RhdGlvbnMvYWd4emZucGxibTh0YzNSaGRITnlNZ3NTQ2tGMWRHaERiR2xsYm5RWWdJRFEwdXp3MUFnTUN4SU9VM1JoZEdsdmJsQnliMlpwYkdVWWdJRFFzc1REdmdvTW9nRUVlbVZ1YncvaW1hZ2UvP3U9MTY2MTY4OTkxODAwMA.webp",url:"https://stream-175.zeno.fm/qsnwpd2mpd0uv?",country:"المغرب",genre:"القرآن الكريم"},
{name:"إذاعة لاستماع القرآن الكريم",logo:"https://cdn.onlineradiobox.com/img/l/2/20862.v14.png",url:"https://virmach2.hajjam.net/index.html",country:"المغرب",genre:"القرآن الكريم"},
{name:"إذاعة القرآن الأجوري",logo:"https://cdn-radiotime-logos.tunein.com/s294958g.png",url:"http://live.mp3quran.net:9846/;",country:"الولايات الأمريكية المتحدة",genre:"القرآن الكريم"},
{name:"إذاعةالقرآن الكريم  الولايات الأمريكية المتحدة",logo:"https://cdn.raddio.net/storage/photos/113725/dcd8b775e39d8cd369a11197767f442f_80x80.webp",url:"http://66.45.232.131:9994//;",country:"الولايات الأمريكية المتحدة",genre:"القرآن الكريم"},
{name:"إذاعة القرآن الكريم تونس",logo:"https://cdn.raddio.net/storage/photos/375662/1bccea562ac5c9dfaa4758c39846aeef_100x100.webp",url:"http://5.135.194.225:8000/live",country:"تونس",genre:"القرآن الكريم"},
{name:" إذاعة القرآن الكريم",logo:"https://zeno.fm/_ipx/q_85&fit_cover&s_144x144/https://images.zeno.fm/hI3yTT_S8EQQJqS6nGir2F3d9kZq7ITu6cd6pVurNSU/rs:fill:288:288/g:ce:0:0/aHR0cHM6Ly9wcm94eS56ZW5vLmZtL2NvbnRlbnQvc3RhdGlvbnMvYWd4emZucGxibTh0YzNSaGRITnlNZ3NTQ2tGMWRHaERiR2xsYm5RWWdJRHc0TEtuendrTUN4SU9VM1JoZEdsdmJsQnliMlpwYkdVWWdJRHdrT0RBNEFzTW9nRUVlbVZ1YncvaW1hZ2UvP3U9MTY2MTIzNjA5OTAwMA.webp",url:"https://stream-176.zeno.fm/8wvhe3k8u68uv?",country:"دولية",genre:"القرآن الكريم"},
{name:"إذاعة البيان القرآن",logo:"https://zeno.fm/_ipx/q_85&fit_cover&s_144x144/https://images.zeno.fm/siqeqvUq9bjtaMGjgErBPaI-tbueBsmY97KgIkub5pY/rs:fill:288:288/g:ce:0:0/aHR0cHM6Ly9wcm94eS56ZW5vLmZtL2NvbnRlbnQvc3RhdGlvbnMvYWd4emZucGxibTh0YzNSaGRITnlNZ3NTQ2tGMWRHaERiR2xsYm5RWWdJRGd4WS1zMFFrTUN4SU9VM1JoZEdsdmJsQnliMlpwYkdVWWdJRHd4NnpfcXdzTW9nRUVlbVZ1YncvaW1hZ2UvP3U9MTY2MDg1NjA1MDAwMA.webp",url:"https://stream-141.zeno.fm/tx9re2n01f9uv?",country:"ساحل العاج",genre:"القرآن الكريم"},
{name:"إذاعة عمان للقرآن الكريم",logo:"https://zeno.fm/_ipx/q_85&fit_cover&s_144x144/https://images.zeno.fm/2Le2xT1HKvOQNDWHRc74_d_f2jSU4zG5kpVjgH-bSxQ/rs:fill:288:288/g:ce:0:0/aHR0cHM6Ly9wcm94eS56ZW5vLmZtL2NvbnRlbnQvc3RhdGlvbnMvNmU5NTJjZGMtNDJmYS00NjQ5LTkwYTItZDZmMmViZmNhMTNmL2ltYWdlLz91PTE3MzM5MjcxMzQwMDA.webp",url:"https://partrdo.mangomolo.com/omanrdo.mp3?",country:"سلطنة عمان",genre:"القرآن الكريم"},
{name:"إذاعة القرآن الكريم  فلسطين بث حي",logo:"https://zeno.fm/_ipx/q_85&fit_cover&s_144x144/https://images.zeno.fm/sPJHL97zhQP1KIyloGQ-rcl5VSMV574jsGdNtAoYK1E/rs:fill:288:288/g:ce:0:0/aHR0cHM6Ly9wcm94eS56ZW5vLmZtL2NvbnRlbnQvc3RhdGlvbnMvMjc4MGM1MTYtNTUwNS00ZWViLWJmNjEtYTMxNDA5MTMwYmVkL2ltYWdlLz91PTE3MTM5NjQ5OTYwMDA.webp",url:"https://sawtelghad.org:7001/;?",country:"فلسطين",genre:"القرآن الكريم"},
{name:"إذاعة القرآن الكريم فلسطين",logo:"https://cdn.raddio.net/storage/photos/9822/04e42510e5936f0547875877da921ae7_100x100.webp",url:"http://www.quran-radio.org:8002//;",country:"فلسطين",genre:"القرآن الكريم"},
{name:"إذاعة القرأن الكريم قطر 1",logo:"https://zeno.fm/_ipx/q_85&fit_cover&s_144x144/https://images.zeno.fm/SteB6SRuvi1DMWYSICQ0nIUfOYPgUNIHFgwzSowDe-4/rs:fill:288:288/g:ce:0:0/aHR0cHM6Ly9wcm94eS56ZW5vLmZtL2NvbnRlbnQvc3RhdGlvbnMvNDNiNjU5NDAtYzZiMi00NjMzLTgzOTUtMzRmY2YyOGQ4MDk1L2ltYWdlLz91PTE3MTM5NjQ5OTYwMDA.webp",url:"https://65ec766567528.streamlock.net/QURAN2/myStream/chunklist_w1864054074.m3u8",country:"قطر",genre:"القرآن الكريم"},
{name:"إذاعة القرآن الكريم قطر 1",logo:"https://cdn.raddio.net/storage/photos/375413/ecd119f446291ef0200da50447d27d5d_100x100.webp",url:"https://65ec766567528.streamlock.net/QURAN/myStream/chunklist_w1010923241.m3u8",country:"قطر",genre:"القرآن الكريم"},
{name:"إذاعة القرأن الكريم قطر 2",logo:"https://zeno.fm/_ipx/q_85&fit_cover&s_144x144/https://images.zeno.fm/SteB6SRuvi1DMWYSICQ0nIUfOYPgUNIHFgwzSowDe-4/rs:fill:288:288/g:ce:0:0/aHR0cHM6Ly9wcm94eS56ZW5vLmZtL2NvbnRlbnQvc3RhdGlvbnMvNDNiNjU5NDAtYzZiMi00NjMzLTgzOTUtMzRmY2YyOGQ4MDk1L2ltYWdlLz91PTE3MTM5NjQ5OTYwMDA.webp",url:"https://65ec766567528.streamlock.net/QURAN/myStream/chunklist_w758365308.m3u8",country:"قطر",genre:"القرآن الكريم"},
{name:"إذاعة القرآن الكريم قطر 2",logo:"https://cdn.raddio.net/storage/photos/375413/ecd119f446291ef0200da50447d27d5d_100x100.webp",url:"https://65ec766567528.streamlock.net/QURAN2/myStream/chunklist_w888570587.m3u8",country:"قطر",genre:"القرآن الكريم"},
{name:"إذاعة تلاوة القرآن الكريم قطر",logo:"https://zeno.fm/_ipx/q_85&fit_cover&s_144x144/https://images.zeno.fm/CYCF-3OykhZuiaQ6HYH7LT05dvto02ztFcQqzEQwPRU/rs:fill:288:288/g:ce:0:0/aHR0cHM6Ly9wcm94eS56ZW5vLmZtL2NvbnRlbnQvc3RhdGlvbnMvYWd4emZucGxibTh0YzNSaGRITnlNZ3NTQ2tGMWRHaERiR2xsYm5RWWdJQ0k1djJOakFrTUN4SU9VM1JoZEdsdmJsQnliMlpwYkdVWWdJQ0lwbzdONFFrTW9nRUVlbVZ1YncvaW1hZ2UvP3U9MTY2MTI3MDgwMTAwMA.webp",url:"https://stream-175.zeno.fm/gfwesn7k0hhvv?",country:"قطر",genre:"القرآن الكريم"},
{name:"إذاعة عبد الرشيد صوفي",logo:"https://www.aljazeera.net/wp-content/uploads/2014/09/109100c6-6f8c-41d0-abaa-88e2735d3254.jpeg?resize=686%2C513&quality=80",url:"https://stream-172.zeno.fm/20g99z87xnhvv?",country:"قطر",genre:"القرآن الكريم"},
{name:"إذاعة القرآن كندا",logo:"https://static2.mytuner.mobi/media/tvos_radios/htmgrWDCDQ.png",url:"http://173.179.135.233:21002/;",country:"كندا",genre:"القرآن الكريم"},
{name:"إذاعة الكنوز الأثرية",logo:"https://zeno.fm/_ipx/q_85&fit_cover&s_144x144/https://images.zeno.fm/nZVzi_HhAV36lXo6N--KjRaCriVHIVL_MPjBw2aIBkw/rs:fill:288:288/g:ce:0:0/aHR0cHM6Ly9wcm94eS56ZW5vLmZtL2NvbnRlbnQvc3RhdGlvbnMvYWd4emZucGxibTh0YzNSaGRITnlNZ3NTQ2tGMWRHaERiR2xsYm5RWWdJQ0lxYVhjNlFrTUN4SU9VM1JoZEdsdmJsQnliMlpwYkdVWWdJQ0lxZnkyNGdrTW9nRUVlbVZ1YncvaW1hZ2UvP3U9MTY3NDU5NzcyMzAwMA.webp",url:"https://stream-172.zeno.fm/72q3t9umnkhvv?",country:"ليبيا",genre:"القرآن الكريم"},
{name:"إذاعة المنير للقرآن الكريم",logo:"https://zeno.fm/_ipx/q_85&fit_cover&s_144x144/https://images.zeno.fm/xh7COngQkIQPdKmVFxFCVPSTFBvMpi71jlJswv9FkIs/rs:fill:288:288/g:ce:0:0/aHR0cHM6Ly9wcm94eS56ZW5vLmZtL2NvbnRlbnQvc3RhdGlvbnMvMDI4M2VhZDQtYWUxZi00YTRlLTkwNDMtZTgyNjI3NDE2YjEwL2ltYWdlLz91PTE3MzQ0MjczMTgwMDA.webp",url:"https://live.dofm.ly/proxy/almunir/stream?",country:"ليبيا",genre:"القرآن الكريم"},
{name:"إذاعة سبراتا للقرآن الكريم",logo:"https://zeno.fm/_ipx/q_85&fit_cover&s_144x144/https://images.zeno.fm/P4BuweYGsBsrwhlHPChKyAQpit31_KfCJRr-cEv3Le4/rs:fill:288:288/g:ce:0:0/aHR0cHM6Ly9wcm94eS56ZW5vLmZtL2NvbnRlbnQvc3RhdGlvbnMvYWd4emZucGxibTh0YzNSaGRITnlNZ3NTQ2tGMWRHaERiR2xsYm5RWWdJRFE3Nml4alFrTUN4SU9VM1JoZEdsdmJsQnliMlpwYkdVWWdJRFE3NUgzblFzTW9nRUVlbVZ1YncvaW1hZ2UvP3U9MTY2MTY0ODIyNTAwMA.webp",url:"https://stream-172.zeno.fm/qcvd55b6mp8uv?",country:"ليبيا",genre:"القرآن الكريم"},
{name:"إذاعة قمم الأندلس",logo:"https://zeno.fm/_ipx/q_85&fit_cover&s_144x144/https://images.zeno.fm/9pdag7FwmpNzprvjfaFDun4Zv-Jh7JvreQSAATxnhVI/rs:fill:288:288/g:ce:0:0/aHR0cHM6Ly9wcm94eS56ZW5vLmZtL2NvbnRlbnQvc3RhdGlvbnMvMDI3MDI1NWMtMTg4NS00NjU2LTk1Y2UtZTE0OTJhZWFlZmM4L2ltYWdlLz91PTE2NzcwMDE0NDAwMDA.webp",url:"https://stream-176.zeno.fm/wbdjmmiuj37uv?",country:"ليبيا",genre:"القرآن الكريم"},
{name:"إذاعةالزوراء للقرآن الكريم",logo:"https://zeno.fm/_ipx/q_85&fit_cover&s_144x144/https://images.zeno.fm/iJsBVc4eDgxoKD_-j_HLrEIQWF8GkapZlOLVYLs0fEk/rs:fill:288:288/g:ce:0:0/aHR0cHM6Ly9wcm94eS56ZW5vLmZtL2NvbnRlbnQvc3RhdGlvbnMvYWd4emZucGxibTh0YzNSaGRITnlNZ3NTQ2tGMWRHaERiR2xsYm5RWWdJRFFfcVc1bEFrTUN4SU9VM1JoZEdsdmJsQnliMlpwYkdVWWdJRFE3c2ZqZ3drTW9nRUVlbVZ1YncvaW1hZ2UvP3U9MTY4ODM0NzE4MTAwMA.webp",url:"https://stream-156.zeno.fm/fqzfedwpsg0uv?",country:"ليبيا",genre:"القرآن الكريم"},
{name:" إذاعة القرآن من القاهرة",logo:"https://play-lh.googleusercontent.com/QuVFM8a1DJFaLb3M0iHjgylkrS0ddvpBzDSHOGxs7YzqAFIHeXJwZ53aX7SaMImmA30",url:"http://n05.radiojar.com/8s5u5tpdtwzuv?rj-ttl=5&rj-tok=AAABlInC6HAAzwqwOD4tz1bo-Q",country:"مصر",genre:"القرآن الكريم"},
{name:"إذاعة  القران الكريم بث مباشر من القاهرة",logo:"https://cdn.onlineradiobox.com/img/l/0/124000.v3.png",url:"https://stream-164.zeno.fm/ru2hqnplhk7uv?",country:"مصر",genre:"القرآن الكريم"},
{name:"إذاعة إبراهيم الشعشاعي",logo:"https://zeno.fm/_ipx/q_85&fit_cover&s_144x144/https://images.zeno.fm/LutC_TT39wQChtn3IV3Jk2-zb0q_0CESg7e__CbA67M/rs:fill:288:288/g:ce:0:0/aHR0cHM6Ly9wcm94eS56ZW5vLmZtL2NvbnRlbnQvc3RhdGlvbnMvYWd4emZucGxibTh0YzNSaGRITnlNZ3NTQ2tGMWRHaERiR2xsYm5RWWdJRFFuZkhXamdnTUN4SU9VM1JoZEdsdmJsQnliMlpwYkdVWWdJRFF3LURReHdnTW9nRUVlbVZ1YncvaW1hZ2UvP3U9MTY2MTIwODQ3MjAwMA.webp",url:"https://stream-173.zeno.fm/9gz0gerpdg8uv?",country:"مصر",genre:"القرآن الكريم"},
{name:"إذاعة أبو العنين شعيشع",logo:"https://upload.wikimedia.org/wikipedia/ar/c/c9/%D8%B5%D9%88%D8%B1%D8%A9_%D8%B4%D8%AE%D8%B5%D9%8A%D8%A9_%D8%A3%D8%A8%D9%88_%D8%A7%D9%84%D8%B9%D9%8A%D9%86%D9%8A%D9%86_%D8%B4%D8%B9%D9%8A%D8%B4%D8%B9.jpg",url:"https://stream-159.zeno.fm/b5ys6zc0pnhvv?",country:"مصر",genre:"القرآن الكريم"},
{name:"إذاعة أحمد نعينع",logo:"https://zeno.fm/_ipx/q_85&fit_cover&s_144x144/https://images.zeno.fm/Lvtiw2N991dfXny4_EH5SnDPG_GMZ07IzhClXFgtR1g/rs:fill:288:288/g:ce:0:0/aHR0cHM6Ly9wcm94eS56ZW5vLmZtL2NvbnRlbnQvc3RhdGlvbnMvYWd4emZucGxibTh0YzNSaGRITnlNZ3NTQ2tGMWRHaERiR2xsYm5RWWdJRFFuZkhXamdnTUN4SU9VM1JoZEdsdmJsQnliMlpwYkdVWWdJRFF2YzJkcEFnTW9nRUVlbVZ1YncvaW1hZ2UvP3U9MTY2MTU0NjkzODAwMA.webp",url:"https://stream-175.zeno.fm/vq1gvyn29f8uv?",country:"مصر",genre:"القرآن الكريم"},
{name:"إذاعة إسلام صبحى",logo:"https://zeno.fm/_ipx/q_85&fit_cover&s_144x144/https://images.zeno.fm/wujqBziElLtonE9aUD6ku9ItxNfWtnejwQ2V4s5tXsY/rs:fill:288:288/g:ce:0:0/aHR0cHM6Ly9wcm94eS56ZW5vLmZtL2NvbnRlbnQvc3RhdGlvbnMvNjA1Mzk3MDktMGIzYS00NWFiLWIwNWQtYjc3MDM2OTU0MzgyL2ltYWdlLz91PTE3MzA1ODQ4MzgwMDA.webp",url:"https://stream-173.zeno.fm/zorvpgdqfzbuv?",country:"مصر",genre:"القرآن الكريم"},
{name:"إذاعة الشحات أنور",logo:"https://zeno.fm/_ipx/q_85&fit_cover&s_144x144/https://images.zeno.fm/tV1S7jV_8N3Eku4vudnJzzxVgHtrzlyCzonZd5R6J94/rs:fill:288:288/g:ce:0:0/aHR0cHM6Ly9wcm94eS56ZW5vLmZtL2NvbnRlbnQvc3RhdGlvbnMvYWd4emZucGxibTh0YzNSaGRITnlNZ3NTQ2tGMWRHaERiR2xsYm5RWWdJQ1E5YTZXNGdnTUN4SU9VM1JoZEdsdmJsQnliMlpwYkdVWWdJQ3c1TzZwM3drTW9nRUVlbVZ1YncvaW1hZ2UvP3U9MTY2MTY5MDg5NzAwMA.webp",url:"https://stream-153.zeno.fm/e9qc4f44qs8uv?",country:"مصر",genre:"القرآن الكريم"},
{name:"إذاعة الشحات محمد أنور",logo:"https://upload.wikimedia.org/wikipedia/ar/4/43/%D8%A7%D9%84%D8%B4%D8%AD%D8%A7%D8%AA_%D9%85%D8%AD%D9%85%D8%AF_%D8%A3%D9%86%D9%88%D8%B1.jpg",url:"https://stream-176.zeno.fm/0rd7d5c0pnhvv?",country:"مصر",genre:"القرآن الكريم"},
{name:"إذاعة الشيخ أبو العينين",logo:"https://zeno.fm/_ipx/q_85&fit_cover&s_144x144/https://images.zeno.fm/MBM4Y22CxhACJdXM2ZbetFyjAKUvzqztmQ9XDia-Q9Y/rs:fill:288:288/g:ce:0:0/aHR0cHM6Ly9wcm94eS56ZW5vLmZtL2NvbnRlbnQvc3RhdGlvbnMvYWd4emZucGxibTh0YzNSaGRITnlNZ3NTQ2tGMWRHaERiR2xsYm5RWWdJRFFuZkhXamdnTUN4SU9VM1JoZEdsdmJsQnliMlpwYkdVWWdJRFFsWUdKdUFzTW9nRUVlbVZ1YncvaW1hZ2UvP3U9MTY2MTUzNjg3MTAwMA.webp",url:"https://stream-154.zeno.fm/wy5z2hb78f8uv?",country:"مصر",genre:"القرآن الكريم"},
{name:"إذاعة الشيخ ضاحى المراغي",logo:"https://zeno.fm/_ipx/q_85&fit_cover&s_144x144/https://images.zeno.fm/heKMi6lVeExcwHay0Lv46Zv4SLkZiSiQioc75IAlcPs/rs:fill:288:288/g:ce:0:0/aHR0cHM6Ly9wcm94eS56ZW5vLmZtL2NvbnRlbnQvc3RhdGlvbnMvYWd4emZucGxibTh0YzNSaGRITnlNZ3NTQ2tGMWRHaERiR2xsYm5RWWdJQ1E5YTZXNGdnTUN4SU9VM1JoZEdsdmJsQnliMlpwYkdVWWdJQ3dwTV9rdVFrTW9nRUVlbVZ1YncvaW1hZ2UvP3U9MTY2MTYyMjk4NDAwMA.webp",url:"https://stream-172.zeno.fm/wp4m7234qs8uv?",country:"مصر",genre:"القرآن الكريم"},
{name:"اذاعة الشيخ محمود خليل الحصري",logo:"https://zeno.fm/_ipx/q_85&fit_cover&s_64x64/https://images.zeno.fm/FMmoi7Z3azE0tjlup8S7jAa5Py-bMH3elA8sei8W4UM/rs:fill:288:288/g:ce:0:0/aHR0cHM6Ly9wcm94eS56ZW5vLmZtL2NvbnRlbnQvc3RhdGlvbnMvYWd4emZucGxibTh0YzNSaGRITnlNZ3NTQ2tGMWRHaERiR2xsYm5RWWdJQ3dzTDI4aVFnTUN4SU9VM1JoZEdsdmJsQnliMlpwYkdVWWdJRHc2b1AzalFvTW9nRUVlbVZ1YncvaW1hZ2UvP3U9MTY2MTY1NDg2MDAwMA.webp",url:"https://stream-172.zeno.fm/vsfa9n4g698uv?",country:"مصر",genre:"القرآن الكريم"},
{name:"إذاعة القرآن الكريم القليوبية",logo:"https://zeno.fm/_ipx/q_85&fit_cover&s_144x144/https://images.zeno.fm/gfC776KoU5hSPAfcTAAGos0WG_4p1qWEO1viE8rpRvc/rs:fill:288:288/g:ce:0:0/aHR0cHM6Ly9wcm94eS56ZW5vLmZtL2NvbnRlbnQvc3RhdGlvbnMvYWd4emZucGxibTh0YzNSaGRITnlNZ3NTQ2tGMWRHaERiR2xsYm5RWWdJQ1FycmZMaUFnTUN4SU9VM1JoZEdsdmJsQnliMlpwYkdVWWdJQ1Fqb09SMEFvTW9nRUVlbVZ1YncvaW1hZ2UvP3U9MTY2MTcwNzUzMjAwMA.webp",url:"https://stream-172.zeno.fm/05avw76t01zuv?",country:"مصر",genre:"القرآن الكريم"},
{name:"إذاعة القرآن الكريم مصر",logo:"https://static2.mytuner.mobi/media/tvos_radios/APTGXzujpV.png",url:"http://66.45.232.131:9994/;stream.mp3",country:"مصر",genre:"القرآن الكريم"},
{name:"اذاعة القران الكريم من القاهرة بث مباشر",logo:"https://zeno.fm/_ipx/q_85&fit_cover&s_144x144/https://images.zeno.fm/4ScSVmNdBtUkn1ti4UcP0H73-BzipdkExO3MaiKBYZk/rs:fill:288:288/g:ce:0:0/aHR0cHM6Ly9wcm94eS56ZW5vLmZtL2NvbnRlbnQvc3RhdGlvbnMvYWd4emZucGxibTh0YzNSaGRITnlNZ3NTQ2tGMWRHaERiR2xsYm5RWWdJRHdudTNTX3dnTUN4SU9VM1JoZEdsdmJsQnliMlpwYkdVWWdJRHc4ZEctOVFvTW9nRUVlbVZ1YncvaW1hZ2UvP3U9MTY2NjQyNTA1MDAwMA.webp",url:"https://stream-161.zeno.fm/tv0x28xvyc9uv?",country:"مصر",genre:"القرآن الكريم"},
{name:"اذاعة القران الكريم من المنصورة",logo:"https://zeno.fm/_ipx/q_85&fit_cover&s_144x144/https://images.zeno.fm/XZPPcTaJgwVB0JAbIz_oAZa7KXk_D7f3vdS1VgUYJcQ/rs:fill:288:288/g:ce:0:0/aHR0cHM6Ly9wcm94eS56ZW5vLmZtL2NvbnRlbnQvc3RhdGlvbnMvYWRhYzA2ZTgtZDY3Zi00ODlhLThmOWUtNDk4NDAyODYzYzExL2ltYWdlLz91PTE3MzA5MjY2OTEwMDA.webp",url:"https://stream-173.zeno.fm/awkn71iarz0vv?",country:"مصر",genre:"القرآن الكريم"},
{name:"إذاعة القرآن للروح",logo:"https://zeno.fm/_ipx/q_85&fit_cover&s_144x144/https://images.zeno.fm/MKjoMsg7y2tKx4BL9aoh_7RY86kAHGERRsH4n0zbiNE/rs:fill:288:288/g:ce:0:0/aHR0cHM6Ly9wcm94eS56ZW5vLmZtL2NvbnRlbnQvc3RhdGlvbnMvNDIxMmYxM2YtODU2Ny00NWIyLTk2NGUtM2VhMzVkNzRlNzNkL2ltYWdlLz91PTE3MTM5NjQ5OTYwMDA.webp",url:"https://edge.mixlr.com/channel/rwumx?",country:"مصر",genre:"القرآن الكريم"},
{name:"إذاعة المنشاوي",logo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbsDjmdPhUfF69-TAVs38vLv5GOglxkdukZw&s",url:"https://stream-154.zeno.fm/kmfpx4k0pnhvv?",country:"مصر",genre:"القرآن الكريم"},
{name:"إذاعة جامع التراث الديني الرسمية",logo:"https://zeno.fm/_ipx/q_85&fit_cover&s_64x64/https://images.zeno.fm/2_LJfa7LGVHj0tzQ_azpcrtYornOiiCPlCrNwq33_hM/rs:fill:288:288/g:ce:0:0/aHR0cHM6Ly9wcm94eS56ZW5vLmZtL2NvbnRlbnQvc3RhdGlvbnMvNTgwNjJlNGQtZDc2NC00OGU5LWFjMzQtMWJmNzNiZjZiMjUwL2ltYWdlLz91PTE2OTE3ODUyMTQwMDA.webp",url:"https://stream-173.zeno.fm/lp77rhi3gkctv?",country:"مصر",genre:"القرآن الكريم"},
{name:"إذاعة حجاج هنداوي",logo:"https://zeno.fm/_ipx/q_85&fit_cover&s_144x144/https://images.zeno.fm/LpfSx62YLlCsRI26h5t59njPRFRr66KC6W-dv-MWMlc/rs:fill:288:288/g:ce:0:0/aHR0cHM6Ly9wcm94eS56ZW5vLmZtL2NvbnRlbnQvc3RhdGlvbnMvYWd4emZucGxibTh0YzNSaGRITnlNZ3NTQ2tGMWRHaERiR2xsYm5RWWdJRFFuZkhXamdnTUN4SU9VM1JoZEdsdmJsQnliMlpwYkdVWWdJRFF2ZVRqNVFvTW9nRUVlbVZ1YncvaW1hZ2UvP3U9MTY2MTU4NTc1ODAwMA.webp",url:"https://stream-154.zeno.fm/4xh42ad0ag8uv?",country:"مصر",genre:"القرآن الكريم"},
{name:"إذاعة روائع التلاوات",logo:"https://zeno.fm/_ipx/q_85&fit_cover&s_144x144/https://images.zeno.fm/8YKmPjI_IRvWRuaxY8KR8knCi_fXfy_QijPeKTXhgBs/rs:fill:288:288/g:ce:0:0/aHR0cHM6Ly9wcm94eS56ZW5vLmZtL2NvbnRlbnQvc3RhdGlvbnMvMzVjMjUzMmEtMWVmZS00OGZkLWIyMjItYmQ0NDY0YTI4ODgzL2ltYWdlLz91PTE3MzA5MjczMTIwMDA.webp",url:"https://stream-153.zeno.fm/bg2j1n5ntltuv?",country:"مصر",genre:"القرآن الكريم"},
{name:"إذاعة سيد سعيد",logo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmzixPwHXmvKEX0lr2iaG3bpRKsKaMhWb7kA&s",url:"https://stream-174.zeno.fm/80181bd0pnhvv?",country:"مصر",genre:"القرآن الكريم"},
{name:"إذاعة شعبان الصياد",logo:"https://i1.sndcdn.com/artworks-PD4NE3Q2D8wirW75-U8ZwwA-t500x500.jpg",url:"https://stream-173.zeno.fm/rdtyred0pnhvv?",country:"مصر",genre:"القرآن الكريم"},
{name:"إذاعة طه الفشني",logo:"https://cdn.elwatannews.com/watan/840x473/2835318551557782083.jpg",url:"https://stream-156.zeno.fm/upn7bhd0pnhvv?",country:"مصر",genre:"القرآن الكريم"},
{name:"إذاعة عبد الباسط عبد الصمد",logo:"https://zeno.fm/_ipx/q_85&fit_cover&s_144x144/https://images.zeno.fm/GcV0pelKSPYs8NQh_OQ1_pO6V210QFReIkVNwOnG4UE/rs:fill:288:288/g:ce:0:0/aHR0cHM6Ly9wcm94eS56ZW5vLmZtL2NvbnRlbnQvc3RhdGlvbnMvNzVlZjQ0MTEtMmZjNi00MWI1LTg3NzAtMWUwMjhjZDA1MWM0L2ltYWdlLz91PTE3MzMyMTU1MjIwMDA.webp",url:"https://stream-142.zeno.fm/htxf4zyvz2quv?",country:"مصر",genre:"القرآن الكريم"},
{name:"إذاعة عبد المنعم الطوخي",logo:"https://zeno.fm/_ipx/q_100&fit_cover&s_160x160/https://images.zeno.fm/xvbUmM4R-S-sQkbTYbMj_0sHfSZLSfr8RFPHlxYeis0/rs:fill:256:256/g:ce:0:0/aHR0cHM6Ly9wcm94eS56ZW5vLmZtL2NvbnRlbnQvc3RhdGlvbnMvYWd4emZucGxibTh0YzNSaGRITnlNZ3NTQ2tGMWRHaERiR2xsYm5RWWdJRFFuZkhXamdnTUN4SU9VM1JoZEdsdmJsQnliMlpwYkdVWWdJRFFfWTN5NXdzTW9nRUVlbVZ1YncvaW1hZ2UvP3U9MTY2MTIzODAwODAwMA.webp",url:"https://stream-172.zeno.fm/aaxu23vucg8uv?",country:"مصر",genre:"القرآن الكريم"},
{name:"إذاعة عبدالفتاح الشعشاعي",logo:"https://yt3.googleusercontent.com/V1hzI5vv-3Ij1h-vj6TRtan99HLvl3CFLR898UDHvkiopjHRESqZwSdjyjyiPqFOb-OJIrVCKg=s900-c-k-c0x00ffffff-no-rj",url:"https://stream-158.zeno.fm/6c7etpd0pnhvv?",country:"مصر",genre:"القرآن الكريم"},
{name:"اذاعة على ضفاف القران",logo:"https://zeno.fm/_ipx/q_85&fit_cover&s_144x144/https://images.zeno.fm/iPeKHHijY69PURapgKDc0fF8bSvAUlfEU_4e_NdsSVI/rs:fill:288:288/g:ce:0:0/aHR0cHM6Ly9wcm94eS56ZW5vLmZtL2NvbnRlbnQvc3RhdGlvbnMvY2RkMmIwY2MtYmEzYi00MjUzLTg2ZGMtYzI4MWJjNGMzYjAyL2ltYWdlLz91PTE3MTY5MDEwNjEwMDA.webp",url:"https://stream-148.zeno.fm/jmjcspojcxyuv?",country:"مصر",genre:"القرآن الكريم"},
{name:"إذاعة علي حجاج السويسي",logo:"https://zeno.fm/_ipx/q_85&fit_cover&s_144x144/https://images.zeno.fm/rHyRvE3fUrw4-yodlcYPH-a6SiWqCFcvR95KoEBcAwQ/rs:fill:288:288/g:ce:0:0/aHR0cHM6Ly9wcm94eS56ZW5vLmZtL2NvbnRlbnQvc3RhdGlvbnMvYWd4emZucGxibTh0YzNSaGRITnlNZ3NTQ2tGMWRHaERiR2xsYm5RWWdJRFFuZkhXamdnTUN4SU9VM1JoZEdsdmJsQnliMlpwYkdVWWdJRFEzWlBJckFzTW9nRUVlbVZ1YncvaW1hZ2UvP3U9MTY2MTU0NjkxODAwMA.webp",url:"https://stream-176.zeno.fm/7efbuzn29f8uv?",country:"مصر",genre:"القرآن الكريم"},
{name:"إذاعة محمد رفعت 1",logo:"https://zeno.fm/_ipx/q_85&fit_cover&s_144x144/https://images.zeno.fm/B8gMedyZ9-bXUKqkGwpBGoVgPmUNCj8r-LNTBx3eMkQ/rs:fill:288:288/g:ce:0:0/aHR0cHM6Ly9wcm94eS56ZW5vLmZtL2NvbnRlbnQvc3RhdGlvbnMvYWd4emZucGxibTh0YzNSaGRITnlNZ3NTQ2tGMWRHaERiR2xsYm5RWWdJQ1E5YTZXNGdnTUN4SU9VM1JoZEdsdmJsQnliMlpwYkdVWWdJQ3d0TnJ4aFFzTW9nRUVlbVZ1YncvaW1hZ2UvP3U9MTY2MTcwMzMwNzAwMA.webp",url:"https://stream-175.zeno.fm/73xsyy44qs8uv?",country:"مصر",genre:"القرآن الكريم"},
{name:"إذاعة محمد رفعت 2",logo:"https://static-media.streema.com/media/cache/fd/43/fd437cdbcad925cbfe68e42c04fcbbd2.jpg",url:"https://radio.mp3islam.com/listen/refaat/radio.mp3/;",country:"مصر",genre:"القرآن الكريم"},
{name:"إذاعة محمود حسين منصور",logo:"https://3baqera.net/wp-content/uploads/2017/01/mansour.png",url:"https://stream-162.zeno.fm/e2mdbrm0pnhvv?",country:"مصر",genre:"القرآن الكريم"},
{name:"إذاعة محمود عبدالحكم",logo:"https://i1.sndcdn.com/artworks-000161996983-g1w09l-t500x500.jpg",url:"https://stream-176.zeno.fm/ncq6fwm0pnhvv?",country:"مصر",genre:"القرآن الكريم"},
{name:"إذاعة نور الإسلام",logo:"https://zeno.fm/_ipx/q_85&fit_cover&s_144x144/https://images.zeno.fm/l8HfUz_Gbr2Q6S57hjrd_O28dH1NXVDoYwuCvThH808/rs:fill:288:288/g:ce:0:0/aHR0cHM6Ly9wcm94eS56ZW5vLmZtL2NvbnRlbnQvc3RhdGlvbnMvYWd4emZucGxibTh0YzNSaGRITnlNZ3NTQ2tGMWRHaERiR2xsYm5RWWdJRHczcWFnb3dvTUN4SU9VM1JoZEdsdmJsQnliMlpwYkdVWWdJRHdfb3o3bGdrTW9nRUVlbVZ1YncvaW1hZ2UvP3U9MTY2MTk0NTgzMTAwMA.webp",url:"https://stream-176.zeno.fm/yter5kugqc9uv?",country:"مصر",genre:"القرآن الكريم"},
{name:"إذاعةالشيخ محمد عبادة",logo:"https://zeno.fm/_ipx/q_85&fit_cover&s_144x144/https://images.zeno.fm/9hawFtVm5hdBRiWOOC88mM__rMhBFFF5C10KrVDmm7k/rs:fill:288:288/g:ce:0:0/aHR0cHM6Ly9wcm94eS56ZW5vLmZtL2NvbnRlbnQvc3RhdGlvbnMvNTM4MWU5MDEtMjQ5Ni00NTlmLTkzYmEtZTkxZmE5MWUyMTQyL2ltYWdlLz91PTE3Mjk3MjcwNDAwMDA.webp",url:"https://stream-153.zeno.fm/wawdmw6pjuzvv?",country:"مصر",genre:"القرآن الكريم"},
{name:"إذاعةشروق للقران الكريم",logo:"https://zeno.fm/_ipx/q_85&fit_cover&s_144x144/https://images.zeno.fm/rLu2gp82QVUT3NX_fUEDS77fuFZIzwEJcmpPJO7CtHg/rs:fill:288:288/g:ce:0:0/aHR0cHM6Ly9wcm94eS56ZW5vLmZtL2NvbnRlbnQvc3RhdGlvbnMvYWd4emZucGxibTh0YzNSaGRITnlNZ3NTQ2tGMWRHaERiR2xsYm5RWWdJRHdudTNTX3dnTUN4SU9VM1JoZEdsdmJsQnliMlpwYkdVWWdJRHdsNGlwaWdrTW9nRUVlbVZ1YncvaW1hZ2UvP3U9MTY2MTg5NjY1NzAwMA.webp",url:"https://stream-163.zeno.fm/7qksfg8x6bhvv?",country:"مصر",genre:"القرآن الكريم"},
{name:"إذاعة موريطانيا للقرآن الكريم",logo:"https://zeno.fm/_ipx/q_85&fit_cover&s_144x144/https://images.zeno.fm/x8_yOBPCMF1ZTzRVCJlpy2C3FZxFjfikcfP-PwxlOS4/rs:fill:288:288/g:ce:0:0/aHR0cHM6Ly9wcm94eS56ZW5vLmZtL2NvbnRlbnQvc3RhdGlvbnMvNDYwOTVkYmEtNDY2OS00NDZkLTg4YTMtYjA2YzkxODA4NmRjL2ltYWdlLz91PTE3MTM5NjQ5OTYwMDA.webp",url:"https://radiocoran.ice.infomaniak.ch/radiocoran.aac?",country:"موريطانيا",genre:"القرآن الكريم"},
{name:"إذاعة مفتاح السلطني",logo:"https://tvquran.com/uploads/authors/images/%D9%85%D9%81%D8%AA%D8%A7%D8%AD%20%D8%A7%D9%84%D8%B3%D9%84%D8%B7%D9%86%D9%8A.jpg",url:"https://backup.qurango.net/radio/muftah_alsaltany_ibn_thakwan_an_ibn_amr",country:"ليبيا",genre:"القرآن الكريم برواية  ابن ذكوان عن ابن عامر"},
{name:"إذاعة محمد عبدالحكيم سعيد العبدالله",logo:"https://upload.wikimedia.org/wikipedia/ar/9/92/%D8%B5%D9%88%D8%B1%D8%A9_%D8%B4%D8%AE%D8%B5%D9%8A%D8%A9_%D8%A7%D9%84%D8%B4%D9%8A%D8%AE_%D8%B3%D8%B9%D9%8A%D8%AF_%D8%A7%D9%84%D8%B9%D8%A8%D8%AF_%D8%A7%D9%84%D9%84%D9%87.png",url:"https://backup.qurango.net/radio/mohammad_alabdullah_albizi",country:"السعودية",genre:"القرآن الكريم برواية  البزي وقنبل عن ابن كثير"},
{name:"إذاعة الفاتح محمد الزبير",logo:"https://tvquran.com/uploads/authors/images/%D8%A7%D9%84%D9%81%D8%A7%D8%AA%D8%AD%20%D9%85%D8%AD%D9%85%D8%AF%20%D8%A7%D9%84%D8%B2%D8%A8%D9%8A%D8%B1.jpg",url:"https://backup.qurango.net/radio/alfateh_alzubair",country:"السودان",genre:"القرآن الكريم برواية  الدوري عن أبي عمرو"},
{name:"إذاعة مفتاح السلطني",logo:"https://tvquran.com/uploads/authors/images/%D9%85%D9%81%D8%AA%D8%A7%D8%AD%20%D8%A7%D9%84%D8%B3%D9%84%D8%B7%D9%86%D9%8A.jpg",url:"https://backup.qurango.net/radio/muftah_alsaltany_aldori_an_abi_amr ",country:"ليبيا",genre:"القرآن الكريم برواية  الدوري عن أبي عمرو"},
{name:"إذاعة محمد عبدالحكيم سعيد العبدالله",logo:"https://upload.wikimedia.org/wikipedia/ar/9/92/%D8%B5%D9%88%D8%B1%D8%A9_%D8%B4%D8%AE%D8%B5%D9%8A%D8%A9_%D8%A7%D9%84%D8%B4%D9%8A%D8%AE_%D8%B3%D8%B9%D9%8A%D8%AF_%D8%A7%D9%84%D8%B9%D8%A8%D8%AF_%D8%A7%D9%84%D9%84%D9%87.png",url:"https://backup.qurango.net/radio/mohammad_alabdullah_aldorai",country:"السعودية",genre:"القرآن الكريم برواية  الدوري عن الكسائي"},
{name:"إذاعة مفتاح السلطني",logo:"https://tvquran.com/uploads/authors/images/%D9%85%D9%81%D8%AA%D8%A7%D8%AD%20%D8%A7%D9%84%D8%B3%D9%84%D8%B7%D9%86%D9%8A.jpg",url:"https://backup.qurango.net/radio/muftah_alsaltany_aldorai",country:"ليبيا",genre:"القرآن الكريم برواية  الدوري عن الكسائي"},
{name:"إذاعة محمود الشيمي",logo:"https://pbs.twimg.com/profile_images/734153310085730306/kz-zzAdk_400x400.jpg",url:"https://backup.qurango.net/radio/mahmood_alsheimy",country:"مصر",genre:"القرآن الكريم برواية  الدوري عن الكسائي"},
{name:"إذاعة عبدالرشيد صوفي",logo:"https://tvquran.com/uploads/authors/images/%D8%B9%D8%A8%D8%AF%20%D8%A7%D9%84%D8%B1%D8%B4%D9%8A%D8%AF%20%D8%A8%D9%86%20%D8%B9%D9%84%D9%8A%20%D8%B5%D9%88%D9%81%D9%8A.jpg",url:"https://backup.qurango.net/radio/abdulrasheed_soufi_assosi",country:"الصومال",genre:"القرآن الكريم برواية  السوسي عن أبي عمرو"},
{name:"إذاعة محمد صديق المنشاوي",logo:"https://upload.wikimedia.org/wikipedia/commons/e/ee/Elminshwey.jpg",url:"https://backup.qurango.net/radio/mohammed_siddiq_alminshawi_mojawwad",country:"مصر",genre:"القرآن الكريم برواية  المصحف المجود"},
{name:"إذاعة محمود خليل الحصري",logo:"https://i1.sndcdn.com/artworks-000037504497-6g5fx7-t500x500.jpg",url:"https://backup.qurango.net/radio/mahmoud_khalil_alhussary_mojawwad",country:"مصر",genre:"القرآن الكريم برواية  المصحف المجود"},
{name:"إذاعة محمود علي البنا",logo:"https://i1.sndcdn.com/artworks-gd2VK9TkQ11WYC4l-66KqcQ-t500x500.jpg",url:"https://backup.qurango.net/radio/mahmoud_ali__albanna_mojawwad",country:"مصر",genre:"القرآن الكريم برواية  المصحف المجود"},
{name:"إذاعة عبدالباسط عبدالصمد",logo:"https://almsaeyimages.akhbarelyom.com/large/20221130150924454.jpg",url:"https://backup.qurango.net/radio/abdulbasit_abdulsamad_mojawwad",country:"مصر",genre:"القرآن الكريم برواية  المصحف المجود"},
{name:"إذاعة توفيق الصايغ",logo:"https://yt3.googleusercontent.com/yy-8N4d_vzduk90bM0u7svXpBjA41N5rX0l517X0Nz-9fYhSwGDqKWK2bWTpXum5PiqHwmzAajo=s900-c-k-c0x00ffffff-no-rj",url:"https://backup.qurango.net/radio/tawfeeq_assayegh",country:"إريتريا",genre:"القرآن الكريم برواية  حفص عن عاصم"},
{name:"إذاعة جمال شاكر عبدالله",logo:"https://tvquran.com/uploads/authors/images/%D8%AC%D9%85%D8%A7%D9%84%20%D8%B4%D8%A7%D9%83%D8%B1%20%D8%B9%D8%A8%D8%AF%20%D8%A7%D9%84%D9%84%D9%87.jpg",url:"https://backup.qurango.net/radio/jamal_shaker_abdullah",country:"الأردن",genre:"القرآن الكريم برواية  حفص عن عاصم"},
{name:"إذاعة خليفة الطنيجي",logo:"https://www.alkhaleej.ae/sites/default/files/styles/d08_standard/public/migrated/99f57d79-bbce-452c-b8aa-434f32ddec93.jpg?h=827069f2&itok=iU5iXxx4",url:"https://backup.qurango.net/radio/khalifa_altunaiji",country:"الإمارات العربية",genre:"القرآن الكريم برواية  حفص عن عاصم"},
{name:"إذاعة صلاح بو خاطر",logo:"https://i1.sndcdn.com/artworks-000059987789-arhx4f-t500x500.jpg",url:"https://backup.qurango.net/radio/slaah_bukhatir",country:"الإمارات العربية",genre:"القرآن الكريم برواية  حفص عن عاصم"},
{name:"إذاعة جمعان العصيمي",logo:"https://tvquran.com/uploads/authors/images/%D8%AC%D9%85%D8%B9%D8%A7%D9%86%20%D8%A7%D9%84%D8%B9%D8%B5%D9%8A%D9%85%D9%8A.jpg",url:"https://backup.qurango.net/radio/jamaan_alosaimi",country:"السعودية",genre:"القرآن الكريم برواية  حفص عن عاصم"},
{name:"إذاعة خالد المهنا",logo:"https://tvquran.com/uploads/authors/images/%D8%AE%D8%A7%D9%84%D8%AF%20%D8%A7%D9%84%D9%85%D9%87%D9%86%D8%A7.jpg",url:"https://backup.qurango.net/radio/khalid_almohana",country:"السعودية",genre:"القرآن الكريم برواية  حفص عن عاصم"},
{name:"إذاعة عادل الكلباني",logo:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Kalbani.jpg/640px-Kalbani.jpg",url:"https://backup.qurango.net/radio/adel_alkhalbany",country:"السعودية",genre:"القرآن الكريم برواية  حفص عن عاصم"},
{name:"إذاعة عبدالرحمن الماجد",logo:"https://tvquran.com/uploads/authors/images/%D8%B9%D8%A8%D8%AF%20%D8%A7%D9%84%D8%B1%D8%AD%D9%85%D9%86%20%D8%A7%D9%84%D9%85%D8%A7%D8%AC%D8%AF.jpg",url:"https://backup.qurango.net/radio/abdulrahman_almajed",country:"السعودية",genre:"القرآن الكريم برواية  حفص عن عاصم"},
{name:"إذاعة علي جابر",logo:"https://www.okaz.com.sa/uploads/images/2024/03/13/2366526.jpg",url:"https://backup.qurango.net/radio/ali_jaber",country:"السعودية",genre:"القرآن الكريم برواية  حفص عن عاصم"},
{name:"إذاعة عماد زهير حافظ",logo:"https://tvquran.com/uploads/authors/images/%D8%B9%D9%85%D8%A7%D8%AF%20%D8%B2%D9%87%D9%8A%D8%B1%20%D8%AD%D8%A7%D9%81%D8%B8.jpg",url:"https://backup.qurango.net/radio/emad_hafez",country:"السعودية",genre:"القرآن الكريم برواية  حفص عن عاصم"},
{name:"إذاعة ماهر المعيقلي",logo:"https://upload.wikimedia.org/wikipedia/commons/9/90/Maher_Al_Mueaqly.png",url:"https://backup.qurango.net/radio/maher",country:"السعودية",genre:"القرآن الكريم برواية  حفص عن عاصم"},
{name:"إذاعة محمد أيوب",logo:"https://upload.wikimedia.org/wikipedia/ar/6/6f/Muhammad_ayop.jpeg",url:"https://backup.qurango.net/radio/mohammed_ayyub",country:"السعودية",genre:"القرآن الكريم برواية  حفص عن عاصم"},
{name:"إذاعة محمد اللحيدان",logo:"https://tvquran.com/uploads/authors/images/%D9%85%D8%AD%D9%85%D8%AF%20%D8%A7%D9%84%D9%84%D8%AD%D9%8A%D8%AF%D8%A7%D9%86.jpg",url:"https://backup.qurango.net/radio/mohammed_allohaidan",country:"السعودية",genre:"القرآن الكريم برواية  حفص عن عاصم"},
{name:"إذاعة معيض الحارثي",logo:"https://surah.me/uploads/reciters/2023_04_26_11_59_02_357521.jpg",url:"https://backup.qurango.net/radio/moeedh_alharthi",country:"السعودية",genre:"القرآن الكريم برواية  حفص عن عاصم"},
{name:"إذاعة موسى بلال",logo:"https://tvquran.com/uploads/authors/images/%D9%85%D9%88%D8%B3%D9%89%20%D8%A8%D9%84%D8%A7%D9%84.jpg",url:"https://backup.qurango.net/radio/mousa_bilal",country:"السعودية",genre:"القرآن الكريم برواية  حفص عن عاصم"},
{name:"إذاعة ناصر القطامي",logo:"https://tvquran.com/uploads/authors/images/%D9%86%D8%A7%D8%B5%D8%B1%20%D8%A7%D9%84%D9%82%D8%B7%D8%A7%D9%85%D9%8A.jpg",url:"https://backup.qurango.net/radio/nasser_alqatami",country:"السعودية",genre:"القرآن الكريم برواية  حفص عن عاصم"},
{name:"إذاعة نبيل الرفاعي",logo:"https://tvquran.com/uploads/authors/images/%D9%86%D8%A8%D9%8A%D9%84%20%D8%A7%D9%84%D8%B1%D9%81%D8%A7%D8%B9%D9%8A.jpg",url:"https://backup.qurango.net/radio/nabil_al_rifay",country:"السعودية",genre:"القرآن الكريم برواية  حفص عن عاصم"},
{name:"إذاعة هاني الرفاعي",logo:"https://tvquran.com/uploads/authors/images/%D9%87%D8%A7%D9%86%D9%8A%20%D8%A7%D9%84%D8%B1%D9%81%D8%A7%D8%B9%D9%8A.jpg",url:"https://backup.qurango.net/radio/hani_arrifai",country:"السعودية",genre:"القرآن الكريم برواية  حفص عن عاصم"},
{name:"إذاعة ياسر الدوسري",logo:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Yasser_Al-Dosari.jpg/171px-Yasser_Al-Dosari.jpg",url:"https://backup.qurango.net/radio/yasser_aldosari",country:"السعودية",genre:"القرآن الكريم برواية  حفص عن عاصم"},
{name:"إذاعة يوسف الشويعي",logo:"https://tvquran.com/uploads/authors/images/%D9%8A%D9%88%D8%B3%D9%81%20%D8%A7%D9%84%D8%B4%D9%88%D9%8A%D8%B9%D9%8A.jpg",url:"https://backup.qurango.net/radio/yousef_alshoaey",country:"السعودية",genre:"القرآن الكريم برواية  حفص عن عاصم"},
{name:"إذاعةآيات السكينة",logo:"https://dvw7f7sqjk3ag.cloudfront.net/images/radio/63243.jpg",url:"https://backup.qurango.net/radio/sakeenah",country:"السعودية",genre:"القرآن الكريم برواية  حفص عن عاصم"},
{name:"إذاعة أحمد الحواشي",logo:"https://tvquran.com/uploads/authors/images/%D8%A3%D8%AD%D9%85%D8%AF%20%D8%A7%D9%84%D8%AD%D9%88%D8%A7%D8%B4%D9%8A.jpg",url:"https://backup.qurango.net/radio/ahmad_alhawashi",country:"السعودية",genre:"القرآن الكريم برواية  حفص عن عاصم"},
{name:"إذاعة أحمد العجمي",logo:"https://tvquran.com/uploads/authors/images/%D8%A3%D8%AD%D9%85%D8%AF%20%D8%A8%D9%86%20%D8%B9%D9%84%D9%8A%20%D8%A7%D9%84%D8%B9%D8%AC%D9%85%D9%8A.jpg",url:"https://backup.qurango.net/radio/ahmad_alajmy",country:"السعودية",genre:"القرآن الكريم برواية  حفص عن عاصم"},
{name:"إذاعة أحمد ديبان",logo:"https://i.pinimg.com/564x/14/32/16/14321694903a352a039c1c9897a5a5fd.jpg",url:"https://backup.qurango.net/radio/ahmad_deban",country:"السعودية",genre:"القرآن الكريم برواية  حفص عن عاصم"},
{name:"إذاعة إبراهيم الأخضر",logo:"https://tvquran.com/uploads/authors/images/%D8%A5%D8%A8%D8%B1%D8%A7%D9%87%D9%8A%D9%85%20%D8%A7%D9%84%D8%A3%D8%AE%D8%B6%D8%B1.jpg",url:"https://backup.qurango.net/radio/ibrahim_alakdar",country:"السعودية",genre:"القرآن الكريم برواية  حفص عن عاصم"},
{name:"إذاعة بندر بليلة",logo:"https://i1.sndcdn.com/artworks-VRxORzhAg9CmBKQh-EAMb0g-t500x500.jpg",url:"https://backup.qurango.net/radio/bandar_balilah",country:"السعودية",genre:"القرآن الكريم برواية  حفص عن عاصم"},
{name:"إذاعة خالد الجليل",logo:"https://tvquran.com/uploads/authors/images/%D8%AE%D8%A7%D9%84%D8%AF%20%D8%A7%D9%84%D8%AC%D9%84%D9%8A%D9%84.jpg",url:"https://backup.qurango.net/radio/khalid_aljileel",country:"السعودية",genre:"القرآن الكريم برواية  حفص عن عاصم"},
{name:"إذاعة خالد القحطاني",logo:"https://tvquran.com/uploads/authors/images/%D8%AE%D8%A7%D9%84%D8%AF%20%D8%A7%D9%84%D9%82%D8%AD%D8%B7%D8%A7%D9%86%D9%8A.jpg",url:"https://backup.qurango.net/radio/khaled_alqahtani",country:"السعودية",genre:"القرآن الكريم برواية  حفص عن عاصم"},
{name:"إذاعة خالد عبدالكافي",logo:"https://tvquran.com/uploads/authors/images/%D8%AE%D8%A7%D9%84%D8%AF%20%D8%B9%D8%A8%D8%AF%20%D8%A7%D9%84%D9%83%D8%A7%D9%81%D9%8A.jpg",url:"https://backup.qurango.net/radio/khalid_abdulkafi",country:"السعودية",genre:"القرآن الكريم برواية  حفص عن عاصم"},
{name:"إذاعة زكي داغستاني",logo:"https://tvquran.com/uploads/authors/images/%D8%B2%D9%83%D9%8A%20%D8%AF%D8%A7%D8%BA%D8%B3%D8%AA%D8%A7%D9%86%D9%8A.jpg",url:"https://backup.qurango.net/radio/zaki_daghistani",country:"السعودية",genre:"القرآن الكريم برواية  حفص عن عاصم"},
{name:"إذاعة سعد الغامدي",logo:"https://tvquran.com/uploads/authors/images/%D8%B3%D8%B9%D8%AF%20%D8%A7%D9%84%D8%BA%D8%A7%D9%85%D8%AF%D9%8A.jpg",url:"https://backup.qurango.net/radio/saad_alghamdi",country:"السعودية",genre:"القرآن الكريم برواية  حفص عن عاصم"},
{name:"إذاعة سعود الشريم",logo:"https://tvquran.com/uploads/authors/images/%D8%B3%D8%B9%D9%88%D8%AF%20%D8%A7%D9%84%D8%B4%D8%B1%D9%8A%D9%85.jpg",url:"https://backup.qurango.net/radio/saud_alshuraim",country:"السعودية",genre:"القرآن الكريم برواية  حفص عن عاصم"},
{name:"إذاعة سهل ياسين",logo:"https://tvquran.com/uploads/authors/images/%D8%B3%D9%87%D9%84%20%D9%8A%D8%A7%D8%B3%D9%8A%D9%86.jpg",url:"https://backup.qurango.net/radio/sahl_yassin",country:"السعودية",genre:"القرآن الكريم برواية  حفص عن عاصم"},
{name:"إذاعة شيخ أبو بكر الشاطري",logo:"https://tvquran.com/uploads/authors/images/%D8%B4%D9%8A%D8%AE%20%D8%A3%D8%A8%D9%88%20%D8%A8%D9%83%D8%B1%20%D8%A7%D9%84%D8%B4%D8%A7%D8%B7%D8%B1%D9%8A.jpg",url:"https://backup.qurango.net/radio/shaik_abu_bakr_al_shatri",country:"السعودية",genre:"القرآن الكريم برواية  حفص عن عاصم"},
{name:"إذاعة صلاح البدير",logo:"https://www.alyaum.com/uploads/imported_images/media/article/40_DQXenSm.jpg",url:"https://backup.qurango.net/radio/salah_albudair",country:"السعودية",genre:"القرآن الكريم برواية  حفص عن عاصم"},
{name:"إذاعة عادل ريان",logo:"https://tvquran.com/uploads/authors/images/%D8%B9%D8%A7%D8%AF%D9%84%20%D8%B1%D9%8A%D8%A7%D9%86.jpg",url:"https://backup.qurango.net/radio/adel_ryyan",country:"السعودية",genre:"القرآن الكريم برواية  حفص عن عاصم"},
{name:"إذاعة عبدالبارئ الثبيتي",logo:"https://tvquran.com/uploads/authors/images/%D8%B9%D8%A8%D8%AF%20%D8%A7%D9%84%D8%A8%D8%A7%D8%B1%D8%A6%20%D8%A7%D9%84%D8%AB%D8%A8%D9%8A%D8%AA%D9%8A.jpg",url:"https://backup.qurango.net/radio/abdelbari_altoubayti",country:"السعودية",genre:"القرآن الكريم برواية  حفص عن عاصم"},
{name:"إذاعة عبدالرحمن السديس",logo:"https://saudipedia.com/saudipedia/uploads/images/2024/02/04/thumbs/400x400/89199.jpg",url:"https://backup.qurango.net/radio/abdulrahman_alsudaes",country:"السعودية",genre:"القرآن الكريم برواية  حفص عن عاصم"},
{name:"إذاعة عبدالعزيز الأحمد",logo:"https://tvquran.com/uploads/authors/images/%D8%B9%D8%A8%D8%AF%20%D8%A7%D9%84%D8%B9%D8%B2%D9%8A%D8%B2%20%D8%A7%D9%84%D8%A3%D8%AD%D9%85%D8%AF.jpg",url:"https://backup.qurango.net/radio/abdul_aziz_alahmad",country:"السعودية",genre:"القرآن الكريم برواية  حفص عن عاصم"},
{name:"إذاعة عبدالله الخلف",logo:"https://tvquran.com/uploads/authors/images/%D8%B9%D8%A8%D8%AF%20%D8%A7%D9%84%D9%84%D9%87%20%D8%AE%D9%84%D9%81.jpg",url:"https://backup.qurango.net/radio/abdullah_alkhalaf",country:"السعودية",genre:"القرآن الكريم برواية  حفص عن عاصم"},
{name:"إذاعة عبدالله المطرود",logo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk2uE2K8nK4_r-C8IR06pxj8yz3Drann73ig&s",url:"https://backup.qurango.net/radio/abdullah_almattrod",country:"السعودية",genre:"القرآن الكريم برواية  حفص عن عاصم"},
{name:"إذاعة عبدالله الموسى",logo:"https://i1.sndcdn.com/artworks-000573983210-6msm71-t500x500.jpg",url:"https://backup.qurango.net/radio/abdullah_almousa",country:"السعودية",genre:"القرآن الكريم برواية  حفص عن عاصم"},
{name:"إذاعة عبدالله بصفر",logo:"https://tvquran.com/uploads/authors/images/%D8%B9%D8%A8%D8%AF%20%D8%A7%D9%84%D9%84%D9%87%20%D8%A8%D8%B5%D9%81%D8%B1.jpg",url:"https://backup.qurango.net/radio/abdullah_basfer",country:"السعودية",genre:"القرآن الكريم برواية  حفص عن عاصم"},
{name:"إذاعة عبدالله خياط",logo:"https://ar.assabile.com/media/person/280x219/abdullah-al-khayat.png",url:"https://backup.qurango.net/radio/abdullah_khayyat",country:"السعودية",genre:"القرآن الكريم برواية  حفص عن عاصم"},
{name:"إذاعة عبدالله عواد الجهني",logo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3ekcqGQcKkzf0oXTvaoNufm9DU4KX3PNvNA&s",url:"https://backup.qurango.net/radio/abdullah_aljohany",country:"السعودية",genre:"القرآن الكريم برواية  حفص عن عاصم"},
{name:"إذاعة عبدالمحسن الحارثي",logo:"https://tvquran.com/uploads/authors/images/%D8%B9%D8%A8%D8%AF%20%D8%A7%D9%84%D9%85%D8%AD%D8%B3%D9%86%20%D8%A7%D9%84%D8%AD%D8%A7%D8%B1%D8%AB%D9%8A.jpg",url:"https://backup.qurango.net/radio/abdulmohsin_alharthy",country:"السعودية",genre:"القرآن الكريم برواية  حفص عن عاصم"},
{name:"إذاعة عبدالمحسن العبيكان",logo:"https://www.aljazeera.net/wp-content/uploads/2009/01/b6cc76fb-7cc0-4ed5-86dd-6143c9dabe60.jpeg",url:"https://backup.qurango.net/radio/abdulmohsin_alobaikan",country:"السعودية",genre:"القرآن الكريم برواية  حفص عن عاصم"},
{name:"إذاعة عبدالمحسن القاسم",logo:"https://tvquran.com/uploads/authors/images/%D8%B9%D8%A8%D8%AF%20%D8%A7%D9%84%D9%85%D8%AD%D8%B3%D9%86%20%D8%A7%D9%84%D9%82%D8%A7%D8%B3%D9%85.jpg",url:"https://backup.qurango.net/radio/abdulmohsen_alqasim",country:"السعودية",genre:"القرآن الكريم برواية  حفص عن عاصم"},
{name:"إذاعة عبدالودود حنيف",logo:"https://ar.assabile.com/media/person/200x256/abdul-wadud-haneef.png",url:"https://backup.qurango.net/radio/abdulwadood_haneef",country:"السعودية",genre:"القرآن الكريم برواية  حفص عن عاصم"},
{name:"إذاعة علي بن عبدالرحمن الحذيفي",logo:"https://tvquran.com/uploads/authors/images/%D8%B9%D9%84%D9%8A%20%D8%A7%D9%84%D8%AD%D8%B0%D9%8A%D9%81%D9%8A.jpg",url:"https://backup.qurango.net/radio/ali_alhuthaifi",country:"السعودية",genre:"القرآن الكريم برواية  حفص عن عاصم"},
{name:"إذاعة ماجد الزامل",logo:"https://tvquran.com/uploads/authors/images/%D9%85%D8%A7%D8%AC%D8%AF%20%D8%A7%D9%84%D8%B2%D8%A7%D9%85%D9%84.jpg",url:"https://backup.qurango.net/radio/majed_alzamel",country:"السعودية",genre:"القرآن الكريم برواية  حفص عن عاصم"},
{name:"إذاعة محمد أيوب  قراءة مميزة",logo:"https://i.scdn.co/image/ab676161000051745750585d1cab273ad0a9dfa7",url:"https://backup.qurango.net/radio/ayyoub2",country:"السعودية",genre:"القرآن الكريم برواية  حفص عن عاصم"},
{name:"إذاعة ناصر العصفور",logo:"https://i1.sndcdn.com/artworks-r3w9MniyMYMfG8NY-ZyBXhg-t500x500.jpg",url:"https://backup.qurango.net/radio/nasser_alosfor",country:"السعودية",genre:"القرآن الكريم برواية  حفص عن عاصم"},
{name:"إذاعة ناصر الماجد",logo:"https://pbs.twimg.com/profile_images/1157813628516687872/H7WG6n08_400x400.jpg",url:"https://backup.qurango.net/radio/nasser_almajed",country:"السعودية",genre:"القرآن الكريم برواية  حفص عن عاصم"},
{name:"إذاعة هيثم الجدعاني",logo:"https://tvquran.com/uploads/authors/images/%D9%87%D9%8A%D8%AB%D9%85%20%D8%A7%D9%84%D8%AC%D8%B0%D8%B9%D8%A7%D9%86%D9%8A.jpg",url:"https://backup.qurango.net/radio/hitham_aljadani",country:"السعودية",genre:"القرآن الكريم برواية  حفص عن عاصم"},
{name:"إذاعة صالح الهبدان",logo:"https://tvquran.com/uploads/authors/images/%D8%B5%D8%A7%D9%84%D8%AD%20%D8%A7%D9%84%D9%87%D8%A8%D8%AF%D8%A7%D9%86.jpg",url:"https://backup.qurango.net/radio/saleh_alhabdan",country:"السعودية",genre:"القرآن الكريم برواية  حفص عن عاصم"},
{name:"إذاعة محمد عبدالكريم",logo:"https://tvquran.com/uploads/authors/images/%D9%85%D8%AD%D9%85%D8%AF%20%D8%B9%D8%A8%D8%AF%20%D8%A7%D9%84%D9%83%D8%B1%D9%8A%D9%85.jpg",url:"https://backup.qurango.net/radio/mohammad_abdullkarem",country:"السودان",genre:"القرآن الكريم برواية  حفص عن عاصم"},
{name:"إذاعة الزين محمد أحمد",logo:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/%D8%A7%D9%84%D8%B2%D9%8A%D9%86_%D9%85%D8%AD%D9%85%D8%AF_%D8%A3%D8%AD%D9%85%D8%AF.png/280px-%D8%A7%D9%84%D8%B2%D9%8A%D9%86_%D9%85%D8%AD%D9%85%D8%AF_%D8%A3%D8%AD%D9%85%D8%AF.png",url:"https://backup.qurango.net/radio/alzain_mohammad_ahmad",country:"السودان",genre:"القرآن الكريم برواية  حفص عن عاصم"},
{name:"إذاعة مصطفى رعد العزاوي",logo:"https://upload.wikimedia.org/wikipedia/ar/3/38/%D9%85%D8%B5%D8%B7%D9%81%D9%8A_%D8%B1%D8%B9%D8%AF_%D8%A7%D9%84%D8%B9%D8%B2%D8%A7%D9%88%D9%8A.jpg",url:"https://backup.qurango.net/radio/mustafa_raad_alazawy",country:"العراق",genre:"القرآن الكريم برواية  حفص عن عاصم"},
{name:"إذاعة نعمة الحسان",logo:"https://quraniq.net/wp-content/uploads/2023/07/%D8%A7%D9%84%D9%82%D8%A7%D8%B1%D8%A6-%D9%86%D8%B9%D9%85%D9%87-%D8%A7%D9%84%D8%AD%D8%B3%D8%A7%D9%86.jpg",url:"https://backup.qurango.net/radio/neamah_alhassan",country:"العراق",genre:"القرآن الكريم برواية  حفص عن عاصم"},
{name:"إذاعة شيرزاد عبدالرحمن طاهر",logo:"https://tvquran.com/uploads/authors/images/%D8%B4%D9%8A%D8%B1%D8%B2%D8%A7%D8%AF%20%D8%B7%D8%A7%D9%87%D8%B1.jpg",url:"https://backup.qurango.net/radio/shirazad_taher",country:"العراق",genre:"القرآن الكريم برواية  حفص عن عاصم"},
{name:"إذاعة أحمد الطرابلسي",logo:"https://tvquran.com/uploads/authors/images/%D8%A3%D8%AD%D9%85%D8%AF%20%D8%AE%D8%B6%D8%B1%20%D8%A7%D9%84%D8%B7%D8%B1%D8%A7%D8%A8%D9%84%D8%B3%D9%8A.jpg",url:"https://backup.qurango.net/radio/ahmed_altrabulsi",country:"الكويت",genre:"القرآن الكريم برواية  حفص عن عاصم"},
{name:"إذاعة عبدالله الكندري",logo:"https://tvquran.com/uploads/authors/images/%D8%B9%D8%A8%D8%AF%D8%A7%D9%84%D9%84%D9%87%20%D8%A7%D9%84%D9%83%D9%86%D8%AF%D8%B1%D9%8A.jpg",url:"https://backup.qurango.net/radio/abdullah_alkandari",country:"الكويت",genre:"القرآن الكريم برواية  حفص عن عاصم"},
{name:"إذاعة محمود الرفاعي",logo:"https://tvquran.com/uploads/authors/images/%D9%85%D8%AD%D9%85%D9%88%D8%AF%20%D8%A7%D9%84%D8%B1%D9%81%D8%A7%D8%B9%D9%8A.jpg",url:"https://backup.qurango.net/radio/mahmood_al_rifai",country:"الكويت",genre:"القرآن الكريم برواية  حفص عن عاصم"},
{name:"إذاعة مشاري العفاسي",logo:"https://i1.sndcdn.com/artworks-4kujTtuyebbomY2B-68WeSw-t500x500.jpg",url:"https://backup.qurango.net/radio/mishary_alafasi",country:"الكويت",genre:"القرآن الكريم برواية  حفص عن عاصم"},
{name:"إذاعة صلاح الهاشم",logo:"https://tvquran.com/uploads/authors/images/%D8%B5%D9%84%D8%A7%D8%AD%20%D8%A7%D9%84%D9%87%D8%A7%D8%B4%D9%85.jpg",url:"https://backup.qurango.net/radio/salah_alhashim",country:"الكويت",genre:"القرآن الكريم برواية  حفص عن عاصم"},
{name:"إذاعة محمد عثمان خان",logo:"https://tvquran.com/uploads/authors/images/%D9%85%D8%AD%D9%85%D8%AF%20%D8%B9%D8%AB%D9%85%D8%A7%D9%86%20%D8%AE%D8%A7%D9%86.jpg",url:"https://backup.qurango.net/radio/mohammed_osman_khan",country:"الهند",genre:"القرآن الكريم برواية  حفص عن عاصم"},
{name:"إذاعة فارس عباد",logo:"https://tvquran.com/uploads/authors/images/%D9%81%D8%A7%D8%B1%D8%B3%20%D8%B9%D8%A8%D8%A7%D8%AF.jpg",url:"https://backup.qurango.net/radio/fares_abbad",country:"اليمن",genre:"القرآن الكريم برواية  حفص عن عاصم"},
{name:"إذاعة يوسف بن نوح أحمد",logo:"https://tvquran.com/uploads/authors/images/%D9%8A%D9%88%D8%B3%D9%81%20%D9%86%D9%88%D8%AD%20%D8%A3%D8%AD%D9%85%D8%AF.jpg",url:"https://backup.qurango.net/radio/yousef_bin_noah_ahmad",country:"اليمن",genre:"القرآن الكريم برواية  حفص عن عاصم"},
{name:"إذاعة إدريس أبكر",logo:"https://tvquran.com/uploads/authors/images/%D8%A5%D8%AF%D8%B1%D9%8A%D8%B3%20%D8%A3%D8%A8%D9%83%D8%B1.jpg",url:"https://backup.qurango.net/radio/idrees_abkr",country:"اليمن",genre:"القرآن الكريم برواية  حفص عن عاصم"},
{name:"إذاعة محمد صالح عالم شاه",logo:"https://tvquran.com/uploads/authors/images/%D9%85%D8%AD%D9%85%D8%AF%20%D8%B5%D8%A7%D9%84%D8%AD%20%D8%B4%D8%A7%D9%87.jpg",url:"https://backup.qurango.net/radio/mohammad_saleh_alim_shah",country:"باكستان",genre:"القرآن الكريم برواية  حفص عن عاصم"},
{name:"إذاعة ماهر شخاشيرو",logo:"https://tvquran.com/uploads/authors/images/%D9%85%D8%A7%D9%87%D8%B1%20%D8%B4%D8%AE%D8%A7%D8%B4%D9%8A%D8%B1%D9%88.jpg",url:"https://backup.qurango.net/radio/maher_shakhashero",country:"سوريا",genre:"القرآن الكريم برواية  حفص عن عاصم"},
{name:"إذاعة يحيى حوا",logo:"https://tvquran.com/uploads/authors/images/%D9%8A%D8%AD%D9%8A%D9%89%20%D8%AD%D9%88%D8%A7.jpg",url:"https://backup.qurango.net/radio/yahya_hawwa",country:"سوريا",genre:"القرآن الكريم برواية  حفص عن عاصم"},
{name:"إذاعة عبدالهادي أحمد كناكري",logo:"https://tvquran.com/uploads/authors/images/%D8%B9%D8%A8%D8%AF%20%D8%A7%D9%84%D9%87%D8%A7%D8%AF%D9%8A%20%D9%83%D9%86%D8%A7%D9%83%D8%B1%D9%8A.jpg",url:"https://backup.qurango.net/radio/abdulhadi_kanakeri",country:"سوريا",genre:"القرآن الكريم برواية  حفص عن عاصم"},
{name:"إذاعة محمد رشاد الشريف",logo:"https://upload.wikimedia.org/wikipedia/ar/7/7d/%D9%85%D8%AD%D9%85%D8%AF_%D8%B1%D8%B4%D8%A7%D8%AF_%D8%A7%D9%84%D8%B4%D8%B1%D9%8A%D9%81.jpg",url:"https://backup.qurango.net/radio/mohammad_rashad_alshareef",country:"فلسطين",genre:"القرآن الكريم برواية  حفص عن عاصم"},
{name:"إذاعة مفتاح السلطني",logo:"https://tvquran.com/uploads/authors/images/%D9%85%D9%81%D8%AA%D8%A7%D8%AD%20%D8%A7%D9%84%D8%B3%D9%84%D8%B7%D9%86%D9%8A.jpg",url:"https://backup.qurango.net/radio/muftah_alsaltany",country:"ليبيا",genre:"القرآن الكريم برواية  حفص عن عاصم"},
{name:"إذاعة أحمد عامر",logo:"https://tvquran.com/uploads/authors/images/%D8%A3%D8%AD%D9%85%D8%AF%20%D8%B9%D8%A7%D9%85%D8%B1.jpg",url:"https://backup.qurango.net/radio/ahmed_amer",country:"مصر",genre:"القرآن الكريم برواية  حفص عن عاصم"},
{name:"إذاعة علي حجاج السويسي",logo:"https://tvquran.com/uploads/authors/images/%D8%B9%D9%84%D9%8A%20%D8%AD%D8%AC%D8%A7%D8%AC%20%D8%A7%D9%84%D8%B3%D9%88%D9%8A%D8%B3%D9%8A.jpg",url:"https://backup.qurango.net/radio/ali_hajjaj_alsouasi",country:"مصر",genre:"القرآن الكريم برواية  حفص عن عاصم"},
{name:"إذاعة محمد الطبلاوي",logo:"https://upload.wikimedia.org/wikipedia/ar/thumb/0/08/%D9%85%D8%AD%D9%85%D8%AF_%D9%85%D8%AD%D9%85%D9%88%D8%AF_%D8%A7%D9%84%D8%B7%D8%A8%D9%84%D8%A7%D9%88%D9%8A.jpeg/280px-%D9%85%D8%AD%D9%85%D8%AF_%D9%85%D8%AD%D9%85%D9%88%D8%AF_%D8%A7%D9%84%D8%B7%D8%A8%D9%84%D8%A7%D9%88%D9%8A.jpeg",url:"https://backup.qurango.net/radio/mohammad_altablaway",country:"مصر",genre:"القرآن الكريم برواية  حفص عن عاصم"},
{name:"إذاعة محمد جبريل",logo:"https://tvquran.com/uploads/authors/images/%D9%85%D8%AD%D9%85%D8%AF%20%D8%AC%D8%A8%D8%B1%D9%8A%D9%84.jpg",url:"https://backup.qurango.net/radio/mohammed_jibreel",country:"مصر",genre:"القرآن الكريم برواية  حفص عن عاصم"},
{name:"إذاعة محمد صديق المنشاوي",logo:"https://upload.wikimedia.org/wikipedia/commons/e/ee/Elminshwey.jpg",url:"https://backup.qurango.net/radio/mohammed_siddiq_alminshawi",country:"مصر",genre:"القرآن الكريم برواية  حفص عن عاصم"},
{name:"إذاعة محمود خليل الحصري",logo:"https://i1.sndcdn.com/artworks-000037504497-6g5fx7-t500x500.jpg",url:"https://backup.qurango.net/radio/mahmoud_khalil_alhussary",country:"مصر",genre:"القرآن الكريم برواية  حفص عن عاصم"},
{name:"إذاعة محمود علي البنا",logo:"https://i1.sndcdn.com/artworks-gd2VK9TkQ11WYC4l-66KqcQ-t500x500.jpg",url:"https://backup.qurango.net/radio/mahmoud_ali__albanna",country:"مصر",genre:"القرآن الكريم برواية  حفص عن عاصم"},
{name:"إذاعة مصطفى إسماعيل",logo:"https://media.unitedmuslimworld.com/img/24/12/26/30263.webp",url:"https://backup.qurango.net/radio/mustafa_ismail",country:"مصر",genre:"القرآن الكريم برواية  حفص عن عاصم"},
{name:"إذاعة مصطفى اللاهوني",logo:"https://tvquran.com/uploads/authors/images/%D9%85%D8%B5%D8%B7%D9%81%D9%89%20%D8%A7%D9%84%D9%84%D8%A7%D9%87%D9%88%D9%86%D9%8A.png",url:"https://backup.qurango.net/radio/mustafa_allahoni",country:"مصر",genre:"القرآن الكريم برواية  حفص عن عاصم"},
{name:"إذاعة ياسر القرشي",logo:"https://yt3.googleusercontent.com/L0Y1cEg0hoxtMteB5uubYEJtAQ3a2ruy8SVghP5SeRKp4HH51nh4ou1w2NgISmVH2bwobbPQOw=s900-c-k-c0x00ffffff-no-rj",url:"https://backup.qurango.net/radio/yasser_alqurashi",country:"مصر",genre:"القرآن الكريم برواية  حفص عن عاصم"},
{name:"إذاعة أحمد خليل شاهين",logo:"https://tvquran.com/uploads/authors/images/%D8%A3%D8%AD%D9%85%D8%AF%20%D8%AE%D9%84%D9%8A%D9%84%20%D8%B4%D8%A7%D9%87%D9%8A%D9%86.jpg",url:"https://backup.qurango.net/radio/ahmad_shaheen",country:"مصر",genre:"القرآن الكريم برواية  حفص عن عاصم"},
{name:"إذاعة أحمد صابر",logo:"https://tvquran.com/uploads/authors/images/%D8%A3%D8%AD%D9%85%D8%AF%20%D8%B5%D8%A7%D8%A8%D8%B1.jpg",url:"https://backup.qurango.net/radio/ahmad_saber",country:"مصر",genre:"القرآن الكريم برواية  حفص عن عاصم"},
{name:"إذاعة أحمد نعينع",logo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTmrjzEObDP0UiA7Tyjto-1dg4m18tMrj_8w&s",url:"https://backup.qurango.net/radio/ahmad_nauina",country:"مصر",genre:"القرآن الكريم برواية  حفص عن عاصم"},
{name:"إذاعة أكرم العلاقمي",logo:"https://tvquran.com/uploads/authors/images/%D8%A3%D9%83%D8%B1%D9%85%20%D8%A7%D9%84%D8%B9%D9%84%D8%A7%D9%82%D9%85%D9%8A.jpg",url:"https://backup.qurango.net/radio/akram_alalaqmi",country:"مصر",genre:"القرآن الكريم برواية  حفص عن عاصم"},
{name:"إذاعة سيد رمضان",logo:"https://tvquran.com/uploads/authors/images/%D8%B3%D9%8A%D8%AF%20%D8%B1%D9%85%D8%B6%D8%A7%D9%86.jpg",url:"https://backup.qurango.net/radio/sayeed_ramadan",country:"مصر",genre:"القرآن الكريم برواية  حفص عن عاصم"},
{name:"إذاعة صابر عبدالحكم",logo:"https://tvquran.com/uploads/authors/images/%D8%B5%D8%A7%D8%A8%D8%B1%20%D8%B9%D8%A8%D8%AF%20%D8%A7%D9%84%D8%AD%D9%83%D9%85.jpg",url:"https://backup.qurango.net/radio/saber_abdulhakm",country:"مصر",genre:"القرآن الكريم برواية  حفص عن عاصم"},
{name:"إذاعة عبدالبارئ محمد",logo:"https://almsaeyimages.akhbarelyom.com/large/20221130150924454.jpg",url:"https://backup.qurango.net/radio/abdulbari_mohammad",country:"مصر",genre:"القرآن الكريم برواية  حفص عن عاصم"},
{name:"إذاعة عبدالباسط عبدالصمد",logo:"https://almsaeyimages.akhbarelyom.com/large/20221130150924454.jpg",url:"https://backup.qurango.net/radio/abdulbasit_abdulsamad",country:"مصر",genre:"القرآن الكريم برواية  حفص عن عاصم"},
{name:"إذاعة عبدالرحمن الشحات",logo:"https://i1.sndcdn.com/artworks-3YNfiNH8SACoq596-mukyjw-t500x500.jpg",url:"https://backup.qurango.net/radio/a_alshahhat",country:"مصر",genre:"القرآن الكريم برواية  حفص عن عاصم"},
{name:"إذاعة حاتم فريد الواعر",logo:"https://tvquran.com/uploads/authors/images/%D8%AD%D8%A7%D8%AA%D9%85%20%D9%81%D8%B1%D9%8A%D8%AF%20%D8%A7%D9%84%D9%88%D8%A7%D8%B9%D8%B1.jpg",url:"https://backup.qurango.net/radio/hatem_fareed_alwaer",country:"مصر",genre:"القرآن الكريم برواية  حفص عن عاصم"},
{name:"إذاعة عبدالرشيد صوفي",logo:"https://tvquran.com/uploads/authors/images/%D8%B9%D8%A8%D8%AF%20%D8%A7%D9%84%D8%B1%D8%B4%D9%8A%D8%AF%20%D8%A8%D9%86%20%D8%B9%D9%84%D9%8A%20%D8%B5%D9%88%D9%81%D9%8A.jpg",url:"https://backup.qurango.net/radio/abdulrasheed_soufi_khalaf",country:"الصومال",genre:"القرآن الكريم برواية  خلف عن حمزة"},
{name:"إذاعة علي الحذيفي",logo:"https://tvquran.com/uploads/authors/images/%D8%B9%D9%84%D9%8A%20%D8%A7%D9%84%D8%AD%D8%B0%D9%8A%D9%81%D9%8A.jpg",url:"https://backup.qurango.net/radio/ali_alhuthaifi_qalon",country:"السعودية",genre:"القرآن الكريم برواية  قالون عن نافع"},
{name:"إذاعة أحمد خضر الطرابلسي",logo:"https://tvquran.com/uploads/authors/images/%D8%A3%D8%AD%D9%85%D8%AF%20%D8%AE%D8%B6%D8%B1%20%D8%A7%D9%84%D8%B7%D8%B1%D8%A7%D8%A8%D9%84%D8%B3%D9%8A.jpg",url:"https://backup.qurango.net/radio/ahmad_khader_altarabulsi",country:"الكويت",genre:"القرآن الكريم برواية  قالون عن نافع"},
{name:"إذاعة الدوكالي محمد العالم",logo:"https://tvquran.com/uploads/authors/images/%D8%A7%D9%84%D8%AF%D9%88%D9%83%D8%A7%D9%84%D9%8A%20%D9%85%D8%AD%D9%85%D8%AF%20%D8%A7%D9%84%D8%B9%D8%A7%D9%84%D9%85.jpg",url:"https://backup.qurango.net/radio/addokali_mohammad_alalim",country:"ليبيا",genre:"القرآن الكريم برواية  قالون عن نافع"},
{name:"إذاعة طارق عبدالغني دعوب",logo:"https://static.suratmp3.com/pics/reciters/thumbs/88_600_600.jpg",url:"https://backup.qurango.net/radio/tareq_abdulgani_daawob",country:"ليبيا",genre:"القرآن الكريم برواية  قالون عن نافع"},
{name:"أذاعة محمد أبوسنينة",logo:"https://tvquran.com/uploads/authors/images/%D9%85%D8%AD%D9%85%D8%AF%20%D8%A3%D8%A8%D9%88%20%D8%B3%D9%86%D9%8A%D9%86%D8%A9.jpg",url:"https://backup.qurango.net/radio/sneineh",country:"ليبيا",genre:"القرآن الكريم برواية  قالون عن نافع"},
{name:"إذاعة محمد الأمين قنيوة",logo:"https://tvquran.com/uploads/authors/images/%D8%A7%D9%84%D8%A3%D9%85%D9%8A%D9%86%20%D9%85%D8%AD%D9%85%D8%AF%20%D9%82%D9%86%D9%8A%D9%88%D9%87.jpg",url:"https://backup.qurango.net/radio/qeniwa",country:"ليبيا",genre:"القرآن الكريم برواية  قالون عن نافع"},
{name:"إذاعة وليد النائحي",logo:"https://tvquran.com/uploads/authors/images/%D9%88%D9%84%D9%8A%D8%AF%20%D8%A7%D9%84%D9%86%D8%A7%D8%A6%D8%AD%D9%8A.jpg",url:"https://backup.qurango.net/radio/waleed_alnaehi",country:"ليبيا",genre:"القرآن الكريم برواية  قالون عن نافع من طريق أبي نشيط"},
{name:"إذاعة ياسر المزروعي ",logo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc-M0CxnBOq46HFx6XSF4XSKiMGHb5XuSQUA&s",url:"https://backup.qurango.net/radio/yasser_almazroyee",country:"الكويت",genre:"القرآن الكريم برواية  قراءة يعقوب الحضرمي بروايتي رويس وروح"},
{name:"إذاعة القارئ ياسين",logo:"https://tvquran.com/uploads/authors/images/%D9%8A%D8%A7%D8%B3%D9%8A%D9%86%20%D8%A7%D9%84%D8%AC%D8%B2%D8%A7%D8%A6%D8%B1%D9%8A.jpg",url:"https://backup.qurango.net/radio/alqaria_yassen",country:"الجزائر",genre:"القرآن الكريم برواية  ورش عن نافع"},
{name:"إذاعة ابراهيم الدوسري",logo:"https://tvquran.com/uploads/authors/images/%D8%A5%D8%A8%D8%B1%D8%A7%D9%87%D9%8A%D9%85%20%D8%A7%D9%84%D8%AF%D9%88%D8%B3%D8%B1%D9%8A.jpg",url:"https://backup.qurango.net/radio/ibrahim_aldosari",country:"السعودية",genre:"القرآن الكريم برواية  ورش عن نافع"},
{name:"إذاعة المقرئ خليل ديدي",logo:"https://zeno.fm/_ipx/q_85&fit_cover&s_144x144/https://images.zeno.fm/pkNJyJepAsbjdjbOteUipmDzO8lR00soDvfADY2GsHk/rs:fill:288:288/g:ce:0:0/aHR0cHM6Ly9wcm94eS56ZW5vLmZtL2NvbnRlbnQvc3RhdGlvbnMvYWd4emZucGxibTh0YzNSaGRITnlNZ3NTQ2tGMWRHaERiR2xsYm5RWWdJRElnTkRib1FrTUN4SU9VM1JoZEdsdmJsQnliMlpwYkdVWWdJQ0kzN3VQNFFrTW9nRUVlbVZ1YncvaW1hZ2UvP3U9MTY3NjkwOTcwMDAwMA.webp",url:"https://stream-175.zeno.fm/cbnxzb0f8rhvv?",country:"المغرب",genre:"القرآن الكريم برواية  ورش عن نافع"},
{name:"إذاعة القارئ عبد الرحمن بن موسى",logo:"https://tvquran.com/uploads/authors/images/%D8%B9%D8%A8%D8%AF%20%D8%A7%D9%84%D8%B1%D8%AD%D9%85%D9%86%20%D8%A8%D9%86%D9%85%D9%88%D8%B3%D9%89.jpg",url:"https://stream-172.zeno.fm/r7fre971wwzuv?",country:"المغرب",genre:"القرآن الكريم برواية  ورش عن نافع"},
{name:"إذاعة القارئ عبد الرحمن بن موسى",logo:"https://way2quran.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fway2quran_storage%2Fimgs%2Fabdel-rahman-benmoussa.jpg&w=640&q=75",url:"https://stream-172.zeno.fm/vqzasnxok3vvv?",country:"المغرب",genre:"القرآن الكريم برواية  ورش عن نافع"},
{name:"إذاعة عمر القزابري",logo:"https://tvquran.com/uploads/authors/images/%D8%B9%D9%85%D8%B1%20%D8%A7%D9%84%D9%82%D8%B2%D8%A7%D8%A8%D8%B1%D9%8A.jpg",url:"https://backup.qurango.net/radio/omar_alqazabri",country:"المغرب",genre:"القرآن الكريم برواية  ورش عن نافع"},
{name:"إذاعة العيون الكوشي",logo:"https://ar.yassine.net/_next/image?url=https%3A%2F%2Fbo.yassine.net%2Fwp-content%2Fuploads%2F2012%2F08%2FKouchi_laayoun.jpg&w=3840&q=75",url:"https://backup.qurango.net/radio/aloyoon_alkoshi",country:"المغرب",genre:"القرآن الكريم برواية  ورش عن نافع"},
{name:"إذاعة عبدالعزيز سحيم",logo:"https://i.pinimg.com/564x/a7/37/47/a73747375897de4897da372a0fd921a0.jpg",url:"https://backup.qurango.net/radio/a_sheim",country:"المغرب",genre:"القرآن الكريم برواية  ورش عن نافع"},
{name:"إذاعة محمود خليل الحصري",logo:"https://i1.sndcdn.com/artworks-000037504497-6g5fx7-t500x500.jpg",url:"https://backup.qurango.net/radio/mahmoud_khalil_alhussary_warsh",country:"مصر",genre:"القرآن الكريم برواية  ورش عن نافع"},
{name:"إذاعة عبدالباسط عبدالصمد",logo:"https://almsaeyimages.akhbarelyom.com/large/20221130150924454.jpg",url:"https://backup.qurango.net/radio/abdulbasit_abdulsamad_warsh",country:"مصر",genre:"القرآن الكريم برواية  ورش عن نافع"},
{name:"إذاعة محمد عبدالكريم",logo:"https://tvquran.com/uploads/authors/images/%D9%85%D8%AD%D9%85%D8%AF%20%D8%B9%D8%A8%D8%AF%20%D8%A7%D9%84%D9%83%D8%B1%D9%8A%D9%85.jpg",url:"https://backup.qurango.net/radio/mohammad_abdullkarem_alasbahani",country:"السودان",genre:"القرآن الكريم برواية  ورش عن نافع من طريق أبي بكر الأصبهاني"},
{name:"إذاعة عبدالباسط عبدالصمد - ورش عن نافع",logo:"https://zeno.fm/_ipx/q_85&fit_cover&s_144x144/https://images.zeno.fm/yYeUYWH7-stTH6ms0xkB4gAMxN8NMxu6VwnOdynaHZE/rs:fill:288:288/g:ce:0:0/aHR0cHM6Ly9wcm94eS56ZW5vLmZtL2NvbnRlbnQvc3RhdGlvbnMvNWZmNzY1ZjEtMGRhNS00N2FjLWI4ZjItN2I2NGFjZGU0Y2Y0L2ltYWdlLz91PTE2Nzc0NzM1MDEwMDA.webp",url:"https://stream-174.zeno.fm/g32vqo7xodjvv?",country:"مصر",genre:"القرآن الكريم برواية ورش عن نافع"},
{name:"إذاعة الألوكة  اللغة العربية وعلومه",logo:"https://guidetodawah.com/media/326155791-1207628506549020-3292065372911974208-n1797_showWebsiteThumb.png",url:"https://radio.alukah.net/arabiyyah",country:"السعودية",genre:"اللعة العربية و الآداب"},
{name:"إذاعة الألوكة  الأدب والتراث العربي",logo:"https://guidetodawah.com/media/326155791-1207628506549020-3292065372911974208-n1797_showWebsiteThumb.png",url:"https://radio.alukah.net/aladab",country:"السعودية",genre:"اللعة العربية و الآداب"},
{name:"إذاعة إنشاد الاسلامية",logo:"https://zeno.fm/_ipx/q_85&fit_cover&s_144x144/https://images.zeno.fm/HbuSA-ZhwHAjmW9fwhX79SHSoEYhd0cCXK58eZLptJY/rs:fill:288:288/g:ce:0:0/aHR0cHM6Ly9wcm94eS56ZW5vLmZtL2NvbnRlbnQvc3RhdGlvbnMvYWd4emZucGxibTh0YzNSaGRITnlNZ3NTQ2tGMWRHaERiR2xsYm5RWWdJRFE4YUxoemdrTUN4SU9VM1JoZEdsdmJsQnliMlpwYkdVWWdJRFE4N1d0aEFvTW9nRUVlbVZ1YncvaW1hZ2UvP3U9MTY3Nzk2NjY2MjAwMA.webp",url:"https://stream-153.zeno.fm/r7b3nzkzng8uv?",country:"الكويت",genre:"أناشيد"},
{name:"Maher Zain",logo:"https://zeno.fm/_ipx/q_85&fit_cover&s_144x144/https://images.zeno.fm/jiYwT2luWzDHUcg8pr-nkU2CJAQnp4b81PbUEAYE-PU/rs:fill:288:288/g:ce:0:0/aHR0cHM6Ly9wcm94eS56ZW5vLmZtL2NvbnRlbnQvc3RhdGlvbnMvYWd4emZucGxibTh0YzNSaGRITnlNZ3NTQ2tGMWRHaERiR2xsYm5RWWdJQ1FxWXF4aFFvTUN4SU9VM1JoZEdsdmJsQnliMlpwYkdVWWdJRFEtdGF2N1FrTW9nRUVlbVZ1YncvaW1hZ2UvP3U9MTczMjEwOTc4MDAwMA.webp",url:"https://stream-162.zeno.fm/u2nsk8cs5f0uv?",country:"ألمانيا",genre:"أناشيد"},
{name:"إذاعة إشاد",logo:"https://zeno.fm/_ipx/q_85&fit_cover&s_144x144/https://images.zeno.fm/dAeXVYasRfZeczzxy1RYh5mPhwjIKDZrKPgFrl_HXYY/rs:fill:288:288/g:ce:0:0/aHR0cHM6Ly9wcm94eS56ZW5vLmZtL2NvbnRlbnQvc3RhdGlvbnMvYWd4emZucGxibTh0YzNSaGRITnlNZ3NTQ2tGMWRHaERiR2xsYm5RWWdJQ1E5YTZXNGdnTUN4SU9VM1JoZEdsdmJsQnliMlpwYkdVWWdJQ1E5ZVdPaWdzTW9nRUVlbVZ1YncvaW1hZ2UvP3U9MTY2MTY3OTgyODAwMA.webp",url:"https://stream-153.zeno.fm/fam4w04v24zuv?",country:"مصر",genre:"أناشيد"},
{name:"ترجمة معاني القرآن باللغة الأسبانية",logo:"https://quranlives.com/wp-content/uploads/2024/03/Realistic_Al_Quran-01.webp",url:"https://backup.qurango.net/radio/translation_quran_spanish_afs",country:"السعودية",genre:"ترجمة معاني القرآن الكريم"},
{name:"ترجمة معاني القرآن باللغة الألبانية",logo:"https://quranlives.com/wp-content/uploads/2024/03/Realistic_Al_Quran-01.webp",url:"https://backup.qurango.net/radio/translation_quran_albanian",country:"السعودية",genre:"ترجمة معاني القرآن الكريم"},
{name:"ترجمة معاني القرآن باللغة الألمانية",logo:"https://quranlives.com/wp-content/uploads/2024/03/Realistic_Al_Quran-01.webp",url:"https://backup.qurango.net/radio/translation_quran_german",country:"السعودية",genre:"ترجمة معاني القرآن الكريم"},
{name:"ترجمة معاني القرآن باللغة الأمازيغية",logo:"https://quranlives.com/wp-content/uploads/2024/03/Realistic_Al_Quran-01.webp",url:"https://backup.qurango.net/radio/translation_quran_tamazight",country:"السعودية",genre:"ترجمة معاني القرآن الكريم"},
{name:"ترجمة معاني القرآن باللغة الأوردية",logo:"https://quranlives.com/wp-content/uploads/2024/03/Realistic_Al_Quran-01.webp",url:"https://backup.qurango.net/radio/translation_quran_urdu_sds_shur",country:"السعودية",genre:"ترجمة معاني القرآن الكريم"},
{name:"ترجمة معاني القرآن باللغة الأوردية",logo:"https://quranlives.com/wp-content/uploads/2024/03/Realistic_Al_Quran-01.webp",url:"https://backup.qurango.net/radio/translation_quran_urdu_minsh",country:"السعودية",genre:"ترجمة معاني القرآن الكريم"},
{name:"ترجمة معاني القرآن باللغة الأوردية - عبدالباسط عبدالصمد",logo:"https://quranlives.com/wp-content/uploads/2024/03/Realistic_Al_Quran-01.webp",url:"https://backup.qurango.net/radio/translation_quran_urdu_basit",country:"السعودية",genre:"ترجمة معاني القرآن الكريم"},
{name:"ترجمة معاني القرآن باللغة الإنجليزية",logo:"https://quranlives.com/wp-content/uploads/2024/03/Realistic_Al_Quran-01.webp",url:"https://backup.qurango.net/radio/translation_quran_english_basit",country:"السعودية",genre:"ترجمة معاني القرآن الكريم"},
{name:"ترجمة معاني القرآن باللغة الإنجليزية",logo:"https://quranlives.com/wp-content/uploads/2024/03/Realistic_Al_Quran-01.webp",url:"https://backup.qurango.net/radio/translation_quran_english_bsfr",country:"السعودية",genre:"ترجمة معاني القرآن الكريم"},
{name:"ترجمة معاني القرآن باللغة الإنجليزية ترجمة والك",logo:"https://quranlives.com/wp-content/uploads/2024/03/Realistic_Al_Quran-01.webp",url:"https://backup.qurango.net/radio/translation_quran_english_walk_basit",country:"السعودية",genre:"ترجمة معاني القرآن الكريم"},
{name:"ترجمة معاني القرآن باللغة البرتغالية",logo:"https://quranlives.com/wp-content/uploads/2024/03/Realistic_Al_Quran-01.webp",url:"https://backup.qurango.net/radio/translation_quran_portuguese",country:"السعودية",genre:"ترجمة معاني القرآن الكريم"},
{name:"ترجمة معاني القرآن باللغة البوسنية",logo:"https://quranlives.com/wp-content/uploads/2024/03/Realistic_Al_Quran-01.webp",url:"https://backup.qurango.net/radio/translation_quran_bosnia",country:"السعودية",genre:"ترجمة معاني القرآن الكريم"},
{name:"ترجمة معاني القرآن باللغة التركية",logo:"https://quranlives.com/wp-content/uploads/2024/03/Realistic_Al_Quran-01.webp",url:"https://backup.qurango.net/radio/translation_quran_turkish",country:"السعودية",genre:"ترجمة معاني القرآن الكريم"},
{name:"ترجمة معاني القرآن باللغة الروسية",logo:"https://quranlives.com/wp-content/uploads/2024/03/Realistic_Al_Quran-01.webp",url:"https://backup.qurango.net/radio/translation_quran_Russia",country:"السعودية",genre:"ترجمة معاني القرآن الكريم"},
{name:"ترجمة معاني القرآن باللغة الصينية",logo:"https://quranlives.com/wp-content/uploads/2024/03/Realistic_Al_Quran-01.webp",url:"https://backup.qurango.net/radio/translation_quran_chinese",country:"السعودية",genre:"ترجمة معاني القرآن الكريم"},
{name:"ترجمة معاني القرآن باللغة الفارسية",logo:"https://quranlives.com/wp-content/uploads/2024/03/Realistic_Al_Quran-01.webp",url:"https://backup.qurango.net/radio/translation_quran_farsi",country:"السعودية",genre:"ترجمة معاني القرآن الكريم"},
{name:"ترجمة معاني القرآن باللغة الفارسية - أهل القرآن-",logo:"https://quranlives.com/wp-content/uploads/2024/03/Realistic_Al_Quran-01.webp",url:"https://backup.qurango.net/radio/farsi-trans",country:"السعودية",genre:"ترجمة معاني القرآن الكريم"},
{name:"ترجمة معاني القرآن باللغة الفرنسية",logo:"https://quranlives.com/wp-content/uploads/2024/03/Realistic_Al_Quran-01.webp",url:"https://backup.qurango.net/radio/translation_quran_french",country:"السعودية",genre:"ترجمة معاني القرآن الكريم"},
{name:"ترجمة معاني القرآن باللغة الكردية",logo:"https://quranlives.com/wp-content/uploads/2024/03/Realistic_Al_Quran-01.webp",url:"https://backup.qurango.net/radio/translation_quran_kurdish",country:"السعودية",genre:"ترجمة معاني القرآن الكريم"},
{name:"ترجمة معاني القرآن باللغة الكورية",logo:"https://quranlives.com/wp-content/uploads/2024/03/Realistic_Al_Quran-01.webp",url:"https://backup.qurango.net/radio/translation_quran_Korean",country:"السعودية",genre:"ترجمة معاني القرآن الكريم"},
{name:"ترجمة معاني القرآن باللغة المجرية",logo:"https://quranlives.com/wp-content/uploads/2024/03/Realistic_Al_Quran-01.webp",url:"https://backup.qurango.net/radio/translation_quran_hungarian",country:"السعودية",genre:"ترجمة معاني القرآن الكريم"},
{name:"ترجمة معاني القرآن باللغة الهوسا",logo:"https://quranlives.com/wp-content/uploads/2024/03/Realistic_Al_Quran-01.webp",url:"https://backup.qurango.net/radio/Translation_Quran_Hausa",country:"السعودية",genre:"ترجمة معاني القرآن الكريم"},
{name:"ترجمة معاني القرآن باللغة اليونانية",logo:"https://quranlives.com/wp-content/uploads/2024/03/Realistic_Al_Quran-01.webp",url:"https://backup.qurango.net/radio/translation_quran_greek",country:"السعودية",genre:"ترجمة معاني القرآن الكريم"},
{name:"إذاعة وحي للتفسير",logo:"https://zeno.fm/_ipx/q_85&fit_cover&s_144x144/https://images.zeno.fm/9-lrvCwE9cWrI5o4xK5JPZNCTv64Xo-z5yK8goBhHes/rs:fill:288:288/g:ce:0:0/aHR0cHM6Ly9wcm94eS56ZW5vLmZtL2NvbnRlbnQvc3RhdGlvbnMvM2JjNTI2ZjctNWJmOC00OTQzLTlkOWYtNDU0YTc2YTQ5Y2MwL2ltYWdlLz91PTE3MDc4NTcyNzYwMDA.webp",url:"https://stream-172.zeno.fm/jrhjbg02dezvv?",country:"الأردن",genre:"تفسير القرآن الكريم"},
{name:"إذاعة إستقم كما أمرت تفسير القرآن الكريم",logo:"https://zeno.fm/_ipx/q_85&fit_cover&s_144x144/https://images.zeno.fm/zxUTelo-5jfINpKAmeYStQIKDwtGYttcmLRuwgrsrX0/rs:fill:288:288/g:ce:0:0/aHR0cHM6Ly9wcm94eS56ZW5vLmZtL2NvbnRlbnQvc3RhdGlvbnMvYWd4emZucGxibTh0YzNSaGRITnlNZ3NTQ2tGMWRHaERiR2xsYm5RWWdJRFE2LXpPelFvTUN4SU9VM1JoZEdsdmJsQnliMlpwYkdVWWdJRFFpLUtZbndrTW9nRUVlbVZ1YncvaW1hZ2UvP3U9MTY2MTU0ODkyMzAwMA.webp",url:"https://stream-154.zeno.fm/0ermkt2htg8uv?",country:"الجزائر",genre:"تفسير القرآن الكريم"},
{name:"النهج الواضح: الإذاعة الثالثة",logo:"https://alqol.com/wp-content/uploads/2017/07/%D8%A5%D8%B0%D8%A7%D8%B9%D8%A9-%D8%A7%D9%84%D9%86%D9%87%D8%AC-%D8%A7%D9%84%D9%88%D8%A7%D8%B6%D8%AD.jpg",url:"https://node33.obviousapproach.com:9002/stream",country:"السعودية",genre:"تفسير القرآن الكريم"},
{name:"إذاعة تفسير بن عثيمين رحمه الله",logo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIcUREK3PDMu-VN-mkb1CsPCeC8mljO-q3Sg&s",url:"https://qurango.net/radio/tafseer?",country:"السعودية",genre:"تفسير القرآن الكريم"},
{name:"إذاعة تفسير القران الكريم",logo:"https://zeno.fm/_ipx/q_85&fit_cover&s_288x288/https://images.zeno.fm/xoyTtZtYznQb-lecNJvpwub3SL8H-3zoQ2WkYxWp0ko/rs:fill:288:288/g:ce:0:0/aHR0cHM6Ly9wcm94eS56ZW5vLmZtL2NvbnRlbnQvc3RhdGlvbnMvYWd4emZucGxibTh0YzNSaGRITnlNZ3NTQ2tGMWRHaERiR2xsYm5RWWdJRFFrNEdSN3drTUN4SU9VM1JoZEdsdmJsQnliMlpwYkdVWWdJRFE2X1Roa2dvTW9nRUVlbVZ1YncvaW1hZ2UvP3U9MTY2MDc1MDEyOTAwMA.webp",url:"https://backup.qurango.net/radio/tafseer",country:"السعودية",genre:"تفسير القرآن الكريم"},
{name:"المختصر في تفسير القرآن الكريم",logo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv2DZTeDw2x7HqkZDk-WBVaVCJ2RuhIjqc3w&s",url:"https://backup.qurango.net/radio/mukhtasartafsir",country:"السعودية",genre:"تفسير القرآن الكريم"},
{name:"تفسير القران الكريم الخلاصة من تفسير الطبري",logo:"https://upload.wikimedia.org/wikipedia/ar/d/dc/Tafseer_Al_Tabari.jpg",url:"https://backup.qurango.net/radio/tabri",country:"السعودية",genre:"تفسير القرآن الكريم"},
{name:"إذاعة الألوكة تفسير القرآن الكريم",logo:"https://guidetodawah.com/media/326155791-1207628506549020-3292065372911974208-n1797_showWebsiteThumb.png",url:"https://radio.alukah.net/tafsir",country:"السعودية",genre:"تفسير القرآن الكريم"},
{name:"إذاعة تفسير القرآن الكريم",logo:"https://cdn.raddio.net/storage/photos/146914/81930df258a517849da44a1529b15a07_100x100.webp",url:"http://206.72.199.179:9992//;",country:"الولايات الأمريكية المتحدة",genre:"تفسير القرآن الكريم"},
{name:"إذاعة تفسير القرآن ",logo:"https://zeno.fm/_ipx/q_85&fit_cover&s_64x64/https://images.zeno.fm/SBb3kG1Bcdbj6fZ0z7UJVhc2bEw23U0a4F5opFgCyqA/rs:fill:288:288/g:ce:0:0/aHR0cHM6Ly9wcm94eS56ZW5vLmZtL2NvbnRlbnQvc3RhdGlvbnMvYjU4YmNlMmItMTg4My00NzNiLTkxZmQtN2QwYjU4MzVhNGU0L2ltYWdlLz91PTE3MDE2OTUzOTMwMDA.webp",url:"https://radio.quranradiotafsir.com/9992/stream?",country:"فلسطين",genre:"تفسير القرآن الكريم"},
{name:"إذاعة محمد متولي الشعراوي",logo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl2VIn7bpArLUzIuT5IOQcZiJ0bIjOztlNgA&s",url:"https://stream-176.zeno.fm/2fngkhm0pnhvv?",country:"مصر",genre:"تفسير القرآن الكريم"},
{name:"إذاعةتفسير القرآن الكريم",logo:"https://zeno.fm/_ipx/q_85&fit_cover&s_144x144/https://images.zeno.fm/3efMTV6hQ2EuDabsX28Ok2J8rsmRhUN_hUReRZteqFM/rs:fill:288:288/g:ce:0:0/aHR0cHM6Ly9wcm94eS56ZW5vLmZtL2NvbnRlbnQvc3RhdGlvbnMvYWd4emZucGxibTh0YzNSaGRITnlNZ3NTQ2tGMWRHaERiR2xsYm5RWWdJQ0lqTmE4bXdrTUN4SU9VM1JoZEdsdmJsQnliMlpwYkdVWWdJQ0k5TDNmN3dvTW9nRUVlbVZ1YncvaW1hZ2UvP3U9MTY2MTg5MDQ1ODAwMA.webp",url:"https://stream-175.zeno.fm/1qra3eu49ehvv?",country:"مصر",genre:"تفسير القرآن الكريم"},
{name:"إذاعة تلاوات خاشعة",logo:"https://i1.sndcdn.com/avatars-HJUkqKyyCPLk6jIA-ziFH5g-t1080x1080.jpg",url:"https://backup.qurango.net/radio/salma",country:"السعودية",genre:"تلاوات خاشعة"},
{name:"Voice of Islam",logo:"http://voiceofislam.co.uk/wp-content/uploads/2021/01/voice-of-Islam-radio-logo-254-128-.png",url:"https://s6.voscast.com:9981/stream",country:"أستراليا",genre:"دعوية"},
{name:"إذاعة الصوت الإسلامي",logo:"https://thevoiceofislam.com.au/img/logo-110.png",url:"https://stream.appsunderstream.com/voiceofislam.mp3",country:"أستراليا",genre:"دعوية"},
{name:"Al Quran Al Kareem Radio",logo:"https://cdn.raddio.net/storage/photos/69639/9d92bc6abfb9b116a008b0b4c6db5aa7_100x100.webp",url:"http://listen.qkradio.com.au:8382/listen.mp3",country:"أستراليا",genre:"دعوية"},
{name:"Voice of Islam",logo:"https://static2.mytuner.mobi/media/tvos_radios/NNG7eD45r6.png",url:"http://voiceofislam.appsunder.com:8000/voiceofislam.mp3",country:"أستراليا",genre:"دعوية"},
{name:"Muslim Community Radio",logo:"https://static2.mytuner.mobi/media/tvos_radios/pwtgyrx3sedx.jpg",url:"https://2mfm.org.au/live",country:"أستراليا",genre:"دعوية"},
{name:"إذاعة الشيخ محمد متولي الشعراوي",logo:"https://zeno.fm/_ipx/q_85&fit_cover&s_144x144/https://images.zeno.fm/wY7x5aGxpkRTifhgdY3S-taXaLrJ-KbGmGL14dpbwA0/rs:fill:288:288/g:ce:0:0/aHR0cHM6Ly9wcm94eS56ZW5vLmZtL2NvbnRlbnQvc3RhdGlvbnMvNGYyM2RlNTYtZDRjNi00YWFkLWEyYTYtOGI4NGIzYmNiMzEwL2ltYWdlLz91PTE3MDc4MDY4ODcwMDA.webp",url:"https://stream-154.zeno.fm/guuggdfrvssuv?",country:"الأردن",genre:"دعوية"},
{name:"اذاعة حسنى",logo:"https://zeno.fm/_ipx/q_85&fit_cover&s_144x144/https://images.zeno.fm/Z-H5jfG6ucuBrxpIH5iDrXuWk5x8Wl20XiaXCwBmslU/rs:fill:288:288/g:ce:0:0/aHR0cHM6Ly9wcm94eS56ZW5vLmZtL2NvbnRlbnQvc3RhdGlvbnMvYmY1MzdiYzAtM2MyYS00NDZjLTgxZTgtOWM2Mjc3ODhhNGY1L2ltYWdlLz91PTE3MTM5NjQ5OTYwMDA.webp",url:"https://s2.voscast.com:10445/stream?",country:"الأردن",genre:"دعوية"},
{name:"إذاعة نور دبي أبو ظبي",logo:"https://cdn.raddio.net/storage/photos/346753/16e5fb9b749ade4d812b51577a0bb16f_100x100.webp",url:"https://dmithrvllta.cdn.mgmlcdn.com/noordubairdo/noordubairdo_aac/media-u868awi8z_12258.aac",country:"الإمارات العربية",genre:"دعوية"},
{name:"إذاعة آيات القرآن الكريم",logo:"https://zeno.fm/_ipx/q_85&fit_cover&s_144x144/https://images.zeno.fm/robbaA2pOz_HE4LWlZ-E0uojifnIb8MB7Im7WjHaBsc/rs:fill:288:288/g:ce:0:0/aHR0cHM6Ly9wcm94eS56ZW5vLmZtL2NvbnRlbnQvc3RhdGlvbnMvYWd4emZucGxibTh0YzNSaGRITnlNZ3NTQ2tGMWRHaERiR2xsYm5RWWdJQ3cwSVdDdHdvTUN4SU9VM1JoZEdsdmJsQnliMlpwYkdVWWdJQ3cxN3FLOXdrTW9nRUVlbVZ1YncvaW1hZ2UvP3U9MTczMDc1MzQwOTAwMA.webp",url:"https://stream-174.zeno.fm/vf2hfg10d48uv?",country:"الجزائر",genre:"دعوية"},
{name:"إذاعة بدائع",logo:"https://zeno.fm/_ipx/q_85&fit_cover&s_144x144/https://images.zeno.fm/-9rnCurp8lxqO7SGEtwlCc32ysolqASfQQN70_7lkD4/rs:fill:288:288/g:ce:0:0/aHR0cHM6Ly9wcm94eS56ZW5vLmZtL2NvbnRlbnQvc3RhdGlvbnMvOWEzODM3NjktNmE4ZS00MDFkLThiOWUtMjEyZmIxNTQ0NmQwL2ltYWdlLz91PTE2NjYyNzQ0ODYwMDA.webp",url:"https://stream-174.zeno.fm/fz26c9mapk1tv?",country:"الجزائر",genre:"دعوية"},
{name:"إذاعة القرآن الكريم من الجزائر",logo:"https://liveonlineradio.net/wp-content/uploads/2014/06/quran-radio-algerie-100x47.jpg",url:"https://webradio.tda.dz/Coran_64K.mp3",country:"الجزائر",genre:"دعوية"},
{name:"فضل شهر رمضان",logo:"https://newsy.almesasports.com/wp-content/uploads/2025/01/%D9%85%D9%88%D8%B9%D8%AF-%D8%B4%D9%87%D8%B1-%D8%B1%D9%85%D8%B6%D8%A7%D9%861-800x600.jpg?v=1737031962",url:"https://backup.qurango.net/radio/ramadan",country:"السعودية",genre:"دعوية"},
{name:" إذاعة قناة مكة",logo:"https://makkahtv.tv/assets/images/makkah-channel-redcolor-1440-alpha-570x716.png",url:"http://n0f.radiojar.com/4wqre23fytzuv?rj-ttl=5&rj-tok=AAABlInVw-4AO8x6tUd9jv2EHQ",country:"السعودية",genre:"دعوية"},
{name:" إذاعة أهل القرآن",logo:"https://www.tunisie-radio.com/sites/default/files/radio/radio-quran-dh-lqran.jpg",url:"http://r7.tarat.com:8002/stream?type=http&nocache=8",country:"السعودية",genre:"دعوية"},
{name:" إذاعة ميراث الأنبياء",logo:"https://th.bing.com/th/id/R.384225cd6e7393aa7efcfbad2a1db453?rik=fc%2bt8O4kc38lGA&riu=http%3a%2f%2fwww.miraath.net%2fradio%2f3%2fimages%2flogo.png&ehk=b3pWUnA64ZeLqmUbhKTpUVmt8%2fnsQZlRTLtrYjN03cs%3d&risl=&pid=ImgRaw&r=0",url:"https://radio.al7eah.net/8010/stream",country:"السعودية",genre:"دعوية"},
{name:"إذاعة الألوكة  الفكر والدعوة والثقافة الإسلامية",logo:"https://guidetodawah.com/media/326155791-1207628506549020-3292065372911974208-n1797_showWebsiteThumb.png",url:"https://radio.alukah.net/alfikr",country:"السعودية",genre:"دعوية"},
{name:"إذاعة الألوكة  التوعية الاجتماعية  ",logo:"https://guidetodawah.com/media/326155791-1207628506549020-3292065372911974208-n1797_showWebsiteThumb.png",url:"https://radio.alukah.net/attawiyy",country:"السعودية",genre:"دعوية"},
{name:"إذاعة الألوكة المرأة المسلمة",logo:"https://guidetodawah.com/media/326155791-1207628506549020-3292065372911974208-n1797_showWebsiteThumb.png",url:"https://radio.alukah.net/almarah",country:"السعودية",genre:"دعوية"},
{name:"إذاعة الألوكة  السلوك والآداب والأخلاق ومحاسن الأعمال",logo:"https://guidetodawah.com/media/326155791-1207628506549020-3292065372911974208-n1797_showWebsiteThumb.png",url:"https://radio.alukah.net/assuluk",country:"السعودية",genre:"دعوية"},
{name:"إذاعة الألوكة  المهارات الحياتية والعلوم التربوية",logo:"https://guidetodawah.com/media/326155791-1207628506549020-3292065372911974208-n1797_showWebsiteThumb.png",url:"https://radio.alukah.net/maharat",country:"السعودية",genre:"دعوية"},
{name:"إذاعة الألوكة   شهر رمضان المبارك",logo:"https://guidetodawah.com/media/326155791-1207628506549020-3292065372911974208-n1797_showWebsiteThumb.png",url:"https://radio.alukah.net/ramdan",country:"السعودية",genre:"دعوية"},
{name:"إذاعة الألوكة  الحج",logo:"https://guidetodawah.com/media/326155791-1207628506549020-3292065372911974208-n1797_showWebsiteThumb.png",url:"https://radio.alukah.net/hajj",country:"السعودية",genre:"دعوية"},
{name:"إذاعة نور على نور مباشر ",logo:"https://static2.mytuner.mobi/media/tvos_radios/KUgEbmp6LK.jpg",url:"http://104.7.66.64:8011/;?",country:"السعودية",genre:"دعوية"},
{name:"اذاعة الرشاد الاسلامى",logo:"https://zeno.fm/_ipx/q_85&fit_cover&s_144x144/https://images.zeno.fm/1KfuRKuovGFRr894eRvy5KJQHqAr_xGekHvHztiRbxg/rs:fill:288:288/g:ce:0:0/aHR0cHM6Ly9wcm94eS56ZW5vLmZtL2NvbnRlbnQvc3RhdGlvbnMvMjQwNDg5YWMtNjBkMS00Y2Q5LWJjZjItNTNlMjVmMDdlMjg3L2ltYWdlLz91PTE2Nzk5NTc1MDYwMDA.webp",url:"https://stream-153.zeno.fm/f25bdyn0hz5vv?",country:"السودان",genre:"دعوية"},
{name:"إذاعة دار السلام",logo:"https://zeno.fm/_ipx/q_85&fit_cover&s_144x144/https://images.zeno.fm/KkigDrbkbAS8KwmpEdkgGo-V-ffRVu0oHoGofPeDmgI/rs:fill:288:288/g:ce:0:0/aHR0cHM6Ly9wcm94eS56ZW5vLmZtL2NvbnRlbnQvc3RhdGlvbnMvNDQ4YmEwYTUtMGM0MC00ZjUzLWFkYzYtOWQ3ZjhiNmU1ZjZhL2ltYWdlLz91PTE3MDE2OTg2NjgwMDA.webp",url:"https://streams.radio.co/s0975ec186/listen?",country:"العراق",genre:"دعوية"},
{name:"Dua Kumayl",logo:"https://zeno.fm/_ipx/q_85&fit_cover&s_144x144/https://images.zeno.fm/2oQtHpduc67TFiOviEgUh9yHOk9BbSlotoFoShbzyyk/rs:fill:288:288/g:ce:0:0/aHR0cHM6Ly9wcm94eS56ZW5vLmZtL2NvbnRlbnQvc3RhdGlvbnMvYWd4emZucGxibTh0YzNSaGRITnlNZ3NTQ2tGMWRHaERiR2xsYm5RWWdJQ1FxWXF4aFFvTUN4SU9VM1JoZEdsdmJsQnliMlpwYkdVWWdJRFFwc0RLcWdvTW9nRUVlbVZ1YncvaW1hZ2UvP3U9MTczMjExMDM3MDAwMA.webp",url:"https://stream-175.zeno.fm/8s5h89mp5f0uv?",country:"ألمانيا",genre:"دعوية"},
{name:"إذاعة صدقـة جـارية",logo:"https://zeno.fm/_ipx/q_85&fit_cover&s_144x144/https://images.zeno.fm/JFhTEhJsV7smmEErZ1B10TkdyLVEUtEaJE0hqTs-lNc/rs:fill:288:288/g:ce:0:0/aHR0cHM6Ly9wcm94eS56ZW5vLmZtL2NvbnRlbnQvc3RhdGlvbnMvYWd4emZucGxibTh0YzNSaGRITnlNZ3NTQ2tGMWRHaERiR2xsYm5RWWdJQ0k3NTZXbFFnTUN4SU9VM1JoZEdsdmJsQnliMlpwYkdVWWdJQ0l2N2k3LXdzTW9nRUVlbVZ1YncvaW1hZ2UvP3U9MTY2MTg0NTQzMjAwMA.webp",url:"https://stream-172.zeno.fm/xzxaqh2w5rhvv?",country:"المغرب",genre:"دعوية"},
{name:"إذاعة جسور 2",logo:"https://zeno.fm/_ipx/q_85&fit_cover&s_144x144/https://images.zeno.fm/Y0NmY-q2eQPOMAVVkRFXLz15tv-DUagPHZWiS6gM348/rs:fill:288:288/g:ce:0:0/aHR0cHM6Ly9wcm94eS56ZW5vLmZtL2NvbnRlbnQvc3RhdGlvbnMvNjllYjczMGUtNGI2NS00Nzg1LWJhN2MtMjMxNTFmZGQ3MDU5L2ltYWdlLz91PTE3MTM5NjQ5OTYwMDA.webp",url:"https://stream-155.zeno.fm/emqjxlmcq1avv?",country:"المغرب",genre:"دعوية"},
{name:"إذاعة زين بلادي",logo:"https://zeno.fm/_ipx/q_100&fit_cover&s_160x160/https://images.zeno.fm/fiDduL46Xf5zcLeynxl31vBCFu9BdQtQbnRg8rbokyY/rs:fill:256:256/g:ce:0:0/aHR0cHM6Ly9wcm94eS56ZW5vLmZtL2NvbnRlbnQvc3RhdGlvbnMvZmFhM2FlNzktNzdmYS00MDEwLWFiZWQtNDRkOTM5MjNlYjVhL2ltYWdlLz91PTE3MTM5NjQ5OTYwMDA.webp",url:"https://asmaki.ma:8000/radio.mp3?",country:"المغرب",genre:"دعوية"},
{name:"إذاعة صوت ورزازات",logo:"https://cdn.onlineradiobox.com/img/l/6/20926.v4.png",url:"http://www.quran-radio.org:8002/stream",country:"المغرب",genre:"دعوية"},
{name:"إذاعة الله أكبر",logo:"https://cdn.raddio.net/storage/photos/98154/823a43c801abc5e545b7c46aa8d91bde_80x80.webp",url:"http://66.45.232.132:9996//;",country:"الولايات الأمريكية المتحدة",genre:"دعوية"},
{name:"Quran For the Heart",logo:"https://www.radio.net/300/quranfortheheart.png?version=65f72b47abce9b70b37fb35163458a9c",url:"https://edge.mixlr.com/channel/rwumx",country:"الولايات الأمريكية المتحدة",genre:"دعوية"},
{name:"Riyad as-Salihin",logo:"https://www.radio.net/300/riyadassalihin.png?version=dcf548b7abc5a7ced9620c3bc9611c67",url:"http://104.7.66.64:8085/stream/1/",country:"الولايات الأمريكية المتحدة",genre:"دعوية"},
{name:"Sirat Al - Mustaqim",logo:"https://www.radio.net/assets/images/station_avatar.svg",url:"http://104.7.66.64:8091/stream/1/",country:"الولايات الأمريكية المتحدة",genre:"دعوية"},
{name:"إذاعة نور الأيمان",logo:"https://zeno.fm/_ipx/q_85&fit_cover&s_64x64/https://images.zeno.fm/iSdnN20YFBtQERVdzvGmah_NXs9mBF02Tj24Cain5Ww/rs:fill:288:288/g:ce:0:0/aHR0cHM6Ly9wcm94eS56ZW5vLmZtL2NvbnRlbnQvc3RhdGlvbnMvZDVmMjNkYjAtZDNhMS00NGYxLWFkZWEtYmU1ZDkzMWVmMTJmL2ltYWdlLz91PTE3MDE2OTUzNDUwMDA.webp",url:"https://edge.mixlr.com/channel/boaht?",country:"اليمن",genre:"دعوية"},
{name:"إذاعة نور الإيمان من  اليمن",logo:"https://i.ytimg.com/vi/R77KIAxERTU/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGFQgXyhlMA8=&rs=AOn4CLBxAooDP9LXe4nq61FtTh2yQe3LFw",url:"https://edge.mixlr.com/channel/boaht",country:"اليمن",genre:"دعوية"},
{name:"إذاعة نور عدن",logo:"https://static-media.streema.com/media/cache/c5/44/c5440ca57dbd20ec2c14c2ba7fe15663.jpg",url:"https://c2.radioboss.fm:8768/stream",country:"اليمن",genre:"دعوية"},
{name:"ANSWAR QURAN RADIO",logo:"https://static2.mytuner.mobi/media/tvos_radios/cz4ffNeFPj.jpeg",url:"https://stream-172.zeno.fm/7ndfsp85fc9uv?",country:"أوغندا",genre:"دعوية"},
{name:"اذاعة سبيلي ",logo:"https://zeno.fm/_ipx/q_100&fit_cover/https://images.zeno.fm/MUZ1QvOZI69rJ2uKIGciv7aabquEIpwQaAiZBbn9CQU/rs:fill:256:256/g:ce:0:0/aHR0cHM6Ly96ZW5vaW1hZ2VzLnMzLnVzLXdlc3QtMDAxLmJhY2tibGF6ZWIyLmNvbS9wb2RjYXN0cy9hZ3h6Zm5wbGJtOHRjM1JoZEhOeUt3c1NDa0YxZEdoRmJuUnBkSGtZZ0lDd25icWl6d29NQ3hJSFVHOWtZMkZ6ZEJpQWdMRDkwb3JSQ3d5aUFRZHNhV0p5WVhKNS9pbWFnZXMvbG9nbw.webp",url:"https://stream-175.zeno.fm/am9b4fd7g18uv?",country:"تونس",genre:"دعوية"},
{name:"إذاعة الزيتونة",logo:"https://cdn.raddio.net/storage/photos/308902/a9f03f649689373613702d6dd622db2e_100x100.webp",url:"https://stream.radiozitouna.tn/radio/8030/radio.mp3",country:"تونس",genre:"دعوية"},
{name:"Radio Islam International",logo:"https://static2.mytuner.mobi/media/tvos_radios/5vPbuuNBE5.png",url:"http://listen.radioislam.org.za:8080/radioislam.mp3",country:"جنوب إفريقيا",genre:"دعوية"},
{name:"RTB Nur Islam",logo:"https://static2.mytuner.mobi/media/tvos_radios/2htaeWUWAh.png",url:"https://d2kziuzkf9oizb.cloudfront.net/rd004/chunklist.m3u8",country:"سلطنة برناي",genre:"دعوية"},
{name:"إذاعة القرآن الكريم  نابلس",logo:"https://zeno.fm/_ipx/q_85&fit_cover&s_144x144/https://images.zeno.fm/jk3sw_-ezOLHz6rj-R8eo3nM8fNI54YfknnmfY_YKtQ/rs:fill:288:288/g:ce:0:0/aHR0cHM6Ly9wcm94eS56ZW5vLmZtL2NvbnRlbnQvc3RhdGlvbnMvMmU3N2NmNTktODY2Ni00NWQxLTg0ZmYtODczMjgyN2QwMTc5L2ltYWdlLz91PTE3MTM5NjQ5OTYwMDA.webp",url:"https://quran-radio.org:8444/;?type=http&amp;nocache=19",country:"فلسطين",genre:"دعوية"},
{name:" إذاعة نابلس للقرآن الكريم",logo:"https://th.bing.com/th/id/OIP.3-qLct29k4AnBu4HIvLgkgHaHa?rs=1&pid=ImgDetMain",url:"http://www.quran-radio.org:8002/;stream.mp3",country:"فلسطين",genre:"دعوية"},
{name:"Masjid Alfarouq Radio",logo:"https://cdn.raddio.net/storage/photos/374440/74e419b9c56ae7b8165d602c2acdaf9c_100x100.webp",url:"https://edge.mixlr.com/channel/csesz",country:"كندا",genre:"دعوية"},
{name:"إذاعة طريق الارتقاء",logo:"https://zeno.fm/_ipx/q_85&fit_cover&s_144x144/https://images.zeno.fm/c_KE3nJXlLhS5hdkPPZqXrDr3GITF6seQQbQoHn0oHY/rs:fill:288:288/g:ce:0:0/aHR0cHM6Ly9wcm94eS56ZW5vLmZtL2NvbnRlbnQvc3RhdGlvbnMvYWd4emZucGxibTh0YzNSaGRITnlNZ3NTQ2tGMWRHaERiR2xsYm5RWWdJQ0k0c1BDN2dnTUN4SU9VM1JoZEdsdmJsQnliMlpwYkdVWWdJQ0ktX2JiclFvTW9nRUVlbVZ1YncvaW1hZ2UvP3U9MTczNDUxMDk0NzAwMA.webp",url:"https://stream-175.zeno.fm/bgspaw76srhvv?",country:"لبنان",genre:"دعوية"},
{name:"اذاعة نداء المعرفة",logo:"https://cdn.raddio.net/storage/photos/84449/vl405c2573152540b627118286_100x100.webp",url:"https://nidaa.fm:8443/stream.mp3",country:"لبنان",genre:"دعوية"},
{name:"إذاعة طريق السلف",logo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcWZJYCGvXyUFQLzSBSYgOsr1yYyJKeSeY1w&s",url:"https://airtime.salafwayfm.ly/?",country:"ليبيا",genre:"دعوية"},
{name:"إذاعة نور الإيمان المسموعة",logo:"https://zeno.fm/_ipx/q_85&fit_cover&s_144x144/https://images.zeno.fm/fnt1Ots6B2wUiXdpqmoFs-AR-Hwa0SGQ5KfAKaUkKaU/rs:fill:288:288/g:ce:0:0/aHR0cHM6Ly9wcm94eS56ZW5vLmZtL2NvbnRlbnQvc3RhdGlvbnMvYWd4emZucGxibTh0YzNSaGRITnlNZ3NTQ2tGMWRHaERiR2xsYm5RWWdJQ0luZlN4dlFrTUN4SU9VM1JoZEdsdmJsQnliMlpwYkdVWWdJQ0lfYmlmdndvTW9nRUVlbVZ1YncvaW1hZ2UvP3U9MTcwNjcyNjE4MDAwMA.webp",url:"https://stream-157.zeno.fm/r6eprdta6nhvv?",country:"ليبيا",genre:"دعوية"},
{name:"إذاعة البيان",logo:"https://zeno.fm/_ipx/q_85&fit_cover&s_144x144/https://images.zeno.fm/kZyJAAazdaZTXVein18gcUv88j1OOf2D4tSq19V-mTQ/rs:fill:288:288/g:ce:0:0/aHR0cHM6Ly9wcm94eS56ZW5vLmZtL2NvbnRlbnQvc3RhdGlvbnMvYWd4emZucGxibTh0YzNSaGRITnlNZ3NTQ2tGMWRHaERiR2xsYm5RWWdJQ3c3OUxCeUFzTUN4SU9VM1JoZEdsdmJsQnliMlpwYkdVWWdJQ3duLWFXdGdzTW9nRUVlbVZ1YncvaW1hZ2UvP3U9MTY2MTUwODgwNzAwMA.webp",url:"https://stream-173.zeno.fm/yhwb4y08n48uv?",country:"ليبيا",genre:"دعوية"},
{name:"إذاعة الهدى والنور",logo:"https://zeno.fm/_ipx/q_85&fit_cover&s_144x144/https://images.zeno.fm/h7na92iOyojF249iQ-KBW3bYU_2TKyANaTEO7IovH2w/rs:fill:288:288/g:ce:0:0/aHR0cHM6Ly9wcm94eS56ZW5vLmZtL2NvbnRlbnQvc3RhdGlvbnMvYWd4emZucGxibTh0YzNSaGRITnlNZ3NTQ2tGMWRHaERiR2xsYm5RWWdJRHdtYTM3c2dzTUN4SU9VM1JoZEdsdmJsQnliMlpwYkdVWWdJRHcyZnFxOHdzTW9nRUVlbVZ1YncvaW1hZ2UvP3U9MTY2MTc4NjA1NTAwMA.webp",url:"https://stream-173.zeno.fm/h1g77h045c9uv?",country:"ليبيا",genre:"دعوية"},
{name:"إذاعة طرابلس الدعوية",logo:"https://zeno.fm/_ipx/q_85&fit_cover&s_144x144/https://images.zeno.fm/6ZWcqh47F_k9e9UYsFWNWnFIm0Nv_HIkZjBOyoSyVeg/rs:fill:288:288/g:ce:0:0/aHR0cHM6Ly9wcm94eS56ZW5vLmZtL2NvbnRlbnQvc3RhdGlvbnMvMDI1MTM2NmYtMjVmMy00MDg4LWE2OTItYzEwNmYxZTVmMTY4L2ltYWdlLz91PTE3MTAxNzQzMTUwMDA.webp",url:"https://stream-176.zeno.fm/txdscftogwdvv?",country:"ليبيا",genre:"دعوية"},
{name:"إذاعة الكتاب و السنة",logo:"https://cdn.onlineradiobox.com/img/l/0/75730.v2.png",url:"http://162.244.80.52:6656/stream",country:"ليبيا",genre:"دعوية"},
{name:"إذاعة الشروق الإسلامية",logo:"https://zeno.fm/_ipx/q_85&fit_cover&s_64x64/https://images.zeno.fm/8Igs-PbW4eevtvr2w5-sGaLUlBMRziaIVq6Hts7jgkk/rs:fill:288:288/g:ce:0:0/aHR0cHM6Ly9wcm94eS56ZW5vLmZtL2NvbnRlbnQvc3RhdGlvbnMvYWd4emZucGxibTh0YzNSaGRITnlNZ3NTQ2tGMWRHaERiR2xsYm5RWWdJRHdudTNTX3dnTUN4SU9VM1JoZEdsdmJsQnliMlpwYkdVWWdJQ0l2dWFGelFrTW9nRUVlbVZ1YncvaW1hZ2UvP3U9MTY2MDg1NTU0NzAwMA.webp",url:"https://stream-176.zeno.fm/sf9tbtp3dkhvv?",country:"مصر",genre:"دعوية"},
{name:"إذاعة زاد للمنوعات",logo:"https://zeno.fm/_ipx/q_85&fit_cover&s_64x64/https://images.zeno.fm/xEnEGKhVOLBHEjsr8MdrpuBksqGCzdRaKxNbdBMwl8g/rs:fill:288:288/g:ce:0:0/aHR0cHM6Ly9wcm94eS56ZW5vLmZtL2NvbnRlbnQvc3RhdGlvbnMvYWd4emZucGxibTh0YzNSaGRITnlNZ3NTQ2tGMWRHaERiR2xsYm5RWWdJRElxTzNjaHdnTUN4SU9VM1JoZEdsdmJsQnliMlpwYkdVWWdJRElxSzJoNndnTW9nRUVlbVZ1YncvaW1hZ2UvP3U9MTY5NzgxNzg1NDAwMA.webp",url:"https://stream-154.zeno.fm/tz821uv6huhvv?",country:"مصر",genre:"دعوية"},
{name:"الإذاعة الإسلامية القاهرة",logo:"https://zeno.fm/_ipx/q_85&fit_cover&s_144x144/https://images.zeno.fm/fnIXN-nhEgRv_YNy1CkNaNIopx1UonM006JoT8cfSj0/rs:fill:288:288/g:ce:0:0/aHR0cHM6Ly9wcm94eS56ZW5vLmZtL2NvbnRlbnQvc3RhdGlvbnMvMGMxN2I1YzktNmVlZC00ZTljLTkxMmMtODdjZTMxYzdjNjllL2ltYWdlLz91PTE3MDgyMjI0MDEwMDA.webp",url:"https://stream-162.zeno.fm/jwvrbg1mghotv?",country:"مصر",genre:"دعوية"},
{name:"إذاعةشروق للمنوعات الاسلاميه الجميله",logo:"https://zeno.fm/_ipx/q_85&fit_cover&s_144x144/https://images.zeno.fm/Qc5Vrw2ZMW8xNlGlnNwimvcOOJlZRCsTvBCj-1JYmfY/rs:fill:288:288/g:ce:0:0/aHR0cHM6Ly9wcm94eS56ZW5vLmZtL2NvbnRlbnQvc3RhdGlvbnMvYWd4emZucGxibTh0YzNSaGRITnlNZ3NTQ2tGMWRHaERiR2xsYm5RWWdJRHdudTNTX3dnTUN4SU9VM1JoZEdsdmJsQnliMlpwYkdVWWdJQ0k3dlRYcndrTW9nRUVlbVZ1YncvaW1hZ2UvP3U9MTY2MDg0MTE5MDAwMA.webp",url:"https://stream-172.zeno.fm/6utyu6qr7hhvv?",country:"مصر",genre:"دعوية"},
{name:"إذاعة غذاء الروح",logo:"https://zeno.fm/_ipx/q_85&fit_cover&s_144x144/https://images.zeno.fm/eD80BGrG4ELdF0IO1rypybkqSUMubTi11sNfgcPwN_Q/rs:fill:288:288/g:ce:0:0/aHR0cHM6Ly9wcm94eS56ZW5vLmZtL2NvbnRlbnQvc3RhdGlvbnMvYWd4emZucGxibTh0YzNSaGRITnlNZ3NTQ2tGMWRHaERiR2xsYm5RWWdJRHduYzNKaGdnTUN4SU9VM1JoZEdsdmJsQnliMlpwYkdVWWdJRHdqY2ZROEFrTW9nRUVlbVZ1YncvaW1hZ2UvP3U9MTY2MTI0NDc3NzAwMA.webp",url:"https://stream-172.zeno.fm/446vypsmgf9uv?",country:"مصر",genre:"دعوية"},
{name:"إذاعة شروق لشهر رمضان المعظم",logo:"https://cdn.onlineradiobox.com/img/l/4/114094.v5.png",url:"https://stream-153.zeno.fm/wu9yvyuzpnhvv?",country:"مصر",genre:"دعوية"},
{name:"Shurooq Islamic Mix",logo:"https://cdn.raddio.net/storage/photos/376504/62cfa9665499561b5dc8b0a6ed06e972_100x100.webp",url:"https://stream-155.zeno.fm/w96gktp3dkhvv?",country:"مصر",genre:"دعوية"},
{name:"إذاعة نهر النيل",logo:"https://static2.mytuner.mobi/media/tvos_radios/v7qgCt9LYu.jpg",url:"http://104.7.66.64:8087/;?",country:"مصر",genre:"دعوية"},
{name:"إذاعة الشهادة",logo:"https://zeno.fm/_ipx/q_85&fit_cover&s_144x144/https://images.zeno.fm/EiC-4_0TVuwcneEEoI0SNohL0WGv4euAVCqsa18P5_Y/rs:fill:288:288/g:ce:0:0/aHR0cHM6Ly9wcm94eS56ZW5vLmZtL2NvbnRlbnQvc3RhdGlvbnMvYWd4emZucGxibTh0YzNSaGRITnlNZ3NTQ2tGMWRHaERiR2xsYm5RWWdJRHdscTZkMEFrTUN4SU9VM1JoZEdsdmJsQnliMlpwYkdVWWdJQ0lrZXlKNEFzTW9nRUVlbVZ1YncvaW1hZ2UvP3U9MTY2MTkzOTU4MjAwMA.webp",url:"https://stream-173.zeno.fm/040ncvh5ekhvv?",country:"المغرب",genre:"دعوية "},
{name:"إذاعة البيان أبيدجان",logo:"https://zeno.fm/_ipx/q_85&fit_cover&s_144x144/https://images.zeno.fm/E8sRWS9H5xNAHGPPbJ0BlS4HgDvVC1WanKuO3Q5jqVE/rs:fill:288:288/g:ce:0:0/aHR0cHM6Ly9wcm94eS56ZW5vLmZtL2NvbnRlbnQvc3RhdGlvbnMvYWd4emZucGxibTh0YzNSaGRITnlNZ3NTQ2tGMWRHaERiR2xsYm5RWWdJQ0F4SkdkdkFzTUN4SU9VM1JoZEdsdmJsQnliMlpwYkdVWWdJQ0FnTTYxaXdvTW9nRUVlbVZ1YncvaW1hZ2UvP3U9MTY2MDg2Mjg2MjAwMA.webp",url:"https://stream-145.zeno.fm/0t1c5kna90duv?",country:"ساحل العاج",genre:"دعوية "},
{name:"إذاعة تمرابحت ",logo:"https://zeno.fm/_ipx/q_85&fit_cover&s_64x64/https://images.zeno.fm/RVWaFF3GMOtjqdbp0Oa_zTENbSZRMBVHV8v_6VCxMtM/rs:fill:288:288/g:ce:0:0/aHR0cHM6Ly9wcm94eS56ZW5vLmZtL2NvbnRlbnQvc3RhdGlvbnMvYWd4emZucGxibTh0YzNSaGRITnlNZ3NTQ2tGMWRHaERiR2xsYm5RWWdJQ1F5S1RuOUFnTUN4SU9VM1JoZEdsdmJsQnliMlpwYkdVWWdJQ1FpTm5Da0FvTW9nRUVlbVZ1YncvaW1hZ2UvP3U9MTY2MTczNzc0OTAwMA.webp",url:"https://stream-173.zeno.fm/21s4g0k6gwzuv?",country:"المغرب",genre:"دعوية بالأمازغية"},
{name:"إذاعة سورة البقرة لعدد من القراء",logo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO-haXvDjOze6sHZYpe7LwsuvxV7FOaq4t6g&s",url:"https://backup.qurango.net/radio/albaqarah",country:"السعودية",genre:"سورة البقرة"},
{name:"إذاعة سورة الملك",logo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAng_mt_HqOXqdk856RDS95z_ree_c-9RgPQ&s",url:"https://backup.qurango.net/radio/Surah_Al-Mulk",country:"السعودية",genre:"سورة الملك"},
{name:"إذاعة الألوكة علوم القرآن الكريم",logo:"https://guidetodawah.com/media/326155791-1207628506549020-3292065372911974208-n1797_showWebsiteThumb.png",url:"https://radio.alukah.net/ulumalquran",country:"السعودية",genre:"علوم القرآن"},
{name:"اذاعة الدروس المسجلة في إذاعة طلاب العلم الشرعي",logo:"https://zeno.fm/_ipx/q_85&fit_cover&s_144x144/https://images.zeno.fm/bgn-rpZpzPtWda3ErOEm3QAe_py_05leq48gBMf8qrw/rs:fill:288:288/g:ce:0:0/aHR0cHM6Ly9wcm94eS56ZW5vLmZtL2NvbnRlbnQvc3RhdGlvbnMvYWd4emZucGxibTh0YzNSaGRITnlNZ3NTQ2tGMWRHaERiR2xsYm5RWWdJRHdtdi11d1FnTUN4SU9VM1JoZEdsdmJsQnliMlpwYkdVWWdJRHd4dmJWa3dnTW9nRUVlbVZ1YncvaW1hZ2UvP3U9MTY2MTk0OTgwNjAwMA.webp",url:"https://stream-174.zeno.fm/yb66dbe1ba9uv?",country:"الجزائر",genre:"علوم شرعية"},
{name:"إذاعة المجد العلمية",logo:"https://th.bing.com/th/id/OIP.fjgXyxFnPeM1kJQgz1atCAHaFj?rs=1&pid=ImgDetMain",url:"http://r7.tarat.com:8008/stream?",country:"السعودية",genre:"علوم شرعية"},
{name:"إذاعة الفتاوى",logo:"http://www.islamicaudio.net/assets/media/khlyf-altnyjy217_bigThumb.png",url:"http://live.mp3quran.net:8014/;stream/1",country:"الإمارات العربية",genre:"فتاوى"},
{name:"إذاعة الفتاوى العامة",logo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaPbzmOWa1HHFxSS--UbMY53XF9mogun5jrQ&s",url:"https://backup.qurango.net/radio/fatwa",country:"السعودية",genre:"فتاوى"},
{name:"إذاعة إستقم كما أمرت دروس",logo:"https://zeno.fm/_ipx/q_85&fit_cover&s_144x144/https://images.zeno.fm/dQOujEBlOu31ICy3KSjmMVIIM1hxFFvCAxTW2rUhzmY/rs:fill:288:288/g:ce:0:0/aHR0cHM6Ly9wcm94eS56ZW5vLmZtL2NvbnRlbnQvc3RhdGlvbnMvYWd4emZucGxibTh0YzNSaGRITnlNZ3NTQ2tGMWRHaERiR2xsYm5RWWdJRFFxNzNObUFnTUN4SU9VM1JoZEdsdmJsQnliMlpwYkdVWWdJRFE4LURqamdrTW9nRUVlbVZ1YncvaW1hZ2UvP3U9MTY5MjIxMTQ4NzAwMA.webp",url:"https://stream-176.zeno.fm/bp7kb5vgtg8uv?",country:"الجزائر",genre:"محاضرات"},
{name:"إذاعة الشيخ فركوس",logo:"https://zeno.fm/_ipx/q_85&fit_cover&s_144x144/https://images.zeno.fm/CPCTlm3PT1f2hIt7tPvZwnHjEpVuGcZOpypSOoa7GEQ/rs:fill:288:288/g:ce:0:0/aHR0cHM6Ly9wcm94eS56ZW5vLmZtL2NvbnRlbnQvc3RhdGlvbnMvYWd4emZucGxibTh0YzNSaGRITnlNZ3NTQ2tGMWRHaERiR2xsYm5RWWdJQ3ctcEdYLUFnTUN4SU9VM1JoZEdsdmJsQnliMlpwYkdVWWdJQ3docXVOX0FrTW9nRUVlbVZ1YncvaW1hZ2UvP3U9MTY2MTY0MTE2ODAwMA.webp",url:"https://stream-175.zeno.fm/am0ynffbuv8uv?",country:"الجزائر",genre:"محاضرات"},
{name:"اذاعة محاضرات",logo:"https://zeno.fm/_ipx/q_85&fit_cover&s_144x144/https://images.zeno.fm/0Oy3X6S139oS01D7o2L1dQPWyUbItShq6L7KhAXKva8/rs:fill:288:288/g:ce:0:0/aHR0cHM6Ly9wcm94eS56ZW5vLmZtL2NvbnRlbnQvc3RhdGlvbnMvYWd4emZucGxibTh0YzNSaGRITnlNZ3NTQ2tGMWRHaERiR2xsYm5RWWdJRGc0OEhfM2dnTUN4SU9VM1JoZEdsdmJsQnliMlpwYkdVWWdJRGc0NEx0cmdrTW9nRUVlbVZ1YncvaW1hZ2UvP3U9MTY2NDk4NTM4NTAwMA.webp",url:"https://stream-176.zeno.fm/12heap5qhnzuv?",country:"الجزائر",genre:"محاضرات"},
{name:"إذاعة النهج الواضح",logo:"https://alqol.com/wp-content/uploads/2017/07/%D8%A5%D8%B0%D8%A7%D8%B9%D8%A9-%D8%A7%D9%84%D9%86%D9%87%D8%AC-%D8%A7%D9%84%D9%88%D8%A7%D8%B6%D8%AD.jpg",url:"https://node33.obviousapproach.com:9000/stream",country:"السعودية",genre:"محاضرات"},
{name:"اذاعة الشيخ محمد صالح المنجد",logo:"https://zeno.fm/_ipx/q_85&fit_cover&s_144x144/https://images.zeno.fm/2UNXM5qlKHUr92xeI7v-Tn-tpBKnbyXenE9g4Ng-Ixg/rs:fill:288:288/g:ce:0:0/aHR0cHM6Ly9wcm94eS56ZW5vLmZtL2NvbnRlbnQvc3RhdGlvbnMvMjVmZTM2OTktMzA0Ny00YmY0LWI4YjEtZTgwNGRhOTk2MWIzL2ltYWdlLz91PTE3MDA5ODU1NjIwMDA.webp",url:"https://stream-154.zeno.fm/uywkbr7jeenvv?",country:"السعودية",genre:"محاضرات"},
{name:"إذاعة الألوكة  االدكتور خالد الجريسي",logo:"https://guidetodawah.com/media/326155791-1207628506549020-3292065372911974208-n1797_showWebsiteThumb.png",url:"https://radio.alukah.net/aljeraisy",country:"السعودية",genre:"محاضرات"},
{name:"إذاعة الألوكة   الدكتور سعد الحميد",logo:"https://guidetodawah.com/media/326155791-1207628506549020-3292065372911974208-n1797_showWebsiteThumb.png",url:"https://radio.alukah.net/humayid",country:"السعودية",genre:"محاضرات"},
{name:"إذاعة الألوكة  كبار العلماء",logo:"https://guidetodawah.com/media/326155791-1207628506549020-3292065372911974208-n1797_showWebsiteThumb.png",url:"https://radio.alukah.net/ulama",country:"السعودية",genre:"محاضرات"},
{name:"إذاعة مصطفي محمود",logo:"https://www.arabcont.com/magala/Img/5-2-2019-28.jpg",url:"https://stream-164.zeno.fm/t3azszm0pnhvv?",country:"مصر",genre:"محاضرات"},
{name:"إذاعة  الشيخ عبدالحميد كشك كاملة",logo:"https://zeno.fm/_ipx/q_85&fit_cover&s_144x144/https://images.zeno.fm/6ISRH35qf1LP_er1mAHrPbSZeX6AonYPX_sSF7La498/rs:fill:288:288/g:ce:0:0/aHR0cHM6Ly9wcm94eS56ZW5vLmZtL2NvbnRlbnQvc3RhdGlvbnMvYzI3YjBmNGYtMTE5OC00ODcyLThlM2QtNmVhMTUwMjMyNmY2L2ltYWdlLz91PTE2NjY0MzY5MjUwMDA.webp",url:"https://stream-154.zeno.fm/kenbwry5ttvtv?",country:"مصر",genre:"محاضرات"},
{name:"إذاعةالشيخ حازم صلاح أبو إسماعيل",logo:"https://zeno.fm/_ipx/q_85&fit_cover&s_144x144/https://images.zeno.fm/lBjn15CfBfJyN3_YIsYPndRSkSjiKwztfin5FRfwwuA/rs:fill:288:288/g:ce:0:0/aHR0cHM6Ly9wcm94eS56ZW5vLmZtL2NvbnRlbnQvc3RhdGlvbnMvNzIwN2Q0NzYtYzljMi00NGRkLTgzMDItN2NlNDQ5Yjc4YTBmL2ltYWdlLz91PTE3MzM3NjIxNTIwMDA.webp",url:"https://stream-153.zeno.fm/upt7trcrs9buv?",country:"مصر",genre:"محاضرات"},
{name:"اذاعة الشيخ حازم شومان",logo:"https://zeno.fm/_ipx/q_85&fit_cover&s_144x144/https://images.zeno.fm/ww3g9gATL4xcHiltmFUusxJpmr7UHeaOqapR7FmzuLA/rs:fill:288:288/g:ce:0:0/aHR0cHM6Ly9wcm94eS56ZW5vLmZtL2NvbnRlbnQvc3RhdGlvbnMvNmVhODI0ZDQtNmY4ZS00OGJmLWEyNGYtNGNmOTUyZDYwOWVhL2ltYWdlLz91PTE3Mjk3MjI0NTIwMDA.webp",url:"https://stream-176.zeno.fm/xlyqjpw6echuv?",country:"مصر",genre:"محاضرات"},
{name:"اذاعة الشيخ مصطفى العدوي",logo:"https://zeno.fm/_ipx/q_85&fit_cover&s_144x144/https://images.zeno.fm/U0JmVgS3bOE3DrZHwyx1t72aAr_wCjg24lgs8LHZdUU/rs:fill:288:288/g:ce:0:0/aHR0cHM6Ly9wcm94eS56ZW5vLmZtL2NvbnRlbnQvc3RhdGlvbnMvZDVmNmZlZjAtNTFlYi00YzJkLTliOGMtOGI1OTAwMWNiYmRiL2ltYWdlLz91PTE3MjgwMDM4NTYwMDA.webp",url:"https://stream-175.zeno.fm/0cbvwcodttpuv?",country:"مصر",genre:"محاضرات"},
{name:"اذاعة الشيخ ياسر برهامي",logo:"https://zeno.fm/_ipx/q_85&fit_cover&s_144x144/https://images.zeno.fm/uuE90F1gxhv1zpgrcYToBFRV23Abp7CCiMDrGgk4DVg/rs:fill:288:288/g:ce:0:0/aHR0cHM6Ly9wcm94eS56ZW5vLmZtL2NvbnRlbnQvc3RhdGlvbnMvMDYwZTViZjMtMDMxOC00OGQyLWE0ZTctNzVhZDljZDZkNGUxL2ltYWdlLz91PTE3MDI2NzYzNzIwMDA.webp",url:"https://stream-172.zeno.fm/38almbpzp1yuv?",country:"مصر",genre:"محاضرات"},
{name:"اذاعة  عمر عبد الكافي بث حي",logo:"https://zeno.fm/_ipx/q_85&fit_cover&s_144x144/https://images.zeno.fm/5FI_TmhdVeiNQOOKMmItzgRSpujvv9JG_Lo_3xGJxYg/rs:fill:288:288/g:ce:0:0/aHR0cHM6Ly9wcm94eS56ZW5vLmZtL2NvbnRlbnQvc3RhdGlvbnMvYTIzOTU0NWItZTQ4Zi00Y2U0LWFhMTItYjYyNjE4OGVhNDM5L2ltYWdlLz91PTE3MTM5NjQ5OTYwMDA.webp",url:"https://stream-174.zeno.fm/66geh5zntp8uv?",country:"مصر",genre:"محاضرات"},

      
    ];
    this.initPlayer();
    this.renderPlaylist();
    this.renderFavorites();
    this.renderHistory();
    this.initFilters();
    this.initScrollToTop();
  }

  // Load favorites from localStorage
  loadFavorites() {
    const favorites = localStorage.getItem('radioFavorites');
    return favorites ? JSON.parse(favorites) : [];
  }

  // Save favorites to localStorage
  saveFavorites() {
    localStorage.setItem('radioFavorites', JSON.stringify(this.favorites));
  }

  // Load history from localStorage
  loadHistory() {
    const history = localStorage.getItem('radioHistory');
    return history ? JSON.parse(history) : [];
  }

  // Save history to localStorage
  saveHistory() {
    localStorage.setItem('radioHistory', JSON.stringify(this.history));
  }

  // Add a stream to favorites
  addToFavorites(stream) {
    // Check if stream is already in favorites
    const exists = this.favorites.some(fav => fav.url === stream.url);
    if (!exists) {
      this.favorites.push(stream);
      this.saveFavorites();
      this.renderFavorites();
    }
  }

  // Remove a stream from favorites
  removeFromFavorites(stream) {
    this.favorites = this.favorites.filter(fav => fav.url !== stream.url);
    this.saveFavorites();
    this.renderFavorites();
  }

  // Render favorites list
  renderFavorites() {
    const favoritesContainer = document.getElementById('favorite-streams');
    favoritesContainer.innerHTML = this.favorites.map(stream => `
      <div class="list-group-item list-group-item-action stream-item" data-url="${stream.url}">
        <div class="d-flex justify-content-between align-items-center">
          <div>
            <img src="${stream.logo}" class="rounded-circle" style="width:80px;">
            ${stream.name} (${stream.country} - ${stream.genre})
          </div>
          <button class="btn btn-danger btn-sm remove-favorite" data-url="${stream.url}">
            <i class="fas fa-trash"></i>
          </button>
        </div>
      </div>
    `).join('');

    // Add event listeners for playing and removing favorites
    document.querySelectorAll('#favorite-streams .stream-item').forEach(item => {
      item.addEventListener('click', (e) => {
        if (!e.target.closest('.remove-favorite')) {
          const stream = this.favorites.find(s => s.url === item.dataset.url);
          this.play(stream);
        }
      });
    });

    document.querySelectorAll('.remove-favorite').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const stream = this.favorites.find(s => s.url === btn.dataset.url);
        this.removeFromFavorites(stream);
      });
    });
  }

  // Render history list
  renderHistory() {
    const historyContainer = document.getElementById('history-streams');
    
    // Remove duplicates while preserving order
    const uniqueHistory = [];
    const uniqueUrls = new Set();
    this.history.forEach(stream => {
      if (!uniqueUrls.has(stream.url)) {
        uniqueHistory.push(stream);
        uniqueUrls.add(stream.url);
      }
    });

    // Limit history to last 10 items
    this.history = uniqueHistory.slice(0, 10);
    this.saveHistory();

    historyContainer.innerHTML = this.history.map(stream => `
      <div class="list-group-item list-group-item-action stream-item" data-url="${stream.url}">
        <div class="d-flex justify-content-between align-items-center">
          <div>
            <img src="${stream.logo}" class="rounded-circle" style="width:50px;">
            ${stream.name} (${stream.country} - ${stream.genre})
          </div>
          <button class="btn btn-danger btn-sm clear-history" data-url="${stream.url}">
            <i class="fas fa-trash"></i>
          </button>
        </div>
      </div>
    `).join('');

    // Add event listeners for playing and removing history
    document.querySelectorAll('#history-streams .stream-item').forEach(item => {
      item.addEventListener('click', (e) => {
        if (!e.target.closest('.clear-history')) {
          const stream = this.history.find(s => s.url === item.dataset.url);
          this.play(stream);
        }
      });
    });

    // Add event listeners for clearing specific history items
    document.querySelectorAll('.clear-history').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const url = btn.dataset.url;
        this.history = this.history.filter(s => s.url !== url);
        this.saveHistory();
        this.renderHistory();
      });
    });
  }

  initPlayer() {
    const playerContainer = document.getElementById('radioPlayer');
    playerContainer.innerHTML = `
      <div class="radio-player fixed-bottom bg-light p-3">
        <div class="row align-items-center">
          <div class="col-2">
            <img id="radio-logo" src="" class="img-fluid rounded-circle" style="max-width: 50px;">
          </div>
          <div class="col-4">
            <span id="radio-name"></span>
          </div>
          <div class="col-6">
            <div class="btn-group" role="group">
              <button id="play-btn" class="btn btn-success"><i class="fas fa-play"></i></button>
              <button id="pause-btn" class="btn btn-warning"><i class="fas fa-pause"></i></button>
              <button id="stop-btn" class="btn btn-danger"><i class="fas fa-stop"></i></button>
              <button id="mute-btn" class="btn btn-secondary"><i class="fas fa-volume-mute"></i></button>
            </div>
          </div>
        </div>
      </div>
    `;

    this.audioElement = new Audio();
    
    document.getElementById('play-btn').addEventListener('click', () => this.play());
    document.getElementById('pause-btn').addEventListener('click', () => this.pause());
    document.getElementById('stop-btn').addEventListener('click', () => this.stop());
    document.getElementById('mute-btn').addEventListener('click', () => this.toggleMute());

    // Add a star/favorite button to the stream items
    this.streams.forEach(stream => {
      stream.isFavorite = this.favorites.some(fav => fav.url === stream.url);
    });
  }

  play(stream = null) {
    if (stream) {
      this.currentStream = stream;
      this.audioElement.src = stream.url;
      document.getElementById('radio-logo').src = stream.logo;
      document.getElementById('radio-name').textContent = stream.name;
      
      // Add to history, avoiding duplicates
      const existingIndex = this.history.findIndex(s => s.url === stream.url);
      if (existingIndex !== -1) {
        this.history.splice(existingIndex, 1);
      }
      this.history.unshift(stream);
      this.saveHistory();
      this.renderHistory();
    }
    this.audioElement.play();
  }

  pause() {
    this.audioElement.pause();
  }

  stop() {
    this.audioElement.pause();
    this.audioElement.currentTime = 0;
  }

  toggleMute() {
    this.audioElement.muted = !this.audioElement.muted;
  }

  renderPlaylist() {
    const playlistContainer = document.getElementById('radioPlaylist');
    playlistContainer.innerHTML = `
      <div class="row">
        <div class="col-md-12">
          
          <div id="radio-streams" class="list-group">
            ${this.streams.map(stream => `
              <a href="#" class="list-group-item list-group-item-action stream-item" 
                 data-url="${stream.url}">
                <div class="d-flex justify-content-between align-items-center">
                  <div>
                    <img src="${stream.logo}" class="rounded-circle" style="width:50px;">
                    ${stream.name} (${stream.country} - ${stream.genre})
                  </div>
                  <button class="btn ${stream.isFavorite ? 'btn-warning' : 'btn-outline-warning'} btn-sm add-favorite" data-url="${stream.url}">
                    <i class="fas fa-star"></i>
                  </button>
                </div>
              </a>
            `).join('')}
          </div>
        </div>
      </div>
    `;

    document.querySelectorAll('.stream-item').forEach(item => {
      item.addEventListener('click', (e) => {
        if (!e.target.closest('.add-favorite')) {
          const stream = this.streams.find(s => s.url === e.currentTarget.dataset.url);
          this.play(stream);
        }
      });
    });

    // Add event listeners for favorite buttons
    document.querySelectorAll('.add-favorite').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const stream = this.streams.find(s => s.url === btn.dataset.url);
        this.addToFavorites(stream);
        btn.classList.remove('btn-outline-warning');
        btn.classList.add('btn-warning');
      });
    });
  }

  initFilters() {
    const searchInput = document.getElementById('radio-search');
    const countryFilter = document.getElementById('country-filter');
    const genreFilter = document.getElementById('genre-filter');

    // Populate country and genre filters dynamically
    const countries = [...new Set(this.streams.map(stream => stream.country))];
    const genres = [...new Set(this.streams.map(stream => stream.genre))];

    countryFilter.innerHTML += countries.map(country => 
      `<option value="${country}">${country}</option>`
    ).join('');

    genreFilter.innerHTML += genres.map(genre => 
      `<option value="${genre}">${genre}</option>`
    ).join('');

    // Filter function
    const filterStreams = () => {
      const searchTerm = searchInput.value.toLowerCase();
      const selectedCountry = countryFilter.value;
      const selectedGenre = genreFilter.value;

      const filteredStreams = this.streams.filter(stream => 
        (searchTerm === '' || stream.name.toLowerCase().includes(searchTerm)) &&
        (selectedCountry === '' || stream.country === selectedCountry) &&
        (selectedGenre === '' || stream.genre === selectedGenre)
      );

      this.renderFilteredPlaylist(filteredStreams);
    };

    // Add event listeners for filtering
    searchInput.addEventListener('input', filterStreams);
    countryFilter.addEventListener('change', filterStreams);
    genreFilter.addEventListener('change', filterStreams);
  }

  renderFilteredPlaylist(filteredStreams) {
    const playlistContainer = document.getElementById('radio-streams');
    playlistContainer.innerHTML = filteredStreams.map(stream => `
      <a href="#" class="list-group-item list-group-item-action stream-item" 
         data-url="${stream.url}">
        <div class="d-flex justify-content-between align-items-center">
          <div>
            <img src="${stream.logo}" class="rounded-circle" style="width:50px;">
            ${stream.name} (${stream.country} - ${stream.genre})
          </div>
          <button class="btn ${stream.isFavorite ? 'btn-warning' : 'btn-outline-warning'} btn-sm add-favorite" data-url="${stream.url}">
            <i class="fas fa-star"></i>
          </button>
        </div>
      </a>
    `).join('');

    // Re-add event listeners for stream items and favorite buttons
    document.querySelectorAll('.stream-item').forEach(item => {
      item.addEventListener('click', (e) => {
        if (!e.target.closest('.add-favorite')) {
          const stream = filteredStreams.find(s => s.url === item.dataset.url);
          this.play(stream);
        }
      });
    });

    document.querySelectorAll('.add-favorite').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const stream = filteredStreams.find(s => s.url === btn.dataset.url);
        this.addToFavorites(stream);
        btn.classList.remove('btn-outline-warning');
        btn.classList.add('btn-warning');
      });
    });
  }

  initScrollToTop() {
    // Create scroll to top button
    const scrollButton = document.createElement('button');
    scrollButton.innerHTML = '<i class="fas fa-arrow-up"></i>';
    scrollButton.classList.add('btn', 'btn-primary', 'scroll-to-top', 'position-fixed', 'bottom-3', 'end-3', 'rounded-circle');
    scrollButton.style.display = 'none';
    scrollButton.style.zIndex = '1050';
    document.body.appendChild(scrollButton);

    // Show/hide button based on scroll position
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 300) {
        scrollButton.style.display = 'block';
      } else {
        scrollButton.style.display = 'none';
      }
    });

    // Scroll to top when button is clicked
    scrollButton.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new RadioPlayer();
});