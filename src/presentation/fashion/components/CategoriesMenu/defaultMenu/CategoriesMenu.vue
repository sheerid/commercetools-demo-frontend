<i18n src="./CategoriesMenu.txt" lang="yaml"></i18n>
<script src="./CategoriesMenu.js"></script>

<template>
  <nav>
    <ul v-if="categories && categories.length">
      <li 
        class="position-static"
        data-test="category-1st-level"
      >
      <router-link to="/">
        HOME
      </router-link>
      </li>
      <li
        class="position-static"
        v-for="category in categories"
        :key="category.id"
        data-test="category-1st-level"
      >
        <router-link
          :class="isActive(category.slug) ? 'active' : ''"
          :to="{
            name: 'products',
            params: { categorySlug: category.slug },
          }"
          data-test="category-1st-level-link"
        >
          {{ category.name.toUpperCase() }}
        </router-link>
      </li>
      <li 
        class="position-static"
        data-test="category-1st-level"
      >
      <router-link to="/student-offer">
        STUDENTS
      </router-link>
      </li>
      <li 
        class="position-static"
        data-test="category-1st-level"
      >
      <router-link to="/military-offer">
        MILITARY
      </router-link>
      </li>
    </ul>
  </nav>
</template>
