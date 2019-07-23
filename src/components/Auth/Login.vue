<template lang="pug">
    .content-wrapper
        section
            .container
                .auth
                    .auth__banner
                     h1.ui-title-1
                        img(src='http://icons.iconarchive.com/icons/papirus-team/papirus-places/512/folder-blue-video-icon.png')
                    .auth__form 
                        span.ui-title-2 Login
                        form(@submit.prevent="onSubmit")
                                .form-item(:class="{ errorInput: $v.email.$error }")
                                    input(
                                        :class="{ error: $v.email.$error }"
                                        type="email"
                                        placeholder="Email"
                                        v-model="email"
                                        @change="$v.email.$touch()"
                                    )
                                    .error(v-if="!$v.email.required") Field is required
                                    .error(v-if="!$v.email.email") Email is not correct

                                .form-item(:class="{ errorInput: $v.password.$error }")
                                    input(
                                        :class="{ error: $v.password.$error }"
                                        type="password"
                                        placeholder="Password"
                                        v-model="password"
                                        @change="$v.password.$touch()"
                                    )
                                    .error(v-if="!$v.password.required") Password is required.
                                    .error(v-if="!$v.password.minLength") Password must have at least {{ $v.password.$params.minLength.min }} letters.

                                .buttons-list
                                    button.button.button-primary(
                                        :disabled="submitStatus === 'PENDING'"
                                        type="submit"
                                    ) 
                                        span(v-if="loading") Loading
                                        span(v-else) Login
                                .buttons-list.buttons-list--info    
                                    p.typo__p(v-if="submitStatus === 'OK'") Thanks for your submission!
                                    p.typo__p(v-if="submitStatus === 'ERROR'") Please fill the form correctly.
                                    p.typo__p(v-else) {{submitStatus}}
                                .buttons-list.buttons-list--info  
                                    span Don't have account?
                                        router-link(to="/registration")  Enter Here  



</template>


<script>
import {required, minLength, email} from 'vuelidate/lib/validators'
export default {
    data() {
        return {
            submitStatus: null,
            email: '',
            password: ''
        }
    },
     methods: {
    onSubmit() {
     
      this.$v.$touch()
      if (this.$v.$invalid) {
        this.submitStatus = 'ERROR'
      } else {
        // eslint-disable-next-line
        const user = {
            email: this.email,
            password: this.password
        }
        this.$store.dispatch('loginUser', user)
          .then(() => {
            this.submitStatus = 'OK'
            this.$router.push('/')
          })
          .catch(err => {
            this.submitStatus = err.message
          })
      }
    }
  },
  computed:{
      loading(){
          return this.$store.getters.loading
      }
  },
    validations: {
    email: {
        required,
        email

    },
    password: {
      required,
      minLength: minLength(6)
    }
  }
}
</script>

<style lang="stylus" scoped>
.auth
    display flex
.auth__banner,
.auth__form
    width 50%
.form-item
    .error
        display none
        margin-bottom 8px
        font-size 13.4px
        color #fc5c65
    &.errorInput
        .error
            display block     
input
    &.error
        border-color #fc5c65
        animation shake .3s
.buttons-list
    text-align right 
    margin-bottom 20px
    &.buttons-list--info
        text-align center
        &:last-child
            margin-bottom 0
a
    color #444ce0                    
</style>
