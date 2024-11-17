<template>
    <div>
      <form @submit.prevent="submitForm">
        <label for="name">Имя:</label>
        <input type="text" id="name" v-model="form.name" required />
  
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="form.email" required />
  
        <label for="message">Сообщение:</label>
        <textarea id="message" v-model="form.message" required></textarea>
  
        <button type="submit">Отправить</button>
  
        <!-- Сообщение о статусе -->
        <div v-if="statusMessage" :class="statusClass">{{ statusMessage }}</div>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        form: {
          name: '',
          email: '',
          message: ''
        },
        statusMessage: '',
        statusClass: ''
      };
    },
    methods: {
      async submitForm() {
        const formData = new FormData();
        formData.append('your-name', this.form.name);
        formData.append('your-email', this.form.email);
        formData.append('your-message', this.form.message);
  
        // Дополнительные данные, если необходимо
        formData.append('_wpcf7', 18);
        formData.append('_wpcf7_unit_tag', 'wpcf7-f18-p1-o1');
        formData.append('_wpcf7_container_post', 1);
        try {
          const response = await fetch(
            'api/wp-json/contact-form-7/v1/contact-forms/18/feedback',
            {
              method: 'POST',
              body: formData
            }
          );
  
          const result = await response.json();
  
          if (response.ok && result.status === 'mail_sent') {
            this.statusMessage = 'Сообщение отправлено!';
            this.statusClass = 'success';
          } else {
            this.statusMessage = result.message || 'Ошибка при отправке сообщения.';
            this.statusClass = 'error';
          }
  
          // Очистка формы
          this.form.name = '';
          this.form.email = '';
          this.form.message = '';
        } catch (error) {
          console.error('Ошибка:', error);
          this.statusMessage = `Ошибка: ${error.message}`;
          this.statusClass = 'error';
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .success {
    color: green;
  }
  
  .error {
    color: red;
  }
  </style>
  