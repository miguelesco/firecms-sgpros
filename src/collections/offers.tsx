import { buildCollection, buildProperty } from "@firecms/core";

// Flexible type for work-in-progress offers collection
export type Offer = {
    [key: string]: any; // Allow any fields since structure is still evolving
}

export const offersCollection = buildCollection<Offer>({
    name: "Offers",
    singularName: "Offer",
    id: "offers_pages", 
    path: "offers_pages",
    icon: "LocalOffer",
    group: "Business",
    description: "Dynamic offers collection - pulls fresh data from Firebase (work in progress)",
    permissions: ({ authController, user }) => ({
        read: true,
        edit: true,
        create: true,
        delete: true
    }),
    // Flexible properties - will show all fields from Firebase documents
    properties: {
        // Common fields that might exist
        title: {
            name: "Title",
            dataType: "string"
        },
        name: {
            name: "Name", 
            dataType: "string"
        },
        description: {
            name: "Description",
            dataType: "string",
            multiline: true
        },
        content: {
            name: "Content",
            dataType: "string",
            multiline: true
        },
        active: {
            name: "Active", 
            dataType: "boolean"
        },
        enabled: {
            name: "Enabled",
            dataType: "boolean"
        },
        // Date fields
        startDate: {
            name: "Start Date",
            dataType: "date"
        },
        endDate: {
            name: "End Date", 
            dataType: "date"
        },
        createdAt: {
            name: "Created At",
            dataType: "date"
        },
        updatedAt: {
            name: "Updated At",
            dataType: "date"
        },
        // Numeric fields
        price: {
            name: "Price",
            dataType: "number"
        },
        value: {
            name: "Value",
            dataType: "number"
        },
        order: {
            name: "Order",
            dataType: "number"
        },
        // Generic text fields for any additional content
        slug: {
            name: "Slug",
            dataType: "string"
        },
        category: {
            name: "Category",
            dataType: "string"
        },
        tags: {
            name: "Tags",
            dataType: "array",
            of: {
                dataType: "string"
            }
        }
    }
}); 