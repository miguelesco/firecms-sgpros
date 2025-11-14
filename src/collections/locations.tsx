import { buildCollection, buildProperty } from "@firecms/core";

export interface LocationPage {
    id?: string;
    slug: string;
    title: {
        title: string;
        subtitle: string;
        badge: string;
    };
    location: {
        image?: {
            url: string;
            alt: string;
            name: string;
        };
        image2?: {
            url: string;
            alt: string;
            name: string;
        };
        image3?: {
            url: string;
            alt: string;
            name: string;
        };
    };
    content: {
        blurbText: {
            text: string;
            enabled: boolean;
        };
        component2: {
            content: string;
            enabled: boolean;
        };
        trust_by: {
            enabled: boolean;
            title: string;
            badge: string;
        };
    };
    seo?: {
        title?: string;
        description?: string;
        keywords?: string;
        [key: string]: string | undefined;
    };
    services_areas: string;
    
    // Location-specific SEO fields for JSON-LD
    address?: {
        addressLocality?: string;
        addressRegion?: string;
        addressCountry?: string;
        streetAddress?: string;
        postalCode?: string;
    };
    geo?: {
        latitude: number | string;
        longitude: number | string;
    };
    areaServed?: string;
    locationImage?: string;
    locationDescription?: string;
}

export const locationsCollection = buildCollection<LocationPage>({
    name: "Locations",
    singularName: "Location", 
    id: "locations_pages",
    path: "locations_pages",
    icon: "LocationOn",
    group: "Business",
    description: "Manage location pages with bulk import support",
    permissions: ({ authController, user }) => ({
        read: true,
        edit: true,
        create: true,
        delete: true
    }),
    properties: {
        slug: {
            name: "Slug",
            dataType: "string",
            validation: { required: true }
        },
        title: {
            name: "Title",
            dataType: "map",
            properties: {
                title: {
                    name: "Title",
                    dataType: "string",
                    validation: { required: true }
                },
                subtitle: {
                    name: "Subtitle", 
                    dataType: "string",
                    validation: { required: true }
                },
                badge: {
                    name: "Badge",
                    dataType: "string",
                    validation: { required: true }
                }
            }
        },
        location: {
            name: "Location",
            dataType: "map",
            properties: {
                image: {
                    name: "Image",
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
                image2: {
                    name: "Image 2",
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
                image3: {
                    name: "Image 3",
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
        },
        content: {
            name: "Content",
            dataType: "map",
            properties: {
                blurbText: {
                    name: "Blurb Text",
                    dataType: "map",
                    properties: {
                        text: {
                            name: "Text",
                            dataType: "string",
                            validation: { required: true },
                            multiline: true
                        },
                        enabled: {
                            name: "Enabled",
                            dataType: "boolean",
                            validation: { required: true }
                        }
                    }
                },
                component2: {
                    name: "Component 2",
                    dataType: "map",
                    properties: {
                        content: {
                            name: "Content",
                            dataType: "string",
                            validation: { required: true },
                            multiline: true
                        },
                        enabled: {
                            name: "Enabled",
                            dataType: "boolean",
                            validation: { required: true }
                        }
                    }
                },
                trust_by: {
                    name: "Trust By",
                    dataType: "map",
                    properties: {
                        enabled: {
                            name: "Enabled",
                            dataType: "boolean",
                            validation: { required: true }
                        },
                        title: {
                            name: "Title",
                            dataType: "string",
                            validation: { required: true }
                        },
                        badge: {
                            name: "Badge",
                            dataType: "string",
                            validation: { required: true }
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
        },
        services_areas: {
            name: "Services Areas",
            dataType: "string",
            validation: { required: true },
            multiline: true
        },
        address: {
            name: "Address",
            dataType: "map",
            properties: {
                addressLocality: {
                    name: "City",
                    dataType: "string"
                },
                addressRegion: {
                    name: "State",
                    dataType: "string"
                },
                addressCountry: {
                    name: "Country",
                    dataType: "string"
                },
                streetAddress: {
                    name: "Street Address",
                    dataType: "string"
                },
                postalCode: {
                    name: "Postal Code",
                    dataType: "string"
                }
            }
        },
        geo: {
            name: "Geographic Coordinates",
            dataType: "map",
            properties: {
                latitude: {
                    name: "Latitude",
                    dataType: "number"
                },
                longitude: {
                    name: "Longitude",
                    dataType: "number"
                }
            }
        },
        areaServed: {
            name: "Area Served",
            dataType: "string"
        },
        locationImage: {
            name: "Location Image URL",
            dataType: "string"
        },
        locationDescription: {
            name: "Location Description",
            dataType: "string",
            multiline: true
        }
    }
}); 