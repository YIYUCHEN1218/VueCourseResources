<template>
  <dialog open>
    <slot></slot>
  </dialog>
</template>

<style>
dialog {
  margin: 0;
  position: fixed;
  top: 20vh;
  left: 30%;
  width: 40%;
  background-color: white;
  box-shadow: 0 2px 8px black;
  padding: 1em;
}
</style>
