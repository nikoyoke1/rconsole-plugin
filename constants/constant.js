import { contentEstimator } from "../utils/link-share-summary-util.js";

/**
 * 用于百度翻译的常量控制
 *
 * @type {{英: string, 日: string, 文: string, 中: string}}
 */
export const transMap = { 中: "zh", 日: "jp", 文: "wyw", 英: "en", 俄: "ru", 韩: "kr" };
/**
 * 用于腾讯交互式翻译的常量控制
 *
 * @type {{英: string, 俄: string, 日: string, 韩: string, 中: string}}
 */
export const tencentTransMap = { 中: "zh", 日: "ja", 韩: "ko", 英: "en", 俄: "ru" };
/**
 * 用于腾讯交互式翻译的常量控制
 *
 * @type {{英: string, 俄: string, 日: string, 韩: string, 中: string}}
 */
export const googleTransMap = { 中: "zh-CN", 日: "jp", 韩: "ko", 英: "en", 俄: "ru" };

/**
 * 以下为抖音/TikTok类型代码
 *
 * @type {{"0": string, "55": string, "2": string, "68": string, "58": string, "4": string, "61": string, "51": string, "150": string}}
 */
export const douyinTypeMap = {
    2: "image",
    4: "video",
    68: "image",
    0: "video",
    51: "video",
    55: "video",
    58: "video",
    61: "video",
    150: "image",
};

export const TEN_THOUSAND = 10000;

export const CAT_LIMIT = 10;

/**
 * 有水印的头请求
 * @type {{cookie: string, "User-Agent": string, accept: string}}
 */
export const XHS_WATERMARK_HEADER = {
    'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
    'cookie': '',
    'User-Agent':
        "Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1 Edg/110.0.0.0",
}

/**
 * 无水印的头请求
 * @type {{cookie: string, "User-Agent": string, accept: string}}
 */
export const XHS_NO_WATERMARK_HEADER = {
    'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9 ',
    'cookie': '',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.87 UBrowser/6.2.4098.3 Safari/537.36',
}

/**
 * 分割线
 * @type {string}
 */
export const DIVIDING_LINE = "\n------------------{}------------------"

/**
 * 保存判断机子是否是海外服务器的key
 * @type {string}
 */
export const REDIS_YUNZAI_ISOVERSEA = "Yz:rconsole:tools:oversea";

/**
 * 保存判断机子是否使用的是拉格朗日
 * @type {string}
 */
export const REDIS_YUNZAI_LAGRANGE = "Yz:rconsole:tools:lagrange";

export const TWITTER_BEARER_TOKEN = "";

/**
 * 哔哩哔哩简介默认长度限制
 * @type {number}
 */
export const BILI_DEFAULT_INTRO_LEN_LIMIT = 50;

export const SUMMARY_PROMPT = `请返回您仔细阅读正文后精心写成的详尽笔记，如果是ArXiv论文就简要介绍下内容和创新点即可`

export const HELP_DOC = "\n文档：https://gitee.com/kyrzy0416/rconsole-plugin"

/**
 * 总结内容评估器的正则
 * @type {{reg: RegExp, name: string}[]}
 */
export const SUMMARY_CONTENT_ESTIMATOR_PATTERNS = [
    { reg: /(?:https?:\/\/)?mp\.weixin\.qq\.com\/[A-Za-z\d._?%&+\-=\/#]*/, name: '微信文章' },
    { reg: /(?:https?:\/\/)?arxiv.org\/[a-zA-Z\d._?%&+\-=\/#]*/, name: 'ArXiv论文' },
    { reg: /(?:https?:\/\/)?sspai.com\/[a-zA-Z\d._?%&+\-=\/#]*/, name: '少数派' },
    { reg: /(?:https?:\/\/)?www\.bilibili\.com\/read\/[A-Za-z\d._?%&+\-=\/#]*/, name: '哔哩哔哩专栏' },
    { reg: /(?:https?:\/\/)?(www\.)chinadaily.com.cn\/a\/[a-zA-Z0-9\d._?%&+\-=\/#]*/, name: 'ChinaDaily' }
];