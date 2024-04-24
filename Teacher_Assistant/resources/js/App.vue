<template>
    <router-view v-slot="{ Component, route }">
        <div :key="route.name">
            <Component :is="Component" />
        </div>
    </router-view>
</template>

<script>
export default {
    mounted() {
        console.log("Component mounted.");
    },
};
</script>
