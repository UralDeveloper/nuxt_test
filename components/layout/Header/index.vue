<template>
    <div class="header">
        <nav class="navbar navbar-expand-lg header-navbar">
            <div class="container-fluid navbar-container">
                <NuxtLink class="navbar-brand" :to="ref('/')">
                    Alexandr<span>.</span><span>pw</span>
                </NuxtLink>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <MenuHeader />
                </div>
            </div>
        </nav>
    </div>
</template>