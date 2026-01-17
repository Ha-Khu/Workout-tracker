<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container">
            <RouterLink class="navbar-brand" to="/">Workout Tracker</RouterLink>

            <ul class="navbar-nav">
                <li class="nav-item">
                    <RouterLink class="nav-link" to="/">Home</RouterLink>
                </li>
                <li class="nav-item">
                    <RouterLink class="nav-link" to="/workouts">Workouts</RouterLink>
                </li>
                <li class="nav-item">
                    <RouterLink class="nav-link" to="/stats">Stats</RouterLink>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
    export default{
        name: 'Navbar'
    }
</script>