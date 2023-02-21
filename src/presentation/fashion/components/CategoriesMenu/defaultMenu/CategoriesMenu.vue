<i18n src="./CategoriesMenu.txt" lang="yaml"></i18n>
<script src="./CategoriesMenu.js"></script>

<template>
  <nav>
    <ul>
      <li class="position-static" data-test="category-1st-level">
        <router-link to="/">
          HOME
        </router-link>
      </li>
      <li class="position-static" data-test="category-1st-level">
        <router-link to="/products/apparel">
          MEN
        </router-link>
      </li>
      <li class="position-static" data-test="category-1st-level">
        <router-link to="/products/apparel">
          WOMEN
        </router-link>
      </li>
      <li class="position-static" data-test="category-1st-level">
        <router-link to="/products/apparel">
          KIDS
        </router-link>
      </li>
      <li class="position-static" data-test="category-1st-level">
        <router-link to="/products/apparel">
          SALE
        </router-link>
      </li>
      <li class="position-static" data-test="category-1st-level">
        <router-link to="/our-story">
          OUR STORY
        </router-link>
      </li>
    </ul>
  </nav>
</template>
