# 🏢 Bulk Import Locations - Instructions

## Overview
You can now bulk import multiple locations at once using a JSON array file instead of adding them one by one through the FireCMS interface.

## 🚀 Quick Start

### Option 1: Using the Standalone Import Tool
1. **Access the Import Tool**: Navigate to `https://sgpros.web.app/import.html` in your browser
2. **Prepare Your Data**: Create a JSON file with your location data (see format below)
3. **Upload & Import**: Select your file, preview the data, and click "Import Locations"

### Option 2: Using FireCMS Interface
1. Open your FireCMS admin panel
2. Go to the Locations collection
3. The offers collection is set up to automatically refresh and pull new data from Firebase

## 📋 JSON File Format

Your JSON file should contain an array of location objects. Here's the exact format:

```json
[
  {
    "slug": "longmont-co",
    "title": {
      "title": "Longmont, Colorado",
      "subtitle": "Professional Services in Longmont",
      "badge": "Featured Location"
    },
    "location": {
      "image": {
        "url": "https://example.com/longmont.jpg",
        "alt": "Longmont location photo",
        "name": "longmont-hero"
      },
      "image2": {
        "url": "https://example.com/longmont2.jpg",
        "alt": "Longmont secondary photo",
        "name": "longmont-secondary"
      }
    },
    "content": {
      "component2": {
        "content": "We serve the Longmont area with professional services including plumbing, electrical, and HVAC repairs.",
        "enabled": true
      },
      "trust_by": {
        "enabled": true,
        "title": "Trusted by Longmont Residents",
        "badge": "⭐ 5.0 Rating"
      }
    },
    "seo": {
      "title": "Professional Services in Longmont, CO",
      "description": "Expert plumbing, electrical, and HVAC services in Longmont, Colorado. Licensed, insured, and locally trusted.",
      "keywords": "longmont plumber, longmont electrician, longmont hvac, colorado services"
    },
    "services_areas": "Longmont, Louisville, Lafayette, Erie, Niwot, and surrounding Boulder County areas",
    "address": {
      "addressLocality": "Longmont",
      "addressRegion": "Colorado",
      "addressCountry": "United States",
      "streetAddress": "123 Main St",
      "postalCode": "80501"
    },
    "geo": {
      "latitude": 40.1672,
      "longitude": -105.1019
    },
    "areaServed": "Boulder County",
    "locationImage": "https://example.com/longmont-map.jpg",
    "locationDescription": "Serving Longmont and the greater Boulder County area with reliable professional services"
  },
  {
    "slug": "boulder-co",
    "title": {
      "title": "Boulder, Colorado",
      "subtitle": "Expert Services in Boulder",
      "badge": "Premium Location"
    },
    "location": {
      "image": {
        "url": "https://example.com/boulder.jpg",
        "alt": "Boulder location photo",
        "name": "boulder-hero"
      }
    },
    "content": {
      "component2": {
        "content": "Boulder area professional services with same-day availability.",
        "enabled": true
      },
      "trust_by": {
        "enabled": true,
        "title": "Boulder's Trusted Choice",
        "badge": "🏆 Award Winning"
      }
    },
    "services_areas": "Boulder, Superior, Louisville, Broomfield, and surrounding areas",
    "address": {
      "addressLocality": "Boulder",
      "addressRegion": "Colorado",
      "addressCountry": "United States"
    }
  }
]
```

## 🔧 Field Explanations

### Required Fields
- **`slug`**: URL-friendly identifier (e.g., "longmont-co")
- **`title`**: Object with title, subtitle, and badge
- **`services_areas`**: Description of service areas

### Optional Fields
- **`location`**: Images (can have image, image2, image3)
- **`content`**: Page content sections
- **`seo`**: SEO metadata for search engines
- **`address`**: Structured address data
- **`geo`**: Latitude/longitude coordinates
- **`areaServed`**: Geographic service area
- **`locationImage`**: Additional location image URL
- **`locationDescription`**: Location description

## ✅ Best Practices

### 1. File Preparation
- Save your file with `.json` extension
- Use a text editor or JSON validator to check syntax
- Keep files under 5MB for best performance

### 2. Data Quality
- Use unique slugs for each location
- Include complete address information when possible
- Add geographic coordinates for map integration
- Write descriptive content for better SEO

### 3. Image URLs
- Use publicly accessible image URLs
- Include descriptive alt text for accessibility
- Consider using your Firebase Storage URLs

### 4. Testing
- Start with a small test file (2-3 locations)
- Verify the import worked correctly
- Then import your full dataset

## 🚨 Troubleshooting

### Common Issues
1. **"Invalid JSON file"**: Check your JSON syntax using an online validator
2. **Import fails**: Ensure you're connected to the internet and have proper permissions
3. **Missing data**: Verify all required fields are included

### Getting Help
- Check the browser console (F12) for detailed error messages
- Validate your JSON at [jsonlint.com](https://jsonlint.com)
- Contact support if issues persist

## 📊 Import Limits
- **Batch size**: 10 locations per batch (automatic)
- **File size**: Recommended under 5MB
- **Total locations**: No limit (processes in batches)

## 🔄 Refreshing Data
- The offers collection automatically pulls fresh data from Firebase
- Location changes appear immediately in the CMS
- No need to restart the application

---

**Need help?** Contact your development team or refer to the FireCMS documentation at [firecms.co](https://firecms.co/docs/pro/data_import). 