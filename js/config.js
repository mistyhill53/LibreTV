// 全局常量配置
const PROXY_URL = '/proxy/';    // 适用于 Cloudflare, Netlify (带重写), Vercel (带重写)
// const HOPLAYER_URL = 'https://hoplayer.com/index.html';
const SEARCH_HISTORY_KEY = 'videoSearchHistory';
const MAX_HISTORY_ITEMS = 5;

// 密码保护配置
const PASSWORD_CONFIG = {
    localStorageKey: 'passwordVerified',  // 存储验证状态的键名
    verificationTTL: 90 * 24 * 60 * 60 * 1000,  // 验证有效期（90天，约3个月）
};

// 网站信息配置
const SITE_CONFIG = {
    name: 'LibreAV',
    url: 'https://av.666986.xyz',
    description: '免费在线视频搜索与观看平台',
    logo: './image/retrotv_5520.png',
    version: '1.0.3'
};

// API站点配置
const API_SITES = {
        ckzy: {
        api: 'https://www.ckzy1.com/api.php/provide/vod',
        name: '🔞CK资源'
    },
    jkun: {
        api: 'https://jkunzyapi.com/api.php/provide/vod',
        name: '🔞jkun资源'
    },
    bwzy: {
        api: 'https://api.bwzym3u8.com/api.php/provide/vod',
        name: '🔞百万资源'
    },
    souav: {
        api: 'https://api.souavzy.vip/api.php/provide/vod',
        name: '🔞souav资源'
    },
    r155: {
        api: 'https://155api.com/api.php/provide/vod',
        name: '🔞155资源'
    },
    lsb: {
        api: 'https://apilsbzy1.com/api.php/provide/vod',
        name: '🔞lsb资源'
    },
    huangcang: {
        api: 'https://hsckzy.vip/api.php/provide/vod',
        name: '🔞黄色仓库',
        detail: 'https://hsckzy.vip'
    },
    yutu: {
        api: 'https://yutuzy10.com/api.php/provide/vod',
        name: '🔞玉兔资源'
    },
    xingba: {
        api: 'https://xingba111.com/api.php/provide/vod',
        name: '🔞杏吧资源'
    },
    xiaojizy: {
        api: 'https://api.xiaojizy.live/api.php/provide/vod',
        name: '🔞小鸡资源'
    },
    jipinzyapi: {
        api: 'https://jipinzyapi.com/api.php/provide/vod',
        name: '🔞极品X资源'
    },
    siwazyw: {
        api: 'https://siwazyw.tv/api.php/provide/vod',
        name: '🔞丝袜资源'
    },
    semaozy: {
        api: 'https://caiji.semaozy.net/api.php/provide/vod',
        name: '🔞色猫资源'
    },
    ekanapi: {
        api: 'https://api.ekanapi.com/api.php/provide/vod',
        name: '🔞易看资源'
    },
    naixxzy: {
        api: 'https://naixxzy.com/api.php/provide/vod',
        name: '🔞奶香香资源'
    },
    apilj: {
        api: 'https://apilj.com/api.php/provide/vod',
        name: '🔞辣椒资源'
    },
    dadiapi: {
        api: 'https://dadiapi.com/api.php/provide/vod',
        name: '🔞大地资源'
    },
    aosikazy: {
    api: 'https://aosikazy.com/api.php/provide/vod',
    name: '🔞奥斯卡资源'
  },
  siwazyw: {
    api: 'https://www.siwazyw.tv/api.php/provide/vod',
    name: '🔞丝袜资源'
  },
  lsbzy1: {
    api: 'https://apilsbzy1.com/api.php/provide/vod',
    name: '🔞老色逼资源'
  },
  apilyzy: {
    api: 'https://api.apilyzy.com/api.php/provide/vod',
    name: '🔞老鸭资源'
  },
  '11bat': {
    api: 'http://api.11bat.com/api.php/provide/vod',
    name: '🔞辣椒资源'
  },
  xrbsp: {
    api: 'https://www.xrbsp.com/api/xml.php',
    name: '🔞淫水机资源(php)'
  },
  fhapi9: {
    api: 'http://fhapi9.com/api.php/provide/vod',
    name: '🔞番号资源'
  },
  '155api': {
    api: 'https://155api.com/api.php/provide/vod',
    name: '🔞155资源'
  },
  jkunzyapi: {
    api: 'https://jkunzyapi.com/api.php/provide/vod',
    name: '🔞鸡坤资源'
  },
  apiyutu: {
    api: 'https://apiyutu.com/api.php/provide/vod',
    name: '🔞玉兔资源'
  },
  naixxzy: {
    api: 'https://Naixxzy.com/api.php/provide/vod',
    name: '🔞奶香资源'
  },
  apittzy: {
    api: 'https://apittzy.com/api.php/provide/vod',
    name: '🔞天天资源'
  },
  pgxdy: {
    api: 'https://www.pgxdy.com/api/xml.php',
    name: '🔞黄AV资源(php)'
  },
  gdlsp: {
    api: 'https://www.gdlsp.com/api/xml.php',
    name: '🔞香奶儿资源(php)'
  },
  msnii: {
    api: 'https://www.msnii.com/api/xml.php',
    name: '🔞美少女资源(php)'
  },
  kxgav: {
    api: 'https://www.kxgav.com/api/xml.php',
    name: '🔞白嫖资源(php)'
  },
  putaozyw: {
    api: 'https://caiji.putaozyw.net/inc/apijson_vod.php',
    name: '🔞葡萄资源(php)'
  },
  bttcj: {
    api: 'http://bttcj.com/inc/sapi.php',
    name: '🔞博天堂资源(php)'
  },
  wmcj8: {
    api: 'http://wmcj8.com/inc/sapi.php',
    name: '🔞环亚资源(php)'
  },
  dadiapi: {
    api: 'https://dadiapi.com/api.php/provide/vod',
    name: '🔞大地资源'
  },
  maozyapi: {
    api: 'https://api.maozyapi.com/inc/apijson_vod.php',
    name: '🔞色猫资源(php)'
  },
  lbapiby: {
    api: 'http://lbapiby.com/api.php/provide/vod',
    name: '🔞AIvin'
  },
  'partnersky-horoskop': {
    api: 'https://www.partnersky-horoskop.com/api.php/provide/vod',
    name: '🔞成人资源'
  },
  '99reapi': {
    api: 'https://99reapi.com/api.php/provide/vod',
    name: '🔞久久热'
  },
  timizy10: {
    api: 'https://timizy10.cc/api.php/provide/vod',
    name: '🔞甜蜜资源'
  },
  'to-long': {
    api: 'https://to.to-long.com/api.php/provide/vod',
    name: '🔞橘猫资源'
  },
  tmyy: {
    api: 'https://tmyy.cc/api.php/provide/vod',
    name: '🔞天美资源'
  },
  chujia: {
    api: 'http://chujia.cc/api.php/provide/vod',
    name: '🔞精东资源'
  },
  lyhapi: {
    api: 'https://api.lyhapi.com/api.php/provide/vod',
    name: '🔞狼友资源'
  },
  f2dcj6: {
    api: 'http://f2dcj6.com/sapi?ac=videolist',
    name: '🔞番二资源'
  },
  lbapi9: {
    api: 'https://lbapi9.com/api.php/provide/vod',
    name: '🔞乐播资源'
  },
  kkzy: {
    api: 'https://kkzy.me/api.php/provide/vod',
    name: '🔞KK写真'
  },
  '91md': {
    api: 'https://91md.me/api.php/provide/vod',
    name: '🔞91麻豆'
  },
  hghhh: {
    api: 'https://hghhh.com/api.php/provide/vod',
    name: '🔞皇冠资源'
  },
  jpzy: {
    api: 'https://jpzy.me/api.php/provide/vod',
    name: '🔞极品资源'
  },
  jingpinx: {
    api: 'https://www.jingpinx.com//api.php/provide/vod',
    name: '🔞精品资源'
  },
  slapibf: {
    api: 'https://slapibf.com/api.php/provide/vod',
    name: '🔞森林资源'
  },
  kuaiavzy: {
    api: 'http://kuaiavzy.com/api.php/provide/vod',
    name: '🔞快爱资源'
  },
  ddapi: {
    api: 'https://api.ddapi.cc/api.php/provide/vod',
    name: '🔞滴滴资源'
  },
  xbapi: {
    api: 'https://api.xbapi.cc/api.php/provide/vod',
    name: '🔞雪豹资源'
  },
  yikanapi: {
    api: 'https://api.yikanapi.com/api.php/provide/vod',
    name: '🔞易看资源'
  }
};

