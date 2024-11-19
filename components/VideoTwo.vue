<template>
    <div class="flex flex-col justify-between items-center">
        <video          
          ref="videoElement"
          id="comp-m37pqv6c2_video"
          class="K8MSra"
          crossorigin="anonymous"
          playsinline="false"
          preload="auto"
          loop="false"
          tabindex="-1"
          :autoplay="false"
            src="https://video.wixstatic.com/video/fd6e55_cf2e7ba92d9c434a8360dcfa27cee3aa/480p/mp4/file.mp4"
            style="height: 100%; width: 100%; object-fit: cover; object-position: center center;">
        </video>

        <button @click="playVideo" class="bg-blue-500 text-white py-2 px-4 rounded mt-4">
          {{ isPlaying ? 'Pause Video' : 'Play Video' }}
        </button>
    </div>
</template>

<script setup>
  import { ref } from 'vue';
  
  // Declare a reference to the video element
  const videoElement = ref(null);
  
  // Declare a reactive variable to track whether the video is playing
  const isPlaying = ref(false);
  
  // Function to play or pause the video
  const playVideo = () => {
    if (videoElement.value) {
      if (isPlaying.value) {
        videoElement.value.pause();
      } else {
        videoElement.value.play();
      }
      isPlaying.value = !isPlaying.value; // Toggle the play/pause state
    }
  };
  </script>
  
  <style scoped>
  button {
    margin-top: 10px;
    padding: 10px 20px;
    background-color: #007bff;
    color: white;
    border: none;
    cursor: pointer;
    font-size: 16px;
  }
  
  button:hover {
    background-color: #0056b3;
  }
  </style>
  