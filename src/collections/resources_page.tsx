import { buildCollection } from "@firecms/core";

export interface ResourcesPage {
    title: string;
    subtitle: string;
    heroImages: Array<{
        url: string;
        alt: string;
        name: string;
    }>;
    communityText: string;
    statistics: Array<{
        value: string;
        label: string;
    }>;
    seo?: {
        title?: string;
        description?: string;
        keywords?: string;
    };
}

export const resourcesPageCollection = buildCollection<ResourcesPage>({
    name: "Resources Page",
    singularName: "Resources Page",
    id: "resources_page",
    path: "resources_page",
    group: "Business",
    description: "Manage resources page content with hero images, statistics, and SEO",
    permissions: ({ authController, user }) => ({
        read: true,
        edit: true,
        create: true,
        delete: true
    }),
    properties: {
        title: {
            name: "Title",
            dataType: "string",
            validation: { required: true }
        },
        subtitle: {
            name: "Subtitle",
            dataType: "string",
            validation: { required: true },
            multiline: true
        },
        heroImages: {
            name: "Hero Images",
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
        },
        communityText: {
            name: "Community Text",
            dataType: "string",
            validation: { required: true },
            multiline: true
        },
        statistics: {
            name: "Statistics",
            dataType: "array",
            of: {
                dataType: "map",
                properties: {
                    value: {
                        name: "Value",
                        dataType: "string",
                        validation: { required: true }
                    },
                    label: {
                        name: "Label",
                        dataType: "string",
                        validation: { required: true }
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