// 添加聚合搜索的配置选项
const AGGREGATED_SEARCH_CONFIG = {
    enabled: true,             // 是否启用聚合搜索
    timeout: 8000,            // 单个源超时时间（毫秒）
    maxResults: 10000,          // 最大结果数量
    parallelRequests: true,   // 是否并行请求所有源
    showSourceBadges: true    // 是否显示来源徽章
};

// 抽象API请求配置
const API_CONFIG = {
    search: {
        // 只拼接参数部分，不再包含 /api.php/provide/vod/
        path: '?ac=videolist&wd=',
        pagePath: '?ac=videolist&wd={query}&pg={page}',
        maxPages: 50, // 最大获取页数
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
            'Accept': 'application/json'
        }
    },
    detail: {
        // 只拼接参数部分
        path: '?ac=videolist&ids=',
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
            'Accept': 'application/json'
        }
    }
};

// 优化后的正则表达式模式
const M3U8_PATTERN = /\$https?:\/\/[^"'\s]+?\.m3u8/g;

// 添加自定义播放器URL
const CUSTOM_PLAYER_URL = 'player.html'; // 使用相对路径引用本地player.html

// 增加视频播放相关配置
const PLAYER_CONFIG = {
    autoplay: true,
    allowFullscreen: true,
    width: '100%',
    height: '600',
    timeout: 15000,  // 播放器加载超时时间
    filterAds: true,  // 是否启用广告过滤
    autoPlayNext: true,  // 默认启用自动连播功能
    adFilteringEnabled: true, // 默认开启分片广告过滤
    adFilteringStorage: 'adFilteringEnabled' // 存储广告过滤设置的键名
};

// 增加错误信息本地化
const ERROR_MESSAGES = {
    NETWORK_ERROR: '网络连接错误，请检查网络设置',
    TIMEOUT_ERROR: '请求超时，服务器响应时间过长',
    API_ERROR: 'API接口返回错误，请尝试更换数据源',
    PLAYER_ERROR: '播放器加载失败，请尝试其他视频源',
    UNKNOWN_ERROR: '发生未知错误，请刷新页面重试'
};

// 添加进一步安全设置
const SECURITY_CONFIG = {
    enableXSSProtection: true,  // 是否启用XSS保护
    sanitizeUrls: true,         // 是否清理URL
    maxQueryLength: 100,        // 最大搜索长度
    // allowedApiDomains 不再需要，因为所有请求都通过内部代理
};

// 添加多个自定义API源的配置
const CUSTOM_API_CONFIG = {
    separator: ',',           // 分隔符
    maxSources: 5,            // 最大允许的自定义源数量
    testTimeout: 5000,        // 测试超时时间(毫秒)
    namePrefix: 'Custom-',    // 自定义源名称前缀
    validateUrl: true,        // 验证URL格式
    cacheResults: true,       // 缓存测试结果
    cacheExpiry: 5184000000,  // 缓存过期时间(2个月)
    adultPropName: 'isAdult' // 用于标记成人内容的属性名
};

// 隐藏内置黄色采集站API的变量
const HIDE_BUILTIN_ADULT_APIS = false;
