export interface IHeader {
	firstName: string;
	lastName: string;
	email: string;
	phone: string;
	links: string[];
}

export interface IMeta {
	title: string;
	author: string;
	subject: string;
	keywords: string;
}

export interface IExperienceItem {
	title: string;
	description: string[];
	company: string;
	startDate: string;
	endDate: string;
}

export interface ISkillsItem {
	title: string;
	skills: string[];
}

export interface IProjectsItem {
	title: string;
	description: string[];
	startDate: string;
	endDate: string;
}

export interface ICertificatesItem {
	title: string;
	institution: string;
	id: string;
	startDate: string;
	endDate: string;
}

export interface IEducationItem {
	title: string;
	institution: string;
	gpa: string;
	startDate: string;
	endDate: string;
}

export interface ISection<T> {
	title: string;
	items: T[];
	[key: string]: any;
}

export type SectionsOrder = (
	| "experience"
	| "skills"
	| "projects"
	| "certificates"
	| "education"
)[];

export interface ISections {
	experience: ISection<IExperienceItem>;
	skills: ISection<ISkillsItem>;
	projects: ISection<IProjectsItem>;
	certificates: ISection<ICertificatesItem>;
	education: ISection<IEducationItem>;
}

export interface IResume {
	header: IHeader;
	meta: IMeta;
	sections: ISections;
	sectionsOrder: SectionsOrder;
}
