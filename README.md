foundangular
============

AngularJS directives for the Foundation UI library.

So far, there is just an alert directive.

You can use the default HTML examples provided by the Foundation documentation, and foundangular will apply the directive to it.

```
<!-- default -->
<div data-alert class="alert-box">
  Alert text
  <a href="#" class="close"></a>
</div>

<!-- basic -->
<alert>Alert Text</alert>

<!-- You can add Foundation alert classes -->
<alert class="round">Alert Text</alert>

<!-- Set the close text -->
<alert close-text="Close (X)">Alert Text</alert>

<!-- Supress close -->
<alert no-close>Alert Text</alert>
```
