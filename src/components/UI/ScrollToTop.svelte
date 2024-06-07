<script>
  import { onMount } from "svelte";
  let isVisible = false;

  // Función para desplazar hacia arriba
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // Función para manejar el evento de desplazamiento
  function handleScroll() {
    isVisible = window.scrollY > 100;
  }

  // Añadir el evento de desplazamiento cuando el componente se monta
  onMount(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
</script>

<button
  class="fixed bottom-5 right-5 p-5 btn btn-primary opacity-25 hover:opacity-100 shadow-md"
  class:opacity-0={!isVisible}
  class:opacity-100={isVisible}
  on:click={scrollToTop}
>
  Subir
</button>
