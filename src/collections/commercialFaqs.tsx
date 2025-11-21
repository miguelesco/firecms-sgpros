import { buildCollection } from "@firecms/core";

export const commercialFaqsCollection = buildCollection({
    id: "commercial_faqs",
    name: "Commercial FAQs",
    description: "Manage commercial service frequently asked questions",
    path: "commercial_faqs",
    singularName: "Commercial FAQ",
    group: "Business",
    permissions: ({ authController, user }) => ({
        read: true,
        edit: true,
        create: true,
        delete: true
    }),
    properties: {
        question: {
            dataType: "string",
            name: "Question",
            description: "The FAQ question",
            validation: {
                required: true
            }
        },
        answer: {
            dataType: "string",
            name: "Answer",
            description: "The FAQ answer",
            multiline: true,
            validation: {
                required: true
            }
        }
    }
});

