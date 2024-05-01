<template>
    <div class="wrapper d-flex align-items-stretch">
        <nav
            id="sidebar"
            class="active bg-primary w-25"
            style="height: 100vh; background-color: rgba(255, 0, 0, 0.1)"
        >
            <h1><a href="#" class="logo">M.</a></h1>
            <ul class="list-unstyled components mb-5">
                <li class="active">
                    <a href="#"><span class="fa fa-home"></span> Dashboard</a>
                </li>
                <li>
                    <a href="#"><span class="fa fa-user"></span> Teachers</a>
                </li>
                <li>
                    <a href="#"
                        ><span class="fa fa-sticky-note"></span> Students</a
                    >
                </li>
                <li>
                    <a href="#"><span class="fa fa-cogs"></span> Classes</a>
                </li>
                <li>
                    <a href="#"
                        ><span class="fa fa-paper-plane"></span> Contacts</a
                    >
                </li>
            </ul>
        </nav>
        <!-- header -->
        <header id="main-content " class="w-75">
            <nav
                class="navbar navbar-expand-lgnavbar-light bg-light border-bottom"
            >
                <div
                    class="w-100 mx-2 d-flex align-items-center justify-content-between"
                >
                    <span>Dashboard</span>
                    <form
                        class="d-flex align-items-center form-inline my-2 my-lg-0"
                    >
                        <input
                            class="form-control mr-sm-2 mx-2"
                            type="search"
                            placeholder="Search"
                        />
                        <button
                            class="btn btn-outline-success my-2 my-sm-0"
                            type="submit"
                        >
                            Search
                        </button>
                    </form>
                </div>
            </nav>
            <div class="w-75">
                <router-view />
            </div>
        </header>

        <!-- Page Content  -->
    </div>
</template>

<script>
import TopNavbar from "./TopNavbar.vue";

export default {
    components: {
        TopNavbar,
    },
    data() {
        return {
            userName: "Koemnak",
        };
    },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap");
:root {
    --header-height: 3rem;
    --nav-width: 68px;
    --first-color: #4723d9;
    --first-color-light: #afa5d9;
    --white-color: #f7f6fb;
    --body-font: "Nunito", sans-serif;
    --normal-font-size: 1rem;
    --z-fixed: 100;
}
</style>
