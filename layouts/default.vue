<template>
  <div class="w-full h-full flex flex-col justify-around relative">
    <Header />
    <main>
      <slot />
    </main>
    <Footer />
  </div>
</template>

<style>
/* Scrollbar styling */
::-webkit-scrollbar {
  width: 10px;
  /* Width of the scrollbar */
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(to bottom, #d6e1d6, #2f3e4850);
  /* Custom color */
  border-radius: 10px;
  /* Rounded corners */
}

::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(to bottom, #d6e1d6, #2f3e4850);
  /* Custom color */
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
  /* Track color */
  border-radius: 10px;
  /* Rounded corners */
}

body {
  scrollbar-color: #4caf50 #f1f1f1;
  /* For Firefox */
  scrollbar-width: thin;
  /* Thin scrollbar */
}


html,
body {
  height: 100%;
}

footer {
  margin-top: auto;
}

@media (min-width: 1536px) {
  p {
    font-size: 1.2rem !important
      /* 30px */
    ;
    line-height: 2.25rem !important
      /* 36px */
    ;
  }

  h1 {
    font-size: 2.8rem !important
      /* 50px */
    ;
    line-height: 3.75rem !important
      /* 60px */
  }
}

header,
img {
  user-select: none;
}
</style>