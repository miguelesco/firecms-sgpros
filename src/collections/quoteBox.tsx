import { buildCollection } from "@firecms/core";

export const quoteBoxCollection = buildCollection({
    id: "quoteBox",
    name: "Quote Box",
    description: "Manage the quote box text that is displayed above the zip code input field",
    path: "quote_box",
    singularName: "Quote Box Text",
    group: "Business",
    permissions: ({ authController, user }) => ({
        read: true,
        edit: true,
        create: true,
        delete: true
    }),
    properties: {
        quoteBoxText: {
            dataType: "string",
            name: "Quote Box Text",
            description: "The text displayed in the quote box",
            validation: {
                required: true
            }
        }
    }
});

