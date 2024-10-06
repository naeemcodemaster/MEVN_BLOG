import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', () => {
    // state
    const user = ref(null);
    
    // Make the token reactive
    const token = ref(localStorage.getItem('token') || '');

    // actions
    const setUser = (newUser) => {
        user.value = newUser;
    };

    const setToken = (newToken) => {
        token.value = newToken;
        localStorage.setItem('token', newToken);  // Store in localStorage
    };

    // Remove token (for logout, etc.)
    const removeToken = () => {
        token.value = '';
        localStorage.removeItem('token');
    }

    return { user, token, setUser, setToken, removeToken };
});
