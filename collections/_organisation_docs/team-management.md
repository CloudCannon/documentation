---
title: Team Management
category: General
new_docs_link: https://cloudcannon.com/documentation/edit/organization/#team-management
canonical_url: https://cloudcannon.com/documentation/edit/organization/#team-management
order: 2
requirements:
  build: Any
  plan: Free
  hosting: Any
---

After creating an organisation, your account is set up as the owner. There are 5 types of users in an organisation:

1. **Owners**\: These users have full permission as if it is their own account
2. **Developers**\: Can create sites and manage everything to do with them, can't update billing information
3. **Technical Editors**\: Can update sites with the source editor but cannot create new sites
4. **Editors**\: Can update content on sites using the visual editing interfaces
5. **External Collaborators**\: Configured on a per site basis, can be developers or editors

### Adding a new Team Member

To add a team member:

1. Go to *Organisation Settings* / *Team*
2. Click the **Add** button.

![List of team members](/images/organisations/teams.png){: .screenshot srcset="/images/organisations/teams.png 800w, /images/organisations/teams@2x.png 1600w"}

Add the email of the person you want to share, select the Permission Level required and press **Create team member**

This will email the team member and prompts them to sign up or log in. Once logged in, they have access to all sites created under the organisation at the level specified.

![Adding a new team member](/images/organisations/add-team-member.png){: .screenshot srcset="/images/organisations/add-team-member.png 800w, /images/organisations/add-team-member@2x.png 1600w"}

> Teams can be automatically created from your own identity provider. See [SAML configuration](/organisations/saml/) for more information.
{: .explainer}

### Updating Team Member Levels

To increase or decrease a team members permission level:

1. Go to *Organisation Settings* / *Team*
2. Click on the three dots next to the person you want to update
3. Click on&nbsp;**Update permissions**.
4. Select the permission level you want them to have and click **Update Team Member**

Only owners and developers have permission to update team members. Developers do not have permission to alter the details of an Owner.

![Team members more options.](/images/organisations/more-options-team-member.png){: .screenshot srcset="/images/organisations/more-options-team-member.png 800w, /images/organisations/more-options-team-member@2x.png 1600w"}

![Updating team members permissions](/images/organisations/update-team-member.png){: .screenshot srcset="/images/organisations/update-team-member.png 800w, /images/organisations/update-team-member@2x.png 1600w"}

### Removing a Team Member

To remove a team member:

1. Go to *Organisation Settings* / *Team*
2. Click on the three dots next to the person you want to update
3. Click on **Revoke Access**.
4. Click on **Revoke Access&nbsp;**and again&nbsp;**Click again to confirm**.

You can only remove team members if you are an owner or developer. Developers do not have permission to remove an Owner.

![Revoking team member access.](/images/organisations/remove-team-member.png){: .screenshot srcset="/images/organisations/remove-team-member.png 800w, /images/organisations/remove-team-member@2x.png 1600w"}