import { acceptHMRUpdate, defineStore } from "pinia"
import { supabase } from "../supabase/index"
import { useToastr } from "../components/toastr"
import { navigateTo } from "nuxt/app"

export const useAuth = defineStore("authStore", {
    state: () => ({
        user_name: null,
        email: null,
        password: null,
        createError: null,
        role: "",


    }),
    getters: {
        getCreateError: (state) => state.createError,
        isAdmin: () => useSupabaseUser().value?.app_metadata?.userlevel === 100,
    },

    actions: {
        validation(register) {
            if (this.user_name?.length < 3 && register) {
                this.createError = "الاسم يجب ان يكون اكثر من 3 احرف."
            } else if (!this.email?.includes("@")) {
                this.createError = "البريد الالكتروني غير صحيح."
            } else if (this.password?.length < 6) {
                this.createError = "كلمة المرور يجب ان تكون اكثر من 6 احرف."
            } else {
                this.createError = null
            }

            if (this.createError) return false
            else return true
        },

        //login
        async login() {
            if (!this.validation()) return false
            const supabase = useSupabaseClient()

            const { data } = await supabase.auth.signInWithPassword({
                email: this.email,
                password: this.password,
              });

                // toast will pop up
                const toast = useToastr()
                toast.success("تم تسجيل الدخول بنجاح")
                navigateTo('/')
        },

        
        // LogOut
        async logout() {
            const supabase = useSupabaseClient()

            try {
                const { error } = await supabase.auth.signOut()
                const toast = useToastr()
                toast.success("تم التسجيل الخروج بنجاح")
                navigateTo('/')
            } catch (error) {
                console.log(error)
            }
        },
    },
})

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useAuth, import.meta.hot))
}
