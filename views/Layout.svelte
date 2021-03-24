<!-- views/Layout.svelte -->
<script>
  //import  Turbolinks  from "turbolinks";
    //
    import Nav from './Nav.svelte';
    if (typeof window === 'undefined') {
      global.window = {}
    }
   // Turbolinks.start();
    
</script>
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <script src="https://cdn.jsdelivr.net/npm/turbolinks@5.2.0/dist/turbolinks.min.js"></script>
    %head%
  </head>
  <body>
    <header>
      <Nav />
    </header>
    <main>
      <slot />
    </main>
  </body>
  <script>
    document.addEventListener('turbolinks:load', function() {
      console.log('Cool, Turbolinks works!')
    })
  </script>
</html>