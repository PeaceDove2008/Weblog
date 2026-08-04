import type {
	ExpressiveCodeConfig,
	LicenseConfig,
	NavBarConfig,
	ProfileConfig,
	SiteConfig,
} from "./types/config";
import { LinkPreset } from "./types/config";

export const siteConfig: SiteConfig = {
	title: "PeaceDove2008",
	subtitle: "一只程序猫的画作与代码",
	lang: "zh_CN", // Language code, e.g. 'en', 'zh_CN', 'ja', etc.
	themeColor: {
		hue: 40, // Default hue for the theme color, from 0 to 360. e.g. red: 0, teal: 200, cyan: 250, pink: 345
		fixed: true, // Hide the theme color picker for visitors
	},
	banner: {
		enable: false,
		src: "assets/images/demo-banner.png", // Relative to the /src directory. Relative to the /public directory if it starts with '/'
		position: "center", // Equivalent to object-position, only supports 'top', 'center', 'bottom'. 'center' by default
		credit: {
			enable: false, // Display the credit text of the banner image
			text: "", // Credit text to be displayed
			url: "", // (Optional) URL link to the original artwork or artist's page
		},
	},
	toc: {
		enable: true, // Display the table of contents on the right side of the post
		depth: 2, // Maximum heading depth to show in the table, from 1 to 3
	},
	favicon: [
		{
			src: "/favicon/favicon.png",
			sizes: "192x192",
		},
		{
			src: "/favicon/favicon.png",
			sizes: "32x32",
		},
	],
};

export const navBarConfig: NavBarConfig = {
	links: [
		{
			name: "首页",
			url: "/",
			icon: "fa6-solid:house",
		},
		{
			name: "归档",
			url: "/archive/",
			icon: "fa6-solid:box-archive",
		},
		{
			name: "关于我",
			url: "/about/",
			icon: "fa6-solid:circle-user",
		},
		{
			name: "赞助",
			url: "/sponsor/",
			icon: "fa6-solid:hand-holding-heart",
		},
	],
};

export const profileConfig: ProfileConfig = {
	avatar: "assets/images/avatar.png", // Relative to the /src directory. Relative to the /public directory if it starts with '/'
	name: "PeaceDove2008",
	bio: "AI 画师 · Java 程序员，喜欢画毛茸茸的小动物。",
	links: [
		{
			name: "Bilibili",
			icon: "simple-icons:bilibili",
			url: "https://space.bilibili.com/675561534?spm_id_from=333.1007.0.0",
		},
		{
			name: "GitHub",
			icon: "fa6-brands:github",
			url: "https://github.com/PeaceDove2008",
		},
		{
			name: "QQ",
			icon: "simple-icons:qq",
			url: "", // empty url: shows a QR code tooltip on hover instead of a link
		},
		{
			name: "微信",
			icon: "simple-icons:wechat",
			url: "", // empty url: shows a QR code tooltip on hover instead of a link
		},
	],
};

export const licenseConfig: LicenseConfig = {
	enable: true,
	name: "CC BY-NC-SA 4.0",
	url: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
};

export const expressiveCodeConfig: ExpressiveCodeConfig = {
	// Note: Some styles (such as background color) are being overridden, see the astro.config.mjs file.
	// Please select a dark theme, as this blog theme currently only supports dark background color
	theme: "github-dark",
};
