---
title: Team Management
category: Organisations
order: 2
requirements:
  build: Any
  plan: Free
  hosting: Any
---

After creating an organisation, your account is set up as the owner. There are 5 types of users in an organisation:

1. **Owners**: These users have full permission as if it is their own account
2. **Developers**: Can create sites and manage everything to do with them, can't update billing information
3. **Technical Editors**: Can update sites with the source editor but cannot create new sites
4. **Editors**: Can update content on sites using the visual editing interfaces
5. **External Collaborators**: Configured on a per site basis, can be developers or editors


### Adding a new Team Member

To add a team member:

1. Go to *Organisation Settings* / *Team*
2. Click the **Add** button in the permission level you want
3. Add the email of the person you want to share and hit enter

This emails the team member and prompts them to sign up or log in. Once logged in, they have access to all sites created under the organisation at the level specified.

![Adding a new SSL certificate](/images/organisations/add-team-member.png){: srcset="/images/organisations/add-team-member.png 800w, /images/organisations/add-team-member@2x.png 1600w"}{: .screenshot}

> Teams can be automatically be created from your own identity provider. See [SAML configuration](/organisations/saml/) for more information.
{: .explainer}


### Updating Team Member Levels

To increase or decrease a team members permission level:

1. Go to *Organisation Settings* / *Team*
2. Click the person you want to update
3. Select the permission level you want them to have and click **Update Team Member**

Only owners and developers have permission to update team members. Administrators do not have permission to alter the details of an Owner.

![Adding a new SSL certificate](/images/organisations/update-team-member.png){: srcset="/images/organisations/update-team-member.png 800w, /images/organisations/update-team-member@2x.png 1600w"}{: .screenshot}


### Removing a Team Member

To remove a team member:

1. Go to *Organisation Settings* / *Team*
2. Click the person you want to update
3. Go to the *Danger Zone* and then click **Remove**

You can only remove team members if you are an owner or administrator. Administrators do not have permission to remove an Owner.

![Adding a new SSL certificate](/images/organisations/remove-team-member.png){: srcset="/images/organisations/remove-team-member.png 800w, /images/organisations/remove-team-member@2x.png 1600w"}{: .screenshot}