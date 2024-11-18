<template>
  <div class="w-full select-none h-full flex flex-col relative">
    <Header />
    <slot />
    <Footer/>
  </div>
</template>

<style>



/* Scrollbar styling */
::-webkit-scrollbar {
  width: 10px; /* Width of the scrollbar */
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(to bottom, #d6e1d6, #2f3e4850); /* Custom color */
  border-radius: 10px; /* Rounded corners */
}

::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(to bottom, #d6e1d6, #2f3e4850); /* Custom color */
}

::-webkit-scrollbar-track {
  background: #f1f1f1; /* Track color */
  border-radius: 10px; /* Rounded corners */
}

body {
  scrollbar-color: #4caf50 #f1f1f1; /* For Firefox */
  scrollbar-width: thin; /* Thin scrollbar */
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif ;
}

html, body {
  height: 100%;
}

footer {
  margin-top: auto;
}


</style>