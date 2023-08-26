export type Header = {
	firstName: string;
	lastName: string;
	email: string;
	phone: string;
	links: string[];
};

export type Meta = {
	title: string;
	author: string;
	subject: string;
	keywords: string;
};

export type ExperienceItem = {
	title: string;
	description: string[];
	company: string;
	startDate: string;
	endDate: string;
};

export type SkillsItem = {
	title: string;
	skills: string[];
};

export type ProjectsItem = {
	title: string;
	description: string[];
	startDate: string;
	endDate: string;
};

export type CertificatesItem = {
	title: string;
	institution: string;
	id: string;
	startDate: string;
	endDate: string;
};

export type EducationItem = {
	title: string;
	institution: string;
	gpa: string;
	startDate: string;
	endDate: string;
};

export type Section<T> = {
	title: string;
	items: T[];
	[key: string]: any;
};

export type SectionsOrder = (
	| "experience"
	| "skills"
	| "projects"
	| "certificates"
	| "education"
)[];

export type Sections = {
	experience: Section<ExperienceItem>;
	skills: Section<SkillsItem>;
	projects: Section<ProjectsItem>;
	certificates: Section<CertificatesItem>;
	education: Section<EducationItem>;
	order: SectionsOrder;
};

export type Resume = {
	header: Header;
	meta: Meta;
	sections: Sections;
};
