<div class="mx-auto p-5 bg-base-100">
  <h3 id="Projects" class="mb-8 text-primary text-5xl font-bold text-center">
    Featured projects
  </h3>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-3 gap-5">
    <!-- Cards -->
    <!-- Necesito cargar la información de mis proyectos en formato JSON y mapear la data en un componente CARD para cada proyecto -->

    <div class="shadow-md h-auto min-w-[300px] bg-neutral hover:-translate-y-3">
      <div class="flex flex-col p-5">
        <h3 class="text-primary mb-3 font-bold text-2xl">To Do List</h3>
        <div class="bg-base-200 w-full h-40 mb-2 hover:cursor-pointer"></div>
        <!-- Tags -->
        <div class="flex gap-1">
          <div class="bg-primary mb-3 w-fit px-1 rounded-lg">
            <h4>React</h4>
          </div>
          <div class="bg-warning mb-3 w-fit px-1 rounded-lg">
            <h4>Redux</h4>
          </div>
          <div class="bg-info mb-3 w-fit px-1 rounded-lg">
            <h4>Tailwind</h4>
          </div>
        </div>
        <div>
          <p class="text-neutral-content line-clamp-3 mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
            inventore iusto quis quia recusandae. A, modi doloremque totam iusto
            rerum libero consectetur cumque, animi at quam in quae quia
            reprehenderit.
          </p>
        </div>
        <button class="btn btn-primary">View Project</button>
      </div>
    </div>
  </div>
</div>
