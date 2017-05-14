## Forms.js
Created for fast init CTA button and popup form.

For init form you need to create new exemplar of Class Form:
```
let nameOfForm = new Form(callSelector, formContainer, formClose, durationAnimation);
```

After this you need to call this methods:
```
click();
close();
```

Also, you can call some libs for animate your form and call anchors. For init lib:
```
let nameOfLib = new Libs();
nameOfLib.init(link, appendAfter);
```
