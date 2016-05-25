---
title: Custom Interfaces
order: 5
requirements:
  build: Any
  plan: Free
  hosting: CloudCannon
---

You can create your own custom branded pages for authentication. Each page is different, but the process is the same:

1. Create the relevant file in the root folder of your site
2. Add the HTML for the page

CloudCannon provides default, white-labelled pages for authentication.
{: .info}

CloudCannon injects classes into the HTML to indicate the result of the action. They are injected into `{% raw %}{{messageClasses}}{% endraw %}`.
Use these classes to provide error handling and success notifications in your forms.

For Jekyll-generated pages, use `raw` tags so Jekyll outputs it for CloudCannon to process later: `{{ "{%" }} raw %}{% raw %}{{messageClasses}}{% endraw %}{{ "{%" }} endraw %}`.

The customisable pages are listed below, with parameters and working examples.

---

### Password Login

| **Filename**        | login.html          |
| **Form action**     |                     |
| **Form inputs**     | username, password  |
| **Message classes** | has-incorrect-login |

CloudCannon requires a hidden username input here for internal reasons. The value is ignored.
{: .warning}

{% highlight html %}
{% raw %}
<!DOCTYPE html>

<html>
  <head>
    <title>Log in</title>
    <style>
      .incorrect-login-message {
        display: none;
      }

      .has-incorrect-login .incorrect-login-message {
        display: block;
      }
    </style>
  </head>
  <body>
    <h1>Log in</h1>

    <form action="" method="post" class="{{messageClasses}}">
      <div class="incorrect-login-message">
        Incorrect password.
      </div>

      <label for="password">Password</label>
      <input id="password" type="password" name="password" autofocus>

      <input type="hidden" name="username" value="user">

      <input type="submit" value="Log in">
    </form>
  </body>
</html>
{% endraw %}
{% endhighlight %}

---

### User Account Login

| **Filename**        | login.html          |
| **Form action**     |                     |
| **Form inputs**     | email, password     |
| **Message classes** | has-incorrect-login |

{% highlight html %}
{% raw %}
<!DOCTYPE html>

<html>
  <head>
    <title>Log in</title>
    <style>
      .incorrect-login-message {
        display: none;
      }

      .has-incorrect-login .incorrect-login-message {
        display: block;
      }
    </style>
  </head>
  <body>
    <h1>Log in</h1>

    <form action="" method="post" class="{{messageClasses}}">
      <div class="incorrect-login-message">
        Incorrect email address or password.
      </div>

      <label for="email">Email Address</label>
      <input id="email" type="email" name="email" autofocus>

      <label for="password">Password</label>
      <input id="password" type="password" name="password">

      <input type="submit" value="Log in">
    </form>

    <a href="/reset-password">Forgot your password?</a>
  </body>
</html>
{% endraw %}
{% endhighlight %}

---

### Set Password

| **Filename**        | set-password.html                                                       |
| **Form action**     | /set-password                                                           |
| **Form inputs**     | password, password-confirm, token                                       |
| **Message classes** | has-password-mismatch, has-invalid-link, has-token-expired, has-success |


{% highlight html %}
{% raw %}
<!DOCTYPE html>

<html>
  <head>
    <title>Set Password</title>
    <style>
      .password-mismatch-message,
      .invalid-link-message,
      .token-expired-message,
      .success-message {
        display: none;
      }

      .has-password-mismatch .password-mismatch-message,
      .has-invalid-link .invalid-link-message,
      .has-token-expired .token-expired-message,
      .has-success .success-message {
        display: block;
      }

      .has-success label,
      .has-success input {
        display: none;
      }
    </style>
  </head>
  <body class="{{messageClasses}}">
    <h1>Set Password</h1>
    <form action="/set-password" method="post">
      <div class="password-mismatch-message">
        Password did not match confirmation.
      </div>
      <div class="invalid-link-message">
        Your reset link is no longer valid.
        <a href="/reset-password">Reset your password</a> to get another.
      </div>
      <div class="token-expired-message">
        Your reset link has expired.
        <a href="/reset-password">Reset your password</a> to get another.
      </div>
      <div class="success-message">
        Successfully set your password.
      </div>

      <label for="password">Password</label>
      <input id="password" type="password" name="password" autofocus>

      <label for="password-confirm">Confirm Password</label>
      <input id="password-confirm" type="password" name="password-confirm">

      <input type="hidden" name="token" value="{{token}}">

      <input type="submit" value="Set Password">
    </form>
  </body>
</html>
{% endraw %}
{% endhighlight %}

---

### Reset Password

| **Filename**        | reset-password.html       |
| **Form action**     | /reset-password           |
| **Form inputs**     | email                     |
| **Message classes** | has-no-email, has-success |

{% highlight html %}
{% raw %}
<!DOCTYPE html>

<html>
  <head>
    <title>Reset Password</title>
    <style>
      .no-email-message,
      .success-message {
        display: none;
      }

      .has-success .success-message,
      .has-no-email .no-email-message {
        display: block;
      }
    </style>
  </head>
  <body>
    <h1>Reset Password</h1>

    <form action="/reset-password" method="post" class="{{messageClasses}}">
      <div class="no-email-message">
        You must provide an email address.
      </div>
      <div class="success-message">
        We've sent you an email with instructions to reset your password.
      </div>

      <label for="email">Email Address</label>
      <input id="email" type="email" name="email" autofocus>

      <input type="submit" value="Reset Password">
    </form>
  </body>
</html>
{% endraw %}
{% endhighlight %}
