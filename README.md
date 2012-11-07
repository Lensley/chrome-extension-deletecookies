Cross-Domain Delete Cookies API Extension
==========================================
**WARNING: This is a ridiculously dangerous extension and shouldn't be used 
unless you know exactly what you're installing/doing.**

This extension allows any page to delete all cookies from an arbitrary domain
via Javascript.  Yes, this is as dangerous (or at least, as annoying) as it
sounds.

If you have a good reason to use this, you can make this more secure by 
modifying the manifest.json to be more restrictive.

Usage
-----
Here's an example of how you might use it to delete all cookies from example.com:

    window.postMessage({ command: "DELETE_COOKIES", 
                         domain: "example.com" }, "*");
