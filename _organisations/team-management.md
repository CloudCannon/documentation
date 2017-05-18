---
title: Team Management
order: 2
---

Your organisation starts with your account as the only user. This user is set as an owner. There are 5 types of users in an organisation:

1. **Owners** - These users have full permission as if it is their own account
2. **Administrators** - Can create sites and manage everything to do with them, can't update billing information
3. **Developers** - Can update sites with the source editor but cannot create new sites
4. **Editors** - Can update content on sites using the visual editing interfaces
5. **External Collaborators** - Configured on a per site basis, can be developers or editors

---

### Adding a new Team Member

To add a team member:

1. Go to *Organisation Settings* / *Team*
2. Click the **Add** button in the permission level you want
3. Add the email of the person you want to share and hit enter

This will email the team member and prompt them to sign up or log in. Once logged in they will have access to all sites created under the organisation at the level specified.

![Adding a new SSL certificate](/img/organisations/add-team-member.png){: srcset="/img/organisations/add-team-member.png 800w, /img/organisations/add-team-member@2x.png 1600w"}
{: .has-screenshot}

Teams can be automatically be created from your own identity provider. See [SAML configuration](/organisations/saml/) for more information.
{: .info}

---

### Updating a Team Members Level

To increase or decrease a team members permission level:

1. Go to *Organisation Settings* / *Team*
2. Click the person you want to update
3. Select the permission level you want them to have and click **Update Team Member**

You can only update team members if you are an owner or administrator. Administrators do not have permission to alter the details of an Owner.

![Adding a new SSL certificate](/img/organisations/update-team-member.png){: srcset="/img/organisations/update-team-member.png 800w, /img/organisations/update-team-member@2x.png 1600w"}
{: .has-screenshot}

---

### Removing a Team Member

To remove a team member:

1. Go to *Organisation Settings* / *Team*
2. Click the person you want to update
3. Go to the *Danger Zone* and then click **Remove**

You can only remove team members if you are an owner or administrator. Administrators do not have permission to remove an Owner.

![Adding a new SSL certificate](/img/organisations/remove-team-member.png){: srcset="/img/organisations/remove-team-member.png 800w, /img/organisations/remove-team-member@2x.png 1600w"}
{: .has-screenshot}