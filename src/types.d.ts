export type IHeader = {
	firstName: string;
	lastName: string;
	email: string;
	phone: string;
	links: string[];
};

export type IJob = {
	title: string;
	description: string;
	company: string;
	startDate: string;
	endDate: string;
};

export type ISkillSet = {
	title: string;
	skills: string[];
};

export type IProject = {
	title: string;
	description: string;
	stack: string[];
	link: string;
};

export type ICertificate = {
	title: string;
	institution: string;
	startDate: string;
	endDate: string;
	link: string;
};

export type IDegree = {
	title: string;
	institution: string;
	startDate: string;
	endDate: string;
};

export type IExperience = {
	title?: string;
	items: IJob[];
};

export type ISkill = {
	title?: string;
	items: ISkillSet[];
};

export type IProjects = {
	title?: string;
	items: IProject[];
};

export type ICertificates = {
	title?: string;
	items: ICertificate[];
};

export type IEducation = {
	title?: string;
	items: IDegree[];
};

export type ISectionsOrder = (
	| "experience"
	| "skills"
	| "projects"
	| "certificates"
	| "education"
)[];

export type ISections = {
	experience: IExperience;
	skills: ISkill;
	projects: IProjects;
	certificates: ICertificates;
	education: IEducation;
	order: ISectionsOrder;
};

export type IResume = {
	header: IHeader;
	sections: ISections;
};
