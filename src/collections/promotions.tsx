import { buildCollection, buildProperty } from "@firecms/core";

export enum PromoType {
    DISCOUNT = 'discount',
    /* FREE_SERVICE = 'free_service',
    REFERRAL_BONUS = 'referral_bonus', */
}

export enum DiscountType {
    PERCENTAGE = 'percentage',
    FIXED_AMOUNT = 'fixed_amount',
    STATIC_PRICE = 'static_price'
}

export interface PromoCode {
    id?: string;
    code: string;
    company_name: string;
    title: string;
    description: string;
    type: PromoType;
    value: number;
    discount_type: DiscountType;
    eligibility_conditions: string[];
    start_date: Date | string;
    end_date: Date | string | null;
    is_active: boolean;
    geographic_areas: string[];
    service_categories: string[];
    promo_code: string;
    terms_conditions: string;
    display_priority: number;
    image_url?: string;
    created_at: Date | string;
    updated_at: Date | string;
    usage_limit?: number;
    current_usage?: number;
    jobber_product_id?: string;
    can_be_stacked: boolean;
    discount_duration_months?: number;
    is_one_time_only?: boolean;
    is_highlighted?: boolean;
    highlight_text?: string;
}

export const promotionsCollection = buildCollection<PromoCode>({
    name: "Promotions",
    singularName: "Promotion",
    id: "promo_codes", 
    path: "promo_codes",
    icon: "Campaign",
    group: "Marketing",
    permissions: ({ authController, user }) => ({
        read: true,
        edit: true,
        create: true,
        delete: true
    }),
    properties: {
        code: {
            name: "Code",
            dataType: "string",
            validation: { required: true }
        },
        company_name: {
            name: "Company Name", 
            dataType: "string",
            validation: { required: true }
        },
        title: {
            name: "Title",
            dataType: "string",
            validation: { required: true }
        },
        description: {
            name: "Description",
            dataType: "string",
            multiline: true,
            validation: { required: true }
        },
        type: {
            name: "Type",
            dataType: "string",
            enumValues: [
                { id: PromoType.DISCOUNT, label: "Discount" }
            ],
            validation: { required: true }
        },
        value: {
            name: "Value",
            dataType: "number",
            validation: { required: true, min: 0 }
        },
        discount_type: {
            name: "Discount Type",
            dataType: "string", 
            enumValues: [
                { id: DiscountType.PERCENTAGE, label: "Percentage" },
                { id: DiscountType.FIXED_AMOUNT, label: "Fixed Amount" },
                { id: DiscountType.STATIC_PRICE, label: "Static Price" }
            ],
            validation: { required: true }
        },
        eligibility_conditions: {
            name: "Eligibility Conditions",
            dataType: "array",
            of: {
                dataType: "string"
            }
        },
        start_date: {
            name: "Start Date",
            dataType: "date",
            validation: { required: true }
        },
        end_date: {
            name: "End Date",
            dataType: "date"
        },
        is_active: {
            name: "Active",
            dataType: "boolean",
            validation: { required: true }
        },
        geographic_areas: {
            name: "Geographic Areas",
            dataType: "array",
            of: {
                dataType: "string"
            }
        },
        service_categories: {
            name: "Service Categories",
            dataType: "array",
            of: {
                dataType: "string"
            }
        },
        promo_code: {
            name: "Promo Code",
            dataType: "string",
            validation: { required: true }
        },
        terms_conditions: {
            name: "Terms & Conditions",
            dataType: "string",
            multiline: true,
            validation: { required: true }
        },
        display_priority: {
            name: "Display Priority",
            dataType: "number",
            validation: { required: true }
        },
        image_url: {
            name: "Image URL",
            dataType: "string"
        },
        created_at: {
            name: "Created At",
            dataType: "date"
        },
        updated_at: {
            name: "Updated At",
            dataType: "date"
        },
        usage_limit: {
            name: "Usage Limit",
            dataType: "number"
        },
        current_usage: {
            name: "Current Usage",
            dataType: "number"
        },
        jobber_product_id: {
            name: "Jobber Product ID",
            dataType: "string"
        },
        can_be_stacked: {
            name: "Can Be Stacked",
            dataType: "boolean",
            validation: { required: true }
        },
        discount_duration_months: {
            name: "Discount Duration (Months)",
            dataType: "number"
        },
        is_one_time_only: {
            name: "One Time Only",
            dataType: "boolean"
        },
        is_highlighted: {
            name: "Highlighted",
            dataType: "boolean"
        },
        highlight_text: {
            name: "Highlight Text",
            dataType: "string"
        }
    }
}); 