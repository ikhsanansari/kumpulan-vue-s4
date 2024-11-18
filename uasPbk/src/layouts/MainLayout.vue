<template>
    <q-layout view="hHh Lpr fFf">
      <q-header elevated>
        <q-toolbar>
          <q-btn flat dense round to="/">
            <q-icon name="home" />
          </q-btn>
          <q-btn flat dense round to="/weather">
            <q-icon name="cloud" />
          </q-btn>
          <q-btn flat dense round to="/external">
            <q-icon name="link" />
          </q-btn>
        </q-toolbar>
      </q-header>
  
      <q-page-container>
        <router-view />
      </q-page-container>
  
      <q-footer elevated>
        <q-toolbar>
          <q-btn flat dense round icon="info" @click="showInfo" />
        </q-toolbar>
      </q-footer>
  
      <q-dialog v-model="infoDialog">
        <q-card>
          <q-card-section class="text-h6">Information</q-card-section>
          <q-card-section>
            This is a simple weather app using Vue and Quasar.
          </q-card-section>
          <q-card-actions align="right">
            <q-btn flat label="Close" color="primary" v-close-popup />
          </q-card-actions>
        </q-card>
      </q-dialog>
    </q-layout>
  </template>
  
  <script>
  export default {
    name: 'MainLayout',
    data() {
      return {
        infoDialog: false
      }
    },
    methods: {
      showInfo() {
        this.infoDialog = true;
      }
    }
  }
  </script>
  
  <style scoped>
  /* CSS styling for the layout */
  </style>
  