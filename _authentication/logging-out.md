---
title: Logging Out
order: 7
requirements:
  build: Any
  plan: Free
  hosting: CloudCannon
---

Once a user is authenticated, they can log out at `<your-domain>/logout`. You can provide a logout button on your authenticated pages with this link.

{% highlight html %}
<a href="/logout">Log out</a>
{% endhighlight %}

---

### Custom Routes

CloudCannon sets a cookie when the user is authenticated.
Use this to show the logout button for authenticated users on public pages, and hide it otherwise.

No sensitive authentication data is exposed through cookies.
{: .info}

The cookie is used to set a class on the body. The CSS will show the logout button with this class.

{% highlight javascript %}
var isAuthenticated = document.cookie.indexOf("authenticated=true") >= 0;

if (isAuthenticated) {
  document.body.className += " authenticated";
}
{% endhighlight %}

{% highlight css %}
.logout {
  display: none;
}

.authenticated .logout {
  display: block;
}
{% endhighlight %}

{% highlight html %}
<a href="/logout" class="logout">Log out</a>
{% endhighlight %}
