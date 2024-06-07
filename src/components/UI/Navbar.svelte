<div class="navbar fixed z-50 top-0 left-0 shadow-md bg-base-100">
  <div class="container flex justify-between">
    <div>
      <a href="/" class="btn btn-ghost text-primary text-xl"
        >&ltBrianBenegas /&gt</a
      >
    </div>
    <!-- ItemsList -->
    <div>
      <div>
        <ul
          class="  hidden text-primary font-semibold md:flex menu menu-horizontal px-1"
        >
          <li><a href="#About">About</a></li>
          <li><a href="#Skills">Skills</a></li>
          <li><a href="#Projects">Projects</a></li>
          <li><a href="#Contact">Contact</a></li>
        </ul>
      </div>
      <!-- Drawe -->
      <div class="md:hidden flex drawer drawer-end">
        <input id="my-drawer-4" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content">
          <label
            for="my-drawer-4"
            class="btn max-w-sm btn-primary btn-square swap swap-rotate"
          >
            <input type="checkbox" />
            <!-- hamburger icon -->
            <svg
              class="swap-off fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 512 512"
              ><path
                d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z"
              /></svg
            >
          </label>
        </div>
        <!-- Side -->
        <div class="drawer-side">
          <label
            for="my-drawer-4"
            aria-label="close sidebar"
            class="drawer-overlay"
          ></label>
          <ul class="menu p-4 w-60 min-h-full bg-base-100 text-base-content">
            <!-- Sidebar content here -->
            <li><a href="#About">About</a></li>
            <li><a href="#Skills">Skills</a></li>
            <li><a href="#Projects">Projects</a></li>
            <li><a href="#Contact">Contact</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>
