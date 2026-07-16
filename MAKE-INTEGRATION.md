# How to Sync Tally → Mailchimp via Make (Integromat)

## Step 1: Get Your Mailchimp API Key & Audience ID

### API Key:
1. Log in to [Mailchimp](https://mailchimp.com)
2. Go to **Profile** → **Extras** → **API keys**
3. Click **Create A Key**
4. Copy the key

### Audience ID:
1. Go to **Audience** → **All contacts**
2. Click **Settings** → **Audience name and defaults**
3. Copy the **Audience ID** (a long string like `a1b2c3d4e5`)

## Step 2: Create the Make Scenario

1. Go to [make.com](https://make.com) and log in (or create a free account — it's free)
2. Click **Create a new scenario**

### Module 1: Tally — Watch Responses (Trigger)

1. Click the **+** icon and search for **Tally**
2. Select **Watch New Responses**
3. Click **Create a connection**
4. A popup will appear — give your connection a name and click **Save**
5. A new window opens asking you to **grant Make access to your Tally account** — click **Accept**
6. Back in Make, select your form from the **Form ID** dropdown (the one at q4M8QG)
7. Click **Save** then **OK**

> 📌 Tally connects to Make via **OAuth authorization**, not an API key. Just click Accept when prompted.

### Module 2: Mailchimp — Add/Update a Subscriber

1. Hover to the right of the Tally module, click **+ Add another module**
2. Search for **Mailchimp**
3. Select **Add/Update a Subscriber**
4. Click **Create a connection**
5. Enter your **Mailchimp API Key**
6. Configure the fields:
   - **List/Audience**: Select your Mailchimp audience
   - **Email Address**: Map from Tally → select the email field from your form
   - **Status**: Set to **Subscribed**
   - **First Name**: Map from Tally → select the first name field
   - **Last Name**: Map from Tally → select the last name field
   - **Tags**: Add a tag like `waitlist` or `beos-early-access` so you can segment them
   - **Merge Fields**: Map any additional fields (profession, country, etc.)
7. Click **OK**

## Step 3: Test the Scenario

1. Click **Run once** at the bottom of Make
2. Go to your Tally form (on your website) and submit a test entry
3. Make should detect the new Tally response and send it to Mailchimp
4. Check Mailchimp → your Audience → confirm the contact appeared with the right tags

## Step 4: Activate the Scenario

1. Click the **ON/OFF toggle** at the bottom left to turn it ON
2. Set the schedule (how often Make checks for new Tally submissions):
   - **Every 15 minutes** (recommended for waitlist — you want people added quickly)
   - **Every hour** (if you want to save operations on the free plan)
3. Click **Save**

## Free Tier Limits

| Plan | Operations/mo | Est. Signups Supported | Price |
|------|--------------|----------------------|-------|
| Make Free | 1,000 | ~500 signups | $0 |
| Make Core | 10,000 | ~5,000 signups | $9/mo |
| Make Pro | 10,000+ | More | $16/mo |

Each sync = 2 operations (1 Tally trigger + 1 Mailchimp action)

## Data Flow

```
User fills form on your BEOS waitlist page
        │
        ▼
   Tally.so stores submission
        │
        ▼ (Make polls every 15 min)
   Make.com detects new response
        │
        ▼
   Make.com pushes to Mailchimp API
        │
        ▼
   Contact appears in Mailchimp Audience with tags
```

## Troubleshooting

- **"No data coming through"**: Run the scenario once manually in Make, then submit a test entry on your site
- **"Wrong field mapping"**: In the Mailchimp module, click each field dropdown and re-map from the Tally output variables
- **"Duplicate contacts"**: Mailchimp's Add/Update action handles duplicates by updating existing records (won't create duplicates)
- **"Tags not applying"**: In the Mailchimp module, expand the **Tags** section and add tag names manually
- **"Connection expired"**: Go to Make → Connections → find Tally → click Reconnect

## Quick Alternative: Use a Pre-Made Template

Make has pre-built Tally → Mailchimp templates:
1. Go to https://www.make.com/en/integrations/tally
2. Look for the **Tally → Mailchimp** template
3. Click **Use this template**
4. It pre-configures both modules — you just authorize and map fields

This is the fastest way if you don't want to build from scratch.
