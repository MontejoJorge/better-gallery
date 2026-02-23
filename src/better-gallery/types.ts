interface ImageSize {
	url: string;
	width: number;
	height: number;
	orientation: "landscape" | "portrait" | string;
}

interface ImageSizes {
	thumbnail?: ImageSize;
	medium?: ImageSize;
	large?: ImageSize;
	full?: ImageSize;
	[key: string]: ImageSize | undefined;
}

export interface WPImage {
	id: number;
	url: string;
	alt: string;
	caption: string;
	link: string;
	mime: string;
	type: string;
	subtype: string;
	sizes: ImageSizes;
}

export interface BlockAttributes {
	images: WPImage[];
	enabled: boolean;
	size: number;
}

export interface BlockAttributes {
	images: WPImage[];
	enabled: boolean;
	size: number;
	align?: "wide" | "full";
}