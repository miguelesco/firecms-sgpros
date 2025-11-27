import { buildCollection } from "@firecms/core";

export interface Partner {
    name: string;
    slug: string;
    blurb: string;
    category: string;
    logo: {
        url: string;
        alt: string;
        name: string;
    };
    homepageUrl?: string;
    isFeatured: boolean;
    featuredContent?: {
        description: string;
        howWeSupport: string[];
        whyThisMatters: string[];
        waysYouCanHelp: string[];
        images: Array<{
            url: string;
            alt: string;
            name: string;
        }>;
    };
    seo?: {
        title?: string;
        description?: string;
        keywords?: string;
    };
}

export const partnersCollection = buildCollection<Partner>({
    name: "Partners",
    singularName: "Partner",
    id: "partners",
    path: "partners",
    group: "Business",
    description: "Manage partner information with logos, categories, and SEO",
    permissions: ({ authController, user }) => ({
        read: true,
        edit: true,
        create: true,
        delete: true
    }),
    properties: {
        name: {
            name: "Name",
            dataType: "string",
            validation: { required: true }
        },
        slug: {
            name: "Slug",
            dataType: "string",
            validation: { required: true }
        },
        blurb: {
            name: "Blurb",
            dataType: "string",
            validation: { required: true },
            multiline: true
        },
        category: {
            name: "Category",
            dataType: "string",
            validation: { required: true }
        },
        logo: {
            name: "Logo",
            dataType: "map",
            properties: {
                url: {
                    name: "URL",
                    dataType: "string",
                    validation: { required: true }
                },
                alt: {
                    name: "Alt Text",
                    dataType: "string",
                    validation: { required: true }
                },
                name: {
                    name: "Name",
                    dataType: "string",
                    validation: { required: true }
                }
            }
        },
        homepageUrl: {
            name: "Homepage URL",
            dataType: "string"
        },
        isFeatured: {
            name: "Is Featured",
            dataType: "boolean",
            validation: { required: true }
        },
        featuredContent: {
            name: "Featured Content",
            dataType: "map",
            properties: {
                description: {
                    name: "Description",
                    dataType: "string",
                    multiline: true
                },
                howWeSupport: {
                    name: "How We Support",
                    dataType: "array",
                    of: {
                        dataType: "string"
                    }
                },
                whyThisMatters: {
                    name: "Why This Matters",
                    dataType: "array",
                    of: {
                        dataType: "string"
                    }
                },
                waysYouCanHelp: {
                    name: "Ways You Can Help",
                    dataType: "array",
                    of: {
                        dataType: "string"
                    }
                },
                images: {
                    name: "Images",
                    dataType: "array",
                    of: {
                        dataType: "map",
                        properties: {
                            url: {
                                name: "URL",
                                dataType: "string",
                                validation: { required: true }
                            },
                            alt: {
                                name: "Alt Text",
                                dataType: "string",
                                validation: { required: true }
                            },
                            name: {
                                name: "Name",
                                dataType: "string",
                                validation: { required: true }
                            }
                        }
                    }
                }
            }
        },
        seo: {
            name: "SEO",
            dataType: "map",
            properties: {
                title: {
                    name: "Title",
                    dataType: "string"
                },
                description: {
                    name: "Description",
                    dataType: "string",
                    multiline: true
                },
                keywords: {
                    name: "Keywords",
                    dataType: "string"
                }
            }
        }
    }
});

